<script lang="ts">
	import { CheckIcon, FolderIcon, LiveIcon, PlusIcon, PreferencesIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as CodeBlock from "$lib/components/ui/code-block";
	import * as Typography from "$lib/components/ui/typography";

	const importExample = `<script lang="ts">
  import * as Button from "$lib/components/ui/button";
</${"script"}>

<Button.Root variant="success">${m.xvelte_saved()}</Button.Root>`;

	let saved = $state(false);
</script>

{#snippet area(number: string, title: string, description: string)}
	<article class="border-b py-8 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8">
		<span class="font-mono text-xs text-primary">{number}</span>
		<h3 class="mt-3 text-xl font-semibold">{title}</h3>
		<p class="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

{#snippet workflowStep(number: string, title: string, description: string)}
	<div class="relative text-center">
		<div class="mx-auto grid size-14 place-items-center rounded-full border bg-background font-mono text-lg font-semibold text-primary shadow-sm">
			{number}
		</div>
		<h3 class="mt-6 text-xl font-semibold">{title}</h3>
		<p class="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
	</div>
{/snippet}

{#snippet fact(label: string, value: string)}
	<div class="bg-background p-6">
		<p class="font-mono text-xs tracking-widest text-muted-foreground uppercase">{label}</p>
		<p class="mt-3 font-semibold">{value}</p>
	</div>
{/snippet}

<svelte:head>
	<title>{m.xvelte_meta_title()}</title>
	<meta name="description" content={m.xvelte_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative">
		<div class="pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true">
			<div
				class="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[48px_48px]"
			></div>
			<div class="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"></div>
		</div>

		<div class="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
			<div>
				<div class="mb-6 flex flex-wrap gap-2">
					<Badge.Root variant="success"><LiveIcon aria-hidden="true" />{m.xvelte_badge_active()}</Badge.Root>
					<Badge.Root variant="secondary">{m.xvelte_badge_open()}</Badge.Root>
					<Badge.Root variant="outline">{m.vsds_badge_license()}</Badge.Root>
				</div>

				<Typography.H1 class="text-6xl tracking-[-0.08em] sm:text-8xl">xvelte</Typography.H1>
				<Typography.Leading class="mt-6 max-w-2xl text-2xl font-semibold text-foreground sm:text-4xl">
					{m.xvelte_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mt-6 max-w-xl text-lg text-muted-foreground">
					{m.xvelte_hero_description()}
				</Typography.P>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="https://xvelte.xurxomf.xyz/" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
						{m.xvelte_action_docs()}
					</a>
					<a
						href="https://github.com/XurxoMF/xvelte"
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "lg" })}>{m.xvelte_action_github()}</a
					>
				</div>
			</div>

			<div class="relative">
				<div class="absolute -inset-8 -z-10 rotate-3 rounded-3xl border bg-muted/30" aria-hidden="true"></div>
				<Card.Root>
					<Card.Header>
						<Card.Title role="heading" aria-level={2}>{m.xvelte_demo_title()}</Card.Title>
						<Card.Description>{m.xvelte_demo_description()}</Card.Description>
						<Card.Action><Badge.Root variant="info">{m.xvelte_demo_live()}</Badge.Root></Card.Action>
					</Card.Header>

					<Card.Content class="space-y-6">
						<div class="flex flex-wrap gap-2">
							<Badge.Root>{m.xvelte_demo_default()}</Badge.Root>
							<Badge.Root variant="success">{m.xvelte_demo_correct()}</Badge.Root>
							<Badge.Root variant="warning">{m.xvelte_demo_careful()}</Badge.Root>
							<Badge.Root variant="important">{m.xvelte_demo_important()}</Badge.Root>
						</div>

						<div class="rounded-xl border bg-muted/30 p-4">
							<div class="flex items-start justify-between gap-4">
								<div>
									<p class="font-medium">{m.xvelte_preferences_title()}</p>
									<p class="mt-1 text-sm text-muted-foreground">{m.xvelte_preferences_description()}</p>
								</div>
								<PreferencesIcon class="size-5 text-muted-foreground" aria-hidden="true" />
							</div>
							<div class="mt-5 flex flex-wrap gap-2">
								<Button.Root variant={saved ? "success" : "default"} onclick={() => (saved = !saved)}>
									{#if saved}<CheckIcon data-icon="inline-start" aria-hidden="true" />{m.xvelte_saved()}{:else}{m.xvelte_save_changes()}{/if}
								</Button.Root>
								<Button.Root variant="outline"><PlusIcon data-icon="inline-start" aria-hidden="true" />{m.xvelte_add()}</Button.Root>
							</div>
						</div>

						<div class="flex items-center justify-between border-t pt-5 text-sm">
							<span class="text-muted-foreground">Svelte 5 · Tailwind CSS · TypeScript</span>
							<span class="font-mono text-primary">$lib/ui</span>
						</div>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.xvelte_areas_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.xvelte_areas_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.xvelte_areas_description()}
				</Typography.P>
			</div>

			<div class="grid border-t sm:grid-cols-2">
				{@render area("01", m.xvelte_area_components_title(), m.xvelte_area_components_description())}
				{@render area("02", m.xvelte_area_logic_title(), m.xvelte_area_logic_description())}
				{@render area("03", m.xvelte_area_visual_title(), m.xvelte_area_visual_description())}
				{@render area("04", m.xvelte_area_apps_title(), m.xvelte_area_apps_description())}
			</div>
		</div>
	</section>

	<section class="bg-muted/30">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28">
			<div class="order-2 lg:sticky lg:top-24 lg:order-1 lg:self-start">
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Title>{m.xvelte_code_title()}</CodeBlock.Title>
						<CodeBlock.Actions><CodeBlock.CopyButton value={importExample} /></CodeBlock.Actions>
					</CodeBlock.Header>
					<CodeBlock.Content code={importExample} lineNumbers />
					<CodeBlock.Footer>{m.xvelte_code_footer()}</CodeBlock.Footer>
				</CodeBlock.Root>
			</div>

			<div class="order-1 lg:order-2">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.xvelte_idea_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.xvelte_idea_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.xvelte_idea_description_1()}
				</Typography.P>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.xvelte_idea_description_2()}
				</Typography.P>
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="mx-auto max-w-3xl text-center">
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.xvelte_workflow_kicker()}</p>
			<Typography.H2 class="mt-4 border-0">{m.xvelte_workflow_title()}</Typography.H2>
		</div>

		<div class="relative mt-14 grid gap-6 md:grid-cols-3">
			<div class="pointer-events-none absolute top-7 right-[16%] left-[16%] hidden border-t border-dashed md:block" aria-hidden="true"></div>
			{@render workflowStep("1", m.xvelte_step_choose_title(), m.xvelte_step_choose_description())}
			{@render workflowStep("2", m.xvelte_step_copy_title(), m.xvelte_step_copy_description())}
			{@render workflowStep("3", m.xvelte_step_adapt_title(), m.xvelte_step_adapt_description())}
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 pb-8">
		<div class="grid overflow-hidden rounded-2xl border lg:grid-cols-[0.85fr_1.15fr]">
			<div class="bg-muted/50 p-8 sm:p-10">
				<FolderIcon class="size-8 text-primary" aria-hidden="true" />
				<h2 class="mt-8 text-3xl font-semibold tracking-tight">{m.xvelte_real_title()}</h2>
				<p class="mt-5 leading-7 text-muted-foreground">{m.xvelte_real_description()}</p>
			</div>
			<div class="grid gap-px bg-border sm:grid-cols-2">
				{@render fact(m.xvelte_fact_base(), "Svelte 5 + SvelteKit")}
				{@render fact(m.xvelte_fact_styles(), "Tailwind CSS")}
				{@render fact(m.xvelte_fact_localization(), "Paraglide")}
				{@render fact(m.xvelte_fact_desktop(), "Tauri 2")}
				{@render fact(m.xvelte_fact_language(), "TypeScript")}
				{@render fact(m.xvelte_fact_license(), "MIT")}
			</div>
		</div>
	</section>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
