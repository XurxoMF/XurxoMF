<script lang="ts">
	import SeoHead from "$lib/seo-head.svelte";
	import { LiveIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as CodeSection from "$lib/components/site/code-section";
	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as GallerySection from "$lib/components/site/gallery-section";
	import * as NarrativeSection from "$lib/components/site/narrative-section";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";

	const installCommand = "bash <(curl -fsSL https://raw.githubusercontent.com/XurxoMF/gallaecia-dots/release/install.sh)";
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_system()}</Badge.Root>
	<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.gallaecia_badge_development()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://github.com/XurxoMF/gallaecia-dots" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}
		>{m.gallaecia_action_repo()}</a
	>
	<a href="#instalacion" class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.gallaecia_action_install()}</a>
{/snippet}

<SeoHead title={m.gallaecia_meta_title()} description={m.gallaecia_meta_description()} image="/images/projects/gallaecia-dots/claro.webp" />

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/gallaecia-dots/claro.webp"
		title="Gallaecia Dots"
		lead={m.gallaecia_hero_lead()}
		description={m.gallaecia_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: "Base", value: "Arch Linux" },
				{ label: m.vsl_status_label(), value: m.gallaecia_badge_development() },
				{ label: m.vsl_type_label(), value: "Dotfiles" },
				{ label: m.vsl_platforms_label(), value: m.gallaecia_platforms_value() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.gallaecia_modes_kicker()}
			title={m.gallaecia_modes_title()}
			description={m.gallaecia_modes_description()}
			paths={[
				{
					label: m.gallaecia_desktop_label(),
					title: m.gallaecia_desktop_title(),
					description: m.gallaecia_desktop_description(),
					points: [m.gallaecia_desktop_point_1(), m.gallaecia_desktop_point_2(), m.gallaecia_desktop_point_3()]
				},
				{
					label: m.gallaecia_server_label(),
					title: m.gallaecia_server_title(),
					description: m.gallaecia_server_description(),
					points: [m.gallaecia_server_point_1(), m.gallaecia_server_point_2(), m.gallaecia_server_point_3()]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<DualPathSection.Root
			kicker={m.gallaecia_minimal_kicker()}
			title={m.gallaecia_minimal_title()}
			description={m.gallaecia_minimal_description()}
			paths={[
				{
					label: "01",
					title: m.gallaecia_necessary_title(),
					description: m.gallaecia_necessary_description(),
					points: [m.gallaecia_necessary_point()]
				},
				{
					label: "02",
					title: m.gallaecia_editable_title(),
					description: m.gallaecia_editable_description(),
					points: [m.gallaecia_editable_point()]
				}
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<CodeSection.Root
			id="instalacion"
			kicker={m.gallaecia_install_kicker()}
			title={m.gallaecia_install_title()}
			description={m.gallaecia_install_description()}
			code={installCommand}
			codeTitle={m.gallaecia_terminal_title()}
			footer={m.gallaecia_code_footer()}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<WorkflowSection.Root
			kicker={m.gallaecia_process_kicker()}
			title={m.gallaecia_process_title()}
			description={m.gallaecia_process_description()}
			steps={[
				{ title: m.gallaecia_step_mode_title(), description: m.gallaecia_step_mode_description() },
				{ title: m.gallaecia_step_core_title(), description: m.gallaecia_step_core_description() },
				{ title: m.gallaecia_step_tools_title(), description: m.gallaecia_step_tools_description() },
				{ title: m.gallaecia_step_updates_title(), description: m.gallaecia_step_updates_description() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<NarrativeSection.Root
			kicker={m.gallaecia_language_kicker()}
			title={m.gallaecia_language_title()}
			paragraphs={[m.gallaecia_language_description()]}
			image="/images/projects/gallaecia-dots/escuro.webp"
			imageAlt={m.gallaecia_gallery_dark_alt()}
			reverse
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<GallerySection.Root
			kicker={m.gallaecia_gallery_kicker()}
			title={m.gallaecia_gallery_title()}
			description={m.gallaecia_gallery_description()}
			images={[
				{ src: "/images/projects/gallaecia-dots/claro.webp", alt: m.gallaecia_gallery_light_alt(), featured: true },
				{ src: "/images/projects/gallaecia-dots/apps-escuro.webp", alt: m.gallaecia_gallery_apps_alt() },
				{ src: "/images/projects/gallaecia-dots/cores.webp", alt: m.gallaecia_colors_alt() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
