<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { SpanProps } from './types';
	import { SPAN_CLASSES } from './classes';

	let { color = 'primary', class: classes, children, ...restProps }: SpanProps = $props();
</script>

<span class={cn(SPAN_CLASSES({ color }), classes)} {...restProps}>
	{@render children?.()}
</span>
