<script lang="ts">
	import type { Snippet } from "svelte";

	let { title, description, icon }: { title: string; description: string; icon: Snippet } = $props();
</script>

<article class="rounded-2xl border bg-card p-7 text-card-foreground shadow-sm">
	<div class="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">{@render icon()}</div>
	<h3 class="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
	<p class="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
</article>
