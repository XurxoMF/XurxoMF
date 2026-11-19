<script lang="ts">
	import SeoHead from "$lib/seo-head.svelte";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as GallerySection from "$lib/components/site/gallery-section";
	import * as TechnicalSection from "$lib/components/site/technical-section";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_mod()}</Badge.Root>
	<Badge.Root variant="warning">{m.underground_mines_badge_archived()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://mods.vintagestory.at/undergroundmines" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}
		>{m.underground_mines_action_mod()}</a
	>
	<a
		href="https://github.com/XurxoMF/UndergroundMines"
		target="_blank"
		rel="external noreferrer"
		class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.underground_mines_action_code()}</a
	>
{/snippet}

<SeoHead
	title={m.underground_mines_meta_title()}
	description={m.underground_mines_meta_description()}
	image="/images/projects/underground-mines/hero.png"
/>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/underground-mines/hero.png"
		imagePosition="35% center"
		title="Underground Mines"
		lead={m.underground_mines_hero_lead()}
		description={m.underground_mines_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: m.vsl_type_label(), value: m.underground_mines_badge_mod() },
				{ label: m.vsl_status_label(), value: m.underground_mines_badge_archived() },
				{ label: "Base", value: "Vintage Story" },
				{ label: m.vsl_platforms_label(), value: m.underground_mines_badge_worldgen() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<WorkflowSection.Root
			kicker={m.underground_mines_generation_kicker()}
			title={m.underground_mines_generation_title()}
			description={m.underground_mines_generation_description()}
			steps={[
				{ title: m.underground_mines_generation_entrances_title(), description: m.underground_mines_generation_entrances_description() },
				{ title: m.underground_mines_generation_galleries_title(), description: m.underground_mines_generation_galleries_description() },
				{ title: m.underground_mines_generation_rooms_title(), description: m.underground_mines_generation_rooms_description() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.underground_mines_world_kicker()}
			title={m.underground_mines_world_title()}
			description={m.underground_mines_world_description()}
			paths={[
				{
					label: m.underground_mines_world_terrain_label(),
					title: m.underground_mines_world_terrain_title(),
					description: m.underground_mines_rule_rock(),
					points: [m.underground_mines_rule_ores()]
				},
				{
					label: m.underground_mines_world_exploration_label(),
					title: m.underground_mines_world_exploration_title(),
					description: m.underground_mines_rule_danger(),
					points: [m.underground_mines_rule_config()]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<TechnicalSection.Root
			kicker={m.underground_mines_technical_kicker()}
			title={m.underground_mines_technical_title()}
			description={m.underground_mines_technical_description()}
			image="/images/projects/underground-mines/mine-1.png"
			imageAlt={m.underground_mines_network_alt()}
		>
			<div class="flex flex-wrap gap-2">
				<Badge.Root>{m.underground_mines_technical_code_title()}</Badge.Root>
				<Badge.Root variant="secondary">{m.underground_mines_technical_schematics_title()}</Badge.Root>
				<Badge.Root variant="secondary">{m.underground_mines_technical_world_title()}</Badge.Root>
				<Badge.Root variant="secondary">{m.underground_mines_technical_server_title()}</Badge.Root>
			</div>
		</TechnicalSection.Root>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<GallerySection.Root
			kicker={m.underground_mines_gallery_kicker()}
			title={m.underground_mines_gallery_title()}
			description={m.underground_mines_gallery_description()}
			images={[
				{ src: "/images/projects/underground-mines/hero.png", alt: m.underground_mines_gallery_interior_alt() },
				{ src: "/images/projects/underground-mines/mine-2.png", alt: m.underground_mines_gallery_network_alt() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
