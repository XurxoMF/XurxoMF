import { animateInView } from "#lib/attachments/animate-in-view.ts";

import type { AnimateInViewElement } from "#lib/attachments/animate-in-view.ts";

export type ContentRevealDirection = "left" | "right" | "up";

export type ContentRevealStep = {
	target: string | "children";
	direction?: ContentRevealDirection;
	stagger?: number;
	position?: number | string;
	distance?: number;
};

export type ContentRevealOptions = {
	steps: ContentRevealStep[];
	start?: string;
	duration?: number;
	overlap?: number;
};

export type ContentRevealEachOptions = {
	target: string | "children";
	direction?: ContentRevealDirection;
	start?: string;
	duration?: number;
	distance?: number;
	stagger?: number;
};

const DESKTOP_QUERY = "(min-width: 1024px)";
const DEFAULT_DESKTOP_DISTANCE = 48;
const DEFAULT_MOBILE_DISTANCE = 24;
const DEFAULT_DURATION = 0.72;
const DEFAULT_STAGGER = 0.1;
const DEFAULT_OVERLAP = 0.12;

/**
 * Reveals one or more groups of content with a shared responsive motion language.
 * Horizontal desktop entrances become shorter upward entrances below the `lg` breakpoint.
 */
export function contentReveal({ steps, start = "top 80%", duration = DEFAULT_DURATION, overlap = DEFAULT_OVERLAP }: ContentRevealOptions) {
	return (node: AnimateInViewElement) => {
		const transitions = createTransitionSuspension();
		const cleanup = animateInView({
			reducedMotion: "finish",
			scrollTrigger: {
				start,
				toggleActions: "none none none none",
				invalidateOnRefresh: true,
				onEnter: ({ animation }) => {
					transitions.suspend();
					animation?.restart(true);
				},
				onLeaveBack: ({ animation }) => {
					transitions.suspend();
					animation?.reverse();
				}
			},
			timeline: (timeline, { node, select, gsap }) => {
				let hasAnimation = false;

				for (const step of steps) {
					const targets = step.target === "children" ? Array.from(node.children) : select(step.target);
					if (targets.length === 0) continue;

					const direction = step.direction ?? "up";
					const distance = step.distance ?? DEFAULT_DESKTOP_DISTANCE;
					const position = step.position ?? (hasAnimation ? `<+=${overlap}` : 0);
					const initialState = {
						autoAlpha: 0,
						x: () => getOffset(direction, distance).x,
						y: () => getOffset(direction, distance).y
					};

					transitions.add(targets);
					transitions.suspend();
					gsap.set(targets, initialState);

					timeline.fromTo(
						targets,
						initialState,
						{
							autoAlpha: 1,
							x: 0,
							y: 0,
							duration,
							ease: "power3.out",
							stagger: step.stagger ?? DEFAULT_STAGGER,
							immediateRender: false,
							clearProps: "transform,opacity,visibility"
						},
						position
					);

					hasAnimation = true;
				}

				timeline.eventCallback("onComplete", transitions.restoreAfterFrame);
				timeline.eventCallback("onReverseComplete", transitions.restoreAfterFrame);
			}
		})(node);

		return () => {
			transitions.restore();
			cleanup?.();
		};
	};
}

/**
 * Reveals repeated content with one ScrollTrigger per item.
 * Items sharing a visual row keep a short stagger, while later rows wait until they enter the viewport.
 */
export function contentRevealEach({
	target,
	direction = "up",
	start = "top 80%",
	duration = DEFAULT_DURATION,
	distance = DEFAULT_DESKTOP_DISTANCE,
	stagger = DEFAULT_STAGGER
}: ContentRevealEachOptions) {
	return (node: AnimateInViewElement) => {
		const targets = resolveTargets(node, target);
		const rowIndexes = getRowIndexes(targets);
		const suspensions = targets.map((item) => createTransitionSuspension([item]));
		const cleanups = targets.map((item, index) => {
			const transitions = suspensions[index];
			transitions.suspend();

			return animateInView({
				from: {
					autoAlpha: 0,
					x: () => getOffset(direction, distance).x,
					y: () => getOffset(direction, distance).y
				},
				to: {
					autoAlpha: 1,
					x: 0,
					y: 0,
					duration,
					delay: rowIndexes[index] * stagger,
					ease: "power3.out",
					clearProps: "transform,opacity,visibility",
					onComplete: transitions.restoreAfterFrame,
					onReverseComplete: transitions.restoreAfterFrame
				},
				reducedMotion: "finish",
				scrollTrigger: {
					start,
					toggleActions: "none none none none",
					invalidateOnRefresh: true,
					onEnter: ({ animation }) => {
						transitions.suspend();
						animation?.restart(true);
					},
					onLeaveBack: ({ animation }) => {
						transitions.suspend();
						animation?.reverse();
					}
				}
			})(item);
		});

		return () => {
			for (let index = 0; index < cleanups.length; index += 1) {
				suspensions[index].restore();
				cleanups[index]?.();
			}
		};
	};
}

type TransitionSnapshot = {
	element: AnimateInViewElement;
	property: string;
	priority: string;
};

function createTransitionSuspension(initialTargets: AnimateInViewElement[] = []) {
	const snapshots = new Map<AnimateInViewElement, TransitionSnapshot>();
	let restoreFrame: number | undefined;

	function add(targets: unknown[]) {
		for (const target of targets) {
			if (!isAnimateInViewElement(target) || snapshots.has(target)) continue;

			snapshots.set(target, {
				element: target,
				property: target.style.getPropertyValue("transition-property"),
				priority: target.style.getPropertyPriority("transition-property")
			});
		}
	}

	function suspend() {
		cancelScheduledRestore();
		for (const { element } of snapshots.values()) element.style.setProperty("transition-property", "none", "important");
	}

	function restore() {
		cancelScheduledRestore();
		restoreProperties();
	}

	function restoreAfterFrame() {
		cancelScheduledRestore();
		restoreFrame = requestAnimationFrame(() => {
			restoreFrame = undefined;
			restoreProperties();
		});
	}

	function cancelScheduledRestore() {
		if (restoreFrame === undefined) return;
		cancelAnimationFrame(restoreFrame);
		restoreFrame = undefined;
	}

	function restoreProperties() {
		for (const { element, property, priority } of snapshots.values()) {
			if (property) element.style.setProperty("transition-property", property, priority);
			else element.style.removeProperty("transition-property");
		}
	}

	add(initialTargets);

	return { add, suspend, restore, restoreAfterFrame };
}

function resolveTargets(node: AnimateInViewElement, target: string | "children"): AnimateInViewElement[] {
	const elements = target === "children" ? Array.from(node.children) : Array.from(node.querySelectorAll(target));
	return elements.filter(isAnimateInViewElement);
}

function isAnimateInViewElement(element: unknown): element is AnimateInViewElement {
	return element instanceof HTMLElement || element instanceof SVGElement;
}

function getRowIndexes(targets: AnimateInViewElement[]): number[] {
	const rowCounts = new Map<number, number>();

	return targets.map((target) => {
		const row = Math.round(target.getBoundingClientRect().top / 4) * 4;
		const index = rowCounts.get(row) ?? 0;
		rowCounts.set(row, index + 1);
		return index;
	});
}

function getOffset(direction: ContentRevealDirection, distance: number) {
	if (!window.matchMedia(DESKTOP_QUERY).matches) return { x: 0, y: DEFAULT_MOBILE_DISTANCE };
	if (direction === "left") return { x: -distance, y: 0 };
	if (direction === "right") return { x: distance, y: 0 };
	return { x: 0, y: Math.min(distance, 36) };
}
