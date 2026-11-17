<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "$lib/utils";

	export type RootProps = WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement>;
</script>

<script lang="ts">
	import { contact } from "$lib/data/contact";

	import { FacebookIcon, InstagramIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "$lib/icons";
	import * as m from "$lib/paraglide/messages.js";

	import { cn } from "$lib/utils";

	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Typography from "$lib/components/ui/typography";

	let { ref = $bindable(null), id = "contacto", class: className, ...restProps }: RootProps = $props();
</script>

<section bind:this={ref} {id} data-slot="contact-banner" class={cn("scroll-mt-20 py-20 lg:py-28", className)} {...restProps}>
	<Card.Root class="overflow-hidden bg-muted/60 dark:bg-muted/40">
		<Card.Content class="grid gap-10 py-8 md:px-10 md:py-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
			<div class="max-w-2xl">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.nav_contact()}</p>
				<Typography.H2 class="mt-4 border-0">{m.contact_banner_title()}</Typography.H2>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.contact_banner_description()}
				</Typography.P>

				<div class="mt-8 flex flex-wrap gap-3">
					<a
						href={contact.email.href}
						rel="external"
						class={Button.rootVariants({ variant: "outline", size: "icon-lg", class: "rounded-full" })}
						aria-label={m.contact_email_label()}
						title={m.contact_email_title()}
					>
						<MailIcon aria-hidden="true" />
					</a>
					<a
						href={contact.socials.whatsapp.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "icon-lg", class: "rounded-full" })}
						aria-label={m.contact_whatsapp_label()}
						title="WhatsApp"
					>
						<WhatsAppIcon aria-hidden="true" />
					</a>
					<a
						href={contact.socials.linkedin.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "icon-lg", class: "rounded-full" })}
						aria-label={m.contact_linkedin_label()}
						title="LinkedIn"
					>
						<LinkedInIcon aria-hidden="true" />
					</a>
					<a
						href={contact.socials.instagram.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "icon-lg", class: "rounded-full" })}
						aria-label={m.contact_instagram_label()}
						title="Instagram"
					>
						<InstagramIcon aria-hidden="true" />
					</a>
					<a
						href={contact.socials.facebook.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "icon-lg", class: "rounded-full" })}
						aria-label={m.contact_facebook_label()}
						title="Facebook"
					>
						<FacebookIcon aria-hidden="true" />
					</a>
				</div>
			</div>

			<div class="rounded-2xl border bg-background/70 p-6 backdrop-blur-sm">
				<p class="font-medium">{m.contact_now()}</p>
				<p class="mt-2 text-sm leading-6 text-muted-foreground">{m.contact_availability()}</p>

				<dl class="mt-6 grid gap-4 border-t pt-6 text-sm">
					<div class="flex items-center justify-between gap-4">
						<dt class="text-muted-foreground">{m.contact_response_label()}</dt>
						<dd class="font-medium">{m.contact_response_value()}</dd>
					</div>
					<div class="flex items-center justify-between gap-4">
						<dt class="text-muted-foreground">{m.contact_location_label()}</dt>
						<dd class="text-right font-medium">{contact.location}</dd>
					</div>
				</dl>
			</div>
		</Card.Content>
	</Card.Root>
</section>
