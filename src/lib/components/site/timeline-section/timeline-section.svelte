<script lang="ts">
	import * as Timeline from "#lib/components/ui/timeline/index.ts";
	import * as Typography from "#lib/components/ui/typography/index.ts";

	type Event = { date: string; title: string; description: string };

	let { kicker, title, description, events }: { kicker: string; title: string; description?: string; events: Event[] } = $props();
</script>

<section class="grid gap-12 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:py-28">
	<div class="lg:sticky lg:top-24 lg:self-start">
		<p class="text-sm font-semibold tracking-widest text-primary uppercase">{kicker}</p>
		<Typography.H2 class="mt-4 border-0">{title}</Typography.H2>
		{#if description}<Typography.P class="mt-5 text-muted-foreground">{description}</Typography.P>{/if}
	</div>
	<Timeline.Root role="list">
		{#each events as event (event.title)}
			<Timeline.Item role="listitem">
				<Timeline.Separator aria-hidden="true" />
				<Timeline.Content>
					<Timeline.Date>{event.date}</Timeline.Date>
					<Timeline.Title>{event.title}</Timeline.Title>
					<Timeline.Description>{event.description}</Timeline.Description>
				</Timeline.Content>
			</Timeline.Item>
		{/each}
	</Timeline.Root>
</section>
