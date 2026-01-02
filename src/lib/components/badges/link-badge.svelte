<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { LinkBadgeProps } from './types';
	import { BADGE_CLASSES } from './classes';

	let { target = '_blank', children, class: classes, ...restProps }: LinkBadgeProps = $props();
</script>

<a {target} class={cn(BADGE_CLASSES({ element: 'link' }), classes)} {...restProps}>
	{@render children?.()}
</a>
