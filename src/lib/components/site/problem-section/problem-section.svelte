<script lang="ts">
	import type { Snippet } from "svelte";

	import * as Typography from "#lib/components/ui/typography/index.ts";

	let { kicker, title, description, children }: { kicker: string; title: string; description?: string; children: Snippet } = $props();
</script>

<section class="grid gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-28">
	<div class="lg:sticky lg:top-24 lg:self-start">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
		<Typography.H2 class="mt-4 border-0">{title}</Typography.H2>
		{#if description}<Typography.P class="mt-5 text-muted-foreground">{description}</Typography.P>{/if}
	</div>
	<div>{@render children()}</div>
</section>
