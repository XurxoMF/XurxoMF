<script lang="ts">
	import SeoHead from "$lib/seo-head.svelte";
	import * as m from "$lib/paraglide/messages.js";
</script>

<SeoHead title={`${m.privacy_title()} | XurxoMF`} description={m.privacy_meta_description()} />

<article>
	<header class="max-w-3xl border-b pb-10">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.legal_information_kicker()}</p>
		<h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{m.privacy_title()}</h1>
		<p class="mt-6 text-lg leading-8 text-muted-foreground">{m.privacy_intro()}</p>
		<p class="mt-5 text-sm text-muted-foreground">
			{m.legal_last_updated()} <time datetime="2026-11-19">{m.legal_updated_date()}</time>
		</p>
	</header>

	<div
		class="mt-12 space-y-12 leading-7 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_li]:text-muted-foreground [&_p]:text-muted-foreground"
	>
		<section>
			<h2>{m.privacy_controller_title()}</h2>
			<p class="mt-4">{m.privacy_controller_intro()}</p>
			<dl class="mt-5 grid gap-3 rounded-xl border bg-card p-5 sm:grid-cols-[10rem_1fr]">
				<dt class="font-semibold">{m.privacy_controller_name_label()}</dt>
				<dd>Xurxo Martínez Ferreira</dd>
				<dt class="font-semibold">{m.privacy_controller_tax_id_label()}</dt>
				<dd>35586748K</dd>
				<dt class="font-semibold">{m.privacy_controller_trade_name_label()}</dt>
				<dd>XurxoMF</dd>
				<dt class="font-semibold">{m.privacy_controller_address_label()}</dt>
				<dd>Laxe 7, Cabreira, Salvaterra de Miño, 36458, Pontevedra, España</dd>
				<dt class="font-semibold">{m.privacy_controller_email_label()}</dt>
				<dd><a href="mailto:xurxomf@xurxomf.xyz">xurxomf@xurxomf.xyz</a></dd>
				<dt class="font-semibold">{m.privacy_controller_phone_label()}</dt>
				<dd><a href="tel:0034686571921">+34 686 57 19 21</a></dd>
			</dl>
		</section>

		<section>
			<h2>{m.privacy_data_title()}</h2>
			<p class="mt-4">{m.privacy_data_description()}</p>
			<ul class="mt-4 list-disc space-y-2 pl-5">
				<li>{m.privacy_data_contact()}</li>
				<li>{m.privacy_data_professional()}</li>
				<li>{m.privacy_data_technical()}</li>
			</ul>
		</section>

		<section>
			<h2>{m.privacy_purposes_title()}</h2>
			<ul class="mt-4 list-disc space-y-3 pl-5">
				<li>{m.privacy_purpose_inquiries()}</li>
				<li>{m.privacy_purpose_services()}</li>
				<li>{m.privacy_purpose_obligations()}</li>
				<li>{m.privacy_purpose_security()}</li>
			</ul>
			<p class="mt-4">{m.privacy_newsletter_notice()}</p>
		</section>

		<section>
			<h2>{m.privacy_recipients_title()}</h2>
			<p class="mt-4">{m.privacy_recipients_intro()}</p>
			<ul class="mt-4 list-disc space-y-2 pl-5">
				<li>{m.privacy_recipient_cloudflare()}</li>
				<li>{m.privacy_recipient_crm()}</li>
				<li>{m.privacy_recipient_meta()}</li>
				<li>{m.privacy_recipient_authorities()}</li>
			</ul>
		</section>

		<section>
			<h2>{m.privacy_transfers_title()}</h2>
			<p class="mt-4">{m.privacy_transfers_description()}</p>
		</section>

		<section>
			<h2>{m.privacy_retention_title()}</h2>
			<p class="mt-4">{m.privacy_retention_description()}</p>
		</section>

		<section>
			<h2>{m.privacy_rights_title()}</h2>
			<p class="mt-4">{m.privacy_rights_description()}</p>
			<p class="mt-4">{m.privacy_rights_contact()}</p>
			<p class="mt-4">
				{m.privacy_rights_aepd()} <a href="https://www.aepd.es/" target="_blank" rel="external noreferrer">www.aepd.es</a>.
			</p>
		</section>

		<section>
			<h2>{m.privacy_security_title()}</h2>
			<p class="mt-4">{m.privacy_security_description()}</p>
		</section>

		<section>
			<h2>{m.privacy_changes_title()}</h2>
			<p class="mt-4">{m.privacy_changes_description()}</p>
		</section>
	</div>
</article>
