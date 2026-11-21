<script lang="ts">
	import SeoHead from "#lib/seo-head.svelte";
	import * as m from "#lib/paraglide/messages.js";
</script>

<SeoHead title={`${m.legal_notice_title()} | XurxoMF`} description={m.legal_notice_meta_description()} />

<article>
	<header class="max-w-3xl border-b pb-10">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.legal_information_kicker()}</p>
		<h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{m.legal_notice_title()}</h1>
		<p class="mt-6 text-lg leading-8 text-muted-foreground">{m.legal_notice_intro()}</p>
		<p class="mt-5 text-sm text-muted-foreground">
			{m.legal_last_updated()} <time datetime="2026-11-19">{m.legal_updated_date()}</time>
		</p>
	</header>

	<div
		class="mt-12 space-y-12 leading-7 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_p]:text-muted-foreground"
	>
		<section>
			<h2>{m.legal_notice_owner_title()}</h2>
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
				<dt class="font-semibold">{m.legal_notice_domain_label()}</dt>
				<dd><a href="https://xurxomf.xyz">xurxomf.xyz</a></dd>
			</dl>
			<p class="mt-4">{m.legal_notice_registry()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_purpose_title()}</h2>
			<p class="mt-4">{m.legal_notice_purpose_description()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_use_title()}</h2>
			<p class="mt-4">{m.legal_notice_use_description()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_ip_title()}</h2>
			<p class="mt-4">{m.legal_notice_ip_own()}</p>
			<p class="mt-4">{m.legal_notice_ip_third_party()}</p>
			<p class="mt-4">{m.legal_notice_ip_software()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_liability_title()}</h2>
			<p class="mt-4">{m.legal_notice_liability_description()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_links_title()}</h2>
			<p class="mt-4">{m.legal_notice_links_description()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_privacy_title()}</h2>
			<p class="mt-4">{m.legal_notice_privacy_description()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_law_title()}</h2>
			<p class="mt-4">{m.legal_notice_law_description()}</p>
		</section>

		<section>
			<h2>{m.legal_notice_changes_title()}</h2>
			<p class="mt-4">{m.legal_notice_changes_description()}</p>
		</section>
	</div>
</article>
