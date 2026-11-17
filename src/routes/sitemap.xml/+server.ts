import type { RequestHandler } from "./$types";

import { projects } from "$lib/data/projects";

const siteOrigin = "https://xurxomf.xyz";
const paths = ["/", "/proxectos", ...projects.flatMap((project) => (project.href ? [project.href] : []))];

export const prerender = true;

/** Returns the public URLs as a prerendered XML sitemap. */
export const GET: RequestHandler = () => {
	const urls = [...new Set(paths)].map((path) => `\t<url><loc>${new URL(path, siteOrigin).href}</loc></url>`).join("\n");

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
		headers: {
			"Cache-Control": "public, max-age=0, s-maxage=86400",
			"Content-Type": "application/xml"
		}
	});
};
