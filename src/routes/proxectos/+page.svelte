<script lang="ts">
	import { projects } from "#lib/data/projects.ts";
	import SeoHead from "#lib/seo-head.svelte";
	import { contentReveal, contentRevealEach } from "#lib/motion/content-reveal.ts";
	import * as m from "#lib/paraglide/messages.js";

	import * as ContactBanner from "#lib/components/site/contact-banner/index.ts";
	import * as ProjectCard from "#lib/components/site/project-card/index.ts";
	import * as Pagination from "#lib/components/ui/pagination/index.ts";
	import * as Typography from "#lib/components/ui/typography/index.ts";

	const PROJECTS_PER_PAGE = 9;

	let page = $state(1);
	let visibleProjects = $derived(projects.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE));
	let rangeStart = $derived(projects.length === 0 ? 0 : (page - 1) * PROJECTS_PER_PAGE + 1);
	let rangeEnd = $derived(Math.min(page * PROJECTS_PER_PAGE, projects.length));
</script>

<SeoHead title={m.projects_meta_title()} description={m.projects_meta_description()} image="/images/projects/vs-launcher/main.webp" />

<div class="mx-auto w-full max-w-6xl px-6">
	<section class="py-20 lg:py-28" aria-labelledby="projects-heading">
		<div {@attach contentReveal({ steps: [{ target: "children", direction: "left", stagger: 0.1 }], start: "top 92%" })} class="max-w-3xl">
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.projects_kicker()}</p>
			<Typography.H1 id="projects-heading" class="mt-4">{m.projects_title()}</Typography.H1>
			<Typography.Leading class="mt-5 max-w-2xl text-muted-foreground">
				{m.projects_description()}
			</Typography.Leading>
			<p class="mt-6 text-sm font-medium text-muted-foreground">{m.projects_count({ count: projects.length })}</p>
		</div>

		{#if projects.length > 0}
			{#key page}
				<div
					id="lista-proxectos"
					{@attach contentRevealEach({ target: "children", stagger: 0.08 })}
					class="mt-12 grid scroll-mt-24 gap-6 md:grid-cols-2 lg:grid-cols-3"
				>
					{#each visibleProjects as project, index (project.title)}
						<ProjectCard.Root {project} number={(page - 1) * PROJECTS_PER_PAGE + index + 1} />
					{/each}
				</div>
			{/key}

			{#if projects.length > PROJECTS_PER_PAGE}
				<div {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })} class="mt-12 grid gap-4 border-t pt-8">
					<p class="text-center text-sm text-muted-foreground" aria-live="polite">
						{m.projects_range({ start: rangeStart, end: rangeEnd, total: projects.length })}
					</p>

					<Pagination.Root count={projects.length} perPage={PROJECTS_PER_PAGE} bind:page>
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
		{:else}
			<p class="mt-12 rounded-xl border border-dashed p-8 text-center text-muted-foreground">{m.projects_empty()}</p>
		{/if}
	</section>

	<ContactBanner.Root />
</div>
