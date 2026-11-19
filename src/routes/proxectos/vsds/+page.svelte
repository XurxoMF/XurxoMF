<script lang="ts">
	import { FolderIcon, LiveIcon, PreferencesIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as CodeSection from "$lib/components/site/code-section";
	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as FactsStrip from "$lib/components/site/facts-strip";
	import * as ProblemSection from "$lib/components/site/problem-section";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";

	const deployCommand = `docker run -dit --name <container_name> \\
  -e UID=$(id -u) -e GID=$(id -g) \\
  -p <server_port>:42420 \\
  -v <data_folder>:/data \\
  --restart unless-stopped \\
  --sig-proxy=false \\
  xurxomf/vsds:<server_version>`;
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_project()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_app()}</Badge.Root>
	<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.vsds_badge_active()}</Badge.Root>
{/snippet}

{#snippet heroActions()}
	<a href="https://hub.docker.com/r/xurxomf/vsds" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}
		>{m.vsds_action_docker()}</a
	>
	<a
		href="https://github.com/XurxoMF/vsds"
		target="_blank"
		rel="external noreferrer"
		class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.vsds_action_repo()}</a
	>
{/snippet}

<svelte:head>
	<title>{m.vsds_meta_title()}</title>
	<meta name="description" content={m.vsds_meta_description()} />
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-6">
	<div class="relative left-1/2 w-screen -translate-x-1/2">
		<DetailHero.Root
			image="/images/projects/vsds/banner.png"
			imagePosition="35% center"
			title="VSDS"
			lead={m.vsds_hero_lead()}
			description={m.vsds_hero_description()}
			badges={heroBadges}
			actions={heroActions}
		/>
	</div>

	<FactsStrip.Root
		facts={[
			{ label: m.vsds_stat_image(), value: "xurxomf/vsds" },
			{ label: m.vsds_stat_compatibility(), value: m.vsds_stat_compatibility_value() },
			{ label: m.vsds_stat_tags(), value: "latest · stable · rc" },
			{ label: m.vsds_stat_data(), value: "/data" }
		]}
	/>

	<CodeSection.Root
		kicker="Docker"
		title={m.vsds_deploy_title()}
		description={m.vsds_deploy_footer()}
		code={deployCommand}
		codeTitle={m.vsds_deploy_title()}
	/>

	<WorkflowSection.Root
		kicker={m.vsds_idea_kicker()}
		title={m.vsds_idea_title()}
		description={`${m.vsds_idea_description_before()}/data${m.vsds_idea_description_after()}`}
		steps={[
			{ title: "Docker Hub", description: m.vsds_origin_description() },
			{ title: m.vsds_container_title(), description: m.vsds_container_description() },
			{ title: m.vsds_data_title(), description: m.vsds_data_description() }
		]}
	/>

	<ProblemSection.Root kicker={m.vsds_origin_label()} title={m.vsds_visible_title()} description={m.vsds_visible_description()}>
		<div class="grid gap-6 md:grid-cols-2">
			<Card.Root class="md:row-span-2">
				<Card.Header>
					<FolderIcon aria-hidden="true" class="mb-4 size-7 text-primary" />
					<Card.Title role="heading" aria-level={3}>{m.vsds_data_title()}</Card.Title>
					<Card.Description>{m.vsds_data_description()}</Card.Description>
				</Card.Header>
				<Card.Content class="mt-auto">
					<div class="rounded-xl bg-muted/50 p-5 font-mono text-sm leading-7" aria-label={m.vsds_folder_label()}>
						<p class="font-semibold text-primary">/data</p>
						<ul class="mt-2 text-muted-foreground">
							<li>├── Mods/</li>
							<li>├── Saves/</li>
							<li>├── Logs/</li>
							<li>├── Playerdata/</li>
							<li>└── serversettings.json</li>
						</ul>
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<PreferencesIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
					<Card.Title role="heading" aria-level={3}>{m.vsds_customization_title()}</Card.Title>
					<Card.Description>{m.vsds_customization_description()}</Card.Description>
				</Card.Header>
			</Card.Root>

			<Card.Root>
				<Card.Header>
					<LiveIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
					<Card.Title role="heading" aria-level={3}>{m.vsds_console_title()}</Card.Title>
					<Card.Description>{m.vsds_console_description()}</Card.Description>
				</Card.Header>
			</Card.Root>
		</div>
	</ProblemSection.Root>

	<WorkflowSection.Root
		kicker={m.vsds_update_kicker()}
		title={m.vsds_update_title()}
		steps={[
			{ title: m.vsds_update_stop_title(), description: m.vsds_update_stop_description() },
			{ title: m.vsds_update_tag_title(), description: m.vsds_update_tag_description() },
			{ title: m.vsds_update_start_title(), description: m.vsds_update_start_description() }
		]}
	/>

	<CodeSection.Root
		kicker={m.vsds_security_kicker()}
		title={m.vsds_security_title()}
		description={m.vsds_security_description()}
		code={`# ${m.vsds_code_knows()}\nUID=$(id -u)\nGID=$(id -g)\n# ${m.vsds_code_root()}`}
		codeTitle={m.vsds_security_title()}
	/>

	<ContactBanner.Root />
</div>
