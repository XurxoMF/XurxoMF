<script lang="ts">
	import SeoHead from "#lib/seo-head.svelte";
	import { contentReveal } from "#lib/motion/content-reveal.ts";
	import * as m from "#lib/paraglide/messages.js";
</script>

<SeoHead title={`${m.cookies_title()} | XurxoMF`} description={m.cookies_meta_description()} />

<article>
	<header
		{@attach contentReveal({ steps: [{ target: "children", direction: "left", stagger: 0.1 }], start: "top 92%" })}
		class="max-w-3xl border-b pb-10"
	>
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{m.legal_information_kicker()}</p>
		<h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{m.cookies_title()}</h1>
		<p class="mt-6 text-lg leading-8 text-muted-foreground">{m.cookies_intro()}</p>
		<p class="mt-5 text-sm text-muted-foreground">
			{m.legal_last_updated()} <time datetime="2026-11-19">{m.legal_updated_date()}</time>
		</p>
	</header>

	<div
		class="mt-12 space-y-12 leading-7 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-4 [&_a:hover]:underline [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_li]:text-muted-foreground [&_p]:text-muted-foreground"
	>
		<section {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })}>
			<h2>{m.cookies_definition_title()}</h2>
			<p class="mt-4">{m.cookies_definition_description()}</p>
		</section>

		<section {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })}>
			<h2>{m.cookies_current_title()}</h2>
			<p class="mt-4">{m.cookies_current_description()}</p>
			<div class="mt-5 overflow-x-auto rounded-xl border">
				<table class="w-full min-w-2xl text-left text-sm">
					<thead class="border-b bg-muted/50">
						<tr>
							<th class="p-4 font-semibold">{m.cookies_table_name()}</th>
							<th class="p-4 font-semibold">{m.cookies_table_type()}</th>
							<th class="p-4 font-semibold">{m.cookies_table_purpose()}</th>
							<th class="p-4 font-semibold">{m.cookies_table_duration()}</th>
						</tr>
					</thead>
					<tbody class="divide-y">
						<tr>
							<td class="p-4 font-mono text-xs">mode-watcher-mode</td>
							<td class="p-4">localStorage</td>
							<td class="p-4 text-muted-foreground">{m.cookies_theme_purpose()}</td>
							<td class="p-4 text-muted-foreground">{m.cookies_persistent_duration()}</td>
						</tr>
						<tr>
							<td class="p-4 font-mono text-xs">xurxomf-cookie-notice</td>
							<td class="p-4">localStorage</td>
							<td class="p-4 text-muted-foreground">{m.cookies_notice_purpose()}</td>
							<td class="p-4 text-muted-foreground">{m.cookies_persistent_duration()}</td>
						</tr>
						<tr>
							<td class="p-4">Cloudflare</td>
							<td class="p-4">{m.cookies_technical_type()}</td>
							<td class="p-4 text-muted-foreground">{m.cookies_cloudflare_purpose()}</td>
							<td class="p-4 text-muted-foreground">{m.cookies_cloudflare_duration()}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

		<section {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })}>
			<h2>{m.cookies_analytics_title()}</h2>
			<p class="mt-4">{m.cookies_analytics_description()}</p>
		</section>

		<section {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })}>
			<h2>{m.cookies_legal_basis_title()}</h2>
			<p class="mt-4">{m.cookies_legal_basis_description()}</p>
		</section>

		<section {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })}>
			<h2>{m.cookies_management_title()}</h2>
			<p class="mt-4">{m.cookies_management_description()}</p>
		</section>

		<section {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })}>
			<h2>{m.cookies_changes_title()}</h2>
			<p class="mt-4">{m.cookies_changes_description()}</p>
		</section>

		<section {@attach contentReveal({ steps: [{ target: "children", stagger: 0.08 }] })}>
			<h2>{m.cookies_contact_title()}</h2>
			<p class="mt-4">{m.cookies_contact_description()} <a href="mailto:xurxomf@xurxomf.xyz">xurxomf@xurxomf.xyz</a>.</p>
		</section>
	</div>
</article>
