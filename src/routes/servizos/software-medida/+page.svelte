<script lang="ts">
	import { resolve } from "$app/paths";
	import type { Pathname } from "$app/types";

	import { contact } from "$lib/data/contact";
	import { projects } from "$lib/data/projects";
	import * as m from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as ProjectCard from "$lib/components/project-card";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Typography from "$lib/components/ui/typography";

	const includes = [
		m.service_custom_software_includes_1(),
		m.service_custom_software_includes_2(),
		m.service_custom_software_includes_3(),
		m.service_custom_software_includes_4()
	];
	const examples = [m.service_custom_software_example_1(), m.service_custom_software_example_2()];
	const faqs = [
		{ question: m.service_custom_software_faq_1_question(), answer: m.service_custom_software_faq_1_answer() },
		{ question: m.service_custom_software_faq_2_question(), answer: m.service_custom_software_faq_2_answer() },
		{ question: m.service_custom_software_faq_3_question(), answer: m.service_custom_software_faq_3_answer() }
	];
	const relatedProjects = projects.filter((project) =>
		["/proxectos/vs-launcher", "/proxectos/vsds", "/proxectos/modereta"].includes(project.href ?? "")
	);
	const steps = [
		[m.service_process_step_1_title(), m.service_process_step_1_description()],
		[m.service_process_step_2_title(), m.service_process_step_2_description()],
		[m.service_process_step_3_title(), m.service_process_step_3_description()],
		[m.service_process_step_4_title(), m.service_process_step_4_description()]
	];
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Service",
				name: m.service_custom_software_title(),
				description: m.service_custom_software_meta_description(),
				url: new URL(localizeHref("/servizos/software-medida"), "https://xurxomf.xyz").href,
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

<svelte:head
	><title>{m.service_custom_software_title()} | XurxoMF</title><meta
		name="description"
		content={m.service_custom_software_meta_description()}
	/><svelte:element this={"script"} type="application/ld+json">{JSON.stringify(structuredData)}</svelte:element></svelte:head
>

<div class="mx-auto w-full max-w-6xl px-6">
	<section class="py-20 lg:py-28" aria-labelledby="service-heading">
		<a href={resolve(localizeHref("/servizos") as Pathname)} class={Button.rootVariants({ variant: "ghost", size: "sm", class: "mb-8 -ml-2" })}
			>{m.service_page_back()}</a
		>
		<div class="max-w-4xl">
			<Badge.Root variant="secondary">{m.services_kicker()}</Badge.Root><Typography.H1 id="service-heading" class="mt-5"
				>{m.service_custom_software_title()}</Typography.H1
			><Typography.Leading class="mt-5 max-w-3xl text-muted-foreground">{m.service_custom_software_lead()}</Typography.Leading>
			<div class="mt-8 flex flex-wrap gap-3">
				<a href={contact.email.href} rel="external" class={Button.rootVariants({ size: "lg" })}>{m.service_page_contact_action()}</a>
			</div>
		</div>
	</section>

	<section class="py-16 lg:py-20" aria-labelledby="problem-heading">
		<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
			<div class="rounded-2xl border bg-muted/50 p-8">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_problem_kicker()}</p>
				<Typography.H2 id="problem-heading" class="mt-4 border-0">{m.service_page_problem_title()}</Typography.H2><Typography.P
					class="mt-4 text-muted-foreground">{m.service_custom_software_problem()}</Typography.P
				>
			</div>
			<div class="rounded-2xl border bg-card p-8">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_audience_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.service_page_audience_title()}</Typography.H2><Typography.P class="mt-4 text-muted-foreground"
					>{m.service_custom_software_audience()}</Typography.P
				>
			</div>
		</div>
	</section>

	<section class="py-16 lg:py-20" aria-labelledby="process-heading">
		<div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_process_kicker()}</p>
				<Typography.H2 id="process-heading" class="mt-4 border-0">{m.service_page_process_title()}</Typography.H2><Typography.P
					class="mt-4 text-muted-foreground">{m.service_page_process_description()}</Typography.P
				>
			</div>
			<ol class="grid gap-4 sm:grid-cols-2">
				{#each steps as step, index (step[0])}<li class="rounded-xl border bg-card p-5">
						<span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
						<h3 class="mt-4 font-semibold">{step[0]}</h3>
						<p class="mt-2 text-sm leading-6 text-muted-foreground">{step[1]}</p>
					</li>{/each}
			</ol>
		</div>
	</section>

	<section class="py-16 lg:py-20" aria-labelledby="includes-heading">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_includes_kicker()}</p>
		<Typography.H2 id="includes-heading" class="mt-4 border-0">{m.service_page_includes_title()}</Typography.H2>
		<div class="mt-10 grid gap-4 sm:grid-cols-2">
			{#each includes as item, index (item)}<div class="grid grid-cols-[auto_1fr] gap-4 rounded-xl border p-5">
					<span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
					<p class="font-medium">{item}</p>
				</div>{/each}
		</div>
		<p class="mt-8 max-w-3xl leading-7 text-muted-foreground">{m.service_area_development()}</p>
	</section>

	<section class="py-16 lg:py-20" aria-labelledby="examples-heading">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_examples_kicker()}</p>
		<Typography.H2 id="examples-heading" class="mt-4 border-0">{m.service_page_examples_title()}</Typography.H2>
		<div class="mt-8 grid gap-4 md:grid-cols-2">
			{#each examples as example, index (example)}<Card.Root
					><Card.Header
						><Card.Title role="heading" aria-level={3}>{m.service_page_example_title({ number: index + 1 })}</Card.Title><Card.Description
							>{example}</Card.Description
						></Card.Header
					></Card.Root
				>{/each}
		</div>
		<Typography.H3 class="mt-14">{m.service_page_related_projects()}</Typography.H3>
		<div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each relatedProjects as project, index (project.title)}<ProjectCard.Root {project} number={index + 1} />{/each}
		</div>
	</section>

	<section class="grid gap-10 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:py-20" aria-labelledby="faq-heading">
		<div>
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_faq_kicker()}</p>
			<Typography.H2 id="faq-heading" class="mt-4 border-0">{m.service_page_faq_title()}</Typography.H2>
		</div>
		<div class="grid gap-3">
			{#each faqs as faq (faq.question)}<details class="rounded-xl border bg-card px-5 py-4 open:pb-5">
					<summary class="cursor-pointer font-semibold">{faq.question}</summary>
					<p class="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
				</details>{/each}
		</div>
	</section>
	<ContactBanner.Root />
</div>
