<script lang="ts">
	import { page } from "$app/state";

	import { getLocale, localizeHref, locales } from "$lib/paraglide/runtime";

	type OpenGraphType = "website" | "article";
	type Locale = (typeof locales)[number];

	let {
		title,
		description,
		image = "/images/services/desenvolvemento-web.webp",
		imageAlt = title,
		type = "website",
		structuredData,
		noIndex = false
	}: {
		title: string;
		description: string;
		image?: string;
		imageAlt?: string;
		type?: OpenGraphType;
		structuredData?: unknown;
		noIndex?: boolean;
	} = $props();

	const SITE_ORIGIN = "https://xurxomf.xyz";
	const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
		gl: "gl_ES",
		es: "es_ES",
		en: "en_GB"
	};

	const locale = $derived(getLocale());
	const url = $derived(new URL(localizeHref(page.url.pathname, { locale }), SITE_ORIGIN).href);
	const imageUrl = $derived(new URL(image, SITE_ORIGIN).href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if noIndex}<meta name="robots" content="noindex, follow" />{/if}

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={imageAlt} />
	<meta property="og:site_name" content="XurxoMF" />
	<meta property="og:locale" content={OPEN_GRAPH_LOCALES[locale]} />
	{#each locales.filter((alternative) => alternative !== locale) as alternative (alternative)}
		<meta property="og:locale:alternate" content={OPEN_GRAPH_LOCALES[alternative]} />
	{/each}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	{#if structuredData}
		<svelte:element this={"script"} type="application/ld+json">{JSON.stringify(structuredData)}</svelte:element>
	{/if}
</svelte:head>
