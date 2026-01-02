<script lang="ts">
	import { untrack } from 'svelte';
	import { getCookie, setTheme, THEME_COOKIE, type Themes } from './store.svelte';

	$effect(() => {
		untrack(() => {
			const oldTheme = getCookie(THEME_COOKIE);

			if (oldTheme && (oldTheme === 'dark' || oldTheme === 'light')) {
				setTheme(oldTheme as Themes);
			} else {
				const newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
				setTheme(newTheme);
			}
		});
	});
</script>

<!--
@component

Use this component on the main +layout.svelte to set the theme on first load the keep track of it.
-->
