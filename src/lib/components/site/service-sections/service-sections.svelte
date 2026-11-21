<script lang="ts">
	import type { Project } from "#lib/data/projects.ts";
	import * as m from "#lib/paraglide/messages.js";

	import * as FaqSection from "#lib/components/site/faq-section/index.ts";
	import * as ProjectCard from "#lib/components/site/project-card/index.ts";
	import * as ProblemSection from "#lib/components/site/problem-section/index.ts";
	import * as WorkflowSection from "#lib/components/site/workflow-section/index.ts";

	import * as Card from "#lib/components/ui/card/index.ts";

	type Step = { title: string; description: string };

	let {
		includes,
		examples,
		faqs,
		area,
		relatedProjects = [],
		steps = []
	}: {
		includes: string[];
		examples: string[];
		faqs: FaqSection.Item[];
		area?: string;
		relatedProjects?: Project[];
		steps?: Step[];
	} = $props();
</script>

{#if steps.length > 0}
	<WorkflowSection.Root
		kicker={m.service_page_process_kicker()}
		title={m.service_page_process_title()}
		description={m.service_page_process_description()}
		{steps}
	/>
{/if}

<ProblemSection.Root kicker={m.service_page_includes_kicker()} title={m.service_page_includes_title()} description={area}>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
		{#each includes as item, index (item)}
			<article class="rounded-xl border bg-card p-5">
				<span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
				<p class="mt-4 font-medium">{item}</p>
			</article>
		{/each}
	</div>
</ProblemSection.Root>

<ProblemSection.Root kicker={m.service_page_examples_kicker()} title={m.service_page_examples_title()}>
	<div class="grid gap-4 md:grid-cols-2">
		{#each examples as example, index (example)}
			<Card.Root>
				<Card.Header>
					<Card.Action><span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span></Card.Action>
					<Card.Title role="heading" aria-level={3}>{m.service_page_example_title({ number: index + 1 })}</Card.Title>
					<Card.Description>{example}</Card.Description>
				</Card.Header>
			</Card.Root>
		{/each}
	</div>
</ProblemSection.Root>

{#if relatedProjects.length > 0}
	<ProblemSection.Root kicker={m.service_page_examples_kicker()} title={m.service_page_related_projects()}>
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each relatedProjects as project, index (project.title)}
				<ProjectCard.Root {project} number={index + 1} />
			{/each}
		</div>
	</ProblemSection.Root>
{/if}

<FaqSection.Root {faqs} />
