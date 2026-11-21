<script lang="ts">
	import { AlertInfoIcon, CheckIcon } from "#lib/icons.ts";
	import * as m from "#lib/paraglide/messages.js";

	import * as FeatureCard from "#lib/components/site/feature-card/index.ts";
	import * as ProblemSection from "#lib/components/site/problem-section/index.ts";

	let { problem, audience, description }: { problem: string; audience: string; description?: string } = $props();
</script>

<aside aria-label={m.service_page_overview_label()}>
	<ProblemSection.Root kicker={m.service_page_problem_kicker()} title={m.service_page_overview_label()} {description}>
		<div class="grid gap-5 lg:grid-cols-2">
			<FeatureCard.Root title={m.service_page_problem_title()} description={problem}>
				{#snippet icon()}<AlertInfoIcon class="size-6" aria-hidden="true" />{/snippet}
			</FeatureCard.Root>
			<FeatureCard.Root title={m.service_page_audience_title()} description={audience}>
				{#snippet icon()}<CheckIcon class="size-6" aria-hidden="true" />{/snippet}
			</FeatureCard.Root>
		</div>
	</ProblemSection.Root>
</aside>
