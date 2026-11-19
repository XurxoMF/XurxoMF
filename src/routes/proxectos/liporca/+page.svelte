<script lang="ts">
	import { LiveIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as NarrativeSection from "$lib/components/site/narrative-section";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as WtflowBanner from "$lib/components/site/wtflow-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_web()}</Badge.Root>
	<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.common_web_production()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://liporca.com/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>{m.liporca_action()}</a>
{/snippet}

<svelte:head>
	<title>{m.liporca_meta_title()}</title>
	<meta name="description" content={m.liporca_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/liporca/botellas.jpg"
		imageAlt={m.liporca_hero_alt()}
		imagePosition="35% center"
		title="Liporca"
		lead={m.liporca_hero_lead()}
		description={m.liporca_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: m.vsl_type_label(), value: m.liporca_badge_shop() },
				{ label: m.vsl_status_label(), value: m.common_web_production() },
				{ label: "Base", value: "WordPress · WooCommerce" },
				{ label: m.vsl_platforms_label(), value: m.liporca_badge_languages() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<NarrativeSection.Root
			kicker={m.liporca_brand_kicker()}
			title={m.liporca_brand_title()}
			paragraphs={[m.liporca_brand_description_1(), m.liporca_brand_description_2()]}
			image="/images/projects/liporca/brindis.jpg"
			imageAlt={m.liporca_toast_alt()}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<WorkflowSection.Root
			kicker={m.liporca_development_kicker()}
			title={m.liporca_development_title()}
			description={m.liporca_development_description()}
			steps={[
				{ title: m.liporca_development_theme_title(), description: m.liporca_development_theme_description() },
				{ title: m.liporca_development_shop_title(), description: m.liporca_development_shop_description() },
				{ title: m.liporca_development_languages_title(), description: m.liporca_development_languages_description() },
				{ title: m.liporca_development_hidden_title(), description: m.liporca_development_hidden_description() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.liporca_experience_kicker()}
			title={m.liporca_experience_title()}
			description={m.liporca_experience_description()}
			paths={[
				{
					label: m.liporca_experience_discover_label(),
					title: m.liporca_experience_discover_title(),
					description: m.liporca_experience_discover_description(),
					points: [m.liporca_feature_catalog(), m.liporca_feature_languages()]
				},
				{
					label: m.liporca_experience_buy_label(),
					title: m.liporca_experience_buy_title(),
					description: m.liporca_experience_buy_description(),
					points: [m.liporca_feature_checkout(), m.liporca_feature_age(), m.liporca_feature_legal()]
				}
			]}
		/>
	</div>

	<WtflowBanner.Root />

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
