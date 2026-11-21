<script lang="ts">
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

<section {id} class="scroll-mt-20 py-20 lg:py-28">
	<div class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
		<div>
			<p class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
			<Typography.H2 class="mt-4 border-0">{title}</Typography.H2>
			<Typography.P class="mt-5 text-muted-foreground">{description}</Typography.P>
		</div>
		<CodeBlock.Root>
			<CodeBlock.Header>
				<CodeBlock.Title>{codeTitle}</CodeBlock.Title>
				<CodeBlock.Actions><CodeBlock.CopyButton value={code} /></CodeBlock.Actions>
			</CodeBlock.Header>
			<CodeBlock.Content {code} wrap />
			{#if footer}<CodeBlock.Footer>{footer}</CodeBlock.Footer>{/if}
		</CodeBlock.Root>
	</div>
</section>
