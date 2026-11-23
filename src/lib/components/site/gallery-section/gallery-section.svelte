<script lang="ts">
	import { contentReveal, contentRevealEach } from "#lib/motion/content-reveal.ts";

	import * as Typography from "#lib/components/ui/typography/index.ts";

	type GalleryImage = { src: string; alt: string; featured?: boolean };

	let { kicker, title, description, images }: { kicker: string; title: string; description?: string; images: GalleryImage[] } = $props();
</script>

<section
	{@attach contentReveal({
		steps: [
			{ target: "[data-content-reveal-heading]", direction: "left", stagger: 0.1 },
			{ target: "[data-content-reveal-description]", direction: "right" }
		]
	})}
	class="py-20 lg:py-28"
>
	<div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
		<div>
			<p data-content-reveal-heading class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
			<Typography.H2 data-content-reveal-heading class="mt-4 border-0">{title}</Typography.H2>
		</div>
		{#if description}<Typography.P data-content-reveal-description class="max-w-sm text-sm text-muted-foreground">{description}</Typography.P>{/if}
	</div>

	<div {@attach contentRevealEach({ target: "children", stagger: 0.1 })} class="mt-12 grid gap-4 lg:grid-cols-2">
		{#each images as image (image.src)}
			<figure data-content-reveal-image class="overflow-hidden rounded-xl border bg-card" class:lg:col-span-2={image.featured}>
				<img src={image.src} alt={image.alt} loading="lazy" class="aspect-video w-full object-cover" />
			</figure>
		{/each}
	</div>
</section>
