<script lang="ts">
	import { CheckIcon } from "$lib/icons";

	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Typography from "$lib/components/ui/typography";
</script>

{#snippet generationItem(number: string, title: string, description: string)}
	<article>
		<p class="font-mono text-xs text-primary">{number}</p>
		<h3 class="mt-4 text-xl font-semibold">{title}</h3>
		<p class="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

{#snippet worldRule(text: string)}
	<li class="flex min-h-36 items-start gap-3 bg-background p-6 text-sm leading-6">
		<CheckIcon class="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
		{text}
	</li>
{/snippet}

{#snippet technicalLayer(number: string, title: string, description: string)}
	<article class="grid gap-3 border-b py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-6">
		<span class="font-mono text-xs text-primary">{number}</span>
		<h3 class="text-lg font-semibold">{title}</h3>
		<p class="text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

<svelte:head>
	<title>{m.underground_mines_meta_title()}</title>
	<meta name="description" content={m.underground_mines_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative isolate min-h-[calc(100svh-4rem)] bg-black text-white">
		<img
			src="/images/projects/underground-mines/hero.png"
			alt=""
			width="1920"
			height="1080"
			fetchpriority="high"
			class="absolute inset-0 -z-20 h-full w-full object-cover"
		/>
		<div class="absolute inset-0 -z-10 bg-black/65" aria-hidden="true"></div>
		<div class="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/25" aria-hidden="true"></div>

		<div class="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-end px-6 py-16 lg:items-center lg:py-24">
			<div class="max-w-3xl">
				<div class="mb-7 flex flex-wrap gap-2">
					<Badge.Root variant="warning">{m.underground_mines_badge_archived()}</Badge.Root>
					<Badge.Root variant="secondary">{m.underground_mines_badge_mod()}</Badge.Root>
					<Badge.Root variant="secondary">{m.underground_mines_badge_worldgen()}</Badge.Root>
				</div>

				<p class="font-mono text-sm tracking-[0.3em] text-white/60 uppercase">Vintage Story</p>
				<Typography.H1 class="mt-4 max-w-3xl text-5xl tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">Underground Mines</Typography.H1>
				<Typography.Leading class="mt-6 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
					{m.underground_mines_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mt-6 max-w-xl text-lg text-white/70">
					{m.underground_mines_hero_description()}
				</Typography.P>

				<div class="mt-9 flex flex-wrap gap-3">
					<a
						href="https://mods.vintagestory.at/undergroundmines"
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ size: "lg" })}>{m.underground_mines_action_mod()}</a
					>
					<a
						href="https://github.com/XurxoMF/UndergroundMines"
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.underground_mines_action_code()}</a
					>
				</div>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.underground_mines_generation_kicker()}</p>
			<Typography.H2 class="mt-4 border-0 text-4xl sm:text-6xl">{m.underground_mines_generation_title()}</Typography.H2>
			<Typography.P class="mt-6 max-w-2xl text-lg text-muted-foreground">
				{m.underground_mines_generation_description()}
			</Typography.P>
		</div>

		<div class="mt-14 grid gap-8 lg:grid-cols-3">
			{@render generationItem("01", m.underground_mines_generation_entrances_title(), m.underground_mines_generation_entrances_description())}
			{@render generationItem("02", m.underground_mines_generation_galleries_title(), m.underground_mines_generation_galleries_description())}
			{@render generationItem("03", m.underground_mines_generation_rooms_title(), m.underground_mines_generation_rooms_description())}
		</div>

		<figure class="mt-14 overflow-hidden rounded-2xl border bg-muted shadow-xl">
			<img
				src="/images/projects/underground-mines/mine-1.png"
				alt={m.underground_mines_network_alt()}
				width="1920"
				height="1080"
				loading="lazy"
				class="aspect-video w-full object-cover"
			/>
			<figcaption class="bg-background px-5 py-4 text-sm text-muted-foreground">
				{m.underground_mines_network_caption()}
			</figcaption>
		</figure>
	</section>

	<section class="bg-muted/30 py-20 lg:py-28">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
			<div class="lg:sticky lg:top-24">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.underground_mines_world_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.underground_mines_world_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">{m.underground_mines_world_description()}</Typography.P>
			</div>

			<ul class="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
				{@render worldRule(m.underground_mines_rule_rock())}
				{@render worldRule(m.underground_mines_rule_ores())}
				{@render worldRule(m.underground_mines_rule_danger())}
				{@render worldRule(m.underground_mines_rule_config())}
			</ul>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.underground_mines_technical_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.underground_mines_technical_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">{m.underground_mines_technical_description()}</Typography.P>
			</div>

			<div class="border-t">
				{@render technicalLayer("01", m.underground_mines_technical_code_title(), m.underground_mines_technical_code_description())}
				{@render technicalLayer("02", m.underground_mines_technical_schematics_title(), m.underground_mines_technical_schematics_description())}
				{@render technicalLayer("03", m.underground_mines_technical_world_title(), m.underground_mines_technical_world_description())}
				{@render technicalLayer("04", m.underground_mines_technical_server_title(), m.underground_mines_technical_server_description())}
			</div>
		</div>
	</section>

	<section class="bg-muted/30 py-20 lg:py-28">
		<div class="mx-auto w-full max-w-6xl px-6">
			<div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
				<div>
					<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.underground_mines_gallery_kicker()}</p>
					<Typography.H2 class="mt-4 border-0">{m.underground_mines_gallery_title()}</Typography.H2>
				</div>
				<Typography.P class="max-w-sm text-sm text-muted-foreground">{m.underground_mines_gallery_description()}</Typography.P>
			</div>

			<div class="mt-12 grid gap-4 lg:grid-cols-2">
				<figure class="overflow-hidden rounded-xl border bg-card">
					<img
						src="/images/projects/underground-mines/hero.png"
						alt={m.underground_mines_gallery_interior_alt()}
						width="1920"
						height="1080"
						loading="lazy"
						class="aspect-video w-full object-cover"
					/>
				</figure>
				<figure class="overflow-hidden rounded-xl border bg-card">
					<img
						src="/images/projects/underground-mines/mine-2.png"
						alt={m.underground_mines_gallery_network_alt()}
						width="1920"
						height="1080"
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
