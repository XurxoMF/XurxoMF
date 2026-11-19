<script lang="ts">
	import SeoHead from "$lib/seo-head.svelte";
	import { LiveIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as CodeSection from "$lib/components/site/code-section";
	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as NarrativeSection from "$lib/components/site/narrative-section";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";

	const importExample = `<script lang="ts">
  import * as Button from "$lib/components/ui/button";
</${"script"}>

<Button.Root variant="success">${m.xvelte_saved()}</Button.Root>`;
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_library()}</Badge.Root>
	<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.xvelte_badge_active()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://xvelte.xurxomf.xyz/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
		{m.xvelte_action_docs()}
	</a>
	<a
		href="https://github.com/XurxoMF/xvelte"
		target="_blank"
		rel="external noreferrer"
		class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.xvelte_action_github()}</a
	>
{/snippet}

<SeoHead title={m.xvelte_meta_title()} description={m.xvelte_meta_description()} image="/images/projects/xvelte/banner.png" />

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/xvelte/banner.png"
		imagePosition="35% center"
		title="xvelte"
		lead={m.xvelte_hero_lead()}
		description={m.xvelte_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: m.vsl_type_label(), value: m.detail_type_library() },
				{ label: m.vsl_status_label(), value: m.xvelte_badge_active() },
				{ label: "Base", value: "Svelte 5 · Tailwind CSS" },
				{ label: m.vsl_license_label(), value: "MIT" }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.xvelte_areas_kicker()}
			title={m.xvelte_areas_title()}
			description={m.xvelte_areas_description()}
			paths={[
				{
					label: "01 / UI",
					title: m.xvelte_area_components_title(),
					description: m.xvelte_area_components_description(),
					points: [`${m.xvelte_area_visual_title()}: ${m.xvelte_area_visual_description()}`]
				},
				{
					label: "02 / APP",
					title: m.xvelte_area_logic_title(),
					description: m.xvelte_area_logic_description(),
					points: [`${m.xvelte_area_apps_title()}: ${m.xvelte_area_apps_description()}`]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<CodeSection.Root
			kicker={m.xvelte_idea_kicker()}
			title={m.xvelte_idea_title()}
			description={`${m.xvelte_idea_description_1()} ${m.xvelte_idea_description_2()}`}
			code={importExample}
			codeTitle={m.xvelte_code_title()}
			footer={m.xvelte_code_footer()}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<WorkflowSection.Root
			kicker={m.xvelte_workflow_kicker()}
			title={m.xvelte_workflow_title()}
			steps={[
				{ title: m.xvelte_step_choose_title(), description: m.xvelte_step_choose_description() },
				{ title: m.xvelte_step_copy_title(), description: m.xvelte_step_copy_description() },
				{ title: m.xvelte_step_adapt_title(), description: m.xvelte_step_adapt_description() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<NarrativeSection.Root
			kicker={m.xvelte_real_kicker()}
			title={m.xvelte_real_title()}
			paragraphs={[m.xvelte_real_description()]}
			image="/images/projects/xvelte/banner.png"
			imageAlt={m.xvelte_real_image_alt()}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
