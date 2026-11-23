<script lang="ts">
	import type { Snippet } from "svelte";
	import { contentReveal } from "#lib/motion/content-reveal.ts";

	import * as Typography from "#lib/components/ui/typography/index.ts";

	let {
		image,
		imageAlt = "",
		imagePosition = "center",
		title,
		lead,
		description,
		badges,
		actions
	}: {
		image: string;
		imageAlt?: string;
		imagePosition?: string;
		title: string;
		lead: string;
		description: string;
		badges?: Snippet;
		actions?: Snippet;
	} = $props();
</script>

<section
	{@attach contentReveal({
		steps: [
			{
				target: "[data-content-reveal-badges] > *, [data-content-reveal], [data-content-reveal-actions] > *",
				direction: "left",
				stagger: 0.1
			}
		],
		start: "top 92%"
	})}
	class="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-white text-black dark:bg-black dark:text-white"
>
	<img src={image} alt={imageAlt} fetchpriority="high" class="absolute inset-0 -z-30 size-full object-cover" style:object-position={imagePosition} />
	<div class="absolute inset-0 -z-20 bg-white/55 dark:bg-black/55" aria-hidden="true"></div>
	<div
		class="absolute inset-0 -z-20 bg-linear-to-r from-white/95 via-white/70 to-white/25 dark:from-black/95 dark:via-black/70 dark:to-black/25"
		aria-hidden="true"
	></div>
	<div
		class="absolute inset-0 -z-20 bg-linear-to-t from-white/60 via-transparent to-white/25 dark:from-black/60 dark:to-black/25"
		aria-hidden="true"
	></div>

	<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-6 py-20 lg:py-28">
		<div class="max-w-3xl">
			{#if badges}
				<div data-content-reveal-badges class="mb-7 flex flex-wrap gap-2">{@render badges()}</div>
			{/if}

			<Typography.H1 data-content-reveal class="max-w-3xl text-5xl tracking-[-0.055em] text-black sm:text-6xl lg:text-7xl dark:text-white">
				{title}
			</Typography.H1>
			<Typography.Leading data-content-reveal class="mt-6 max-w-2xl text-2xl font-semibold text-black sm:text-4xl dark:text-white">
				{lead}
			</Typography.Leading>
			<Typography.P data-content-reveal class="mt-6 max-w-2xl text-lg text-black/75 dark:text-white/75">{description}</Typography.P>

			{#if actions}
				<div data-content-reveal-actions class="mt-9 flex flex-wrap gap-3">{@render actions()}</div>
			{/if}
		</div>
	</div>
</section>
