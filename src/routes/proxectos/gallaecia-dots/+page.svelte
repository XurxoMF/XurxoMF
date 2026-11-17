<script lang="ts">
	import { CheckIcon, FolderIcon, LiveIcon, PreferencesIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as CodeBlock from "$lib/components/ui/code-block";
	import * as Typography from "$lib/components/ui/typography";

	const installCommand = "bash <(curl -fsSL https://raw.githubusercontent.com/XurxoMF/gallaecia-dots/release/install.sh)";
</script>

{#snippet mode(label: string, title: string, description: string, point1: string, point2: string, point3: string)}
	<article class="flex flex-col rounded-2xl border bg-card p-6 shadow-sm">
		<p class="font-mono text-xs tracking-widest text-primary uppercase">{label}</p>
		<h3 class="mt-5 text-2xl font-semibold tracking-tight">{title}</h3>
		<p class="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
		<ul class="mt-8 space-y-3 border-t pt-6">
			<li class="flex gap-3 text-sm"><CheckIcon class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{point1}</li>
			<li class="flex gap-3 text-sm"><CheckIcon class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{point2}</li>
			<li class="flex gap-3 text-sm"><CheckIcon class="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />{point3}</li>
		</ul>
	</article>
{/snippet}

{#snippet processStep(number: string, title: string, description: string)}
	<article class="relative">
		<div class="mx-auto grid size-14 place-items-center rounded-full border bg-background font-mono text-lg font-semibold text-primary shadow-sm">
			{number}
		</div>
		<h3 class="mt-6 text-xl font-semibold">{title}</h3>
		<p class="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

<svelte:head>
	<title>{m.gallaecia_meta_title()}</title>
	<meta name="description" content={m.gallaecia_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative isolate min-h-[calc(100svh-4rem)] bg-black text-white">
		<img
			src="/images/projects/gallaecia-dots/claro.jpg"
			alt=""
			width="1600"
			height="900"
			fetchpriority="high"
			class="absolute inset-0 -z-20 h-full w-full object-cover"
		/>
		<div class="absolute inset-0 -z-10 bg-black/45" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-linear-to-r from-black/95 via-black/70 to-black/20" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-linear-to-t from-black/55 via-transparent to-black/20" aria-hidden="true"></div>

		<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-end px-6 py-16 lg:items-center lg:py-24">
			<div class="max-w-3xl">
				<div class="mb-6 flex flex-wrap gap-2">
					<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.gallaecia_badge_development()}</Badge.Root>
					<Badge.Root variant="secondary">Arch Linux</Badge.Root>
					<Badge.Root variant="secondary">{m.gallaecia_badge_galician()}</Badge.Root>
				</div>

				<p class="font-mono text-sm tracking-[0.3em] text-white/60 uppercase">~/dotfiles</p>
				<Typography.H1 class="mt-4 max-w-3xl text-5xl tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">Gallaecia Dots</Typography.H1>
				<Typography.Leading class="mt-6 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
					{m.gallaecia_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mt-6 max-w-xl text-lg text-white/70">
					{m.gallaecia_hero_description()}
				</Typography.P>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="https://github.com/XurxoMF/gallaecia-dots" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}
						>{m.gallaecia_action_repo()}</a
					>
					<a href="#instalacion" class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.gallaecia_action_install()}</a>
				</div>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.gallaecia_modes_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.gallaecia_modes_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.gallaecia_modes_description()}
				</Typography.P>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				{@render mode(
					m.gallaecia_desktop_label(),
					m.gallaecia_desktop_title(),
					m.gallaecia_desktop_description(),
					m.gallaecia_desktop_point_1(),
					m.gallaecia_desktop_point_2(),
					m.gallaecia_desktop_point_3()
				)}
				{@render mode(
					m.gallaecia_server_label(),
					m.gallaecia_server_title(),
					m.gallaecia_server_description(),
					m.gallaecia_server_point_1(),
					m.gallaecia_server_point_2(),
					m.gallaecia_server_point_3()
				)}
			</div>
		</div>
	</section>

	<section class="bg-muted/30">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-28">
			<figure class="overflow-hidden rounded-2xl border bg-background shadow-xl">
				<img
					src="/images/projects/gallaecia-dots/terminal-claro.jpg"
					alt={m.gallaecia_terminal_alt()}
					width="1600"
					height="900"
					loading="lazy"
					class="aspect-video w-full object-cover"
				/>
				<figcaption class="border-t px-5 py-3 text-sm text-muted-foreground">
					{m.gallaecia_terminal_caption()}
				</figcaption>
			</figure>

			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.gallaecia_minimal_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.gallaecia_minimal_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.gallaecia_minimal_description()}
				</Typography.P>
				<div class="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-border">
					<div class="bg-background p-5">
						<FolderIcon class="size-5 text-primary" aria-hidden="true" />
						<p class="mt-4 font-semibold">{m.gallaecia_necessary_title()}</p>
						<p class="mt-2 text-sm text-muted-foreground">{m.gallaecia_necessary_description()}</p>
					</div>
					<div class="bg-background p-5">
						<PreferencesIcon class="size-5 text-primary" aria-hidden="true" />
						<p class="mt-4 font-semibold">{m.gallaecia_editable_title()}</p>
						<p class="mt-2 text-sm text-muted-foreground">{m.gallaecia_editable_description()}</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="instalacion" class="scroll-mt-20">
		<div class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
			<div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
				<div>
					<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.gallaecia_install_kicker()}</p>
					<Typography.H2 class="mt-4 border-0">{m.gallaecia_install_title()}</Typography.H2>
					<Typography.P class="mt-5 text-muted-foreground">
						{m.gallaecia_install_description()}
					</Typography.P>
				</div>

				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Title>{m.gallaecia_terminal_title()}</CodeBlock.Title>
						<CodeBlock.Actions><CodeBlock.CopyButton value={installCommand} /></CodeBlock.Actions>
					</CodeBlock.Header>
					<CodeBlock.Content code={installCommand} wrap />
					<CodeBlock.Footer>{m.gallaecia_code_footer()}</CodeBlock.Footer>
				</CodeBlock.Root>
			</div>
		</div>
	</section>

	<section>
		<div class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
			<div class="mx-auto max-w-3xl text-center">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.gallaecia_process_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.gallaecia_process_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.gallaecia_process_description()}
				</Typography.P>
			</div>

			<div class="relative mt-14 grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
				<div class="pointer-events-none absolute top-7 right-[12.5%] left-[12.5%] hidden border-t border-dashed lg:block" aria-hidden="true"></div>
				{@render processStep("01", m.gallaecia_step_mode_title(), m.gallaecia_step_mode_description())}
				{@render processStep("02", m.gallaecia_step_core_title(), m.gallaecia_step_core_description())}
				{@render processStep("03", m.gallaecia_step_tools_title(), m.gallaecia_step_tools_description())}
				{@render processStep("04", m.gallaecia_step_updates_title(), m.gallaecia_step_updates_description())}
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.gallaecia_language_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.gallaecia_language_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.gallaecia_language_description()}
				</Typography.P>
				<div class="mt-7 flex items-center gap-3 font-mono text-sm">
					<span class="rounded-md bg-primary px-3 py-1.5 text-primary-foreground">{m.gallaecia_language_gl()}</span>
					<span aria-hidden="true">→</span>
					<span class="rounded-md border px-3 py-1.5">{m.gallaecia_language_es()}</span>
					<span aria-hidden="true">→</span>
					<span class="rounded-md border px-3 py-1.5">{m.gallaecia_language_en()}</span>
				</div>
			</div>

			<figure class="overflow-hidden rounded-2xl border shadow-xl">
				<img
					src="/images/projects/gallaecia-dots/escuro.jpg"
					alt={m.gallaecia_gallery_dark_alt()}
					width="1600"
					height="900"
					loading="lazy"
					class="aspect-video w-full object-cover"
				/>
			</figure>
		</div>
	</section>

	<section class="bg-muted/30 py-20 lg:py-28">
		<div class="mx-auto w-full max-w-6xl px-6">
			<div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
				<div>
					<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.gallaecia_gallery_kicker()}</p>
					<h2 class="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{m.gallaecia_gallery_title()}</h2>
				</div>
				<p class="max-w-sm text-sm leading-6 text-muted-foreground">
					{m.gallaecia_gallery_description()}
				</p>
			</div>

			<div class="mt-12 grid gap-4 lg:grid-cols-2">
				<figure class="overflow-hidden rounded-xl border bg-card lg:col-span-2">
					<img
						src="/images/projects/gallaecia-dots/claro.jpg"
						alt={m.gallaecia_gallery_light_alt()}
						width="1600"
						height="900"
						loading="lazy"
						class="aspect-video w-full object-cover"
					/>
				</figure>
				<figure class="overflow-hidden rounded-xl border bg-card">
					<img
						src="/images/projects/gallaecia-dots/apps-escuro.jpg"
						alt={m.gallaecia_gallery_apps_alt()}
						width="1600"
						height="900"
						loading="lazy"
						class="aspect-video w-full object-cover"
					/>
				</figure>
				<figure class="overflow-hidden rounded-xl border bg-card">
					<img
						src="/images/projects/gallaecia-dots/cores.jpg"
						alt={m.gallaecia_colors_alt()}
						width="1600"
						height="900"
						loading="lazy"
						class="aspect-video w-full object-cover"
					/>
				</figure>
			</div>
		</div>
	</section>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
