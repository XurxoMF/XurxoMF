<script lang="ts">
	import { contentReveal } from "#lib/motion/content-reveal.ts";

	type Fact = { label: string; value: string };

	let { facts }: { facts: Fact[] } = $props();
</script>

<section
	{@attach contentReveal({ steps: [{ target: "[data-content-reveal-fact]", stagger: 0.12 }] })}
	class="relative left-1/2 w-screen -translate-x-1/2 border-y bg-muted/35"
>
	<dl class="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 text-center sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
		{#each facts as fact (fact.label)}
			<div data-content-reveal-fact>
				<dt class="font-mono text-xs tracking-widest text-primary uppercase">{fact.label}</dt>
				<dd class="mt-2 text-lg font-semibold">{fact.value}</dd>
			</div>
		{/each}
	</dl>
</section>
