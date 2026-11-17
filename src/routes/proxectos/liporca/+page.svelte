<script lang="ts">
	import { CheckIcon, LiveIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as WtflowBanner from "$lib/components/wtflow-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Typography from "$lib/components/ui/typography";
</script>

{#snippet developmentItem(number: string, title: string, description: string)}
	<article class="grid gap-3 border-b py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-6">
		<span class="font-mono text-xs text-primary">{number}</span>
		<h3 class="text-lg font-semibold">{title}</h3>
		<p class="text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

{#snippet feature(text: string)}
	<li class="flex items-center gap-3 text-sm"><CheckIcon class="size-4 shrink-0 text-primary" aria-hidden="true" />{text}</li>
{/snippet}

<svelte:head>
	<title>{m.liporca_meta_title()}</title>
	<meta name="description" content={m.liporca_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white">
		<img
			src="/images/projects/liporca/botellas.jpg"
			alt={m.liporca_hero_alt()}
			width="1600"
			height="900"
			fetchpriority="high"
			class="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center] sm:object-center"
		/>
		<div class="absolute inset-0 -z-10 bg-black/45" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-linear-to-r from-black/95 via-black/70 to-black/20" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-linear-to-t from-black/55 via-transparent to-black/20" aria-hidden="true"></div>

		<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-6 py-20 lg:py-28">
			<div class="max-w-2xl">
				<div class="mb-7 flex flex-wrap gap-2">
					<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.common_web_production()}</Badge.Root>
					<Badge.Root variant="secondary">{m.liporca_badge_shop()}</Badge.Root>
					<Badge.Root variant="secondary">{m.liporca_badge_languages()}</Badge.Root>
				</div>

				<Typography.H1 class="text-6xl tracking-[-0.06em] text-white sm:text-8xl">Liporca</Typography.H1>
				<Typography.Leading class="mt-5 max-w-xl text-3xl font-semibold text-white sm:text-5xl">{m.liporca_hero_lead()}</Typography.Leading>
				<Typography.P class="mt-6 max-w-lg text-lg text-white/75">
					{m.liporca_hero_description()}
				</Typography.P>

				<div class="mt-9">
					<a href="https://liporca.com/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>{m.liporca_action()}</a
					>
				</div>
			</div>
		</div>
	</section>

	<div class="overflow-hidden bg-muted/50 py-4 text-foreground">
		<p class="text-center font-mono text-sm font-semibold tracking-[0.2em] whitespace-nowrap uppercase sm:text-base">
			WordPress <span class="mx-4" aria-hidden="true">●</span> WooCommerce <span class="mx-4" aria-hidden="true">●</span>
			{m.project_custom_theme()}
			<span class="mx-4" aria-hidden="true">●</span>
			{m.liporca_multilingual()} <span class="mx-4" aria-hidden="true">●</span> Responsive
		</p>
	</div>

	<section class="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-28">
		<div>
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.liporca_brand_kicker()}</p>
			<Typography.H2 class="mt-4 border-0 text-4xl sm:text-5xl">{m.liporca_brand_title()}</Typography.H2>
			<Typography.P class="mt-6 text-lg text-muted-foreground">
				{m.liporca_brand_description_1()}
			</Typography.P>
			<Typography.P class="mt-4 text-muted-foreground">
				{m.liporca_brand_description_2()}
			</Typography.P>
		</div>

		<figure>
			<img
				src="/images/projects/liporca/brindis.jpg"
				alt={m.liporca_toast_alt()}
				width="960"
				height="740"
				loading="lazy"
				class="aspect-4/3 w-full rounded-2xl object-cover shadow-xl"
			/>
		</figure>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.liporca_development_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.liporca_development_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.liporca_development_description()}
				</Typography.P>
			</div>

			<div class="border-t">
				{@render developmentItem("01", m.liporca_development_theme_title(), m.liporca_development_theme_description())}
				{@render developmentItem("02", m.liporca_development_shop_title(), m.liporca_development_shop_description())}
				{@render developmentItem("03", m.liporca_development_languages_title(), m.liporca_development_languages_description())}
				{@render developmentItem("04", m.liporca_development_hidden_title(), m.liporca_development_hidden_description())}
			</div>
		</div>
	</section>

	<section class="bg-muted/30 py-20 lg:py-28">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.liporca_experience_kicker()}</p>
				<h2 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{m.liporca_experience_title()}</h2>
				<p class="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
					{m.liporca_experience_description()}
				</p>
			</div>

			<ul class="space-y-4 rounded-2xl border bg-card p-7 text-card-foreground shadow-sm">
				{@render feature(m.liporca_feature_catalog())}
				{@render feature(m.liporca_feature_checkout())}
				{@render feature(m.liporca_feature_languages())}
				{@render feature(m.liporca_feature_age())}
				{@render feature(m.liporca_feature_legal())}
			</ul>
		</div>
	</section>

	<WtflowBanner.Root />

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
