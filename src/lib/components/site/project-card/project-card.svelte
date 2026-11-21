<script lang="ts" module>
	import type { HTMLAttributes } from "svelte/elements";
	import type { Project } from "#lib/data/projects.ts";
	import type { WithElementRef } from "#lib/utils.ts";

	export type RootProps = WithElementRef<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
		project: Project;
		number: number;
	};
</script>

<script lang="ts">
	import { resolve } from "$app/paths";

	import { toResolvablePath } from "#lib/site/routing.ts";

	import * as m from "#lib/paraglide/messages.js";
	import { localizeHref } from "#lib/paraglide/runtime.js";

	import { cn } from "#lib/utils.ts";

	import * as Button from "#lib/components/ui/button/index.ts";
	import * as Card from "#lib/components/ui/card/index.ts";

	let { ref = $bindable(null), project, number, class: className, ...restProps }: RootProps = $props();
</script>

<Card.Root bind:ref data-slot="project-card" class={cn("h-full", className)} {...restProps}>
	{#if project.image}
		<img
			src={project.image.src}
			alt={project.image.alt}
			width={project.image.width}
			height={project.image.height}
			loading="lazy"
			decoding="async"
			class:object-contain={project.image.fit === "contain"}
			class:object-cover={project.image.fit !== "contain"}
			class="aspect-video w-full bg-muted"
		/>
	{:else}
		<div
			role="img"
			aria-label={m.project_card_image_placeholder({ title: project.title })}
			class="-mt-4 aspect-video bg-pink-200 dark:bg-pink-950"
		></div>
	{/if}

	<Card.Header>
		<Card.Action><span class="font-mono text-sm text-primary">{number.toString().padStart(2, "0")}</span></Card.Action>
		<Card.Title role="heading" aria-level={3}>{project.title}</Card.Title>
		<Card.Description>{project.description}</Card.Description>
	</Card.Header>

	<Card.Footer class="mt-auto justify-end">
		{#if project.href}
			<a href={resolve(toResolvablePath(localizeHref(project.href)))} class={Button.rootVariants({ variant: "ghost", size: "sm" })}>
				{m.project_card_view()}
			</a>
		{:else}
			<span class={Button.rootVariants({ variant: "ghost", size: "sm", class: "pointer-events-none text-muted-foreground" })}>
				{m.project_card_preparing()}
			</span>
		{/if}
	</Card.Footer>
</Card.Root>
