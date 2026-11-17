<script lang="ts">
	import { CheckIcon, LiveIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as WtflowBanner from "$lib/components/wtflow-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Typography from "$lib/components/ui/typography";
</script>

{#snippet audience(number: string, title: string, description: string)}
	<article class="rounded-2xl border bg-card p-7 text-card-foreground shadow-sm">
		<span class="font-mono text-sm text-primary">{number}</span>
		<h3 class="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
		<p class="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

{#snippet supportItem(text: string)}
	<li class="flex gap-3 rounded-xl border bg-background p-4 text-sm leading-6">
		<CheckIcon class="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
		{text}
	</li>
{/snippet}

{#snippet developmentItem(number: string, title: string, description: string)}
	<article class="grid gap-3 border-b py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-6">
		<span class="font-mono text-xs text-primary">{number}</span>
		<h3 class="text-lg font-semibold">{title}</h3>
		<p class="text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

<svelte:head>
	<title>{m.aser_meta_title()}</title>
	<meta name="description" content={m.aser_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white">
		<img
			src="/images/projects/asergalicia-formacion/hero.png"
			alt=""
			width="1920"
			height="1080"
			fetchpriority="high"
			class="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_top] sm:object-center"
		/>
		<div class="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-linear-to-r from-black/95 via-black/75 to-black/25" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-linear-to-t from-black/60 via-transparent to-black/25" aria-hidden="true"></div>

		<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-6 py-20 lg:py-28">
			<div class="max-w-3xl">
				<div class="mb-7 flex flex-wrap gap-2">
					<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.common_web_production()}</Badge.Root>
					<Badge.Root variant="secondary">{m.aser_badge_training()}</Badge.Root>
					<Badge.Root variant="secondary">WordPress</Badge.Root>
				</div>

				<Typography.H1 class="max-w-3xl text-5xl tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">AserGalicia Formación</Typography.H1>
				<Typography.Leading class="mt-6 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
					{m.aser_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mt-6 max-w-xl text-lg text-white/75">
					{m.aser_hero_description()}
				</Typography.P>

				<div class="mt-9">
					<a href="https://asergaliciaformacion.com/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
						{m.aser_action()}
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.aser_audiences_kicker()}</p>
			<Typography.H2 class="mt-4 border-0 text-4xl sm:text-6xl">{m.aser_audiences_title()}</Typography.H2>
			<Typography.P class="mt-6 max-w-2xl text-lg text-muted-foreground">
				{m.aser_audiences_description()}
			</Typography.P>
		</div>

		<div class="mt-14 grid gap-5 lg:grid-cols-3">
			{@render audience("01", m.aser_audience_unemployed_title(), m.aser_audience_unemployed_description())}
			{@render audience("02", m.aser_audience_workers_title(), m.aser_audience_workers_description())}
			{@render audience("03", m.aser_audience_companies_title(), m.aser_audience_companies_description())}
		</div>
	</section>

	<section class="bg-muted/30">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-28">
			<figure class="relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-background shadow-xl">
				<img
					src="/images/projects/asergalicia-formacion/elexir.png"
					alt={m.aser_team_alt()}
					width="1024"
					height="1013"
					loading="lazy"
					class="absolute inset-x-0 bottom-0 h-full w-full object-contain object-bottom"
				/>
			</figure>

			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.aser_support_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.aser_support_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.aser_support_description()}
				</Typography.P>

				<ul class="mt-8 grid gap-4 sm:grid-cols-2">
					{@render supportItem(m.aser_support_guidance())}
					{@render supportItem(m.aser_support_training())}
					{@render supportItem(m.aser_support_jobs())}
					{@render supportItem(m.aser_support_campus())}
				</ul>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.aser_companies_kicker()}</p>
				<Typography.H2 class="mt-4 border-0 text-4xl sm:text-5xl">{m.aser_companies_title()}</Typography.H2>
				<Typography.P class="mt-6 text-lg text-muted-foreground">
					{m.aser_companies_description()}
				</Typography.P>
				<div class="mt-9 grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
					<div class="bg-background p-6">
						<p class="font-semibold">{m.aser_tailored_title()}</p>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.aser_tailored_description()}</p>
					</div>
					<div class="bg-background p-6">
						<p class="font-semibold">{m.aser_management_title()}</p>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.aser_management_description()}</p>
					</div>
				</div>
			</div>

			<figure class="overflow-hidden rounded-[2rem] border bg-muted/30 p-5 shadow-lg sm:p-8">
				<img
					src="/images/projects/asergalicia-formacion/empresas-formacion.png"
					alt={m.aser_companies_alt()}
					width="1024"
					height="1008"
					loading="lazy"
					class="aspect-square w-full object-contain"
				/>
			</figure>
		</div>
	</section>

	<section class="bg-muted/30 py-20 lg:py-28">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.aser_development_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.aser_development_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.aser_development_description()}
				</Typography.P>
			</div>

			<div class="border-t">
				{@render developmentItem("01", m.aser_development_architecture_title(), m.aser_development_architecture_description())}
				{@render developmentItem("02", m.aser_development_theme_title(), m.aser_development_theme_description())}
				{@render developmentItem("03", m.aser_development_services_title(), m.aser_development_services_description())}
				{@render developmentItem("04", m.aser_development_content_title(), m.aser_development_content_description())}
			</div>
		</div>
	</section>

	<WtflowBanner.Root />

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
