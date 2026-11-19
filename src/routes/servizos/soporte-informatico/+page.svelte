<script lang="ts">
	import SeoHead from "$lib/seo-head.svelte";
	import * as m from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import * as ContactBanner from "$lib/components/site/contact-banner";
	import * as DetailHero from "$lib/components/site/detail-hero";
	import * as DualPathSection from "$lib/components/site/dual-path-section";
	import * as FaqSection from "$lib/components/site/faq-section";
	import * as ProblemSection from "$lib/components/site/problem-section";
	import * as ServiceOverview from "$lib/components/site/service-overview";
	import * as WorkflowSection from "$lib/components/site/workflow-section";
	import * as Badge from "$lib/components/ui/badge";
	import * as Card from "$lib/components/ui/card";

	const supportPaths = [
		{
			label: m.service_it_remote_label(),
			title: m.service_it_remote_title(),
			description: m.service_it_remote_description(),
			points: [m.service_it_remote_point_1(), m.service_it_remote_point_2(), m.service_it_remote_point_3()]
		},
		{
			label: m.service_it_onsite_label(),
			title: m.service_it_onsite_title(),
			description: m.service_it_onsite_description(),
			points: [m.service_it_onsite_point_1(), m.service_it_onsite_point_2(), m.service_it_onsite_point_3()]
		}
	];
	const commonCases = [
		{ title: m.service_it_case_performance_title(), description: m.service_it_case_performance_description() },
		{ title: m.service_it_case_software_title(), description: m.service_it_case_software_description() },
		{ title: m.service_it_case_devices_title(), description: m.service_it_case_devices_description() },
		{ title: m.service_it_case_data_title(), description: m.service_it_case_data_description() }
	];
	const steps = [
		{ title: m.service_it_step_1_title(), description: m.service_it_step_1_description() },
		{ title: m.service_it_step_2_title(), description: m.service_it_step_2_description() },
		{ title: m.service_it_step_3_title(), description: m.service_it_step_3_description() },
		{ title: m.service_it_step_4_title(), description: m.service_it_step_4_description() }
	];
	const faqs = [
		{ question: m.service_it_faq_1_question(), answer: m.service_it_faq_1_answer() },
		{ question: m.service_it_faq_2_question(), answer: m.service_it_faq_2_answer() },
		{ question: m.service_it_faq_3_question(), answer: m.service_it_faq_3_answer() },
		{ question: m.service_it_faq_4_question(), answer: m.service_it_faq_4_answer() },
		{ question: m.service_it_faq_5_question(), answer: m.service_it_faq_5_answer() },
		{ question: m.service_it_faq_6_question(), answer: m.service_it_faq_6_answer() }
	];
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: m.service_it_title(),
				description: m.service_it_meta_description(),
				url: new URL(localizeHref("/servizos/soporte-informatico"), "https://xurxomf.xyz").href,
				provider: { "@type": "ProfessionalService", "@id": "https://xurxomf.xyz/#business", name: "XurxoMF", telephone: "+34686571921" },
				areaServed: ["Salvaterra de Miño", "Salceda de Caselas", "Vigo", "O Porriño", "Tui", "Ponteareas"]
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
	<Badge.Root variant="secondary">{m.detail_type_support()}</Badge.Root>
	<Badge.Root variant="success">{m.detail_status_available()}</Badge.Root>
{/snippet}

<SeoHead
	title={`${m.service_it_title()} | XurxoMF`}
	description={m.service_it_meta_description()}
	image="/images/services/soporte-informatico.webp"
	{structuredData}
/>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/services/soporte-informatico.webp"
		title={m.service_it_title()}
		lead={m.service_it_lead()}
		description={m.service_it_hero_description()}
		badges={heroBadges}
	/>
	<div class="mx-auto w-full max-w-6xl px-6">
		<ServiceOverview.Root problem={m.service_it_problem()} audience={m.service_it_audience()} description={m.service_it_overview_description()} />

		<DualPathSection.Root
			kicker={m.service_it_modes_kicker()}
			title={m.service_it_modes_title()}
			description={m.service_it_modes_description()}
			paths={supportPaths}
		/>

		<ProblemSection.Root kicker={m.service_it_cases_kicker()} title={m.service_it_cases_title()} description={m.service_it_cases_description()}>
			<div class="grid gap-5 sm:grid-cols-2">
				{#each commonCases as item, index (item.title)}
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
			title={m.service_it_process_title()}
			description={m.service_it_process_description()}
			{steps}
		/>

		<FaqSection.Root {faqs} />
		<ContactBanner.Root />
	</div>
</div>
