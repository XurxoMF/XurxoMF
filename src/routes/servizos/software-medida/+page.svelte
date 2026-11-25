<script lang="ts">
	import { projects } from "#lib/data/projects.ts";
	import SeoHead from "#lib/seo-head.svelte";
	import { contentReveal, contentRevealEach } from "#lib/motion/content-reveal.ts";
	import * as m from "#lib/paraglide/messages.js";
	import { localizeHref } from "#lib/paraglide/runtime.js";

	import * as ContactBanner from "#lib/components/site/contact-banner/index.ts";
	import * as DetailHero from "#lib/components/site/detail-hero/index.ts";
	import * as DualPathSection from "#lib/components/site/dual-path-section/index.ts";
	import * as FaqSection from "#lib/components/site/faq-section/index.ts";
	import * as ProblemSection from "#lib/components/site/problem-section/index.ts";
	import * as ProjectCard from "#lib/components/site/project-card/index.ts";
	import * as ServiceOverview from "#lib/components/site/service-overview/index.ts";
	import * as WorkflowSection from "#lib/components/site/workflow-section/index.ts";
	import * as Badge from "#lib/components/ui/badge/index.ts";
	import * as Card from "#lib/components/ui/card/index.ts";
	import * as Typography from "#lib/components/ui/typography/index.ts";

	const decisionPaths = [
		{
			label: m.service_custom_software_existing_label(),
			title: m.service_custom_software_existing_title(),
			description: m.service_custom_software_existing_description(),
			points: [
				m.service_custom_software_existing_point_1(),
				m.service_custom_software_existing_point_2(),
				m.service_custom_software_existing_point_3()
			]
		},
		{
			label: m.service_custom_software_custom_label(),
			title: m.service_custom_software_custom_title(),
			description: m.service_custom_software_custom_description(),
			points: [m.service_custom_software_custom_point_1(), m.service_custom_software_custom_point_2(), m.service_custom_software_custom_point_3()]
		}
	];
	const solutions = [
		{ title: m.service_custom_software_solution_internal_title(), description: m.service_custom_software_solution_internal_description() },
		{ title: m.service_custom_software_solution_platform_title(), description: m.service_custom_software_solution_platform_description() },
		{ title: m.service_custom_software_solution_integration_title(), description: m.service_custom_software_solution_integration_description() },
		{ title: m.service_custom_software_solution_logic_title(), description: m.service_custom_software_solution_logic_description() }
	];
	const faqs = [
		{ question: m.service_custom_software_faq_1_question(), answer: m.service_custom_software_faq_1_answer() },
		{ question: m.service_custom_software_faq_2_question(), answer: m.service_custom_software_faq_2_answer() },
		{ question: m.service_custom_software_faq_3_question(), answer: m.service_custom_software_faq_3_answer() },
		{ question: m.service_custom_software_faq_4_question(), answer: m.service_custom_software_faq_4_answer() },
		{ question: m.service_custom_software_faq_5_question(), answer: m.service_custom_software_faq_5_answer() },
		{ question: m.service_custom_software_faq_6_question(), answer: m.service_custom_software_faq_6_answer() }
	];
	const relatedProjects = projects.filter((project) =>
		["/proxectos/vs-launcher", "/proxectos/vsds", "/proxectos/modereta"].includes(project.href ?? "")
	);
	const steps = [
		{ title: m.service_custom_software_step_1_title(), description: m.service_custom_software_step_1_description() },
		{ title: m.service_custom_software_step_2_title(), description: m.service_custom_software_step_2_description() },
		{ title: m.service_custom_software_step_3_title(), description: m.service_custom_software_step_3_description() },
		{ title: m.service_custom_software_step_4_title(), description: m.service_custom_software_step_4_description() }
	];
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: m.service_custom_software_title(),
				description: m.service_custom_software_meta_description(),
				url: new URL(localizeHref("/servizos/software-medida"), "https://xurxomf.com").href,
				provider: { "@type": "ProfessionalService", "@id": "https://xurxomf.com/#business", name: "XurxoMF" },
				areaServed: m.service_area_development()
			},
			{
				"@type": "FAQPage",
				mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
			}
		]
	};
</script>

{#snippet heroBadges()}
	<Badge.Root variant="secondary">{m.detail_badge_service()}</Badge.Root>
	<Badge.Root variant="secondary">{m.detail_type_software()}</Badge.Root>
	<Badge.Root variant="success">{m.detail_status_available()}</Badge.Root>
{/snippet}

<SeoHead
	title={`${m.service_custom_software_title()} | XurxoMF`}
	description={m.service_custom_software_meta_description()}
	image="/images/services/software-medida.webp"
	{structuredData}
/>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/services/software-medida.webp"
		title={m.service_custom_software_title()}
		lead={m.service_custom_software_lead()}
		description={m.service_custom_software_hero_description()}
		badges={heroBadges}
	/>
	<div class="mx-auto w-full max-w-6xl px-6">
		<ServiceOverview.Root
			problem={m.service_custom_software_problem()}
			audience={m.service_custom_software_audience()}
			description={m.service_custom_software_overview_description()}
		/>

		<DualPathSection.Root
			kicker={m.service_custom_software_decision_kicker()}
			title={m.service_custom_software_decision_title()}
			description={m.service_custom_software_decision_description()}
			paths={decisionPaths}
		/>

		<ProblemSection.Root
			kicker={m.service_custom_software_solutions_kicker()}
			title={m.service_custom_software_solutions_title()}
			description={m.service_custom_software_solutions_description()}
		>
			<div class="grid gap-5 sm:grid-cols-2">
				{#each solutions as solution, index (solution.title)}
					<Card.Root>
						<Card.Header>
							<Card.Action><span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span></Card.Action>
							<Card.Title>{solution.title}</Card.Title>
							<Card.Description>{solution.description}</Card.Description>
						</Card.Header>
					</Card.Root>
				{/each}
			</div>
		</ProblemSection.Root>

		<WorkflowSection.Root
			kicker={m.service_page_process_kicker()}
			title={m.service_custom_software_process_title()}
			description={m.service_custom_software_process_description()}
			{steps}
		/>

		<section
			{@attach contentReveal({
				steps: [{ target: "[data-projects-heading] > *", stagger: 0.1 }]
			})}
			class="py-20 lg:py-28"
		>
			<div data-projects-heading class="mx-auto max-w-3xl text-center">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_custom_software_projects_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.service_custom_software_projects_title()}</Typography.H2>
				<Typography.P class="mx-auto mt-5 max-w-2xl text-muted-foreground">
					{m.service_custom_software_projects_description()}
				</Typography.P>
			</div>
			<div data-projects-grid {@attach contentRevealEach({ target: "children", stagger: 0.08 })} class="mt-12 grid gap-6 md:grid-cols-3">
				{#each relatedProjects as project, index (project.title)}
					<ProjectCard.Root {project} number={index + 1} />
				{/each}
			</div>
		</section>

		<FaqSection.Root {faqs} />
		<ContactBanner.Root />
	</div>
</div>
