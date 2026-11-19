<script lang="ts">
	import { resolve } from "$app/paths";
	import type { Pathname } from "$app/types";

	import { services } from "$lib/data/services";
	import * as m from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Pagination from "$lib/components/ui/pagination";
	import * as Typography from "$lib/components/ui/typography";

	const SERVICES_PER_PAGE = 9;
	let page = $state(1);
	let visibleServices = $derived(services.slice((page - 1) * SERVICES_PER_PAGE, page * SERVICES_PER_PAGE));
	let rangeStart = $derived(services.length === 0 ? 0 : (page - 1) * SERVICES_PER_PAGE + 1);
	let rangeEnd = $derived(Math.min(page * SERVICES_PER_PAGE, services.length));
</script>

<svelte:head>
	<title>{m.services_meta_title()}</title>
	<meta name="description" content={m.services_meta_description()} />
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-6">
	<section class="py-20 lg:py-28" aria-labelledby="services-heading">
		<div class="max-w-3xl">
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.services_kicker()}</p>
			<Typography.H1 id="services-heading" class="mt-4">{m.services_title()}</Typography.H1>
			<Typography.Leading class="mt-5 max-w-2xl text-muted-foreground">{m.services_description()}</Typography.Leading>
			<p class="mt-6 text-sm font-medium text-muted-foreground">{m.services_count({ count: services.length })}</p>
		</div>

		<div id="lista-servizos" class="mt-12 grid scroll-mt-24 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each visibleServices as service, index (service.href)}
				<Card.Root class="h-full">
					<img src={service.image} alt="" width="1672" height="941" loading="lazy" class="aspect-video w-full object-cover" />
					<Card.Header>
						<Card.Action
							><span class="font-mono text-sm text-primary">{String((page - 1) * SERVICES_PER_PAGE + index + 1).padStart(2, "0")}</span></Card.Action
						>
						<Card.Title role="heading" aria-level={2}>{service.title}</Card.Title>
						<Card.Description>{service.shortDescription}</Card.Description>
					</Card.Header>
					<Card.Footer class="mt-auto justify-end">
						<a href={resolve(localizeHref(service.href) as Pathname)} class={Button.rootVariants({ variant: "ghost", size: "sm" })}>
							{m.service_card_action()}
						</a>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>

		{#if services.length > SERVICES_PER_PAGE}
			<div class="mt-12 grid gap-4 border-t pt-8">
				<p class="text-center text-sm text-muted-foreground" aria-live="polite">
					{m.services_range({ start: rangeStart, end: rangeEnd, total: services.length })}
				</p>

				<Pagination.Root count={services.length} perPage={SERVICES_PER_PAGE} bind:page>
					{#snippet children({ pages, currentPage })}
						<Pagination.Content>
							<Pagination.Item><Pagination.Previous /></Pagination.Item>

							{#each pages as pageItem (pageItem.key)}
								<Pagination.Item>
									{#if pageItem.type === "ellipsis"}
										<Pagination.Ellipsis />
									{:else}
										<Pagination.Link page={pageItem} isActive={currentPage === pageItem.value} />
									{/if}
								</Pagination.Item>
							{/each}

							<Pagination.Item><Pagination.Next /></Pagination.Item>
						</Pagination.Content>
					{/snippet}
				</Pagination.Root>
			</div>
		{/if}
	</section>

	<ContactBanner.Root />
</div>
