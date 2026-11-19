import type { Pathname } from "$app/types";

import * as m from "$lib/paraglide/messages.js";

export type Service = {
	title: string;
	shortDescription: string;
	image: string;
	href: Pathname;
	featured: boolean;
};

export const services: Service[] = [
	{
		title: m.service_web_title(),
		shortDescription: m.service_web_short(),
		image: "/images/services/desenvolvemento-web.webp",
		href: "/servizos/desenvolvemento-web",
		featured: true
	},
	{
		title: m.service_ecommerce_title(),
		shortDescription: m.service_ecommerce_short(),
		image: "/images/services/tendas-online.webp",
		href: "/servizos/tendas-online",
		featured: true
	},
	{
		title: m.service_custom_software_title(),
		shortDescription: m.service_custom_software_short(),
		image: "/images/services/software-medida.webp",
		href: "/servizos/software-medida",
		featured: true
	},
	{
		title: m.service_apps_title(),
		shortDescription: m.service_apps_short(),
		image: "/images/services/aplicacions.webp",
		href: "/servizos/aplicacions",
		featured: true
	},
	{
		title: m.service_bots_title(),
		shortDescription: m.service_automation_short(),
		image: "/images/services/bots-automatizacions.webp",
		href: "/servizos/bots-automatizacions",
		featured: false
	},
	{
		title: m.service_it_title(),
		shortDescription: m.service_it_short(),
		image: "/images/services/soporte-informatico.webp",
		href: "/servizos/soporte-informatico",
		featured: true
	},
	{
		title: m.service_maintenance_title(),
		shortDescription: m.service_it_maintenance_short(),
		image: "/images/services/mantemento-informatico.webp",
		href: "/servizos/mantemento-informatico",
		featured: true
	}
];
