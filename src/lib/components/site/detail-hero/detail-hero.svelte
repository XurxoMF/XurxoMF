<script lang="ts">
	import type { Snippet } from "svelte";

	import * as Typography from "$lib/components/ui/typography";

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

<section class="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white">
	<img src={image} alt={imageAlt} fetchpriority="high" class="absolute inset-0 -z-30 size-full object-cover" style:object-position={imagePosition} />
	<div class="absolute inset-0 -z-20 bg-black/55" aria-hidden="true"></div>
	<div class="absolute inset-0 -z-20 bg-linear-to-r from-black/95 via-black/70 to-black/25" aria-hidden="true"></div>
	<div class="absolute inset-0 -z-20 bg-linear-to-t from-black/60 via-transparent to-black/25" aria-hidden="true"></div>

	<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-6 py-20 lg:py-28">
		<div class="max-w-3xl">
			{#if badges}
				<div class="mb-7 flex flex-wrap gap-2">{@render badges()}</div>
			{/if}

			<Typography.H1 class="max-w-3xl text-5xl tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">{title}</Typography.H1>
			<Typography.Leading class="mt-6 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">{lead}</Typography.Leading>
			<Typography.P class="mt-6 max-w-2xl text-lg text-white/75">{description}</Typography.P>

			{#if actions}
				<div class="mt-9 flex flex-wrap gap-3">{@render actions()}</div>
			{/if}
		</div>
	</div>
</section>
