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

	const includes = [
		{ title: m.service_web_include_structure_title(), description: m.service_web_include_structure_description() },
		{ title: m.service_web_include_design_title(), description: m.service_web_include_design_description() },
		{ title: m.service_web_include_development_title(), description: m.service_web_include_development_description() },
		{ title: m.service_web_include_launch_title(), description: m.service_web_include_launch_description() }
	];
	const technicalPaths = [
		{
			label: m.service_web_technical_cms_label(),
			title: m.service_web_technical_cms_title(),
			description: m.service_web_technical_cms_description(),
			points: [m.service_web_technical_cms_point_1(), m.service_web_technical_cms_point_2(), m.service_web_technical_cms_point_3()]
		},
		{
			label: m.service_web_technical_custom_label(),
			title: m.service_web_technical_custom_title(),
			description: m.service_web_technical_custom_description(),
			points: [m.service_web_technical_custom_point_1(), m.service_web_technical_custom_point_2(), m.service_web_technical_custom_point_3()]
		}
	];
	const steps = [
		{ title: m.service_web_step_1_title(), description: m.service_web_step_1_description() },
		{ title: m.service_web_step_2_title(), description: m.service_web_step_2_description() },
		{ title: m.service_web_step_3_title(), description: m.service_web_step_3_description() },
		{ title: m.service_web_step_4_title(), description: m.service_web_step_4_description() }
	];
	const faqs = [
		{ question: m.service_web_faq_1_question(), answer: m.service_web_faq_1_answer() },
		{ question: m.service_web_faq_2_question(), answer: m.service_web_faq_2_answer() },
		{ question: m.service_web_faq_3_question(), answer: m.service_web_faq_3_answer() },
		{ question: m.service_web_faq_4_question(), answer: m.service_web_faq_4_answer() },
		{ question: m.service_web_faq_5_question(), answer: m.service_web_faq_5_answer() },
		{ question: m.service_web_faq_6_question(), answer: m.service_web_faq_6_answer() }
	];
	const relatedProjects = projects.filter((project) =>
		["/proxectos/asergalicia-formacion", "/proxectos/liporca", "/proxectos/power-natural-life"].includes(project.href ?? "")
	);
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: m.service_web_title(),
				description: m.service_web_meta_description(),
				url: new URL(localizeHref("/servizos/desenvolvemento-web"), "https://xurxomf.xyz").href,
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
	<Badge.Root variant="secondary">{m.detail_type_web()}</Badge.Root>
	<Badge.Root variant="success">{m.detail_status_available()}</Badge.Root>
{/snippet}

<SeoHead
	title={`${m.service_web_title()} | XurxoMF`}
	description={m.service_web_meta_description()}
	image="/images/services/desenvolvemento-web.png"
	{structuredData}
/>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/services/desenvolvemento-web.png"
		title={m.service_web_title()}
		lead={m.service_web_lead()}
		description={m.service_web_hero_description()}
		badges={heroBadges}
	/>
	<div class="mx-auto w-full max-w-6xl px-6">
		<ServiceOverview.Root problem={m.service_web_problem()} audience={m.service_web_audience()} description={m.service_web_overview_description()} />

		<ProblemSection.Root
			kicker={m.service_web_includes_kicker()}
			title={m.service_web_includes_title()}
			description={m.service_web_includes_description()}
		>
			<div class="grid gap-5 sm:grid-cols-2">
				{#each includes as item, index (item.title)}
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

		<DualPathSection.Root
			kicker={m.service_web_technical_kicker()}
			title={m.service_web_technical_title()}
			description={m.service_web_technical_description()}
			paths={technicalPaths}
		/>

		<WorkflowSection.Root
			kicker={m.service_page_process_kicker()}
			title={m.service_page_process_title()}
			description={m.service_page_process_description()}
			{steps}
		/>

		<section class="py-20 lg:py-28">
			<div class="mx-auto max-w-3xl text-center">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_web_projects_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.service_web_projects_title()}</Typography.H2>
				<Typography.P class="mx-auto mt-5 max-w-2xl text-muted-foreground">{m.service_web_projects_description()}</Typography.P>
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
