<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { HeadingProps } from './types';
	import { HEADING_CLASSES } from './classes';

	let { color = 'primary', class: classes, children, ...restProps }: HeadingProps = $props();
</script>

<h3 class={cn(HEADING_CLASSES({ variant: 'h3', color }), classes)} {...restProps}>
	{@render children?.()}
</h3>
