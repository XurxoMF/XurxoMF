<script lang="ts">
	import { CheckIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Typography from "$lib/components/ui/typography";
</script>

{#snippet technicalItem(number: string, title: string, description: string)}
	<article class="grid gap-3 border-b py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-6">
		<span class="font-mono text-xs text-primary">{number}</span>
		<h3 class="text-lg font-semibold">{title}</h3>
		<p class="text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

<svelte:head>
	<title>{m.power_natural_life_meta_title()}</title>
	<meta name="description" content={m.power_natural_life_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-black text-white">
		<img
			src="/images/projects/power-natural-life/hero.png"
			alt=""
			width="1919"
			height="1079"
			fetchpriority="high"
			class="absolute inset-0 -z-20 size-full object-cover"
		/>
		<div class="absolute inset-0 -z-10 bg-black/65" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-linear-to-r from-black/90 via-black/65 to-black/25" aria-hidden="true"></div>

		<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-6 py-20 lg:py-28">
			<div class="max-w-3xl">
				<div class="mb-7 flex flex-wrap gap-2">
					<Badge.Root variant="success">{m.common_web_production()}</Badge.Root>
					<Badge.Root variant="secondary">Shopify</Badge.Root>
					<Badge.Root variant="secondary">{m.power_natural_life_badge_store()}</Badge.Root>
				</div>

				<Typography.H1 class="max-w-3xl text-5xl tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">Power Natural Life</Typography.H1>
				<Typography.Leading class="mt-6 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
					{m.power_natural_life_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mt-6 max-w-2xl text-lg text-white/75">
					{m.power_natural_life_hero_description()}
				</Typography.P>

				<div class="mt-9">
					<a href="https://powernaturallife.com/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
						{m.power_natural_life_action()}
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.power_natural_life_challenge_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.power_natural_life_challenge_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.power_natural_life_challenge_description()}
				</Typography.P>
			</div>

			<div class="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
				<article class="bg-background p-6">
					<p class="font-mono text-xs text-primary">01</p>
					<h3 class="mt-5 text-xl font-semibold">{m.power_natural_life_challenge_catalog_title()}</h3>
					<p class="mt-3 text-sm leading-6 text-muted-foreground">{m.power_natural_life_challenge_catalog_description()}</p>
				</article>
				<article class="bg-background p-6">
					<p class="font-mono text-xs text-primary">02</p>
					<h3 class="mt-5 text-xl font-semibold">{m.power_natural_life_challenge_professional_title()}</h3>
					<p class="mt-3 text-sm leading-6 text-muted-foreground">{m.power_natural_life_challenge_professional_description()}</p>
				</article>
				<article class="bg-background p-6">
					<p class="font-mono text-xs text-primary">03</p>
					<h3 class="mt-5 text-xl font-semibold">{m.power_natural_life_challenge_information_title()}</h3>
					<p class="mt-3 text-sm leading-6 text-muted-foreground">{m.power_natural_life_challenge_information_description()}</p>
				</article>
				<article class="bg-background p-6">
					<p class="font-mono text-xs text-primary">04</p>
					<h3 class="mt-5 text-xl font-semibold">{m.power_natural_life_challenge_maintenance_title()}</h3>
					<p class="mt-3 text-sm leading-6 text-muted-foreground">{m.power_natural_life_challenge_maintenance_description()}</p>
				</article>
			</div>
		</div>
	</section>

	<section class="bg-muted/30">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-28">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.power_natural_life_inside_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.power_natural_life_inside_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.power_natural_life_inside_description_1()}
				</Typography.P>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.power_natural_life_inside_description_2()}
				</Typography.P>
			</div>

			<div class="rounded-2xl border bg-background p-7 shadow-sm">
				<p class="font-mono text-xs tracking-widest text-primary uppercase">{m.power_natural_life_role_title()}</p>
				<ul class="mt-6 space-y-5">
					<li class="flex gap-3 text-sm leading-6">
						<CheckIcon class="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
						{m.power_natural_life_role_store()}
					</li>
					<li class="flex gap-3 text-sm leading-6">
						<CheckIcon class="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
						{m.power_natural_life_role_amazon()}
					</li>
					<li class="flex gap-3 text-sm leading-6">
						<CheckIcon class="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
						{m.power_natural_life_role_operations()}
					</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.power_natural_life_technical_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.power_natural_life_technical_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.power_natural_life_technical_description()}
				</Typography.P>
			</div>

			<div class="border-t">
				{@render technicalItem("01", m.power_natural_life_technical_shopify_title(), m.power_natural_life_technical_shopify_description())}
				{@render technicalItem("02", m.power_natural_life_technical_structure_title(), m.power_natural_life_technical_structure_description())}
				{@render technicalItem("03", m.power_natural_life_technical_purchase_title(), m.power_natural_life_technical_purchase_description())}
				{@render technicalItem("04", m.power_natural_life_technical_maintenance_title(), m.power_natural_life_technical_maintenance_description())}
			</div>
		</div>
	</section>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
