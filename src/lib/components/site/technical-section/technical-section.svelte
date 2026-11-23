<script lang="ts">
	import type { Snippet } from "svelte";
	import { contentReveal } from "#lib/motion/content-reveal.ts";

	import * as Typography from "#lib/components/ui/typography/index.ts";

	let {
		kicker,
		title,
		description,
		image,
		imageAlt,
		imageFit = "cover",
		caption,
		reverse = false,
		children
	}: {
		kicker: string;
		title: string;
		description: string;
		image: string;
		imageAlt: string;
		imageFit?: "cover" | "contain";
		caption?: string;
		reverse?: boolean;
		children?: Snippet;
	} = $props();
</script>

<section
	{@attach contentReveal({
		steps: [
			{ target: "[data-content-reveal-media]", direction: reverse ? "right" : "left" },
			{ target: "[data-content-reveal-copy]", direction: reverse ? "left" : "right", stagger: 0.1 },
			{ target: "[data-content-reveal-extras] > * > *", direction: reverse ? "left" : "right", stagger: 0.07 }
		]
	})}
	class="grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28"
>
	<figure
		data-content-reveal-media
		class:lg:order-2={reverse}
		class="overflow-hidden rounded-2xl border bg-card shadow-xl lg:sticky lg:top-24 lg:self-start"
	>
		<img
			src={image}
			alt={imageAlt}
			loading="lazy"
			class="aspect-video w-full"
			class:object-cover={imageFit === "cover"}
			class:object-contain={imageFit === "contain"}
		/>
		{#if caption}<figcaption class="border-t px-5 py-3 text-sm text-muted-foreground">{caption}</figcaption>{/if}
	</figure>

	<div class:lg:order-1={reverse}>
		<p data-content-reveal-copy class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
		<Typography.H2 data-content-reveal-copy class="mt-4 border-0">{title}</Typography.H2>
		<Typography.P data-content-reveal-copy class="mt-5 text-muted-foreground">{description}</Typography.P>
		{#if children}<div data-content-reveal-extras class="mt-8">{@render children()}</div>{/if}
	</div>
</section>
