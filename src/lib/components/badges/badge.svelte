<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { BadgeProps } from './types';
	import { BADGE_CLASSES } from './classes';

	let { children, class: classes, ...restProps }: BadgeProps = $props();
</script>

<span class={cn(BADGE_CLASSES({ element: 'badge' }), classes)} {...restProps}>
	{@render children?.()}
</span>
