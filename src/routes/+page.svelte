<script lang="ts">
	import type { Component } from 'svelte';

	import self from '$lib/assets/slef.webp';

	import { H1, H2, P, A, Span, H3, H4 } from '$lib/components/typography';
	import { Badge, LinkBadge } from '$lib/components/badges';
	import {
		LogosApacheIcon,
		LogosHonoIcon,
		LogosKDEIcon,
		PHCaretDownBold,
		SIArchLinuxIcon,
		SIBashIcon,
		SIBunIcon,
		SICloudflareIcon,
		SICSharpIcon,
		SICSS3Icon,
		SIDebianLinuxIcon,
		SIDiscordIcon,
		SIDiscordJSIcon,
		SIDockerIcon,
		SIElectronIcon,
		SIExpressIcon,
		SIGitHubActionsIcon,
		SIGitHubIcon,
		SIGitIcon,
		SIHTML5Icon,
		SIJavaIcon,
		SIJavaScriptIcon,
		SIMongoDBIcon,
		SIMySQLIcon,
		SINginxIcon,
		SINodeJSIcon,
		SINPMIcon,
		SIPHPIcon,
		SIPostgreSQLIcon,
		SIPythonIcon,
		SIReactIcon,
		SIRegexIcon,
		SIRustIcon,
		SISassIcon,
		SISQLiteIcon,
		SISvelteIcon,
		SITailwindCSSIcons,
		SITauriIcon,
		SITypeScriptIcon,
		SIUbuntuIcon,
		SIVisualStudioCodeIcon,
		SIViteIcon,
		SIWindowsIcons,
		DStalwartMailServerIcon,
		SIWordPressIcon,
		DCoolifyIcon,
		DJellyfinIcons,
		DBeszelIcon,
		DCloudreveIcon,
		DRoundcubeIcon,
		DUptimeKumaIcon,
		Dn8nIcon
	} from '$lib/components/icons';

	const dateNew = Date.now();
	const birthDate = new Date(2002, 10, 31);
	const age = Math.floor((dateNew - birthDate.getTime()) / 31536000000);
</script>

{#snippet skillItem({
	icon: Icon,
	link,
	level = 5
}: {
	icon: Component;
	link: string;
	level?: number | undefined;
})}
	<a
		href={link}
		target="_blank"
		class="flex w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-pink-500 bg-pink-500/50 p-2"
	>
		<Icon />
		<span class="text-xs">{'⭐'.repeat(level)}</span>
	</a>
{/snippet}

