<script lang="ts">
	import { untrack } from 'svelte';
	import { setTheme, THEME_KEY, toggleTheme } from './store.svelte';

	$effect(() => {
		untrack(() => {
			const oldTheme = localStorage.getItem(THEME_KEY);

			if (oldTheme && (oldTheme == 'dark' || oldTheme == 'light')) {
				setTheme(oldTheme);
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
