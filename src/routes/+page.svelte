<script lang="ts">
	import { resolve } from "$app/paths";
	import type { Pathname } from "$app/types";

	import { contact } from "$lib/data/contact";
	import { projects } from "$lib/data/projects";
	import { services, type Service } from "$lib/data/services";
	import * as m from "$lib/paraglide/messages.js";
	import { localizeHref } from "$lib/paraglide/runtime";

	import * as ContactBanner from "$lib/components/contact-banner";
	import * as ProjectCard from "$lib/components/project-card";
	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Timeline from "$lib/components/ui/timeline";
	import * as Typography from "$lib/components/ui/typography";

	const serviceAreas = ["Salvaterra de Miño", "Salceda de Caselas", "Vigo", "O Porriño", "Tui", "Ponteareas", "Galicia"];
	const featuredServices = services.filter((service) => service.featured).slice(0, 6);
	const professionalServiceSchema = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		"@id": "https://xurxomf.xyz/#business",
		name: "XurxoMF",
		url: "https://xurxomf.xyz",
		email: "xurxomf@xurxomf.xyz",
		telephone: "+34686571921",
		description: m.home_meta_description(),
		address: {
			"@type": "PostalAddress",
			addressLocality: "Salvaterra de Miño",
			addressRegion: "Galicia",
			addressCountry: "ES"
		},
		areaServed: serviceAreas.map((name) => ({ "@type": name === "Galicia" ? "AdministrativeArea" : "City", name })),
		serviceType: services.map((service) => service.title),
		audience: [{ "@type": "BusinessAudience" }, { "@type": "PeopleAudience" }],
		sameAs: [contact.socials.linkedin.href, contact.socials.instagram.href, contact.socials.facebook.href]
	};
</script>

