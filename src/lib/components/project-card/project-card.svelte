<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";
	import type { Project } from "$lib/data/projects";
	import type { WithElementRef } from "$lib/utils";

	export type RootProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
		project: Project;
		number: number;
	};
</script>

<script lang="ts">
	import { resolve } from "$app/paths";
	import * as m from "$lib/paraglide/messages.js";

	import { cn } from "$lib/utils";

	import * as Badge from "$lib/components/ui/badge";
	import * as Button from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";

	let { ref = $bindable(null), project, number, class: className, ...restProps }: RootProps = $props();
</script>

<Card.Root bind:ref data-slot="project-card" class={cn("h-full transition-transform duration-200 hover:-translate-y-1", className)} {...restProps}>
	{#if project.image}
		<div class="mx-4 aspect-video overflow-hidden rounded-xl bg-muted">
			<img
				src={project.image.src}
				alt={project.image.alt}
				loading="lazy"
				decoding="async"
				class:object-contain={project.image.fit === "contain"}
				class:object-cover={project.image.fit !== "contain"}
				class="size-full"
			/>
		</div>
	{:else}
		<div
			role="img"
			aria-label={m.project_card_image_placeholder({ title: project.title })}
			class="mx-4 aspect-video rounded-xl bg-pink-200 dark:bg-pink-950"
		></div>
	{/if}

	<Card.Header>
		<Card.Title role="heading" aria-level={3}>{project.title}</Card.Title>
		<Card.Description>{project.description}</Card.Description>
	</Card.Header>

	<Card.Content class="mt-auto flex flex-wrap gap-2">
		{#each project.technologies as technology (technology)}
			<Badge.Root variant="secondary">{technology}</Badge.Root>
		{/each}
	</Card.Content>

	<Card.Footer class="justify-between">
		<span class="text-sm text-muted-foreground">{number.toString().padStart(2, "0")}</span>
		{#if project.href}
			<a href={resolve(project.href)} class={Button.rootVariants({ variant: "ghost", size: "sm" })}>{m.project_card_view()}</a>
		{:else}
			<span class={Button.rootVariants({ variant: "ghost", size: "sm", class: "pointer-events-none text-muted-foreground" })}
				>{m.project_card_preparing()}</span
			>
		{/if}
	</Card.Footer>
</Card.Root>
