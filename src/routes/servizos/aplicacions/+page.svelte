<script lang="ts">
	import { projects } from "$lib/data/projects";
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

	const formats = [
		{ title: m.service_apps_format_web_title(), description: m.service_apps_format_web_description() },
		{ title: m.service_apps_format_mobile_title(), description: m.service_apps_format_mobile_description() },
		{ title: m.service_apps_format_desktop_title(), description: m.service_apps_format_desktop_description() }
	];
	const architecturePaths = [
		{
			label: m.service_apps_shared_label(),
			title: m.service_apps_shared_title(),
			description: m.service_apps_shared_description(),
			points: [m.service_apps_shared_point_1(), m.service_apps_shared_point_2(), m.service_apps_shared_point_3()]
		},
		{
			label: m.service_apps_native_label(),
			title: m.service_apps_native_title(),
			description: m.service_apps_native_description(),
			points: [m.service_apps_native_point_1(), m.service_apps_native_point_2(), m.service_apps_native_point_3()]
		}
	];
	const steps = [
		{ title: m.service_apps_step_1_title(), description: m.service_apps_step_1_description() },
		{ title: m.service_apps_step_2_title(), description: m.service_apps_step_2_description() },
		{ title: m.service_apps_step_3_title(), description: m.service_apps_step_3_description() },
		{ title: m.service_apps_step_4_title(), description: m.service_apps_step_4_description() }
	];
	const faqs = [
		{ question: m.service_apps_faq_1_question(), answer: m.service_apps_faq_1_answer() },
		{ question: m.service_apps_faq_2_question(), answer: m.service_apps_faq_2_answer() },
		{ question: m.service_apps_faq_3_question(), answer: m.service_apps_faq_3_answer() },
		{ question: m.service_apps_faq_4_question(), answer: m.service_apps_faq_4_answer() },
		{ question: m.service_apps_faq_5_question(), answer: m.service_apps_faq_5_answer() },
		{ question: m.service_apps_faq_6_question(), answer: m.service_apps_faq_6_answer() }
	];
	const relatedProjects = projects.filter((project) => ["/proxectos/vs-launcher", "/proxectos/xvelte"].includes(project.href ?? ""));
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: m.service_apps_title(),
				description: m.service_apps_meta_description(),
				url: new URL(localizeHref("/servizos/aplicacions"), "https://xurxomf.xyz").href,
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
	<Badge.Root variant="secondary">{m.detail_type_app()}</Badge.Root>
	<Badge.Root variant="success">{m.detail_status_available()}</Badge.Root>
{/snippet}

<svelte:head
	><title>{m.service_apps_title()} | XurxoMF</title><meta name="description" content={m.service_apps_meta_description()} /><svelte:element
		this={"script"}
		type="application/ld+json">{JSON.stringify(structuredData)}</svelte:element
	></svelte:head
>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/services/aplicacions.png"
		title={m.service_apps_title()}
		lead={m.service_apps_lead()}
		description={m.service_apps_hero_description()}
		badges={heroBadges}
	/>
	<div class="mx-auto w-full max-w-6xl px-6">
		<ServiceOverview.Root
			problem={m.service_apps_problem()}
			audience={m.service_apps_audience()}
			description={m.service_apps_overview_description()}
		/>

		<ProblemSection.Root
			kicker={m.service_apps_formats_kicker()}
			title={m.service_apps_formats_title()}
			description={m.service_apps_formats_description()}
		>
			<div class="grid gap-5 md:grid-cols-3">
				{#each formats as format, index (format.title)}
					<Card.Root>
						<Card.Header>
							<Card.Action><span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span></Card.Action>
							<Card.Title>{format.title}</Card.Title>
							<Card.Description>{format.description}</Card.Description>
						</Card.Header>
					</Card.Root>
				{/each}
			</div>
		</ProblemSection.Root>

		<DualPathSection.Root
			kicker={m.service_apps_architecture_kicker()}
			title={m.service_apps_architecture_title()}
			description={m.service_apps_architecture_description()}
			paths={architecturePaths}
		/>

		<WorkflowSection.Root
			kicker={m.service_page_process_kicker()}
			title={m.service_apps_process_title()}
			description={m.service_apps_process_description()}
			{steps}
		/>

		<section class="py-20 lg:py-28">
			<div class="mx-auto max-w-3xl text-center">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_apps_projects_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.service_apps_projects_title()}</Typography.H2>
				<Typography.P class="mx-auto mt-5 max-w-2xl text-muted-foreground">{m.service_apps_projects_description()}</Typography.P>
			</div>
			<div class="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
				{#each relatedProjects as project, index (project.title)}
					<ProjectCard.Root {project} number={index + 1} />
				{/each}
			</div>
		</section>

		<FaqSection.Root {faqs} />
		<ContactBanner.Root />
	</div>
</div>
