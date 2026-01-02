<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { AnchorProps } from './types';
	import { ANCHOR_CLASSES } from './classes';

	let {
		target = '_blank',
		color = 'primary',
		class: classes,
		children,
		...restProps
	}: AnchorProps = $props();
</script>

<a {target} class={cn(ANCHOR_CLASSES({ color }), classes)} {...restProps}>
	{@render children?.()}
</a>
