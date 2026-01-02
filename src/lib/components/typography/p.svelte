<script lang="ts">
	import { cn } from 'tailwind-variants';

	import type { ParagraphProps } from './types';
	import { PARAGRAPH_CLASSES } from './classes';

	let { color = 'primary', class: classes, children, ...restProps }: ParagraphProps = $props();
</script>

<p class={cn(PARAGRAPH_CLASSES({ color }), classes)} {...restProps}>
	{@render children?.()}
</p>
