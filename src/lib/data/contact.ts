import * as m from "#lib/paraglide/messages.js";

export const contact = {
	email: {
		label: "xurxomf@xurxomf.xyz",
		href: "mailto:xurxomf@xurxomf.xyz"
	},
	phone: {
		label: "+34 686 57 19 21",
		href: "tel:0034686571921"
	},
	location: m.contact_location_value(),
	socials: {
		whatsapp: {
			label: "WhatsApp",
			href: "https://wa.me/34686571921"
		},
		linkedin: {
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/xurxomf/"
		},
		instagram: {
			label: "Instagram",
			href: "https://www.instagram.com/xurxomf/"
		},
		facebook: {
			label: "Facebook",
			href: "https://www.facebook.com/xurxomf"
		},
		github: {
			label: "GitHub",
			href: "https://github.com/XurxoMF"
		}
	}
} as const;
