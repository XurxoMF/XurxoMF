<script lang="ts">
	import SeoHead from "#lib/seo-head.svelte";
	import { FileIcon, FolderIcon, PreferencesIcon } from "#lib/icons.ts";
	import * as m from "#lib/paraglide/messages.js";

	import * as ContactBanner from "#lib/components/site/contact-banner/index.ts";
	import * as DetailHero from "#lib/components/site/detail-hero/index.ts";
	import * as DualPathSection from "#lib/components/site/dual-path-section/index.ts";
	import * as FactsStrip from "#lib/components/site/facts-strip/index.ts";
	import * as ProblemSection from "#lib/components/site/problem-section/index.ts";
	import * as WorkflowSection from "#lib/components/site/workflow-section/index.ts";
	import * as Badge from "#lib/components/ui/badge/index.ts";
	import * as Button from "#lib/components/ui/button/index.ts";
	import * as Card from "#lib/components/ui/card/index.ts";
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_web()}</Badge.Root>
	<Badge.Root variant="success">{m.common_web_production()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://powernaturallife.com/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
		{m.power_natural_life_action()}
	</a>
{/snippet}

<SeoHead
	title={m.power_natural_life_meta_title()}
	description={m.power_natural_life_meta_description()}
	image="/images/projects/power-natural-life/hero.webp"
/>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/power-natural-life/hero.webp"
		imagePosition="35% center"
		title="Power Natural Life"
		lead={m.power_natural_life_hero_lead()}
		description={m.power_natural_life_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: m.vsl_type_label(), value: m.power_natural_life_badge_store() },
				{ label: m.vsl_status_label(), value: m.common_web_production() },
				{ label: "Base", value: "Shopify" },
				{ label: m.vsl_platforms_label(), value: "Web" }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<WorkflowSection.Root
			kicker={m.power_natural_life_challenge_kicker()}
			title={m.power_natural_life_challenge_title()}
			description={m.power_natural_life_challenge_description()}
			steps={[
				{ title: m.power_natural_life_challenge_catalog_title(), description: m.power_natural_life_challenge_catalog_description() },
				{ title: m.power_natural_life_challenge_professional_title(), description: m.power_natural_life_challenge_professional_description() },
				{ title: m.power_natural_life_challenge_information_title(), description: m.power_natural_life_challenge_information_description() },
				{ title: m.power_natural_life_challenge_maintenance_title(), description: m.power_natural_life_challenge_maintenance_description() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ProblemSection.Root
			kicker={m.power_natural_life_inside_kicker()}
			title={m.power_natural_life_inside_title()}
			description={m.power_natural_life_inside_description_1()}
		>
			<div class="grid gap-5 sm:grid-cols-2">
				<Card.Root class="sm:col-span-2">
					<Card.Header>
						<FileIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.power_natural_life_inside_start_title()}</Card.Title>
						<Card.Description>{m.power_natural_life_inside_start_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<FolderIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.power_natural_life_inside_build_title()}</Card.Title>
						<Card.Description>{m.power_natural_life_inside_build_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<PreferencesIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.power_natural_life_inside_maintenance_title()}</Card.Title>
						<Card.Description>{m.power_natural_life_inside_maintenance_description()}</Card.Description>
					</Card.Header>
				</Card.Root>
			</div>
		</ProblemSection.Root>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.power_natural_life_technical_kicker()}
			title={m.power_natural_life_technical_title()}
			description={m.power_natural_life_technical_description()}
			paths={[
				{
					label: "01 / SHOPIFY",
					title: m.power_natural_life_technical_shopify_title(),
					description: m.power_natural_life_technical_shopify_description(),
					points: [`${m.power_natural_life_technical_structure_title()}: ${m.power_natural_life_technical_structure_description()}`]
				},
				{
					label: "02 / ECOMMERCE",
					title: m.power_natural_life_technical_purchase_title(),
					description: m.power_natural_life_technical_purchase_description(),
					points: [`${m.power_natural_life_technical_maintenance_title()}: ${m.power_natural_life_technical_maintenance_description()}`]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
