<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "#lib/utils.ts";

	export type RootProps = WithElementRef<HTMLAttributes<HTMLElement>, HTMLElement>;
</script>

<script lang="ts">
	import * as m from "#lib/paraglide/messages.js";

	import { cn } from "#lib/utils.ts";
	import { contentReveal } from "#lib/motion/content-reveal.ts";

	import * as Button from "#lib/components/ui/button/index.ts";
	import * as Typography from "#lib/components/ui/typography/index.ts";

	let { ref = $bindable(null), class: className, ...restProps }: RootProps = $props();
</script>

<section
	bind:this={ref}
	data-slot="wtflow-banner"
	{@attach contentReveal({
		steps: [
			{ target: "[data-content-reveal-logo]", direction: "left" },
			{ target: "[data-content-reveal-copy]", direction: "right", stagger: 0.1 }
		]
	})}
	class={cn("mx-auto w-full max-w-6xl px-6 pt-20 lg:pt-28", className)}
	{...restProps}
>
	<div class="grid overflow-hidden rounded-[2rem] bg-[#f9d241] text-black shadow-xl shadow-black/5 lg:grid-cols-[0.75fr_1.25fr]">
		<a
			data-content-reveal-logo
			href="https://wtflow.gal/"
			target="_blank"
			rel="external noreferrer"
			aria-label={m.wtflow_visit_label()}
			class="grid min-h-64 place-items-center border-b border-black/15 p-8 transition-colors hover:bg-white/15 lg:border-r lg:border-b-0"
		>
			<img src="/images/brands/wtflow-logo.webp" alt="What The Flow" width="400" height="212" loading="lazy" class="h-auto w-full max-w-64" />
		</a>

		<div class="p-8 sm:p-10 lg:p-12">
			<p data-content-reveal-copy class="text-sm font-semibold tracking-widest text-black/60 uppercase">{m.wtflow_kicker()}</p>
			<Typography.H2 data-content-reveal-copy class="mt-4 border-0 text-black">{m.wtflow_title()}</Typography.H2>
			<Typography.P data-content-reveal-copy class="mt-5 max-w-2xl text-black/70">
				{m.wtflow_description()}
			</Typography.P>
			<a
				data-content-reveal-copy
				href="https://wtflow.gal/"
				target="_blank"
				rel="external noreferrer"
				class={Button.rootVariants({ size: "lg", class: "mt-7" })}
			>
				{m.wtflow_action()}
			</a>
		</div>
	</div>
</section>