{#snippet heroService(number: string, title: string, detail: string)}
	<div class="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border bg-card p-5 text-card-foreground shadow-sm lg:min-h-28 lg:items-center">
		<span class="font-mono text-sm text-primary">{number}</span>
		<div>
			<p class="font-semibold tracking-tight">{title}</p>
			<p class="mt-1 text-sm text-muted-foreground">{detail}</p>
		</div>
	</div>
{/snippet}

{#snippet careerEntry(date: string, title: string, organization: string, href: string, description: string, type: string)}
	<Timeline.Item role="listitem">
		<Timeline.Separator aria-hidden="true" />
		<Timeline.Content>
			<div class="flex flex-wrap items-center gap-2">
				<Timeline.Date>{date}</Timeline.Date>
				<Badge.Root variant="outline">{type}</Badge.Root>
			</div>
			<Timeline.Title>{title}</Timeline.Title>
			<a {href} target="_blank" rel="external noreferrer" class="w-fit text-sm font-medium text-primary hover:underline">
				{organization}
			</a>
			<Timeline.Description>{description}</Timeline.Description>
		</Timeline.Content>
	</Timeline.Item>
{/snippet}

{#snippet serviceCard(number: string, service: Service)}
	<Card.Root class="h-full">
		<Card.Header>
			<Card.Action><span class="font-mono text-sm text-primary">{number}</span></Card.Action>
			<Card.Title role="heading" aria-level={3}>{service.title}</Card.Title>
			<Card.Description>{service.shortDescription}</Card.Description>
		</Card.Header>
		<Card.Footer class="mt-auto justify-end">
			<a href={resolve(localizeHref(service.href) as Pathname)} class={Button.rootVariants({ variant: "ghost", size: "sm" })}>
				{m.service_card_action()}
			</a>
		</Card.Footer>
	</Card.Root>
{/snippet}

<svelte:head>
	<title>{m.home_meta_title()}</title>
	<meta name="description" content={m.home_meta_description()} />
	<svelte:element this={"script"} type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</svelte:element>
</svelte:head>

<div class="mx-auto w-full max-w-6xl px-6">
	<section id="sobre-min" class="scroll-mt-20">
		<div class="grid min-h-[calc(100svh-7rem)] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-24">
			<div class="max-w-3xl">
				<Badge.Root variant="success" class="mb-6">{m.common_available()}</Badge.Root>

				<Typography.H1 class="text-5xl tracking-[-0.06em] sm:text-6xl lg:text-7xl">{m.home_hero_title()}</Typography.H1>

				<Typography.Leading class="mt-5 max-w-2xl text-2xl font-semibold text-foreground sm:text-3xl">
					{m.home_hero_lead()}
				</Typography.Leading>

				<Typography.P class="mt-6 max-w-2xl text-lg text-muted-foreground">
					{m.home_hero_description()}
				</Typography.P>

				<div class="mt-8 flex flex-wrap gap-3">
					<a href="#servizos" class={Button.rootVariants({ size: "lg" })}>{m.home_view_services()}</a>
					<a href={contact.email.href} rel="external" class={Button.rootVariants({ variant: "outline", size: "lg" })}>{m.home_contact_me()}</a>
				</div>
			</div>

			<div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1" aria-label={m.nav_services()}>
				{@render heroService("01", m.service_web_title(), m.service_web_detail())}
				{@render heroService("02", m.service_apps_title(), m.service_apps_detail())}
				{@render heroService("03", m.service_it_title(), m.service_it_detail())}
			</div>
		</div>

		<div class="grid gap-10 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-28">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.nav_about()}</p>
				<Typography.H2 class="mt-4 border-0">{m.home_about_title()}</Typography.H2>

				<div class="mt-8 flex flex-wrap gap-2" aria-label={m.home_work_style()}>
					<Badge.Root>{m.home_badge_experience()}</Badge.Root>
					<Badge.Root variant="secondary">{m.home_badge_platforms()}</Badge.Root>
					<Badge.Root variant="secondary">{m.home_badge_clients()}</Badge.Root>
				</div>
			</div>

			<div class="max-w-2xl">
				<Typography.P class="mt-5 text-muted-foreground">
					{m.home_about_paragraph_1()}
				</Typography.P>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.home_about_paragraph_2()}
				</Typography.P>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.home_about_paragraph_3()}
				</Typography.P>
			</div>
		</div>

		<div class="grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
			<div class="lg:sticky lg:top-24 lg:self-start">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.home_career_kicker()}</p>
				<Typography.H2 class="mt-4 border-0">{m.home_career_title()}</Typography.H2>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.home_career_description()}
				</Typography.P>
			</div>

			<Timeline.Root role="list" aria-label={m.home_career_label()}>
				{@render careerEntry(
					m.career_freelance_date(),
					m.career_freelance_title(),
					"XurxoMF",
					"https://xurxomf.xyz",
					m.career_freelance_description(),
					m.career_experience()
				)}
				{@render careerEntry(
					m.career_power_date(),
					m.career_it_web_title(),
					"Power Natural Life",
					"https://powernaturallife.com",
					m.career_power_description(),
					m.career_experience()
				)}
				{@render careerEntry(
					m.career_atlantic_date(),
					m.career_it_web_title(),
					"Atlantic C&C — AC2",
					"https://ac2.es",
					m.career_atlantic_description(),
					m.career_experience()
				)}
				{@render careerEntry(
					m.career_daw_date(),
					m.career_daw_title(),
					"IES Pazo da Mercé",
					"https://www.edu.xunta.gal/centros/iespazomerce/",
					m.career_daw_description(),
					m.career_education()
				)}
				{@render careerEntry(
					m.career_smr_date(),
					m.career_smr_title(),
					"IES Pazo da Mercé",
					"https://www.edu.xunta.gal/centros/iespazomerce/",
					m.career_smr_description(),
					m.career_education()
				)}
			</Timeline.Root>
		</div>
	</section>

	<section id="servizos" class="scroll-mt-20 py-20 lg:py-28">
		<div class="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
			<div class="max-w-2xl">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.nav_services()}</p>
				<Typography.H2 class="mt-4 border-0">{m.home_services_title()}</Typography.H2>
				<Typography.P class="mt-4 text-muted-foreground">{m.home_services_description()}</Typography.P>
			</div>

			<a href={resolve(localizeHref("/servizos") as Pathname)} class={Button.rootVariants({ variant: "outline" })}>{m.home_all_services()}</a>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredServices as service, index (service.href)}
				{@render serviceCard(String(index + 1).padStart(2, "0"), service)}
			{/each}
		</div>

		<Typography.P class="mt-8 max-w-4xl text-muted-foreground">
			{m.home_service_area()}
		</Typography.P>
	</section>

	<section id="proxectos" class="scroll-mt-20 py-20 lg:py-28">
		<div class="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
			<div class="max-w-2xl">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.nav_projects()}</p>
				<Typography.H2 class="mt-4 border-0">{m.home_projects_title()}</Typography.H2>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.home_projects_description()}
				</Typography.P>
			</div>

			<a href={resolve(localizeHref("/proxectos") as Pathname)} class={Button.rootVariants({ variant: "outline" })}>{m.home_all_projects()}</a>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects.filter((project) => project.featured).slice(0, 6) as project, index (project.title)}
				<ProjectCard.Root {project} number={index + 1} />
			{/each}
		</div>
	</section>

	<ContactBanner.Root />
</div>
