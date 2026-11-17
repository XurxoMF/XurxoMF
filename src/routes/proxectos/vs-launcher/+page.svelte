<script lang="ts">
	import { FolderIcon, PreferencesIcon, ResetIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Typography from "$lib/components/ui/typography";
</script>

<svelte:head>
	<title>{m.vsl_meta_title()}</title>
	<meta name="description" content={m.vsl_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white">
		<img
			src="/images/projects/vs-launcher/main.png"
			alt={m.vsl_hero_alt()}
			width="1277"
			height="750"
			fetchpriority="high"
			class="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
		/>
		<div class="absolute inset-0 -z-10 bg-black/45" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-gradient-to-r from-black/95 via-black/70 to-black/20" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-transparent to-black/20" aria-hidden="true"></div>

		<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-6 py-20 lg:py-28">
			<div class="max-w-3xl">
				<div class="mb-6 flex flex-wrap gap-2">
					<Badge.Root variant="secondary">{m.vsl_badge_desktop()}</Badge.Root>
					<Badge.Root variant="secondary">Windows · Linux</Badge.Root>
					<Badge.Root variant="warning">{m.underground_mines_badge_archived()}</Badge.Root>
				</div>

				<Typography.H1 class="text-5xl text-white sm:text-7xl">VS Launcher</Typography.H1>
				<Typography.Leading class="mt-5 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
					{m.vsl_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mt-6 max-w-2xl text-lg text-white/75">
					{m.vsl_hero_description()}
				</Typography.P>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="https://github.com/XurxoMF/vs-launcher" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}
						>{m.vsl_action_code()}</a
					>
					<a
						href="https://vsldocs.xurxomf.xyz/"
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.vsl_action_docs()}</a
					>
				</div>
			</div>
		</div>
	</section>

	<div class="mx-auto w-full max-w-6xl px-6">
		<section class="grid gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-28">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.vsl_problem_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.vsl_problem_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.vsl_problem_description()}
				</Typography.P>
			</div>

			<div class="grid gap-5 sm:grid-cols-2">
				<Card.Root class="sm:col-span-2">
					<Card.Header>
						<Card.Action><span class="font-mono text-sm text-primary">01</span></Card.Action>
						<Card.Title role="heading" aria-level={3}>{m.vsl_versions_title()}</Card.Title>
						<Card.Description>{m.vsl_versions_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<FolderIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.vsl_isolated_title()}</Card.Title>
						<Card.Description>{m.vsl_isolated_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<ResetIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.vsl_backups_title()}</Card.Title>
						<Card.Description>{m.vsl_backups_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root class="sm:col-span-2">
					<Card.Header>
						<PreferencesIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.vsl_mods_title()}</Card.Title>
						<Card.Description>{m.vsl_mods_description()}</Card.Description>
					</Card.Header>
				</Card.Root>
			</div>
		</section>
	</div>

	<section class="bg-muted/30">
		<div class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
			<div class="mb-12 max-w-2xl">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.vsl_flow_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.vsl_flow_title()}</Typography.H2>
			</div>

			<ol class="grid overflow-hidden rounded-2xl border bg-card md:grid-cols-3">
				<li class="p-6 md:border-r md:p-8">
					<p class="font-mono text-sm text-primary">01 / {m.vsl_step_version_label()}</p>
					<h3 class="mt-8 text-xl font-semibold">{m.vsl_step_version_title()}</h3>
					<p class="mt-3 text-sm leading-6 text-muted-foreground">{m.vsl_step_version_description()}</p>
				</li>
				<li class="border-t p-6 md:border-t-0 md:border-r md:p-8">
					<p class="font-mono text-sm text-primary">02 / {m.vsl_step_installation_label()}</p>
					<h3 class="mt-8 text-xl font-semibold">{m.vsl_step_installation_title()}</h3>
					<p class="mt-3 text-sm leading-6 text-muted-foreground">{m.vsl_step_installation_description()}</p>
				</li>
				<li class="border-t p-6 md:border-t-0 md:p-8">
					<p class="font-mono text-sm text-primary">03 / {m.vsl_step_play_label()}</p>
					<h3 class="mt-8 text-xl font-semibold">{m.vsl_step_play_title()}</h3>
					<p class="mt-3 text-sm leading-6 text-muted-foreground">{m.vsl_step_play_description()}</p>
				</li>
			</ol>
		</div>
	</section>

	<div class="mx-auto w-full max-w-6xl px-6">
		<section class="grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
			<figure class="overflow-hidden rounded-3xl border bg-card lg:sticky lg:top-24 lg:self-start">
				<img
					src="/images/projects/vs-launcher/main.png"
					alt={m.vsl_hero_alt()}
					width="1277"
					height="750"
					loading="lazy"
					class="aspect-video w-full object-cover"
				/>
			</figure>

			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.vsl_technical_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.vsl_technical_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.vsl_technical_description()}
				</Typography.P>

				<div class="mt-7 flex flex-wrap gap-2" aria-label={m.vsl_technologies_label()}>
					<Badge.Root>Electron</Badge.Root>
					<Badge.Root variant="secondary">React</Badge.Root>
					<Badge.Root variant="secondary">TypeScript</Badge.Root>
					<Badge.Root variant="secondary">Tailwind CSS</Badge.Root>
					<Badge.Root variant="secondary">i18next</Badge.Root>
					<Badge.Root variant="secondary">electron-vite</Badge.Root>
				</div>

				<dl class="mt-8 grid grid-cols-2 gap-4 border-t pt-6 text-sm">
					<div>
						<dt class="text-muted-foreground">{m.vsl_type_label()}</dt>
						<dd class="mt-1 font-medium">{m.vsl_badge_desktop()}</dd>
					</div>
					<div>
						<dt class="text-muted-foreground">{m.vsl_license_label()}</dt>
						<dd class="mt-1 font-medium">MIT</dd>
					</div>
					<div>
						<dt class="text-muted-foreground">{m.vsl_platforms_label()}</dt>
						<dd class="mt-1 font-medium">{m.vsl_platforms_value()}</dd>
					</div>
					<div>
						<dt class="text-muted-foreground">{m.vsl_status_label()}</dt>
						<dd class="mt-1 font-medium">{m.vsl_status_value()}</dd>
					</div>
				</dl>
			</div>
		</section>

		<ContactBanner.Root />
	</div>
</div>
