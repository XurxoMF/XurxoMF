import type { RouteId } from "$app/types";

import * as m from "$lib/paraglide/messages.js";

export type ProjectLink = {
	label: string;
	href: string;
};

export type Project = {
	title: string;
	description: string;
	technologies: string[];
	image?: {
		src: string;
		alt: string;
		fit?: "cover" | "contain";
	};
	href?: RouteId;
	externalLinks: ProjectLink[];
	featured: boolean;
};

export const projects: Project[] = [
	{
		title: "VS Launcher",
		description: m.project_vs_launcher_description(),
		technologies: ["Electron", "React", "TypeScript", "Tailwind CSS", "i18next"],
		image: {
			src: "/images/projects/vs-launcher/main.png",
			alt: m.vsl_hero_alt()
		},
		href: "/proxectos/vs-launcher",
		externalLinks: [
			{ label: "GitHub", href: "https://github.com/XurxoMF/vs-launcher" },
			{ label: m.project_link_documentation(), href: "https://vsldocs.xurxomf.xyz/" }
		],
		featured: true
	},
	{
		title: "VSDS",
		description: m.project_vsds_description(),
		technologies: ["Docker", "Shell", "Docker Hub", "Linux"],
		image: {
			src: "/images/projects/vsds/banner.png",
			alt: m.vsds_card_alt()
		},
		href: "/proxectos/vsds",
		externalLinks: [
			{ label: "GitHub", href: "https://github.com/XurxoMF/vsds" },
			{ label: "Wiki", href: "https://github.com/XurxoMF/vsds/wiki" },
			{ label: "Docker Hub", href: "https://hub.docker.com/r/xurxomf/vsds" }
		],
		featured: false
	},
	{
		title: "xvelte",
		description: m.project_xvelte_description(),
		technologies: ["Svelte 5", "SvelteKit", "TypeScript", "Tailwind CSS", "Tauri"],
		image: {
			src: "/images/projects/xvelte/banner.png",
			alt: m.xvelte_hero_alt()
		},
		href: "/proxectos/xvelte",
		externalLinks: [
			{ label: m.project_link_documentation(), href: "https://xvelte.xurxomf.xyz/" },
			{ label: "GitHub", href: "https://github.com/XurxoMF/xvelte" }
		],
		featured: true
	},
	{
		title: "Gallaecia Dots",
		description: m.project_gallaecia_description(),
		technologies: ["Arch Linux", "Bash", "Hyprland", "Noctalia", "Gum"],
		image: {
			src: "/images/projects/gallaecia-dots/claro.jpg",
			alt: m.gallaecia_gallery_light_alt()
		},
		href: "/proxectos/gallaecia-dots",
		externalLinks: [{ label: "GitHub", href: "https://github.com/XurxoMF/gallaecia-dots" }],
		featured: true
	},
	{
		title: "Liporca",
		description: m.project_liporca_description(),
		technologies: ["WordPress", "WooCommerce", "PHP", "JavaScript", "TranslatePress"],
		image: {
			src: "/images/projects/liporca/botellas.jpg",
			alt: m.liporca_hero_alt()
		},
		href: "/proxectos/liporca",
		externalLinks: [{ label: "Web", href: "https://liporca.com/" }],
		featured: true
	},
	{
		title: "AserGalicia Formación",
		description: m.project_asergalicia_description(),
		technologies: ["WordPress", m.project_custom_theme(), "PHP", "JavaScript"],
		image: {
			src: "/images/projects/asergalicia-formacion/hero.png",
			alt: m.aser_hero_alt()
		},
		href: "/proxectos/asergalicia-formacion",
		externalLinks: [{ label: "Web", href: "https://asergaliciaformacion.com/" }],
		featured: true
	},
	{
		title: "Power Natural Life",
		description: m.project_power_natural_life_description(),
		technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
		image: {
			src: "/images/projects/power-natural-life/hero.png",
			alt: m.power_natural_life_image_alt()
		},
		href: "/proxectos/power-natural-life",
		externalLinks: [{ label: "Web", href: "https://powernaturallife.com/" }],
		featured: true
	},
	{
		title: "Modereta",
		description: m.project_modereta_description(),
		technologies: ["Bun", "TypeScript", "discord.js", "PostgreSQL", "Drizzle", "Docker"],
		image: {
			src: "/images/projects/modereta/banner.png",
			alt: m.modereta_card_alt()
		},
		href: "/proxectos/modereta",
		externalLinks: [{ label: "GitHub", href: "https://github.com/XurxoMF/modereta" }],
		featured: false
	},
	{
		title: "Underground Mines",
		description: m.project_underground_mines_description(),
		technologies: ["C#", ".NET", "Vintage Story API", "JSON"],
		image: {
			src: "/images/projects/underground-mines/hero.png",
			alt: m.underground_mines_gallery_interior_alt()
		},
		href: "/proxectos/underground-mines",
		externalLinks: [{ label: "GitHub", href: "https://github.com/XurxoMF/UndergroundMines" }],
		featured: false
	}
];