<main class="mb-48 flex flex-col items-center gap-48">
	<div class="grid min-h-[calc(100vh-3.5rem)] w-full grid-rows-[1fr_auto] place-items-center gap-8">
		<div
			class="flex w-full flex-col-reverse items-center justify-between gap-12 px-8 text-center md:w-4/5 lg:flex-row lg:text-start xl:w-2/3"
		>
			<div class="w-full space-y-8 md:w-4/5 xl:w-2/3">
				<H1>Hi! I'm <Span color="secondary">XurxoMF</Span></H1>

				<H2>Software Developer & Computer Technician</H2>

				<H4>Activelylooking for a job!</H4>

				<A
					href="mailto:xurxomf@xurxomf.xyz"
					color="secondary"
					class="rounded-sm border-2 border-pink-500 bg-pink-500/30 p-2">Contact Me!</A
				>
			</div>

			<img
				fetchpriority="high"
				src={self}
				alt="XurxoMF"
				class="aspect-square w-full max-w-60 shrink-0 rounded-full border-4 border-pink-500 outline-4 outline-offset-4 outline-pink-500 transition-transform duration-200 hover:scale-105 lg:max-w-80"
			/>
		</div>

		<div class="flex items-center justify-center">
			<A href="#about" target="_self">
				<PHCaretDownBold class="animate-bounce text-6xl text-pink-500" />
			</A>
		</div>
	</div>

	<div class="w-full space-y-8 px-8 md:w-4/5 xl:w-2/3">
		<H2 id="about" class="scroll-mt-20" color="secondary">About Me</H2>

		<div class="space-y-2">
			<P>
				I'm <Span color="secondary">Xurxo Martínez Ferreira</Span>, a <Span color="secondary"
					>{age} years old</Span
				> Developer and Computer Technician from <Span color="secondary">Galicia, Spain</Span>,
				mainly focused on Full Stack and Desktop/Mobile Developent.
			</P>

			<P>
				My main stack is
				<A href="#frameworks" target="_self" color="secondary">SvelteKit</A>
				for websites,
				<A href="#frameworks" target="_self" color="secondary">TailwindCSS</A>
				for styling,
				<A href="#frameworks" target="_self" color="secondary">Electron</A>
				and
				<A href="#frameworks" target="_self" color="secondary">Tauri</A>
				for the desktop/mobile apps and
				<A href="#tools" target="_self" color="secondary">Docker</A>
				to deploy everything.
			</P>

			<P>
				I've a server with
				<A href="#apps" target="_self" color="secondary">Coolify</A>
				at home. There is where I host all of my
				<A href="#projects" target="_self" color="secondary">projects</A>
				and also some APPs like my Mail Server, Jellyfin, Roundcube...
			</P>

			<P>
				On my free time I like to play video games, listen to music, drive my car and go fishing.
			</P>

			<P>If you want to know more about me, keep scrolling!</P>
		</div>
	</div>

	<div class="w-full space-y-8 px-8 md:w-4/5 xl:w-2/3">
		<H2 id="skills" class="scroll-mt-20" color="secondary">Skills</H2>

		<P color="muted">
			Here you can see a list of every language, framework, software... I know and use.
		</P>

		<ul class="text-sm text-zinc-500">
			<li>⭐ - Studied but never used</li>
			<li>⭐⭐ - Studied but used long ago</li>
			<li>⭐⭐⭐ - Studied and used frequently</li>
			<li>⭐⭐⭐⭐ - Studied and used a lot</li>
			<li>⭐⭐⭐⭐⭐ - Studied and used every day</li>
		</ul>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="languages" class="scroll-mt-20">Languages</H3>

			<div class="grid grid-cols-2 gap-4 text-6xl sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
				{@render skillItem({
					icon: SIHTML5Icon,
					link: 'https://dev.w3.org/html5/spec-LC/',
					level: 5
				})}
				{@render skillItem({
					icon: SICSS3Icon,
					link: 'https://www.w3.org/Style/CSS/Overview.en.html',
					level: 5
				})}
				{@render skillItem({
					icon: SIJavaScriptIcon,
					link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
					level: 5
				})}
				{@render skillItem({
					icon: SITypeScriptIcon,
					link: 'https://www.typescriptlang.org/',
					level: 5
				})}
				{@render skillItem({
					icon: SIPythonIcon,
					link: 'https://www.python.org/',
					level: 3
				})}
				{@render skillItem({
					icon: SIRustIcon,
					link: 'https://www.rust-lang.org/',
					level: 3
				})}
				{@render skillItem({
					icon: SIPHPIcon,
					link: 'https://php.net/',
					level: 2
				})}
				{@render skillItem({
					icon: SIJavaIcon,
					link: 'https://www.java.com/en/',
					level: 2
				})}
				{@render skillItem({
					icon: SICSharpIcon,
					link: 'https://dotnet.microsoft.com/es-es/languages/csharp',
					level: 2
				})}
				{@render skillItem({
					icon: SIBashIcon,
					link: 'https://www.gnu.org/software/bash/',
					level: 2
				})}
			</div>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="frameworks" class="scroll-mt-20">Frameworks</H3>

			<div class="grid grid-cols-2 gap-4 text-6xl sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
				{@render skillItem({
					icon: SISvelteIcon,
					link: 'https://svelte.dev/',
					level: 5
				})}
				{@render skillItem({
					icon: SIElectronIcon,
					link: 'https://www.electronjs.org/',
					level: 5
				})}
				{@render skillItem({
					icon: SITailwindCSSIcons,
					link: 'https://tailwindcss.com/',
					level: 5
				})}
				{@render skillItem({
					icon: SITauriIcon,
					link: 'https://tauri.app/',
					level: 4
				})}
				{@render skillItem({
					icon: SIReactIcon,
					link: 'https://react.dev/',
					level: 4
				})}
				{@render skillItem({
					icon: SIExpressIcon,
					link: 'https://expressjs.com/',
					level: 3
				})}
				{@render skillItem({
					icon: LogosHonoIcon,
					link: 'https://hono.dev/',
					level: 3
				})}
				{@render skillItem({
					icon: SIDiscordJSIcon,
					link: 'https://discord.js.org/',
					level: 3
				})}
			</div>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="tools" class="scroll-mt-20">Tools</H3>

			<div class="grid grid-cols-2 gap-4 text-6xl sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
				{@render skillItem({
					icon: SINodeJSIcon,
					link: 'https://nodejs.org/en/',
					level: 5
				})}
				{@render skillItem({
					icon: SIBunIcon,
					link: 'https://bun.sh/',
					level: 5
				})}
				{@render skillItem({
					icon: SIGitIcon,
					link: 'https://git-scm.com/',
					level: 5
				})}
				{@render skillItem({
					icon: SIGitHubIcon,
					link: 'https://github.com/',
					level: 5
				})}
				{@render skillItem({
					icon: SINPMIcon,
					link: 'https://www.npmjs.com/',
					level: 5
				})}
				{@render skillItem({
					icon: SIDockerIcon,
					link: 'https://www.docker.com/',
					level: 4
				})}
				{@render skillItem({
					icon: SINginxIcon,
					link: 'https://www.nginx.com/',
					level: 4
				})}
				{@render skillItem({
					icon: SIViteIcon,
					link: 'https://vitejs.dev/',
					level: 4
				})}
				{@render skillItem({
					icon: SIGitHubActionsIcon,
					link: 'https://github.com/features/actions',
					level: 3
				})}
				{@render skillItem({
					icon: Dn8nIcon,
					link: 'https://n8n.io/',
					level: 3
				})}
				{@render skillItem({
					icon: SICloudflareIcon,
					link: 'https://www.cloudflare.com/',
					level: 3
				})}
				{@render skillItem({
					icon: LogosApacheIcon,
					link: 'https://httpd.apache.org/',
					level: 2
				})}
				{@render skillItem({
					icon: SISassIcon,
					link: 'https://sass-lang.com/',
					level: 2
				})}
			</div>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="apps" class="scroll-mt-20">Apps</H3>

			<div class="grid grid-cols-2 gap-4 text-6xl sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
				{@render skillItem({
					icon: SIDiscordIcon,
					link: 'https://discord.com/',
					level: 5
				})}
				{@render skillItem({
					icon: SIVisualStudioCodeIcon,
					link: 'https://code.visualstudio.com/',
					level: 5
				})}
				{@render skillItem({
					icon: DCoolifyIcon,
					link: 'https://coolify.io/',
					level: 5
				})}
				{@render skillItem({
					icon: DJellyfinIcons,
					link: 'https://jellyfin.tv/',
					level: 5
				})}
				{@render skillItem({
					icon: DCloudreveIcon,
					link: 'https://cloudreve.cc/',
					level: 5
				})}
				{@render skillItem({
					icon: DUptimeKumaIcon,
					link: 'https://uptimekuma.eu/',
					level: 5
				})}
				{@render skillItem({
					icon: DStalwartMailServerIcon,
					link: 'https://stalwartmail.com/',
					level: 4
				})}
				{@render skillItem({
					icon: DRoundcubeIcon,
					link: 'https://roundcube.net/',
					level: 4
				})}
				{@render skillItem({
					icon: DBeszelIcon,
					link: 'https://beszel.com/',
					level: 4
				})}
				{@render skillItem({
					icon: SIWordPressIcon,
					link: 'https://wordpress.org/',
					level: 4
				})}
			</div>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="operating-systems" class="scroll-mt-20">Operating Systems</H3>

			<div class="grid grid-cols-2 gap-4 text-6xl sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
				{@render skillItem({
					icon: SIArchLinuxIcon,
					link: 'https://archlinux.org/',
					level: 5
				})}
				{@render skillItem({
					icon: LogosKDEIcon,
					link: 'https://www.kde.org/',
					level: 5
				})}
				{@render skillItem({
					icon: SIDebianLinuxIcon,
					link: 'https://www.debian.org/',
					level: 4
				})}
				{@render skillItem({
					icon: SIUbuntuIcon,
					link: 'https://ubuntu.com/',
					level: 4
				})}
				{@render skillItem({
					icon: SIWindowsIcons,
					link: 'https://www.microsoft.com/en-us/windows',
					level: 4
				})}
			</div>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="databases" class="scroll-mt-20">Databases</H3>

			<div class="grid grid-cols-2 gap-4 text-6xl sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
				{@render skillItem({
					icon: SISQLiteIcon,
					link: 'https://www.sqlite.org/',
					level: 4
				})}
				{@render skillItem({
					icon: SIMySQLIcon,
					link: 'https://www.mysql.com/',
					level: 3
				})}
				{@render skillItem({
					icon: SIPostgreSQLIcon,
					link: 'https://www.postgresql.org/',
					level: 2
				})}
				{@render skillItem({
					icon: SIMongoDBIcon,
					link: 'https://www.mongodb.com/',
					level: 2
				})}
			</div>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="others" class="scroll-mt-20">Others</H3>

			<div class="grid grid-cols-2 gap-4 text-6xl sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
				{@render skillItem({
					icon: SIRegexIcon,
					link: 'https://regex101.com/',
					level: 4
				})}
			</div>
		</div>
	</div>

	<div class="w-full space-y-8 px-8 md:w-4/5 xl:w-2/3">
		<H2 id="career" class="scroll-mt-20" color="secondary">Career</H2>

		<P color="muted">
			Over the years I've studied and worked for different companies and here is the resume of all
			of that.
		</P>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H4 color="secondary" id="ies-pazo-da-merce-ivt" class="scroll-mt-20">
				<A href="https://www.edu.xunta.gal/centros/iespazomerce/">IES Pazo da Mercé</A>
			</H4>

			<H3 id="ivt" class="scroll-mt-20">Intermediate Vocational Training</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Study</Badge>
				<Badge>September 2019 - June 2021</Badge>
				<LinkBadge href="#operating-systems" target="_self">Windows</LinkBadge>
				<LinkBadge href="#operating-systems" target="_self">Linux</LinkBadge>
				<LinkBadge href="#languages" target="_self">HTML5</LinkBadge>
				<LinkBadge href="#languages" target="_self">CSS3</LinkBadge>
			</div>

			<P>
				Here I got the Computer Technician degree, specifically the Technician in Microcomputer
				Systems and Networks degree.
			</P>

			<P>
				While I was studying there I also started learning Coding and Web Development on my free
				time.
			</P>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H4 color="secondary" id="ies-pazo-da-merce-hvt" class="scroll-mt-20">
				<A href="https://www.edu.xunta.gal/centros/iespazomerce/">IES Pazo da Mercé</A>
			</H4>

			<H3 id="hvt" class="scroll-mt-20">Higher Vocational Training</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Study</Badge>
				<Badge>September 2021 - June 2023</Badge>
				<LinkBadge href="#languages" target="_self">Java</LinkBadge>
				<LinkBadge href="#languages" target="_self">PHP</LinkBadge>
				<LinkBadge href="#languages" target="_self">JavaScript</LinkBadge>
				<LinkBadge href="#languages" target="_self">HTML5</LinkBadge>
				<LinkBadge href="#languages" target="_self">CSS3</LinkBadge>
				<LinkBadge href="#databases" target="_self">MariaDB</LinkBadge>
				<LinkBadge href="#databases" target="_self">MySQL</LinkBadge>
				<LinkBadge href="#tools" target="_self">Apache</LinkBadge>
				<LinkBadge href="#tools" target="_self">Git</LinkBadge>
				<LinkBadge href="#tools" target="_self">GitHub</LinkBadge>
			</div>

			<P>
				Here I got the Web Developer degree, specifically the Technician in Microcomputer Systems
				and Networks degree.
			</P>

			<P>
				While I was studying there I also started learning Coding and Web Development on my free
				time.
			</P>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H4 color="secondary" id="atlantic-ac2-job-1" class="scroll-mt-20">
				<A href="https://ac2.es">Atlantic C&C - AC2</A>
			</H4>

			<H3 id="job-1" class="scroll-mt-20">Computer Technician and Web Developer</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Job</Badge>
				<Badge>December 2023 - January 2025</Badge>
				<LinkBadge href="#apps" target="_self">WordPress</LinkBadge>
				<LinkBadge href="#languages" target="_self">PHP</LinkBadge>
				<LinkBadge href="#languages" target="_self">JavaScript</LinkBadge>
				<LinkBadge href="#languages" target="_self">HTML5</LinkBadge>
				<LinkBadge href="#languages" target="_self">CSS3</LinkBadge>
				<LinkBadge href="#operating-systems" target="_self">Windows</LinkBadge>
			</div>

			<P>
				This is the first company a worked for as an oficial employee. I worked for 9 months for 2
				other companies during the years I was studying the Intermediate/Higher Vocational Trainings
				but as a student.
			</P>

			<P>
				My role was in giving support to the company's customers on both hardware and software and
				developing some websites using
				<A href="https://wordpress.org" color="secondary">WordPress</A>
				and
				<A href="https://react.dev" color="secondary">React</A>.
			</P>

			<P>
				I worked there part-time for 2 years and a month and then I left the company to look for a
				full-time Web/Desktop/Mobile Developer position.
			</P>
		</div>
	</div>

	<div class="w-full space-y-8 px-8 md:w-4/5 xl:w-2/3">
		<H2 id="projects" class="scroll-mt-20" color="secondary">Projects</H2>

		<P color="muted">
			On my free time I like to work on some personal projects to share with the community and here
			is the list of those ones.
		</P>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="vs-launcher" class="scroll-mt-20">
				<A href="https://mods.vintagestory.at/vslauncher">VS Launcher</A>
			</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Desktop App</Badge>
				<Badge>December 2024 - Today</Badge>
				<LinkBadge href="#frameworks" target="_self">Electron</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">React</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">TailwindCSS</LinkBadge>
				<LinkBadge href="#tools" target="_self">Vite</LinkBadge>
				<LinkBadge href="#languages" target="_self">TypeScript</LinkBadge>
				<LinkBadge href="#tools" target="_self">NodeJS</LinkBadge>
				<LinkBadge href="#tools" target="_self">GitHub Actions</LinkBadge>
			</div>

			<P>
				VS Launcher is, as the name says, a launcher for the game
				<A href="https://vintagestory.at" color="secondary">Vintage Story</A>.
			</P>

			<P>
				I started this project because there was no launcher for that game and some things like
				installing mutiple versions of the game, managing mods, etc... where extremely tedious
				without a launcher. After a few months I had a fully working, but not very pretty, launcher
				working on both Linux and Windows.
			</P>

			<P>
				I made it using
				<A href="https://electronjs.org" color="secondary">Electron</A>
				and
				<A href="https://react.dev" color="secondary">React</A> and it's packed with a lot of features
				like downloading, managing and playing multiple versions and instances of the game, mods, backups...
				and also some cool secondary features like automatic updates, localization with multiple languages,
				UI scaling config, logging system, etc..</P
			>

			<P>
				If you want to see some images of the launcher, try it or learn more about it, there is a
				<A href="https://vsldocs.xurxomf.xyz" color="secondary">guide</A>
				and the code is on
				<A href="https://github.com/XurxoMF/vs-launcher" color="secondary">GitHub</A>.
			</P>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="rustory" class="scroll-mt-20">
				<A href="https://github.com/XurxoMF/rustory">Rustory</A>
			</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Desktop App</Badge>
				<Badge>May 2025 - Today</Badge>
				<LinkBadge href="#frameworks" target="_self">Electron</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">Tauri</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">Svelte</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">TailwindCSS</LinkBadge>
				<LinkBadge href="#tools" target="_self">Vite</LinkBadge>
				<LinkBadge href="#languages" target="_self">TypeScript</LinkBadge>
				<LinkBadge href="#languages" target="_self">Rust</LinkBadge>
				<LinkBadge href="#tools" target="_self">NodeJS</LinkBadge>
				<LinkBadge href="#tools" target="_self">GitHub Actions</LinkBadge>
			</div>

			<P>
				Rustory is the new version of
				<A href="#vs-launcher" target="_self" color="secondary">VS Launcher</A>
				I'm working on right now. The same as VS Launcher, Rustory is a launcher for the game
				<A href="https://vintagestory.at" color="secondary">Vintage Story</A>
				but with more features, better UI and better performance.
			</P>

			<P>
				After a few months working on VS Launcher I realized how big the project could be because it
				got
				<Span color="secondary">~5.000 downloads</Span>
				in just a month and after a few more months it reached
				<Span color="secondary">~10.000 downloads</Span>
				on a single release so I knew it was time to make big changes and make an even better launcher.
			</P>

			<P>
				I tried to make Rustory with
				<A href="https://tauri.app" color="secondary">Tauri</A>
				and
				<A href="https://kit.svelte.dev" color="secondary">SvelteKit</A>
				but at that time I didn't knew Rust and had no time to study it so I had to rollback to Electron
				but keeping Svelte. I kept the new UI and ported the few features I had made to Electron. You
				can still see the code I had on Tauri on
				<A href="https://github.com/XurxoMF/rustory-tauri" color="secondary">GitHub</A>.
			</P>

			<P>
				A few months have passed and I've made a lot of progress on the Electron version of Rustory,
				you can find the code on
				<A href="https://github.com/XurxoMF/rustory" color="secondary">GitHub</A>. I've not added
				new main features and most of the old ones are not done yet but I've made a really good set
				of components for the UI and added a few secondary features like automatic updates,
				localization with multiple languages, UI scaling and theme configs, improved logging, tray
				icon, commands, hotkeys...
			</P>

			<P>
				If you want to see some images of the new launcher, try it or learn more about it, you can
				join our
				<A href="https://discord.gg/RtWpYBRRUz" color="secondary">Discord</A>
				and the code is on
				<A href="https://github.com/XurxoMF/rustory" color="secondary">GitHub</A>.
			</P>

			<P color="muted" class="text-sm">
				I had some free time a month ago and I studied
				<A href="https://www.rust-lang.org">Rust</A>
				using
				<A href="https://doc.rust-lang.org/book/">The Rust Book</A>
				so I'll probably switch to Tauri again in the next months now that I've the knowledge needed.
			</P>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="vs-launcher-rustory-api" class="scroll-mt-20">
				<A href="https://github.com/XurxoMF/vs-launcher-api">VS Launcher API</A>
				&
				<A href="https://github.com/XurxoMF/rustory-api">Rustory API</A>
			</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>API</Badge>
				<Badge>Discord Bot</Badge>
				<Badge>December 2024 - Today</Badge>
				<LinkBadge href="#tools" target="_self">NodeJS</LinkBadge>
				<LinkBadge href="#tools" target="_self">Bun</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">Express</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">Hono</LinkBadge>
				<LinkBadge href="#databases" target="_self">SQLite</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">DiscordJS</LinkBadge>
				<LinkBadge href="#tools" target="_self">Docker</LinkBadge>
			</div>

			<P>
				Both
				<A href="#vs-launcher" target="_self" color="secondary">VS Launcher</A>
				and
				<A href="#rustory" target="_self" color="secondary">Rustory</A>
				needed an API to server the game files.
				<A href="https://anegostudios.com/" color="secondary">Anego Studios</A>
				, developers of
				<A href="https://vintagestory.at" color="secondary">Vintage Story</A>
				, do not provide an API for that and the only files you can get from their website are the executables
				and tarballs of the game but VS Lancher and Rustory need .zip files to work properly.
			</P>

			<P>
				The solution was simple. A simple Rest API to serve game files, a Discord bot to report
				import progress of the new game versions and a few utility commands.
			</P>

			<P>
				If you want to see the code you can find it on GitHub for both
				<A href="https://github.com/XurxoMF/vs-launcher-api" color="secondary">VS Launcher API</A>
				and
				<A href="https://github.com/XurxoMF/rustory-api" color="secondary">Rustory API</A>.
			</P>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="modereta" class="scroll-mt-20">
				<A href="https://github.com/XurxoMF/Modereta">Modereta</A>
			</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Discord Bot</Badge>
				<Badge>January 2022 - January 2025</Badge>
				<LinkBadge href="#tools" target="_self">NodeJS</LinkBadge>
				<LinkBadge href="#databases" target="_self">SQLite</LinkBadge>
				<LinkBadge href="#frameworks" target="_self">DiscordJS</LinkBadge>
				<LinkBadge href="#tools" target="_self">Docker</LinkBadge>
			</div>

			<P>
				Modereta was a private Discord bor I made for a server of mine. It was a simple bot with a
				level system, reactions, moderation...
			</P>

			<P>
				I made it using Discord.js v11 and then updated it to v12, v13 and now v14. I also
				refactored the whole bot when I ported it to v13 so the GitHub repository starts on a latter
				date.
			</P>

			<P>
				If you want to see the code you can find it on
				<A href="https://github.com/XurxoMF/Modereta" color="secondary">GitHub</A> but it's not in use
				anymore and it was left abandoned.
			</P>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="vsds" class="scroll-mt-20">
				<A href="https://mods.vintagestory.at/vsds">VSDS aka Vintage Story Dockerized Server</A>
			</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Docker Images</Badge>
				<Badge>July 2025 - Today</Badge>
				<LinkBadge href="#tools" target="_self">Docker</LinkBadge>
				<LinkBadge href="#languages" target="_self">Bash</LinkBadge>
			</div>

			<P>
				VSDS is a Docker image than contains a
				<A href="https://vintagestory.at" color="secondary">Vintage Story</A>
				server that can be run with a single command.
			</P>

			<P>
				I made it becasue I wanted a Vintage Story server to play with my friends but hosting it
				locally was both insecure and required creating a new user and I didn't wanted to do so.
			</P>

			<P>
				If you want to see the images or the code you can find it on
				<A href="https://github.com/XurxoMF/vsds" color="secondary">GitHub</A>
				and on
				<A href="https://hub.docker.com/r/xurxomf/vsds" color="secondary">Docker Hub</A>
				. There is also a guide on the
				<A href="https://github.com/XurxoMF/vsds/wiki" color="secondary">GitHub Wiki</A>.
			</P>
		</div>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H3 id="underground-mines" class="scroll-mt-20">
				<A href="https://mods.vintagestory.at/undergroundmines">Underground Mines</A>
			</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Game Mod</Badge>
				<Badge>September 2023 - Today</Badge>
				<LinkBadge href="#languages" target="_self">C#</LinkBadge>
			</div>

			<P>
				Underground Mines is a small mod for
				<A href="https://vintagestory.at" color="secondary">Vintage Story</A>
				I made with a friend a few years ago while studying
				<A href="https://dotnet.microsoft.com/en-us/languages/csharp" color="secondary">C#</A>.
			</P>

			<P>
				This mod generates procedural inifite underground mines and mineshafts with ores, enemies
				and more. I'm not updating it with new contect anymore to focus on my job and other projects
				but I keep it updated and working on new versions of the game.
			</P>

			<P>
				If you want to see the mod or the code you can find it on the
				<A href="https://mods.vintagestory.at/undergroundmines" color="secondary">ModDB</A>
				and on
				<A href="https://hub.docker.com/r/xurxomf/UndergroundMines" color="secondary">GitHub</A>.
			</P>
		</div>
	</div>

	<div class="w-full space-y-8 px-8 md:w-4/5 xl:w-2/3">
		<H2 id="jobs" class="scroll-mt-20" color="secondary">Jobs</H2>

		<P color="muted">
			While working on the companies I've mentioned
			<A href="#career" target="_self" color="secondary">above</A>
			I made and worked on a lot of websites, tools and apps so I'll list the best ones I'm allowed to
			show here to.
		</P>

		<div class="space-y-2 border-l-2 border-l-pink-500 pl-4">
			<H4 color="secondary" id="atlantic-ac2" class="scroll-mt-20">
				<A href="#atlantic-ac2-job-1" target="_self">Atlantic C&C - AC2</A>
			</H4>

			<H3 id="liporca" class="scroll-mt-20">
				<A href="https://liporca.com">Liporca</A>
			</H3>

			<div class="flex flex-wrap gap-1">
				<Badge>Website & Online Shop</Badge>
				<Badge>2023</Badge>
				<LinkBadge href="#apps" target="_self">Wordpress</LinkBadge>
				<LinkBadge href="#languages" target="_self">HTML5</LinkBadge>
				<LinkBadge href="#languages" target="_self">CSS3</LinkBadge>
				<LinkBadge href="#languages" target="_self">JavaScript</LinkBadge>
			</div>

			<P>
				<A href="https://liporca.com" color="secondary">Liporca</A> is a liquor brand from Galicia, Spain
				and I was resposible for developing their website and online shop.
			</P>

			<P>
				The design was made by
				<A href="https://wtflow.gal/" color="secondary">WHAT THE FLOW!</A>, a design and marketing
				agency from Galicia too. They designed the website and made every image used on the in and
				then I made it real using Wordpress and WooCommerce with a custom theme and some custom
				JavaScript to make some things work as expected.
			</P>

			<P>
				If you want to check the website or buy some products, thing that I recommend as they are
				extremely good, you can find them on this
				<A href="https://liporca.com" color="secondary">link</A>!
			</P>
		</div>
	</div>
</main>
