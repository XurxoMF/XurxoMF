<script lang="ts">
	import { CheckIcon } from "#lib/icons.ts";

	import * as Typography from "#lib/components/ui/typography/index.ts";

	type Path = { label: string; title: string; description: string; points: string[] };

	let { kicker, title, description, paths }: { kicker: string; title: string; description: string; paths: Path[] } = $props();
</script>

<section class="py-20 lg:py-28">
	<div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
		<div class="lg:sticky lg:top-24 lg:self-start">
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
			<Typography.H2 class="mt-4 border-0">{title}</Typography.H2>
			<Typography.P class="mt-5 text-muted-foreground">{description}</Typography.P>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			{#each paths as path (path.title)}
				<article class="flex flex-col rounded-2xl border bg-card p-7 shadow-sm">
					<p class="font-mono text-xs tracking-widest text-primary uppercase">{path.label}</p>
					<h3 class="mt-5 text-2xl font-semibold tracking-tight">{path.title}</h3>
					<p class="mt-4 text-sm leading-6 text-muted-foreground">{path.description}</p>
					<ul class="mt-8 space-y-3 border-t pt-6">
						{#each path.points as point (point)}
							<li class="flex gap-3 text-sm"><CheckIcon class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{point}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>
