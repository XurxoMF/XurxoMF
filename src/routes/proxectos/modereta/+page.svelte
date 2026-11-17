<script lang="ts">
	import { CheckIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Typography from "$lib/components/ui/typography";
</script>

{#snippet flowStep(number: string, title: string, description: string)}
	<article class="relative text-center">
		<div class="mx-auto grid size-14 place-items-center rounded-full border bg-background font-mono text-lg font-semibold text-primary shadow-sm">
			{number}
		</div>
		<h3 class="mt-6 text-xl font-semibold">{title}</h3>
		<p class="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

{#snippet architectureItem(number: string, title: string, description: string)}
	<article class="grid gap-3 border-b py-7 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:gap-6">
		<span class="font-mono text-xs text-primary">{number}</span>
		<h3 class="text-lg font-semibold">{title}</h3>
		<p class="text-sm leading-6 text-muted-foreground">{description}</p>
	</article>
{/snippet}

{#snippet foundation(text: string)}
	<li class="flex min-h-28 items-start gap-3 bg-background p-5 text-sm leading-6">
		<CheckIcon class="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
		{text}
	</li>
{/snippet}

<svelte:head>
	<title>{m.modereta_meta_title()}</title>
	<meta name="description" content={m.modereta_meta_description()} />
</svelte:head>

<div class="overflow-x-clip">
	<section class="relative isolate overflow-hidden bg-black">
		<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
			<img src="/images/projects/modereta/banner.png" alt="" class="size-full object-cover opacity-35" />
			<div class="absolute inset-0 bg-black/60"></div>
		</div>

		<div class="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
			<div>
				<div class="mb-7 flex flex-wrap gap-2">
					<Badge.Root variant="info">{m.modereta_badge_rewrite()}</Badge.Root>
					<Badge.Root variant="secondary">{m.modereta_badge_bot()}</Badge.Root>
					<Badge.Root variant="secondary">{m.modereta_badge_private()}</Badge.Root>
				</div>

				<Typography.H1 class="text-6xl tracking-[-0.06em] text-white sm:text-8xl">Modereta</Typography.H1>
				<Typography.Leading class="mt-6 max-w-2xl text-2xl font-semibold text-white sm:text-4xl">
					{m.modereta_hero_lead()}
				</Typography.Leading>
				<Typography.P class="mt-6 max-w-xl text-lg text-white/75">
					{m.modereta_hero_description()}
				</Typography.P>

				<div class="mt-9 flex flex-wrap gap-3">
					<a href="https://github.com/XurxoMF/modereta" target="_blank" rel="external noreferrer" class={Button.rootVariants({ size: "lg" })}>
						{m.modereta_action_code()}
					</a>
					<a href="#como-funciona" class={Button.rootVariants({ variant: "secondary", size: "lg" })}>{m.modereta_action_how()}</a>
				</div>
			</div>

			<div class="relative">
				<div class="absolute -inset-8 -z-10 -rotate-3 rounded-3xl border bg-muted/30" aria-hidden="true"></div>
				<Card.Root>
					<Card.Header>
						<Card.Title role="heading" aria-level={2}>Modereta</Card.Title>
						<Card.Description>{m.modereta_demo_description()}</Card.Description>
						<Card.Action><Badge.Root variant="success">{m.modereta_demo_online()}</Badge.Root></Card.Action>
					</Card.Header>

					<Card.Content class="space-y-4">
						<div class="rounded-xl border bg-muted/30 p-4">
							<div class="flex items-center justify-between gap-4">
								<p class="font-medium">{m.modereta_demo_drop()}</p>
								<span class="font-mono text-xs text-muted-foreground">{m.modereta_demo_cards()}</span>
							</div>

							<div class="mt-4 grid gap-2 text-sm">
								<div class="flex items-center justify-between rounded-lg bg-background px-3 py-2">
									<span>{m.modereta_demo_favorite()}</span>
									<Badge.Root variant="important">{m.modereta_demo_match()}</Badge.Root>
								</div>
								<div class="flex items-center justify-between rounded-lg bg-background px-3 py-2">
									<span>{m.modereta_demo_other()}</span>
									<Badge.Root variant="outline">{m.modereta_demo_saved()}</Badge.Root>
								</div>
								<div class="flex items-center justify-between rounded-lg bg-background px-3 py-2">
									<span>{m.modereta_demo_no_favorite_item()}</span>
									<Badge.Root variant="ghost">{m.modereta_demo_no_favorites()}</Badge.Root>
								</div>
							</div>
						</div>

						<div class="flex items-start gap-3 rounded-xl border p-4">
							<div class="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
								<CheckIcon class="size-4" aria-hidden="true" />
							</div>
							<div>
								<p class="text-sm font-medium">{m.modereta_demo_notice_title()}</p>
								<p class="mt-1 text-sm text-muted-foreground">{m.modereta_demo_notice_description()}</p>
							</div>
						</div>
					</Card.Content>

					<Card.Footer class="justify-between text-sm">
						<span class="text-muted-foreground">Discord · Sofi · {m.modereta_favorites()}</span>
						<span class="font-mono text-primary">message-rule</span>
					</Card.Footer>
				</Card.Root>
			</div>
		</div>
	</section>

	<section id="como-funciona" class="scroll-mt-20">
		<div class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
			<div class="mx-auto max-w-3xl text-center">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.modereta_flow_kicker()}</p>
				<Typography.H2 class="mt-4 border-0 text-4xl sm:text-6xl">{m.modereta_flow_title()}</Typography.H2>
				<Typography.P class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
					{m.modereta_flow_description()}
				</Typography.P>
			</div>

			<div class="relative mt-14 grid gap-6 md:grid-cols-3">
				<div class="pointer-events-none absolute top-7 right-[16%] left-[16%] hidden border-t border-dashed md:block" aria-hidden="true"></div>
				{@render flowStep("01", m.modereta_flow_save_title(), m.modereta_flow_save_description())}
				{@render flowStep("02", m.modereta_flow_watch_title(), m.modereta_flow_watch_description())}
				{@render flowStep("03", m.modereta_flow_notify_title(), m.modereta_flow_notify_description())}
			</div>
		</div>
	</section>

	<section class="bg-muted/30 py-20 lg:py-28">
		<div class="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.modereta_rewrite_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.modereta_rewrite_title()}</Typography.H2>
				<Typography.P class="mt-5 text-muted-foreground">
					{m.modereta_rewrite_description()}
				</Typography.P>
			</div>

			<div class="border-t">
				{@render architectureItem("01", m.modereta_arch_commands_title(), m.modereta_arch_commands_description())}
				{@render architectureItem("02", m.modereta_arch_rules_title(), m.modereta_arch_rules_description())}
				{@render architectureItem("03", m.modereta_arch_data_title(), m.modereta_arch_data_description())}
				{@render architectureItem("04", m.modereta_arch_deploy_title(), m.modereta_arch_deploy_description())}
			</div>
		</div>
	</section>

	<section class="mx-auto w-full max-w-6xl px-6 py-20 lg:py-28">
		<div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.modereta_delivery_kicker()}</p>
				<Typography.H2 class="mt-4 border-0 text-4xl sm:text-5xl">{m.modereta_delivery_title()}</Typography.H2>
				<Typography.P class="mt-6 text-lg text-muted-foreground">
					{m.modereta_delivery_description()}
				</Typography.P>
			</div>

			<ul class="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
				{@render foundation(m.modereta_foundation_bun())}
				{@render foundation(m.modereta_foundation_discord())}
				{@render foundation(m.modereta_foundation_database())}
				{@render foundation(m.modereta_foundation_docker())}
				{@render foundation(m.modereta_foundation_tests())}
				{@render foundation(m.modereta_foundation_ci())}
			</ul>
		</div>
	</section>

	<div class="mx-auto w-full max-w-6xl px-6">
		<ContactBanner.Root />
	</div>
</div>
