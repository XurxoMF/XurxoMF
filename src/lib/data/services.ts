import type { Pathname } from "$app/types";

import * as m from "$lib/paraglide/messages.js";

export type Service = {
	title: string;
	shortDescription: string;
	href: Pathname;
	featured: boolean;
};

export const services: Service[] = [
	{
		title: m.service_web_title(),
		shortDescription: m.service_web_short(),
		href: "/servizos/desenvolvemento-web",
		featured: true
	},
	{
		title: m.service_ecommerce_title(),
		shortDescription: m.service_ecommerce_short(),
		href: "/servizos/tendas-online",
		featured: true
	},
	{
		title: m.service_custom_software_title(),
		shortDescription: m.service_custom_software_short(),
		href: "/servizos/software-medida",
		featured: true
	},
	{
		title: m.service_apps_title(),
		shortDescription: m.service_apps_short(),
		href: "/servizos/aplicacions",
		featured: true
	},
	{
		title: m.service_bots_title(),
		shortDescription: m.service_automation_short(),
		href: "/servizos/bots-automatizacions",
		featured: false
	},
	{
		title: m.service_it_title(),
		shortDescription: m.service_it_short(),
		href: "/servizos/soporte-informatico",
		featured: true
	},
	{
		title: m.service_maintenance_title(),
		shortDescription: m.service_it_maintenance_short(),
		href: "/servizos/mantemento-informatico",
		featured: true
	}
];
