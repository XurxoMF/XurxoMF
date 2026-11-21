<script lang="ts">
	import SeoHead from "#lib/seo-head.svelte";
	import * as m from "#lib/paraglide/messages.js";
	import { localizeHref } from "#lib/paraglide/runtime.js";

	import * as ContactBanner from "#lib/components/site/contact-banner/index.ts";
	import * as DetailHero from "#lib/components/site/detail-hero/index.ts";
	import * as DualPathSection from "#lib/components/site/dual-path-section/index.ts";
	import * as FaqSection from "#lib/components/site/faq-section/index.ts";
	import * as ProblemSection from "#lib/components/site/problem-section/index.ts";
	import * as ServiceOverview from "#lib/components/site/service-overview/index.ts";
	import * as WorkflowSection from "#lib/components/site/workflow-section/index.ts";
	import * as Badge from "#lib/components/ui/badge/index.ts";
	import * as Card from "#lib/components/ui/card/index.ts";

	const coverageItems = [
		{ title: m.service_it_maintenance_coverage_inventory_title(), description: m.service_it_maintenance_coverage_inventory_description() },
		{ title: m.service_it_maintenance_coverage_systems_title(), description: m.service_it_maintenance_coverage_systems_description() },
		{ title: m.service_it_maintenance_coverage_backups_title(), description: m.service_it_maintenance_coverage_backups_description() },
		{ title: m.service_it_maintenance_coverage_support_title(), description: m.service_it_maintenance_coverage_support_description() }
	];
	const maintenancePaths = [
		{
			label: m.service_it_maintenance_planned_label(),
			title: m.service_it_maintenance_planned_title(),
			description: m.service_it_maintenance_planned_description(),
			points: [m.service_it_maintenance_planned_point_1(), m.service_it_maintenance_planned_point_2(), m.service_it_maintenance_planned_point_3()]
		},
		{
			label: m.service_it_maintenance_hours_label(),
			title: m.service_it_maintenance_hours_title(),
			description: m.service_it_maintenance_hours_description(),
			points: [m.service_it_maintenance_hours_point_1(), m.service_it_maintenance_hours_point_2(), m.service_it_maintenance_hours_point_3()]
		}
	];
	const steps = [
		{ title: m.service_it_maintenance_step_1_title(), description: m.service_it_maintenance_step_1_description() },
		{ title: m.service_it_maintenance_step_2_title(), description: m.service_it_maintenance_step_2_description() },
		{ title: m.service_it_maintenance_step_3_title(), description: m.service_it_maintenance_step_3_description() },
		{ title: m.service_it_maintenance_step_4_title(), description: m.service_it_maintenance_step_4_description() }
	];
	const faqs = [
		{ question: m.service_it_maintenance_faq_1_question(), answer: m.service_it_maintenance_faq_1_answer() },
		{ question: m.service_it_maintenance_faq_2_question(), answer: m.service_it_maintenance_faq_2_answer() },
		{ question: m.service_it_maintenance_faq_3_question(), answer: m.service_it_maintenance_faq_3_answer() },
		{ question: m.service_it_maintenance_faq_4_question(), answer: m.service_it_maintenance_faq_4_answer() },
		{ question: m.service_it_maintenance_faq_5_question(), answer: m.service_it_maintenance_faq_5_answer() },
		{ question: m.service_it_maintenance_faq_6_question(), answer: m.service_it_maintenance_faq_6_answer() }
	];
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: m.service_maintenance_title(),
				description: m.service_it_maintenance_meta_description(),
				url: new URL(localizeHref("/servizos/mantemento-informatico"), "https://xurxomf.xyz").href,
				provider: { "@type": "ProfessionalService", "@id": "https://xurxomf.xyz/#business", name: "XurxoMF", telephone: "+34686571921" },
				areaServed: m.service_area_it()
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
	title={`${m.service_maintenance_title()} | XurxoMF`}
	description={m.service_it_maintenance_meta_description()}
	image="/images/services/mantemento-informatico.webp"
	{structuredData}
/>

<div class="overflow-x-clip">
	<DetailHero.Root
		image="/images/services/mantemento-informatico.webp"
		title={m.service_maintenance_title()}
		lead={m.service_it_maintenance_lead()}
		description={m.service_it_maintenance_hero_description()}
		badges={heroBadges}
	/>
	<div class="mx-auto w-full max-w-6xl px-6">
		<ServiceOverview.Root
			problem={m.service_it_maintenance_problem()}
			audience={m.service_it_maintenance_audience()}
			description={m.service_it_maintenance_overview_description()}
		/>

		<ProblemSection.Root
			kicker={m.service_it_maintenance_coverage_kicker()}
			title={m.service_it_maintenance_coverage_title()}
			description={m.service_it_maintenance_coverage_description()}
		>
			<div class="grid gap-5 sm:grid-cols-2">
				{#each coverageItems as item, index (item.title)}
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
			kicker={m.service_it_maintenance_modes_kicker()}
			title={m.service_it_maintenance_modes_title()}
			description={m.service_it_maintenance_modes_description()}
			paths={maintenancePaths}
		/>

		<WorkflowSection.Root
			kicker={m.service_page_process_kicker()}
			title={m.service_it_maintenance_process_title()}
			description={m.service_it_maintenance_process_description()}
			{steps}
		/>

		<FaqSection.Root {faqs} />
		<ContactBanner.Root />
	</div>
</div>
