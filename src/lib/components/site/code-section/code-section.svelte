<script lang="ts">
	import { contentReveal } from "#lib/motion/content-reveal.ts";

	import * as CodeBlock from "#lib/components/ui/code-block/index.ts";
	import * as Typography from "#lib/components/ui/typography/index.ts";

	let {
		kicker,
		title,
		description,
		code,
		codeTitle,
		footer,
		id
	}: {
		kicker: string;
		title: string;
		description: string;
		code: string;
		codeTitle: string;
		footer?: string;
		id?: string;
	} = $props();
</script>

<section
	{id}
	{@attach contentReveal({
		steps: [
			{ target: "[data-content-reveal-copy]", direction: "left", stagger: 0.1 },
			{ target: "[data-content-reveal-code]", direction: "right" }
		]
	})}
	class="scroll-mt-20 py-20 lg:py-28"
>
	<div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
		<div>
			<p data-content-reveal-copy class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
			<Typography.H2 data-content-reveal-copy class="mt-4 border-0">{title}</Typography.H2>
			<Typography.P data-content-reveal-copy class="mt-5 text-muted-foreground">{description}</Typography.P>
		</div>
		<CodeBlock.Root data-content-reveal-code>
			<CodeBlock.Header>
				<CodeBlock.Title>{codeTitle}</CodeBlock.Title>
				<CodeBlock.Actions><CodeBlock.CopyButton value={code} /></CodeBlock.Actions>
			</CodeBlock.Header>
			<CodeBlock.Content {code} wrap />
			{#if footer}<CodeBlock.Footer>{footer}</CodeBlock.Footer>{/if}
		</CodeBlock.Root>
	</div>
</section>
