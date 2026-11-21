import type { RequestHandler } from "./$types";

import { projects } from "#lib/data/projects.ts";
import { services } from "#lib/data/services.ts";
import { baseLocale, localizeHref, locales } from "#lib/paraglide/runtime.js";

const siteOrigin = "https://xurxomf.xyz";
const paths = [
	"/",
	"/servizos",
	...services.map((service) => service.href),
	"/proxectos",
	...projects.flatMap((project) => (project.href ? [project.href] : [])),
	"/privacidade",
	"/cookies",
	"/aviso-legal"
];

export const prerender = true;

function escapeXml(value: string) {
	return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("'", "&apos;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function absoluteUrl(path: string, locale: (typeof locales)[number]) {
	return escapeXml(new URL(localizeHref(path, { locale }), siteOrigin).href);
}

/** Returns the public URLs as a prerendered XML sitemap. */
export const GET: RequestHandler = () => {
	const urls = [...new Set(paths)]
		.flatMap((path) => {
			const alternatives = locales
				.map((locale) => `\t\t<xhtml:link rel="alternate" hreflang="${locale}" href="${absoluteUrl(path, locale)}" />`)
				.concat(`\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(path, baseLocale)}" />`)
				.join("\n");

			return locales.map((locale) => {
				const location = absoluteUrl(path, locale);

				// lastmod is intentionally omitted until it can be backed by a real content update date.
				return `\t<url>\n\t\t<loc>${location}</loc>\n${alternatives}\n\t</url>`;
			});
		})
		.join("\n");

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
		{
			headers: {
				"Cache-Control": "public, max-age=0, s-maxage=86400",
				"Content-Type": "application/xml; charset=utf-8"
			}
		}
	);
};
