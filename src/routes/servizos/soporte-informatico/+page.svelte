<script lang="ts">
	import { resolve } from "$app/paths";
	import type { Pathname } from "$app/types";

	import { contact } from "$lib/data/contact";
	import * as m from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Typography from "$lib/components/ui/typography";

	const includes = [m.service_it_includes_1(), m.service_it_includes_2(), m.service_it_includes_3(), m.service_it_includes_4()];
	const examples = [m.service_it_example_1(), m.service_it_example_2()];
	const faqs = [
		{ question: m.service_it_faq_1_question(), answer: m.service_it_faq_1_answer() },
		{ question: m.service_it_faq_2_question(), answer: m.service_it_faq_2_answer() },
		{ question: m.service_it_faq_3_question(), answer: m.service_it_faq_3_answer() }
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

<svelte:head
	><title>{m.service_it_title()} | XurxoMF</title><meta name="description" content={m.service_it_meta_description()} /><svelte:element
		this={"script"}
		type="application/ld+json">{JSON.stringify(structuredData)}</svelte:element
	></svelte:head
>

<div class="mx-auto w-full max-w-6xl px-6">
	<section class="py-20 lg:py-28" aria-labelledby="service-heading">
		<a href={resolve(localizeHref("/servizos") as Pathname)} class={Button.rootVariants({ variant: "ghost", size: "sm", class: "mb-8 -ml-2" })}
			>{m.service_page_back()}</a
		>
		<div class="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
			<div>
				<Badge.Root variant="success">{m.contact_location_value()}</Badge.Root><Typography.H1 id="service-heading" class="mt-5"
					>{m.service_it_title()}</Typography.H1
				><Typography.Leading class="mt-5 text-muted-foreground">{m.service_it_lead()}</Typography.Leading>
			</div>
			<Card.Root class="bg-muted/50"
				><Card.Header
					><Card.Title role="heading" aria-level={2}>{m.service_page_area_title()}</Card.Title><Card.Description
						>{m.service_area_it()}</Card.Description
					></Card.Header
				><Card.Footer class="flex-wrap gap-2"
					><a href={contact.phone.href} rel="external" class={Button.rootVariants({ size: "sm" })}>{contact.phone.label}</a><a
						href={contact.socials.whatsapp.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "sm" })}>WhatsApp</a
					></Card.Footer
				></Card.Root
			>
		</div>
	</section>

	<section class="grid gap-6 py-16 md:grid-cols-2 lg:py-20">
		<Card.Root
			><Card.Header
				><p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_problem_kicker()}</p>
				<Card.Title role="heading" aria-level={2}>{m.service_page_problem_title()}</Card.Title><Card.Description
					>{m.service_it_problem()}</Card.Description
				></Card.Header
			></Card.Root
		><Card.Root
			><Card.Header
				><p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_audience_kicker()}</p>
				<Card.Title role="heading" aria-level={2}>{m.service_page_audience_title()}</Card.Title><Card.Description
					>{m.service_it_audience()}</Card.Description
				></Card.Header
			></Card.Root
		>
	</section>

	<section class="py-16 lg:py-20" aria-labelledby="includes-heading">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_includes_kicker()}</p>
		<Typography.H2 id="includes-heading" class="mt-4 border-0">{m.service_page_includes_title()}</Typography.H2>
		<div class="mt-10 grid gap-4 sm:grid-cols-2">
			{#each includes as item, index (item)}<div class="grid grid-cols-[auto_1fr] gap-4 rounded-xl border bg-card p-5">
					<span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
					<p class="font-medium">{item}</p>
				</div>{/each}
		</div>
	</section>

	<section class="py-16 lg:py-20" aria-labelledby="examples-heading">
		<div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
			<div>
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_examples_kicker()}</p>
				<Typography.H2 id="examples-heading" class="mt-4 border-0">{m.service_page_examples_title()}</Typography.H2>
			</div>
			<div class="grid gap-4">
				{#each examples as example, index (example)}<Card.Root
						><Card.Header
							><Card.Action><span class="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span></Card.Action><Card.Title
								role="heading"
								aria-level={3}>{m.service_page_example_title({ number: index + 1 })}</Card.Title
							><Card.Description>{example}</Card.Description></Card.Header
						></Card.Root
					>{/each}
			</div>
		</div>
	</section>

	<section class="py-16 lg:py-20" aria-labelledby="faq-heading">
		<div class="max-w-2xl">
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.service_page_faq_kicker()}</p>
			<Typography.H2 id="faq-heading" class="mt-4 border-0">{m.service_page_faq_title()}</Typography.H2>
		</div>
		<div class="mt-8 grid gap-3">
			{#each faqs as faq (faq.question)}<details class="rounded-xl border bg-card px-5 py-4 open:pb-5">
					<summary class="cursor-pointer font-semibold">{faq.question}</summary>
					<p class="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
				</details>{/each}
		</div>
	</section>
	<ContactBanner.Root />
</div>
