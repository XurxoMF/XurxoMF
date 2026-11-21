<script lang="ts">
	import * as Typography from "#lib/components/ui/typography/index.ts";

	let {
		kicker,
		title,
		paragraphs,
		image,
		imageAlt,
		reverse = false
	}: {
		kicker: string;
		title: string;
		paragraphs: string[];
		image: string;
		imageAlt: string;
		reverse?: boolean;
	} = $props();
</script>

<section class="grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-28">
	<div class:lg:order-2={reverse}>
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
		<Typography.H2 class="mt-4 border-0">{title}</Typography.H2>
		{#each paragraphs as paragraph, index (paragraph)}
			<Typography.P class={index === 0 ? "mt-6 text-lg text-muted-foreground" : "mt-4 text-muted-foreground"}>{paragraph}</Typography.P>
		{/each}
	</div>
	<figure class:lg:order-1={reverse} class="overflow-hidden rounded-2xl border shadow-xl">
		<img src={image} alt={imageAlt} loading="lazy" class="aspect-4/3 w-full object-cover" />
	</figure>
</section>
