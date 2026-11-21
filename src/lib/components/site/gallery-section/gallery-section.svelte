<script lang="ts">
	import * as Typography from "#lib/components/ui/typography/index.ts";

	type GalleryImage = { src: string; alt: string; featured?: boolean };

	let { kicker, title, description, images }: { kicker: string; title: string; description?: string; images: GalleryImage[] } = $props();
</script>

<section class="py-20 lg:py-28">
	<div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
		<div>
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
			<Typography.H2 class="mt-4 border-0">{title}</Typography.H2>
		</div>
		{#if description}<Typography.P class="max-w-sm text-sm text-muted-foreground">{description}</Typography.P>{/if}
	</div>

	<div class="mt-12 grid gap-4 lg:grid-cols-2">
		{#each images as image (image.src)}
			<figure class="overflow-hidden rounded-xl border bg-card" class:lg:col-span-2={image.featured}>
				<img src={image.src} alt={image.alt} loading="lazy" class="aspect-video w-full object-cover" />
			</figure>
		{/each}
	</div>
</section>
