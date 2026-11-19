<script lang="ts">
	import { projects } from "$lib/data/projects";
	import SeoHead from "$lib/seo-head.svelte";
	import * as m from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FaqSection from "$lib/components/site/faq-section";
	import * as ProblemSection from "$lib/components/site/problem-section";
	import * as ProjectCard from "$lib/components/site/project-card";
	import * as ServiceOverview from "$lib/components/site/service-overview";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Card from "$lib/components/ui/card";
	import * as Typography from "$lib/components/ui/typography";

	const solutionPaths = [
		{
			label: m.service_automation_bot_label(),
			title: m.service_automation_bot_title(),
			description: m.service_automation_bot_description(),
			points: [m.service_automation_bot_point_1(), m.service_automation_bot_point_2(), m.service_automation_bot_point_3()]
		},
		{
			label: m.service_automation_flow_label(),
			title: m.service_automation_flow_title(),
			description: m.service_automation_flow_description(),
			points: [m.service_automation_flow_point_1(), m.service_automation_flow_point_2(), m.service_automation_flow_point_3()]
		}
	];
	const reliabilityItems = [
		{ title: m.service_automation_reliability_rules_title(), description: m.service_automation_reliability_rules_description() },
		{ title: m.service_automation_reliability_logs_title(), description: m.service_automation_reliability_logs_description() },
		{ title: m.service_automation_reliability_errors_title(), description: m.service_automation_reliability_errors_description() },
		{ title: m.service_automation_reliability_operations_title(), description: m.service_automation_reliability_operations_description() }
	];
	const steps = [
		{ title: m.service_automation_step_1_title(), description: m.service_automation_step_1_description() },
		{ title: m.service_automation_step_2_title(), description: m.service_automation_step_2_description() },
		{ title: m.service_automation_step_3_title(), description: m.service_automation_step_3_description() },
		{ title: m.service_automation_step_4_title(), description: m.service_automation_step_4_description() }
	];
	const faqs = [
		{ question: m.service_automation_faq_1_question(), answer: m.service_automation_faq_1_answer() },
		{ question: m.service_automation_faq_2_question(), answer: m.service_automation_faq_2_answer() },
		{ question: m.service_automation_faq_3_question(), answer: m.service_automation_faq_3_answer() },
		{ question: m.service_automation_faq_4_question(), answer: m.service_automation_faq_4_answer() },
		{ question: m.service_automation_faq_5_question(), answer: m.service_automation_faq_5_answer() },
		{ question: m.service_automation_faq_6_question(), answer: m.service_automation_faq_6_answer() }
	];
	const relatedProjects = projects.filter((project) =>
		["/proxectos/modereta", "/proxectos/vsds", "/proxectos/gallaecia-dots"].includes(project.href ?? "")
	);
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: m.service_bots_title(),
				description: m.service_automation_meta_description(),
				url: new URL(localizeHref("/servizos/bots-automatizacions"), "https://xurxomf.xyz").href,
				provider: { "@type": "ProfessionalService", "@id": "https://xurxomf.xyz/#business", name: "XurxoMF" },
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
	<Badge.Root variant="secondary">{m.detail_type_bot()}</Badge.Root>
	<Badge.Root variant="success">{m.detail_status_available()}</Badge.Root>
{/snippet}

<SeoHead
	title={`${m.service_bots_title()} | XurxoMF`}
	description={m.service_automation_meta_description()}
	image="/images/services/bots-automatizacions.webp"
	{structuredData}
/>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/services/bots-automatizacions.webp"
		title={m.service_bots_title()}
		lead={m.service_automation_lead()}
		description={m.service_automation_hero_description()}
		badges={heroBadges}
	/>
	<div class="mx-auto w-full max-w-6xl px-6">
		<ServiceOverview.Root
			problem={m.service_automation_problem()}
			audience={m.service_automation_audience()}
			description={m.service_automation_overview_description()}
		/>

		<DualPathSection.Root
			kicker={m.service_automation_paths_kicker()}
			title={m.service_automation_paths_title()}
			description={m.service_automation_paths_description()}
			paths={solutionPaths}
		/>

		<ProblemSection.Root
			kicker={m.service_automation_reliability_kicker()}
			title={m.service_automation_reliability_title()}
			description={m.service_automation_reliability_description()}
		>
			<div class="grid gap-5 sm:grid-cols-2">
				{#each reliabilityItems as item, index (item.title)}
					<Card.Root>
						<Card.Header>
							<Card.Action><span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span></Card.Action>
							<Card.Title>{item.title}</Card.Title>
							<Card.Description>{item.description}</Card.Description>
						</Card.Header>
					</Card.Root>
				{/each}
			</div>
		</ProblemSection.Root>

		<WorkflowSection.Root
			kicker={m.service_page_process_kicker()}
			title={m.service_automation_process_title()}
			description={m.service_automation_process_description()}
			{steps}
		/>

		<section class="py-20 lg:py-28">
			<div class="mx-auto max-w-3xl text-center">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_automation_projects_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.service_automation_projects_title()}</Typography.H2>
				<Typography.P class="mx-auto mt-5 max-w-2xl text-muted-foreground">
					{m.service_automation_projects_description()}
				</Typography.P>
			</div>
			<div class="mt-12 grid gap-6 md:grid-cols-3">
				{#each relatedProjects as project, index (project.title)}
					<ProjectCard.Root {project} number={index + 1} />
				{/each}
			</div>
		</section>

		<FaqSection.Root {faqs} />
		<ContactBanner.Root />
	</div>
</div>
