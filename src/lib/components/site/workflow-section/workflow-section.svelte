<script lang="ts">
	import * as Typography from "#lib/components/ui/typography/index.ts";

	type Step = { title: string; description: string };

	let { kicker, title, description, steps }: { kicker: string; title: string; description?: string; steps: Step[] } = $props();
</script>

<section class="py-20 lg:py-28">
	<div class="mx-auto max-w-3xl text-center">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
		<Typography.H2 class="mt-4 border-0">{title}</Typography.H2>
		{#if description}<Typography.P class="mx-auto mt-5 max-w-2xl text-muted-foreground">{description}</Typography.P>{/if}
	</div>

	<ol
		class="relative mt-14 grid gap-8 text-center"
		class:md:grid-cols-2={steps.length === 4}
		class:lg:grid-cols-4={steps.length === 4}
		class:md:grid-cols-3={steps.length === 3}
	>
		{#each steps as step, index (step.title)}
			<li class="relative">
				{#if index < steps.length - 1}
					<div
						class="pointer-events-none absolute top-7 left-1/2 hidden w-[calc(100%+2rem)] border-t border-dashed lg:block"
						aria-hidden="true"
					></div>
				{/if}
				<div
					class="relative mx-auto grid size-14 place-items-center rounded-full border bg-background font-mono text-lg font-semibold text-primary shadow-sm"
				>
					{String(index + 1).padStart(2, "0")}
				</div>
				<h3 class="mt-6 text-xl font-semibold">{step.title}</h3>
				<p class="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
			</li>
		{/each}
	</ol>
</section>
