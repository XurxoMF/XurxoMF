<script lang="ts">
	import { resolve } from "$app/paths";

	import SeoHead from "#lib/seo-head.svelte";
	import { toResolvablePath } from "#lib/site/routing.ts";
	import { contentReveal } from "#lib/motion/content-reveal.ts";
	import * as m from "#lib/paraglide/messages.js";
	import { localizeHref } from "#lib/paraglide/runtime.js";

	import * as Button from "#lib/components/ui/button/index.ts";
	import * as Typography from "#lib/components/ui/typography/index.ts";

	let { status }: { status: number } = $props();

	const notFound = $derived(status === 404);
	const title = $derived(notFound ? m.error_404_title() : m.error_generic_title());
	const description = $derived(notFound ? m.error_404_description() : m.error_generic_description());
	const metaTitle = $derived(notFound ? m.error_404_meta_title() : m.error_generic_meta_title());
</script>

<SeoHead title={metaTitle} {description} noIndex />

<section
	{@attach contentReveal({ steps: [{ target: "[data-error-content] > *", stagger: 0.1 }], start: "top 92%" })}
	class="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-24"
>
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div class="absolute top-1/2 left-1/2 size-136 -translate-1/2 rounded-full bg-primary/10 blur-3xl"></div>
	</div>

	<div data-error-content class="mx-auto w-full max-w-3xl text-center">
		<p class="font-mono text-sm font-semibold tracking-[0.3em] text-primary uppercase">Erro {status}</p>
		<Typography.H1 class="mt-5 text-4xl sm:text-6xl">{title}</Typography.H1>
		<Typography.Leading class="mx-auto mt-6 max-w-2xl">{description}</Typography.Leading>

		<div class="mt-10 flex justify-center">
			<a href={resolve(toResolvablePath(localizeHref("/")))} class={Button.rootVariants({ size: "lg" })}>{m.error_back_home()}</a>
		</div>
	</div>
</section>
