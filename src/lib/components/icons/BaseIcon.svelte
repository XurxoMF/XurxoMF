<script lang="ts">
	import type { Without } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type BaseIconProps = HTMLAttributes<HTMLSpanElement>;

	export type IconProps = Without<BaseIconProps, 'children'>;

	let { class: className = '', children, ...restProps }: BaseIconProps = $props();
</script>

<span class={['inline-flex', className]} {...restProps}>
	{@render children?.()}
</span>

<!-- CHANGE THE viewBox values depending on the SVG -->

<!--
<script lang="ts">
  import type { Without } from '$lib/utils';

  import BaseIcon, { type BaseIconProps } from '../BaseIcon.svelte'

  let { ...restProps }: Without<BaseIconProps, "children"> = $props()
</script>

<BaseIcon {...restProps}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" class="w-[1em] h-[1em]">
    
  </svg>
</BaseIcon>
-->
