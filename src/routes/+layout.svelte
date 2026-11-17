<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import type { Pathname } from "$app/types";
	import { ModeWatcher, mode, setMode } from "mode-watcher";

	import "./layout.css";

	import { contact } from "$lib/data/contact";

	import { MoonIcon, SidebarIcon, SunIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";
	import { baseLocale, getLocale, localizeHref, locales } from "$lib/paraglide/runtime";

	import { cn } from "$lib/utils";

	import * as Button from "$lib/components/ui/button";
	import * as ButtonGroup from "$lib/components/ui/button-group";
	import * as Sheet from "$lib/components/ui/sheet";

	let { children } = $props();
	let navigationOpen = $state(false);

	const SITE_ORIGIN = "https://xurxomf.xyz";

	const LOCALES: Record<(typeof locales)[number], { name: string; code: string }> = {
		gl: { name: "Galego", code: "GL" },
		es: { name: "Español", code: "ES" },
		en: { name: "English", code: "EN" }
	} as const;

	const currentYear = new Date().getFullYear();
</script>

<svelte:head>
	<link rel="canonical" href={new URL(localizeHref(page.url.pathname, { locale: getLocale() }), SITE_ORIGIN).href} />
	{#each locales as locale (locale)}
		<link rel="alternate" hreflang={locale} href={new URL(localizeHref(page.url.pathname, { locale }), SITE_ORIGIN).href} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={new URL(localizeHref(page.url.pathname, { locale: baseLocale }), SITE_ORIGIN).href} />
</svelte:head>

<ModeWatcher />

<div class="fixed right-6 bottom-0 z-50 rounded-t-lg border-x border-t bg-card p-1 shadow-lg">
	<ButtonGroup.Root>
		<nav class="contents" aria-label={m.layout_language_selector()}>
			{#each locales as locale (locale)}
				<a
					href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}
					hreflang={locale}
					lang={locale}
					title={LOCALES[locale].name}
					aria-current={locale === getLocale() ? "page" : undefined}
					data-sveltekit-reload
					class={Button.rootVariants({ variant: locale === getLocale() ? "secondary" : "ghost", size: "icon-sm" })}
				>
					{LOCALES[locale].code}
				</a>
			{/each}
		</nav>

		<Button.Root
			variant="ghost"
			size="icon-sm"
			class="relative overflow-hidden"
			aria-label={mode.current === "dark" ? m.layout_theme_light() : m.layout_theme_dark()}
			aria-pressed={mode.current === "dark"}
			onclick={() => setMode(mode.current === "dark" ? "light" : "dark")}
		>
			<SunIcon
				aria-hidden="true"
				class={cn(
					"absolute animation-duration-300 animation-ease-out animation-fill-both",
					mode.current === "dark" ? "animate-out fade-out-0 zoom-out-0 -spin-out-90" : "animate-in fade-in-0 zoom-in-0 spin-in-90"
				)}
			/>

			<MoonIcon
				aria-hidden="true"
				class={cn(
					"absolute animation-duration-300 animation-ease-out animation-fill-both",
					mode.current === "dark" ? "animate-in fade-in-0 zoom-in-0 spin-in-90" : "animate-out fade-out-0 zoom-out-0 -spin-out-90"
				)}
			/>
		</Button.Root>
	</ButtonGroup.Root>
</div>

<div class="flex min-h-svh flex-col">
	<header class="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl">
		<div class="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-4 px-6 md:grid-cols-[1fr_auto_1fr]">
			<a href={resolve(localizeHref("/#sobre-min") as Pathname)} class="text-xl font-bold tracking-tight" aria-label={m.layout_home_label()}>
				<span class="text-primary">X</span>urxo<span class="text-primary">MF</span>
			</a>

			<nav class="hidden items-center gap-1 rounded-full border bg-card/80 p-1 shadow-sm md:flex" aria-label={m.layout_main_navigation()}>
				<a
					href={resolve(localizeHref("/#sobre-min") as Pathname)}
					class={Button.rootVariants({ variant: "ghost", size: "sm", class: "rounded-full" })}>{m.nav_about()}</a
				>
				<a href={resolve(localizeHref("/#servizos") as Pathname)} class={Button.rootVariants({ variant: "ghost", size: "sm", class: "rounded-full" })}
					>{m.nav_services()}</a
				>
				<a href={resolve(localizeHref("/proxectos") as Pathname)} class={Button.rootVariants({ variant: "ghost", size: "sm", class: "rounded-full" })}
					>{m.nav_projects()}</a
				>
			</nav>

			<div class="hidden items-center justify-end gap-3 md:flex">
				<div class="hidden text-right text-xs leading-5 lg:block">
					<a class="block text-muted-foreground transition-colors hover:text-foreground" href={contact.email.href} rel="external">
						{contact.email.label}
					</a>
					<a class="block text-muted-foreground transition-colors hover:text-foreground" href={contact.phone.href} rel="external">
						{contact.phone.label}
					</a>
				</div>
				<a href={resolve(localizeHref("/#contacto") as Pathname)} class={Button.rootVariants({ size: "sm" })}>{m.nav_talk()}</a>
			</div>

			<Sheet.Root bind:open={navigationOpen}>
				<Sheet.Trigger class={cn(Button.rootVariants({ variant: "ghost", size: "icon" }), "md:hidden")} aria-label={m.layout_open_navigation()}>
					<SidebarIcon aria-hidden="true" />
				</Sheet.Trigger>

				<Sheet.Content side="top" class="max-h-svh overflow-y-auto">
					<Sheet.Header class="items-start pr-12 text-left">
						<Sheet.Title class="text-xl font-bold tracking-tight">
							<span class="text-primary">X</span>urxo<span class="text-primary">MF</span>
						</Sheet.Title>
						<Sheet.Description>{m.layout_mobile_description()}</Sheet.Description>
					</Sheet.Header>

					<nav class="grid gap-1 px-4" aria-label={m.layout_mobile_navigation()}>
						<a
							href={resolve(localizeHref("/#sobre-min") as Pathname)}
							class={Button.rootVariants({ variant: "ghost", size: "lg", class: "h-auto justify-between py-3" })}
							onclick={() => (navigationOpen = false)}
						>
							{m.nav_about()} <span class="font-mono text-xs text-muted-foreground">01</span>
						</a>
						<a
							href={resolve(localizeHref("/#servizos") as Pathname)}
							class={Button.rootVariants({ variant: "ghost", size: "lg", class: "h-auto justify-between py-3" })}
							onclick={() => (navigationOpen = false)}
						>
							{m.nav_services()} <span class="font-mono text-xs text-muted-foreground">02</span>
						</a>
						<a
							href={resolve(localizeHref("/proxectos") as Pathname)}
							class={Button.rootVariants({ variant: "ghost", size: "lg", class: "h-auto justify-between py-3" })}
							onclick={() => (navigationOpen = false)}
						>
							{m.nav_projects()} <span class="font-mono text-xs text-muted-foreground">03</span>
						</a>
						<a
							href={resolve(localizeHref("/#contacto") as Pathname)}
							class={Button.rootVariants({ size: "lg", class: "mt-2" })}
							onclick={() => (navigationOpen = false)}>{m.nav_talk()}</a
						>
					</nav>

					<Sheet.Footer class="mt-4 border-t text-sm text-muted-foreground">
						<p class="font-medium text-foreground">{m.layout_direct_contact()}</p>
						<a class="w-fit hover:text-foreground" href={contact.email.href} rel="external">{contact.email.label}</a>
						<a class="w-fit hover:text-foreground" href={contact.phone.href} rel="external">{contact.phone.label}</a>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="mt-auto border-t bg-muted/30">
		<div class="mx-auto w-full max-w-6xl px-6">
			<div class="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_1fr] lg:gap-16">
				<div>
					<a
						href={resolve(localizeHref("/#sobre-min") as Pathname)}
						class="inline-block text-2xl font-bold tracking-tight"
						aria-label={m.layout_home_label()}
					>
						<span class="text-primary">X</span>urxo<span class="text-primary">MF</span>
					</a>
					<p class="mt-4 max-w-sm leading-7 text-muted-foreground">
						{m.layout_footer_description()}
					</p>
					<p class="mt-5 flex items-center gap-2 text-sm font-medium">
						<span class="size-2 rounded-full bg-success" aria-hidden="true"></span>
						{m.common_available()}
					</p>
				</div>

				<nav aria-label={m.layout_sitemap()}>
					<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.layout_navigation()}</p>
					<div class="mt-4 grid gap-3 text-sm">
						<a class="w-fit text-muted-foreground transition-colors hover:text-foreground" href={resolve(localizeHref("/#sobre-min") as Pathname)}
							>{m.nav_about()}</a
						>
						<a class="w-fit text-muted-foreground transition-colors hover:text-foreground" href={resolve(localizeHref("/#servizos") as Pathname)}
							>{m.nav_services()}</a
						>
						<a class="w-fit text-muted-foreground transition-colors hover:text-foreground" href={resolve(localizeHref("/proxectos") as Pathname)}
							>{m.nav_projects()}</a
						>
						<a class="w-fit text-muted-foreground transition-colors hover:text-foreground" href={resolve(localizeHref("/#contacto") as Pathname)}
							>{m.nav_contact()}</a
						>
					</div>
				</nav>

				<div>
					<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.nav_contact()}</p>
					<div class="mt-4 grid gap-3 text-sm">
						<a class="w-fit font-medium text-muted-foreground hover:text-foreground" href={contact.email.href} rel="external">{contact.email.label}</a
						>
						<a class="w-fit text-muted-foreground transition-colors hover:text-foreground" href={contact.phone.href} rel="external">
							{contact.phone.label}
						</a>
						<a
							class="w-fit text-muted-foreground transition-colors hover:text-foreground"
							href={contact.socials.whatsapp.href}
							target="_blank"
							rel="external noreferrer">{contact.socials.whatsapp.label}</a
						>
						<p class="text-muted-foreground">{contact.location}</p>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
				<p>© {currentYear} Xurxo MF. {m.layout_copyright()}</p>

				<div class="flex flex-wrap gap-x-5 gap-y-2">
					<span>{m.layout_privacy()}</span>
					<span>{m.layout_cookies()}</span>
					<span>{m.layout_legal()}</span>
				</div>
			</div>
		</div>
	</footer>
</div>
