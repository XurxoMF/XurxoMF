<script lang="ts">
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as TechnicalSection from "$lib/components/site/technical-section";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_bot()}</Badge.Root>
	<Badge.Root variant="info">{m.modereta_badge_rewrite()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://github.com/XurxoMF/modereta" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
		{m.modereta_action_code()}
	</a>
	<a href="#como-funciona" class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.modereta_action_how()}</a>
{/snippet}

<svelte:head>
	<title>{m.modereta_meta_title()}</title>
	<meta name="description" content={m.modereta_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/modereta/banner.png"
		imagePosition="35% center"
		title="Modereta"
		lead={m.modereta_hero_lead()}
		description={m.modereta_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: m.vsl_type_label(), value: m.modereta_badge_bot() },
				{ label: m.vsl_status_label(), value: m.modereta_badge_rewrite() },
				{ label: "Base", value: "Discord · TypeScript" },
				{ label: m.vsl_platforms_label(), value: m.modereta_badge_private() }
			]}
		/>
	</div>

	<div id="como-funciona" class="mx-auto w-full max-w-6xl scroll-mt-20 px-6">
		<WorkflowSection.Root
			kicker={m.modereta_flow_kicker()}
			title={m.modereta_flow_title()}
			description={m.modereta_flow_description()}
			steps={[
				{ title: m.modereta_flow_save_title(), description: m.modereta_flow_save_description() },
				{ title: m.modereta_flow_watch_title(), description: m.modereta_flow_watch_description() },
				{ title: m.modereta_flow_notify_title(), description: m.modereta_flow_notify_description() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.modereta_rewrite_kicker()}
			title={m.modereta_rewrite_title()}
			description={m.modereta_rewrite_description()}
			paths={[
				{
					label: "01 / DISCORD",
					title: m.modereta_arch_commands_title(),
					description: m.modereta_arch_commands_description(),
					points: [`${m.modereta_arch_rules_title()}: ${m.modereta_arch_rules_description()}`]
				},
				{
					label: "02 / BACKEND",
					title: m.modereta_arch_data_title(),
					description: m.modereta_arch_data_description(),
					points: [`${m.modereta_arch_deploy_title()}: ${m.modereta_arch_deploy_description()}`]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<TechnicalSection.Root
			kicker={m.modereta_delivery_kicker()}
			title={m.modereta_delivery_title()}
			description={m.modereta_delivery_description()}
			image="/images/projects/modereta/banner.png"
			imageAlt={m.modereta_card_alt()}
		>
			<div class="flex flex-wrap gap-2">
				<Badge.Root>{m.modereta_foundation_bun()}</Badge.Root>
				<Badge.Root variant="secondary">{m.modereta_foundation_discord()}</Badge.Root>
				<Badge.Root variant="secondary">{m.modereta_foundation_database()}</Badge.Root>
				<Badge.Root variant="secondary">{m.modereta_foundation_docker()}</Badge.Root>
				<Badge.Root variant="secondary">{m.modereta_foundation_tests()}</Badge.Root>
				<Badge.Root variant="secondary">{m.modereta_foundation_ci()}</Badge.Root>
			</div>
		</TechnicalSection.Root>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
