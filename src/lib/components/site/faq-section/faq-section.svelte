<script lang="ts" module>
	export type Item = {
		question: string;
		answer: string;
	};

	export type RootProps = {
		faqs: Item[];
	};
</script>

<script lang="ts">
	import { contentRevealEach } from "#lib/motion/content-reveal.ts";
	import * as m from "#lib/paraglide/messages.js";

	import * as ProblemSection from "#lib/components/site/problem-section/index.ts";

	let { faqs }: RootProps = $props();
</script>

<ProblemSection.Root kicker={m.service_page_faq_kicker()} title={m.service_page_faq_title()} animateBody={false}>
	<div {@attach contentRevealEach({ target: "children", direction: "right", stagger: 0 })} class="grid gap-3">
		{#each faqs as faq (faq.question)}
			<details class="rounded-xl border bg-card px-5 py-4 open:pb-5">
				<summary class="cursor-pointer font-semibold">{faq.question}</summary>
				<p class="mt-3 leading-7 text-muted-foreground">{faq.answer}</p>
			</details>
		{/each}
	</div>
</ProblemSection.Root>
