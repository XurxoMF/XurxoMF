<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	import { Theme, toggleTheme } from '$lib/components/theme';
	import {
		PHGitHubLogoBold,
		PHMoonBold,
		PHSunBold,
		PHXLogoBold,
		PHYouTubeLogoBold
	} from '$lib/components/icons';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Theme />

<header class="top-0 z-1 flex min-h-14 w-full items-center justify-between gap-4 p-4">
	<nav class="flex h-full items-center justify-center gap-2">
		<a href="#info" class="p-2">Home</a>
	</nav>

	<button type="button" onclick={() => toggleTheme()} class="relative flex cursor-pointer text-xl">
		<PHSunBold class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
		<PHMoonBold
			class="absolute inset-0 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
		/>
	</button>
</header>

{@render children()}

<footer class="flex min-h-14 w-full flex-col items-center gap-4 p-4 md:flex-row">
	<div class="flex flex-1 items-center justify-start">
		<a
			href="mailto:xurxomf@xurxomf.xyz"
			title="Contact me (xurxomf@xuromf.xyz)"
			target="_blank"
			class="flex p-1"
		>
			Contact Me!
		</a>
	</div>

	<div class="flex flex-1 items-center justify-center">
		<p class="text-sm text-zinc-500">
			&copy; Xurxo Martínez Ferreira {new Date().getFullYear()}
		</p>
	</div>

	<div class="flex flex-1 items-center justify-end gap-2 text-xl">
		<a href="https://github.com/XurxoMF" title="GitHub" target="_blank" class="flex p-1">
			<PHGitHubLogoBold />
		</a>
		<a href="https://www.youtube.com/@xurxomf" title="YouTube" target="_blank" class="flex p-1">
			<PHYouTubeLogoBold />
		</a>
		<a href="https://x.com/XurxoMF" title="X" target="_blank" class="flex p-1">
			<PHXLogoBold />
		</a>
	</div>
</footer>
