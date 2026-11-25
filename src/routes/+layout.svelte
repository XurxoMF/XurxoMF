<script lang="ts">
	import { resolve } from "$app/paths";
	import { page } from "$app/state";
	import { ModeWatcher, mode, setMode } from "mode-watcher";
	import { onMount } from "svelte";

	import "./layout.css";

	import { contact } from "#lib/data/contact.ts";
	import { toResolvablePath } from "#lib/site/routing.ts";

	import { CheckIcon, ChevronDownIcon, MoonIcon, SidebarIcon, SunIcon } from "#lib/icons.ts";
	import * as m from "#lib/paraglide/messages.js";
	import { baseLocale, getLocale, localizeHref, locales } from "#lib/paraglide/runtime.js";

	import { cn } from "#lib/utils.ts";

	import * as Button from "#lib/components/ui/button/index.ts";
	import * as DropdownMenu from "#lib/components/ui/dropdown-menu/index.ts";
	import * as Sheet from "#lib/components/ui/sheet/index.ts";

	let { children } = $props();
	let navigationOpen = $state(false);
	let cookieNoticeOpen = $state(false);

	const SITE_ORIGIN = "https://xurxomf.com";
	const COOKIE_NOTICE_KEY = "xurxomf-cookie-notice";

	const LOCALES: Record<(typeof locales)[number], { name: string; code: string }> = {
		gl: { name: "Galego", code: "GL" },
		es: { name: "Español", code: "ES" },
		en: { name: "English", code: "EN" }
	} as const;

	const currentYear = new Date().getFullYear();

	onMount(() => {
		cookieNoticeOpen = localStorage.getItem(COOKIE_NOTICE_KEY) !== "acknowledged-v1";
	});

	function acknowledgeCookieNotice() {
		localStorage.setItem(COOKIE_NOTICE_KEY, "acknowledged-v1");
		cookieNoticeOpen = false;
	}
</script>

