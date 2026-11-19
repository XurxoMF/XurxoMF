<script lang="ts">
	type Fact = { label: string; value: string };

	let { facts }: { facts: Fact[] } = $props();
</script>

<section class="relative left-1/2 w-screen -translate-x-1/2 border-y bg-muted/35">
	<dl class="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 text-center sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
		{#each facts as fact (fact.label)}
			<div>
				<dt class="font-mono text-xs tracking-widest text-primary uppercase">{fact.label}</dt>
				<dd class="mt-2 text-lg font-semibold">{fact.value}</dd>
			</div>
		{/each}
	</dl>
</section>
