<script lang="ts">
	import type { Snippet } from "svelte";
	import { contentReveal } from "#lib/motion/content-reveal.ts";

	import * as Typography from "#lib/components/ui/typography/index.ts";

	let {
		kicker,
		title,
		description,
		animateBody = true,
		children
	}: { kicker: string; title: string; description?: string; animateBody?: boolean; children: Snippet } = $props();
</script>

<section
	{@attach contentReveal({
		steps: [
			{ target: "[data-content-reveal-heading]", direction: "left", stagger: 0.11 },
			...(animateBody ? [{ target: "[data-content-reveal-body] > * > *" as const, direction: "right" as const, stagger: 0.09 }] : [])
		]
	})}
	class="grid gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-28"
>
	<div class="lg:sticky lg:top-24 lg:self-start">
		<p data-content-reveal-heading class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
		<Typography.H2 data-content-reveal-heading class="mt-4 border-0">{title}</Typography.H2>
		{#if description}<Typography.P data-content-reveal-heading class="mt-5 text-muted-foreground">{description}</Typography.P>{/if}
	</div>
	<div data-content-reveal-body>{@render children()}</div>
</section>