<!-- Used so SvelteKit generates the required pages for this locales -->
<nav aria-hidden="true" class="hidden">
	{#each locales as locale (locale)}
		<a href={resolve(toResolvablePath(localizeHref(page.url.pathname, { locale })))} tabindex="-1">
			{locale}
		</a>
	{/each}
</nav>

{#snippet languageFlag(locale: (typeof locales)[number])}
	<span class="block h-4 w-6 shrink-0 overflow-hidden rounded-[3px] bg-white shadow-xs ring-1 ring-foreground/20 ring-inset" aria-hidden="true">
		<img src="/images/flags/{locale}.svg" alt="" class="block size-full object-cover" />
	</span>
{/snippet}

<svelte:head>
	<link rel="canonical" href={new URL(localizeHref(page.url.pathname, { locale: getLocale() }), SITE_ORIGIN).href} />
	{#each locales as locale (locale)}
		<link rel="alternate" hreflang={locale} href={new URL(localizeHref(page.url.pathname, { locale }), SITE_ORIGIN).href} />
	{/each}
	<link rel="alternate" hreflang="x-default" href={new URL(localizeHref(page.url.pathname, { locale: baseLocale }), SITE_ORIGIN).href} />
</svelte:head>

<ModeWatcher />

<div class="flex min-h-svh flex-col">
	<header class="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl">
		<div class="mx-auto grid h-16 w-full max-w-6xl grid-cols-[1fr_auto] items-center gap-2 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:gap-4">
			<a
				href={resolve(toResolvablePath(localizeHref("/")))}
				class="flex items-center gap-2 text-xl font-bold tracking-tight"
				aria-label={m.layout_home_label()}
			>
				<img src="/images/brands/xurxomf-logo.webp" alt="" width="32" height="32" class="size-8 object-contain" />
				<span><span class="text-primary">X</span>urxo<span class="text-primary">MF</span></span>
			</a>

			<nav class="hidden items-center gap-1 rounded-full border bg-card/80 p-1 shadow-sm md:flex" aria-label={m.layout_main_navigation()}>
				<a
					href={resolve(toResolvablePath(localizeHref("/#sobre-min")))}
					class={Button.rootVariants({ variant: "ghost", size: "sm", class: "rounded-full" })}
				>
					{m.nav_about()}
				</a>
				<a
					href={resolve(toResolvablePath(localizeHref("/servizos")))}
					class={Button.rootVariants({ variant: "ghost", size: "sm", class: "rounded-full" })}
				>
					{m.nav_services()}
				</a>
				<a
					href={resolve(toResolvablePath(localizeHref("/proxectos")))}
					class={Button.rootVariants({ variant: "ghost", size: "sm", class: "rounded-full" })}
				>
					{m.nav_projects()}
				</a>
			</nav>

			<div class="flex items-center justify-end gap-2">
				<a href={resolve(toResolvablePath(localizeHref("/#contacto")))} class={Button.rootVariants({ size: "sm", class: "hidden lg:inline-flex" })}>
					{m.nav_talk()}
				</a>

				<div class="flex items-center rounded-lg border bg-card/90 p-1 shadow-sm backdrop-blur-xl">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							{#snippet child({ props })}
								<Button.Root {...props} variant="ghost" size="sm" class="gap-1 px-2" aria-label={m.layout_language_selector()}>
									{@render languageFlag(getLocale())}
									<span class="font-mono text-xs">{LOCALES[getLocale()].code}</span>
									<ChevronDownIcon class="size-3 text-muted-foreground" aria-hidden="true" />
								</Button.Root>
							{/snippet}
						</DropdownMenu.Trigger>

						<DropdownMenu.Content align="end" class="w-44">
							{#each locales as locale (locale)}
								<DropdownMenu.Item textValue={LOCALES[locale].name}>
									{#snippet child({ props })}
										<a
											{...props}
											href={resolve(toResolvablePath(localizeHref(page.url.pathname, { locale })))}
											hreflang={locale}
											lang={locale}
											aria-current={locale === getLocale() ? "page" : undefined}
											data-sveltekit-reload
										>
											{@render languageFlag(locale)}
											<span>{LOCALES[locale].name}</span>
											{#if locale === getLocale()}<CheckIcon class="ml-auto size-4" aria-hidden="true" />{/if}
										</a>
									{/snippet}
								</DropdownMenu.Item>
							{/each}
						</DropdownMenu.Content>
					</DropdownMenu.Root>

					<span class="mx-1 h-4 w-px bg-border" aria-hidden="true"></span>

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
				</div>

				<Sheet.Root bind:open={navigationOpen}>
					<Sheet.Trigger class={cn(Button.rootVariants({ variant: "ghost", size: "icon" }), "md:hidden")} aria-label={m.layout_open_navigation()}>
						<SidebarIcon aria-hidden="true" />
					</Sheet.Trigger>

					<Sheet.Content side="top" class="max-h-svh overflow-y-auto">
						<Sheet.Header class="items-start pr-12 text-left">
							<Sheet.Title class="flex items-center gap-2 text-xl font-bold tracking-tight">
								<img src="/images/brands/xurxomf-logo.webp" alt="" width="32" height="32" class="size-8 object-contain" />
								<span><span class="text-primary">X</span>urxo<span class="text-primary">MF</span></span>
							</Sheet.Title>
							<Sheet.Description>{m.layout_mobile_description()}</Sheet.Description>
						</Sheet.Header>

						<nav class="grid gap-1 px-4" aria-label={m.layout_mobile_navigation()}>
							<a
								href={resolve(toResolvablePath(localizeHref("/#sobre-min")))}
								class={Button.rootVariants({ variant: "ghost", size: "lg", class: "h-auto justify-between py-3" })}
								onclick={() => (navigationOpen = false)}
							>
								{m.nav_about()} <span class="font-mono text-xs text-muted-foreground">01</span>
							</a>
							<a
								href={resolve(toResolvablePath(localizeHref("/servizos")))}
								class={Button.rootVariants({ variant: "ghost", size: "lg", class: "h-auto justify-between py-3" })}
								onclick={() => (navigationOpen = false)}
							>
								{m.nav_services()} <span class="font-mono text-xs text-muted-foreground">02</span>
							</a>
							<a
								href={resolve(toResolvablePath(localizeHref("/proxectos")))}
								class={Button.rootVariants({ variant: "ghost", size: "lg", class: "h-auto justify-between py-3" })}
								onclick={() => (navigationOpen = false)}
							>
								{m.nav_projects()} <span class="font-mono text-xs text-muted-foreground">03</span>
							</a>
							<a
								href={resolve(toResolvablePath(localizeHref("/#contacto")))}
								class={Button.rootVariants({ size: "lg", class: "mt-2" })}
								onclick={() => (navigationOpen = false)}
							>
								{m.nav_talk()}
							</a>
						</nav>
					</Sheet.Content>
				</Sheet.Root>
			</div>
		</div>
	</header>

	<main class="flex-1 overflow-x-clip">
		{@render children()}
	</main>

	<footer class="mt-auto border-t bg-muted/30">
		<div class="mx-auto w-full max-w-6xl px-6">
			<div class="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_0.75fr_1fr] lg:gap-16">
				<div>
					<a
						href={resolve(toResolvablePath(localizeHref("/#sobre-min")))}
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
						<a
							class="w-fit text-muted-foreground transition-colors hover:text-foreground"
							href={resolve(toResolvablePath(localizeHref("/#sobre-min")))}
						>
							{m.nav_about()}
						</a>
						<a
							class="w-fit text-muted-foreground transition-colors hover:text-foreground"
							href={resolve(toResolvablePath(localizeHref("/servizos")))}
						>
							{m.nav_services()}
						</a>
						<a
							class="w-fit text-muted-foreground transition-colors hover:text-foreground"
							href={resolve(toResolvablePath(localizeHref("/proxectos")))}
						>
							{m.nav_projects()}
						</a>
						<a
							class="w-fit text-muted-foreground transition-colors hover:text-foreground"
							href={resolve(toResolvablePath(localizeHref("/#contacto")))}
						>
							{m.nav_contact()}
						</a>
					</div>
				</nav>

				<div>
					<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.nav_contact()}</p>
					<div class="mt-4 grid gap-3 text-sm">
						<a class="w-fit font-medium text-muted-foreground hover:text-foreground" href={contact.email.href} rel="external">
							{contact.email.label}
						</a>
						<a class="w-fit text-muted-foreground transition-colors hover:text-foreground" href={contact.phone.href} rel="external">
							{contact.phone.label}
						</a>
						<a
							class="w-fit text-muted-foreground transition-colors hover:text-foreground"
							href={contact.socials.whatsapp.href}
							target="_blank"
							rel="external noreferrer"
						>
							{contact.socials.whatsapp.label}
						</a>
						<p class="text-muted-foreground">{contact.location}</p>
					</div>
				</div>
			</div>

			<div class="flex flex-col gap-4 border-t py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
				<p>© {currentYear} XurxoMF. {m.layout_copyright()}</p>

				<div class="flex flex-wrap gap-x-5 gap-y-2">
					<a class="transition-colors hover:text-foreground" href={resolve(toResolvablePath(localizeHref("/privacidade")))}>
						{m.layout_privacy()}
					</a>
					<a class="transition-colors hover:text-foreground" href={resolve(toResolvablePath(localizeHref("/cookies")))}>
						{m.layout_cookies()}
					</a>
					<a class="transition-colors hover:text-foreground" href={resolve(toResolvablePath(localizeHref("/aviso-legal")))}>
						{m.layout_legal()}
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<Sheet.Root bind:open={cookieNoticeOpen}>
	<Sheet.Content side="bottom" class="mx-auto max-w-3xl rounded-t-xl" showCloseButton={false}>
		<Sheet.Header class="pr-4 text-left">
			<Sheet.Title>{m.cookie_notice_title()}</Sheet.Title>
			<Sheet.Description>{m.cookie_notice_description()}</Sheet.Description>
		</Sheet.Header>
		<Sheet.Footer class="flex-row flex-wrap justify-end">
			<a
				href={resolve(toResolvablePath(localizeHref("/cookies")))}
				class={Button.rootVariants({ variant: "outline" })}
				onclick={() => (cookieNoticeOpen = false)}
			>
				{m.cookie_notice_review()}
			</a>
			<Button.Root onclick={acknowledgeCookieNotice}>{m.cookie_notice_acknowledge()}</Button.Root>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
