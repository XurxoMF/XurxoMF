<script lang="ts">
	import SeoHead from "$lib/seo-head.svelte";
	import { FileIcon, FolderIcon, PreferencesIcon, ResetIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as ProblemSection from "$lib/components/site/problem-section";
	import * as TechnicalSection from "$lib/components/site/technical-section";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_app()}</Badge.Root>
	<Badge.Root variant="warning">{m.underground_mines_badge_archived()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://github.com/XurxoMF/vs-launcher" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}
		>{m.vsl_action_code()}</a
	>
	<a href="https://vsldocs.xurxomf.xyz/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ variant: "secondary", size: "lg" })}
		>{m.vsl_action_docs()}</a
	>
{/snippet}

<SeoHead title={m.vsl_meta_title()} description={m.vsl_meta_description()} image="/images/projects/vs-launcher/main.webp" />

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/projects/vs-launcher/main.webp"
		imageAlt={m.vsl_hero_alt()}
		imagePosition="35% center"
		title="VS Launcher"
		lead={m.vsl_hero_lead()}
		description={m.vsl_hero_description()}
		badges={heroBadges}
		actions={heroActions}
	/>

	<div class="mx-auto w-full max-w-6xl px-6">
		<FactsStrip.Root
			facts={[
				{ label: m.vsl_type_label(), value: m.vsl_badge_desktop() },
				{ label: m.vsl_platforms_label(), value: m.vsl_platforms_value() },
				{ label: m.vsl_status_label(), value: m.vsl_status_value() },
				{ label: m.vsl_license_label(), value: "MIT" }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ProblemSection.Root kicker={m.vsl_problem_kicker()} title={m.vsl_problem_title()} description={m.vsl_problem_description()}>
			<div class="grid gap-5 sm:grid-cols-2">
				<Card.Root class="sm:col-span-2">
					<Card.Header>
						<FileIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.vsl_versions_title()}</Card.Title>
						<Card.Description>{m.vsl_versions_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<FolderIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.vsl_isolated_title()}</Card.Title>
						<Card.Description>{m.vsl_isolated_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root>
					<Card.Header>
						<ResetIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.vsl_backups_title()}</Card.Title>
						<Card.Description>{m.vsl_backups_description()}</Card.Description>
					</Card.Header>
				</Card.Root>

				<Card.Root class="sm:col-span-2">
					<Card.Header>
						<PreferencesIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
						<Card.Title role="heading" aria-level={3}>{m.vsl_mods_title()}</Card.Title>
						<Card.Description>{m.vsl_mods_description()}</Card.Description>
					</Card.Header>
				</Card.Root>
			</div>
		</ProblemSection.Root>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<WorkflowSection.Root
			kicker={m.vsl_flow_kicker()}
			title={m.vsl_flow_title()}
			steps={[
				{ title: m.vsl_step_version_title(), description: m.vsl_step_version_description() },
				{ title: m.vsl_step_installation_title(), description: m.vsl_step_installation_description() },
				{ title: m.vsl_step_play_title(), description: m.vsl_step_play_description() }
			]}
		/>
	</div>

	<div class="mx-auto w-full max-w-6xl px-6">
		<TechnicalSection.Root
			kicker={m.vsl_technical_kicker()}
			title={m.vsl_technical_title()}
			description={m.vsl_technical_description()}
			image="/images/projects/vs-launcher/main.webp"
			imageAlt={m.vsl_hero_alt()}
		>
			<div class="flex flex-wrap gap-2" aria-label={m.vsl_technologies_label()}>
				<Badge.Root>Electron</Badge.Root>
				<Badge.Root variant="secondary">React</Badge.Root>
				<Badge.Root variant="secondary">TypeScript</Badge.Root>
				<Badge.Root variant="secondary">Tailwind CSS</Badge.Root>
				<Badge.Root variant="secondary">i18next</Badge.Root>
				<Badge.Root variant="secondary">electron-vite</Badge.Root>
			</div>
		</TechnicalSection.Root>

		<ContactBanner.Root />
	</div>
</div>
