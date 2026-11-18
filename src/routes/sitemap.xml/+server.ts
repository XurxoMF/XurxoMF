import type { RequestHandler } from "./$types";

import { projects } from "$lib/data/projects";
import { services } from "$lib/data/services";
import { baseLocale, localizeHref, locales } from "$lib/paraglide/runtime";

const siteOrigin = "https://xurxomf.xyz";
const paths = [
	"/",
	"/servizos",
	...services.map((service) => service.href),
	"/proxectos",
	...projects.flatMap((project) => (project.href ? [project.href] : []))
];

export const prerender = true;

/** Returns the public URLs as a prerendered XML sitemap. */
export const GET: RequestHandler = () => {
	const urls = [...new Set(paths)]
		.flatMap((path) => {
			const alternatives = locales
				.map((locale) => `\t\t<xhtml:link rel="alternate" hreflang="${locale}" href="${new URL(localizeHref(path, { locale }), siteOrigin).href}" />`)
				.concat(
					`\t\t<xhtml:link rel="alternate" hreflang="x-default" href="${new URL(localizeHref(path, { locale: baseLocale }), siteOrigin).href}" />`
				)
				.join("\n");

			return locales.map((locale) => {
				const location = new URL(localizeHref(path, { locale }), siteOrigin).href;
				return `\t<url>\n\t\t<loc>${location}</loc>\n${alternatives}\n\t</url>`;
			});
		})
		.join("\n");

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
		{
			headers: {
				"Cache-Control": "public, max-age=0, s-maxage=86400",
				"Content-Type": "application/xml"
			}
		}
	);
};
