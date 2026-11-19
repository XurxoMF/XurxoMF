<script lang="ts">
	let { children } = $props();
</script>

<div class="mx-auto w-full max-w-4xl px-6 py-16 lg:py-24">
	{@render children()}
</div>
