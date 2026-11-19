<script lang="ts">
	import SeoHead from "$lib/seo-head.svelte";
	import { AlertInfoIcon, CheckIcon, FolderIcon, LiveIcon, PreferencesIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as FeatureCard from "$lib/components/site/feature-card";
	import * as ProblemSection from "$lib/components/site/problem-section";
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
	<a href="https://asergaliciaformacion.com/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
		{m.aser_action()}
	</a>
{/snippet}

<SeoHead title={m.aser_meta_title()} description={m.aser_meta_description()} image="/images/projects/asergalicia-formacion/hero.png" />

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/asergalicia-formacion/hero.png"
		imagePosition="35% top"
		title="AserGalicia Formación"
		lead={m.aser_hero_lead()}
		description={m.aser_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: m.vsl_type_label(), value: m.aser_badge_training() },
				{ label: m.vsl_status_label(), value: m.common_web_production() },
				{ label: "Base", value: "WordPress" },
				{ label: m.vsl_platforms_label(), value: m.aser_audience_companies_title() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.aser_audiences_kicker()}
			title={m.aser_audiences_title()}
			description={m.aser_audiences_description()}
			paths={[
				{
					label: "01",
					title: m.aser_audience_people_title(),
					description: m.aser_audience_people_description(),
					points: [
						`${m.aser_audience_unemployed_title()}: ${m.aser_audience_unemployed_description()}`,
						`${m.aser_audience_workers_title()}: ${m.aser_audience_workers_description()}`
					]
				},
				{
					label: "02",
					title: m.aser_audience_companies_title(),
					description: m.aser_audience_companies_description(),
					points: [m.aser_tailored_title(), m.aser_management_title()]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ProblemSection.Root kicker={m.aser_support_kicker()} title={m.aser_support_title()} description={m.aser_support_description()}>
			<div class="grid gap-5 sm:grid-cols-2">
				<FeatureCard.Root title={m.aser_support_guidance()} description={m.aser_support_guidance_description()}>
					{#snippet icon()}<AlertInfoIcon class="size-6" aria-hidden="true" />{/snippet}
				</FeatureCard.Root>
				<FeatureCard.Root title={m.aser_support_training()} description={m.aser_support_training_description()}>
					{#snippet icon()}<PreferencesIcon class="size-6" aria-hidden="true" />{/snippet}
				</FeatureCard.Root>
				<FeatureCard.Root title={m.aser_support_jobs()} description={m.aser_support_jobs_description()}>
					{#snippet icon()}<CheckIcon class="size-6" aria-hidden="true" />{/snippet}
				</FeatureCard.Root>
				<FeatureCard.Root title={m.aser_support_campus()} description={m.aser_support_campus_description()}>
					{#snippet icon()}<FolderIcon class="size-6" aria-hidden="true" />{/snippet}
				</FeatureCard.Root>
			</div>
		</ProblemSection.Root>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.aser_companies_kicker()}
			title={m.aser_companies_title()}
			description={m.aser_companies_description()}
			paths={[
				{
					label: "01",
					title: m.aser_tailored_title(),
					description: m.aser_tailored_description(),
					points: [m.aser_audience_companies_description()]
				},
				{
					label: "02",
					title: m.aser_management_title(),
					description: m.aser_management_description(),
					points: [m.aser_support_training()]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<WorkflowSection.Root
			kicker={m.aser_development_kicker()}
			title={m.aser_development_title()}
			description={m.aser_development_description()}
			steps={[
				{ title: m.aser_development_architecture_title(), description: m.aser_development_architecture_description() },
				{ title: m.aser_development_theme_title(), description: m.aser_development_theme_description() },
				{ title: m.aser_development_services_title(), description: m.aser_development_services_description() },
				{ title: m.aser_development_content_title(), description: m.aser_development_content_description() }
			]}
		/>
	</div>

	<WtflowBanner.Root />

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
