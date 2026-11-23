<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "#lib/utils.ts";

	export type RootProps = WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement>;
</script>

<script lang="ts">
	import { contact } from "#lib/data/contact.ts";

	import { FacebookIcon, InstagramIcon, LinkedInIcon } from "#lib/icons.ts";
	import * as m from "#lib/paraglide/messages.js";

	import { cn } from "#lib/utils.ts";

	import * as Button from "#lib/components/ui/button/index.ts";
	import * as Card from "#lib/components/ui/card/index.ts";
	import * as Typography from "#lib/components/ui/typography/index.ts";

	let { ref = $bindable(null), id = "contacto", class: className, ...restProps }: RootProps = $props();
</script>

<section bind:this={ref} {id} data-slot="contact-banner" class={cn("scroll-mt-20 py-20 lg:py-28", className)} {...restProps}>
	<Card.Root class="overflow-hidden bg-muted/60 dark:bg-muted/40">
		<Card.Content class="grid gap-10 py-8 md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
			<div class="max-w-2xl">
				<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.nav_contact()}</p>
				<Typography.H2 class="mt-4 border-0">{m.contact_banner_title()}</Typography.H2>
				<Typography.P class="mt-4 text-muted-foreground">
					{m.contact_banner_description()}
				</Typography.P>
			</div>

			<div>
				<p class="text-sm font-semibold tracking-widest text-muted-foreground uppercase">{m.layout_direct_contact()}</p>
				<div class="mt-3 border-y">
					<a class="group flex flex-col gap-1 py-4" href={contact.email.href} rel="external">
						<span class="text-xs font-medium text-muted-foreground">{m.contact_email_title()}</span>
						<span class="w-fit font-medium underline-offset-4 group-hover:text-primary group-hover:underline">{contact.email.label}</span>
					</a>
					<a class="group flex flex-col gap-1 border-t py-4" href={contact.phone.href} rel="external">
						<span class="text-xs font-medium text-muted-foreground">{m.contact_phone_title()}</span>
						<span class="w-fit font-medium underline-offset-4 group-hover:text-primary group-hover:underline">{contact.phone.label}</span>
					</a>
					<a class="group flex flex-col gap-1 border-t py-4" href={contact.socials.whatsapp.href} target="_blank" rel="external noreferrer">
						<span class="text-xs font-medium text-muted-foreground">WhatsApp</span>
						<span class="w-fit font-medium underline-offset-4 group-hover:text-primary group-hover:underline">{contact.phone.label}</span>
					</a>
				</div>
			</div>
		</Card.Content>

		<Card.Footer class="px-6 py-5 md:px-10">
			<div class="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<p class="text-sm font-medium">{m.contact_socials_title()}</p>
				<div class="flex flex-wrap gap-2">
					<a
						href={contact.socials.linkedin.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "sm", class: "rounded-full" })}
						aria-label={m.contact_linkedin_label()}
					>
						<LinkedInIcon aria-hidden="true" />
						{contact.socials.linkedin.label}
					</a>
					<a
						href={contact.socials.instagram.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "sm", class: "rounded-full" })}
						aria-label={m.contact_instagram_label()}
					>
						<InstagramIcon aria-hidden="true" />
						{contact.socials.instagram.label}
					</a>
					<a
						href={contact.socials.facebook.href}
						target="_blank"
						rel="external noreferrer"
						class={Button.rootVariants({ variant: "outline", size: "sm", class: "rounded-full" })}
						aria-label={m.contact_facebook_label()}
					>
						<FacebookIcon aria-hidden="true" />
						{contact.socials.facebook.label}
					</a>
				</div>
			</div>
		</Card.Footer>
	</Card.Root>
</section>
