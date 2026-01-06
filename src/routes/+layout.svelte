<script lang="ts">
	import { fly } from 'svelte/transition';

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
	import { A, H1, H2, P, Span } from '$lib/components/typography';

	let { children } = $props();

	let loaderVisible = $state(true);
	setTimeout(() => (loaderVisible = false), 3_000);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>XurxoMF - Software Developer & Computer Technician</title>
	<meta
		name="description"
		content="Hi! I'm XurxoMF! Software Developer & Computer Technician. Here you'll find all my projects, career and more!"
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="XurxoMF - Software Developer & Computer Technician" />
	<meta
		property="og:description"
		content="Hi! I'm XurxoMF! Software Developer & Computer Technician. Here you'll find all my projects, career and more!"
	/>
	<meta property="og:image" content="https://xurxomf.xyz/banner.png" />
	<meta property="og:url" content="https://xurxomf.xyz" />
	<meta property="og:type" content="website" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="XurxoMF - Software Developer & Computer Technician" />
	<meta
		name="twitter:description"
		content="Hi! I'm XurxoMF! Software Developer & Computer Technician. Here you'll find all my projects, career and more!"
	/>
	<meta name="twitter:image" content="https://xurxomf.xyz/banner.png" />
</svelte:head>

<Theme />

{#if loaderVisible}
	<div
		class="absolute top-0 left-0 z-1000 grid h-screen w-screen place-items-center overflow-hidden"
	>
		<div
			class="flex h-full w-full animate-in flex-col items-center justify-center space-y-8 bg-zinc-50 text-center duration-1000 select-none slide-in-from-bottom-30 dark:bg-zinc-950"
			out:fly={{ y: -500, duration: 1_000 }}
		>
			<H1>Hi! I'm <Span color="secondary">XurxoMF</Span></H1>

			<H2>Software Developer & Computer Technician</H2>
		</div>
	</div>
{:else}
	<div in:fly={{ y: 500, duration: 1_000 }}>
		<header
			class="sticky top-0 z-1 flex min-h-14 w-full items-center justify-between gap-4 p-4 backdrop-blur-sm lg:h-14"
		>
			<nav class="flex h-full items-center justify-center gap-2">
				<A href="#about" target="_self" class="p-1">About</A>
				<A href="#skills" target="_self" class="p-1">Skills</A>
				<A href="#career" target="_self" class="p-1">Career</A>
				<A href="#projects" target="_self" class="p-1">Projects</A>
				<A href="#jobs" target="_self" class="p-1">Jobs</A>
			</nav>

			<button
				type="button"
				onclick={() => toggleTheme()}
				class="relative flex cursor-pointer items-center justify-center p-1 text-xl"
			>
				<PHSunBold class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
				<PHMoonBold
					class="absolute inset-1 scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
				/>
			</button>
		</header>

		{@render children()}

		<footer class="flex min-h-14 w-full flex-col items-center gap-4 p-4 md:flex-row lg:h-14">
			<div class="flex flex-1 items-center justify-start">
				<A href="mailto:xurxomf@xurxomf.xyz" color="secondary" class="p-1">Contact Me!</A>
			</div>

			<div class="flex flex-1 items-center justify-center">
				<P color="muted" class="text-sm"
					>&copy; Xurxo Martínez Ferreira {new Date().getFullYear()}</P
				>
			</div>

			<div class="flex flex-1 items-center justify-end gap-2 text-xl">
				<A href="https://github.com/XurxoMF" color="secondary" class="p-1"><PHGitHubLogoBold /></A>
				<A href="https://www.youtube.com/@xurxomf" color="secondary" class="p-1">
					<PHYouTubeLogoBold />
				</A>
				<A href="https://x.com/XurxoMF" color="secondary" class="p-1"><PHXLogoBold /></A>
			</div>
		</footer>
	</div>
{/if}
