<script lang="ts">
	import { FolderIcon, LiveIcon, PreferencesIcon, ResetIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as CodeBlock from "$lib/components/ui/code-block";
	import * as Typography from "$lib/components/ui/typography";

	const deployCommand = `docker run -dit --name <container_name> \\
  -e UID=$(id -u) -e GID=$(id -g) \\
  -p <server_port>:42420 \\
  -v <data_folder>:/data \\
  --restart unless-stopped \\
  --sig-proxy=false \\
  xurxomf/vsds:<server_version>`;
</script>

<svelte:head>
	<title>{m.vsds_meta_title()}</title>
	<meta name="description" content={m.vsds_meta_description()} />
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-6">
	<section class="relative left-1/2 isolate w-screen -translate-x-1/2 overflow-hidden text-center">
		<div class="pointer-events-none absolute inset-0 -z-10 bg-black" aria-hidden="true">
			<img src="/images/projects/vsds/banner.png" alt="" class="size-full object-cover opacity-35" />
			<div class="absolute inset-0 bg-black/55"></div>
		</div>
		<div class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
			<div class="mx-auto max-w-4xl">
				<div class="mb-6 flex flex-wrap justify-center gap-2">
					<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.vsds_badge_active()}</Badge.Root>
					<Badge.Root variant="secondary">{m.common_open_source()}</Badge.Root>
					<Badge.Root variant="outline">{m.vsds_badge_license()}</Badge.Root>
				</div>

				<Typography.H1 class="text-5xl text-white sm:text-7xl">VSDS</Typography.H1>
				<Typography.Leading class="mx-auto mt-5 max-w-3xl text-2xl font-semibold text-white sm:text-4xl">
					{m.vsds_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mx-auto mt-6 max-w-2xl text-lg text-white/75">
					{m.vsds_hero_description()}
				</Typography.P>

				<div class="mt-8 flex flex-wrap justify-center gap-3">
					<a href="https://hub.docker.com/r/xurxomf/vsds" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}
						>{m.vsds_action_docker()}</a
					>
					<a
						href="https://github.com/XurxoMF/vsds"
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "lg" })}>{m.vsds_action_repo()}</a
					>
					<a
						href="https://github.com/XurxoMF/vsds/wiki"
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "ghost", size: "lg" })}>{m.vsds_action_wiki()}</a
					>
				</div>
			</div>

			<div class="mx-auto mt-14 max-w-4xl text-left">
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Title>{m.vsds_deploy_title()}</CodeBlock.Title>
						<CodeBlock.Actions>
							<CodeBlock.CopyButton value={deployCommand} />
						</CodeBlock.Actions>
					</CodeBlock.Header>
					<CodeBlock.Content code={deployCommand} />
					<CodeBlock.Footer>{m.vsds_deploy_footer()}</CodeBlock.Footer>
				</CodeBlock.Root>
			</div>
		</div>
	</section>

	<section class="relative left-1/2 w-screen -translate-x-1/2 bg-muted/30">
		<dl class="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 text-center sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
			<div>
				<dt class="font-mono text-xs tracking-widest text-primary uppercase">{m.vsds_stat_image()}</dt>
				<dd class="mt-2 text-lg font-semibold">xurxomf/vsds</dd>
			</div>
			<div>
				<dt class="font-mono text-xs tracking-widest text-primary uppercase">{m.vsds_stat_compatibility()}</dt>
				<dd class="mt-2 text-lg font-semibold">{m.vsds_stat_compatibility_value()}</dd>
			</div>
			<div>
				<dt class="font-mono text-xs tracking-widest text-primary uppercase">{m.vsds_stat_tags()}</dt>
				<dd class="mt-2 text-lg font-semibold">latest · stable · rc</dd>
			</div>
			<div>
				<dt class="font-mono text-xs tracking-widest text-primary uppercase">{m.vsds_stat_data()}</dt>
				<dd class="mt-2 text-lg font-semibold">/data</dd>
			</div>
		</dl>
	</section>

	<section class="py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.vsds_idea_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.vsds_idea_title()}</Typography.H2>
			</div>
			<Typography.P class="text-lg text-muted-foreground">
				{m.vsds_idea_description_before()}
				<Typography.InlineCode>/data</Typography.InlineCode>{m.vsds_idea_description_after()}
			</Typography.P>
		</div>

		<div class="mt-12 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
			<div class="rounded-2xl border bg-card p-6">
				<p class="font-mono text-xs text-primary">01 / {m.vsds_origin_label()}</p>
				<p class="mt-8 text-xl font-semibold">Docker Hub</p>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.vsds_origin_description()}</p>
			</div>
			<div class="hidden self-center font-mono text-2xl text-primary lg:block" aria-hidden="true">→</div>
			<div class="rounded-2xl border bg-muted/50 p-6">
				<p class="font-mono text-xs text-primary">02 / {m.vsds_execution_label()}</p>
				<p class="mt-8 text-xl font-semibold">{m.vsds_container_title()}</p>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.vsds_container_description()}</p>
			</div>
			<div class="hidden self-center font-mono text-2xl text-primary lg:block" aria-hidden="true">→</div>
			<div class="rounded-2xl border bg-card p-6">
				<p class="font-mono text-xs text-primary">03 / {m.vsds_persistence_label()}</p>
				<p class="mt-8 text-xl font-semibold">{m.vsds_data_title()}</p>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.vsds_data_description()}</p>
			</div>
		</div>
	</section>

	<section class="grid gap-6 py-20 md:grid-cols-2 lg:py-28">
		<Card.Root class="md:row-span-2">
			<Card.Header>
				<FolderIcon aria-hidden="true" class="mb-4 size-7 text-primary" />
				<Card.Title role="heading" aria-level={2}>{m.vsds_visible_title()}</Card.Title>
				<Card.Description>{m.vsds_visible_description()}</Card.Description>
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
				<Card.Title role="heading" aria-level={2}>{m.vsds_customization_title()}</Card.Title>
				<Card.Description>{m.vsds_customization_description()}</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<LiveIcon aria-hidden="true" class="mb-3 size-6 text-primary" />
				<Card.Title role="heading" aria-level={2}>{m.vsds_console_title()}</Card.Title>
				<Card.Description>{m.vsds_console_description()}</Card.Description>
			</Card.Header>
		</Card.Root>
	</section>

	<section class="py-20 lg:py-28">
		<div class="rounded-3xl border bg-muted/50 p-6 sm:p-10 lg:p-14">
			<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
				<div>
					<ResetIcon aria-hidden="true" class="size-8 text-primary" />
					<p class="mt-6 text-sm font-semibold tracking-widest text-primary uppercase">{m.vsds_update_kicker()}</p>
					<Typography.H2 class="mt-4 border-0">{m.vsds_update_title()}</Typography.H2>
				</div>

				<ol class="grid gap-6 sm:grid-cols-3">
					<li>
						<span class="font-mono text-sm text-primary">01</span>
						<h3 class="mt-4 font-semibold">{m.vsds_update_stop_title()}</h3>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.vsds_update_stop_description()}</p>
					</li>
					<li>
						<span class="font-mono text-sm text-primary">02</span>
						<h3 class="mt-4 font-semibold">{m.vsds_update_tag_title()}</h3>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.vsds_update_tag_description()}</p>
					</li>
					<li>
						<span class="font-mono text-sm text-primary">03</span>
						<h3 class="mt-4 font-semibold">{m.vsds_update_start_title()}</h3>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.vsds_update_start_description()}</p>
					</li>
				</ol>
			</div>
		</div>
	</section>

	<section class="grid gap-12 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-28">
		<div>
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.vsds_security_kicker()}</p>
			<Typography.H2 class="mt-4 border-0">{m.vsds_security_title()}</Typography.H2>
			<Typography.P class="mt-5 max-w-2xl text-muted-foreground">
				{m.vsds_security_description()}
			</Typography.P>
		</div>

		<div class="rounded-2xl border bg-muted/50 p-6 font-mono text-sm sm:p-8">
			<p class="text-muted-foreground"># {m.vsds_code_knows()}</p>
			<p class="mt-4"><span class="text-primary">UID</span>=$(id -u)</p>
			<p class="mt-2"><span class="text-primary">GID</span>=$(id -g)</p>
			<p class="mt-6 text-muted-foreground"># {m.vsds_code_root()}</p>
		</div>
	</section>

	<ContactBanner.Root />
</div>
