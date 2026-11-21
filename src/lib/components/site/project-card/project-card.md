# Project Card

A reusable project preview card aligned with the service-card anatomy: edge-to-edge leading media, numbered header, concise description, and link to a statically authored project page. Its footer stays aligned to the bottom when neighbouring cards contain different amounts of copy.

## Import

```svelte
<script lang="ts">
	import * as ProjectCard from "#lib/components/site/project-card/index.ts";
</script>
```

## Usage

Pass one project from `#lib/data/projects.ts` and its one-based display number:

```svelte
{#each projects as project, index (project.title)}
	<ProjectCard.Root {project} number={index + 1} />
{/each}
```

The root accepts native `div` attributes, merges a custom `class`, and exposes a bindable `ref`.

## Public API

| Prop      | Type             | Required | Description                                          |
| --------- | ---------------- | -------- | ---------------------------------------------------- |
| `project` | `Project`        | Yes      | Content, media, and optional destination path.       |
| `number`  | `number`         | Yes      | One-based sequence number displayed with two digits. |
| `class`   | `string`         | No       | Classes merged after the default card styles.        |
| `ref`     | `HTMLDivElement` | No       | Bindable reference to the rendered Card root.        |

Remaining native `div` attributes are forwarded. The stable styling hook is `data-slot="project-card"`.

## Routing

When present, a project's `href` is typed as an existing SvelteKit route and must follow the `/proxectos/...` project convention. The destination is localized with Paraglide so it preserves the active URL locale. Project details are authored as individual static `+page.svelte` routes; this component does not use or require a dynamic `[slug]` route. Projects without an implemented detail route omit `href` and display “Ficha en preparación” instead of a broken link.

## Media

Projects may provide an `image` with `src`, localized `alt`, intrinsic `width` and `height`, and an optional `fit` value of `"cover"` or `"contain"`. Cover is the default and fills the card's 16:9 media area. Contain is intended for transparent artwork or cutouts that should remain fully visible. Media is lazy-loaded below the fold and its intrinsic dimensions reserve space before decoding. It is the direct first child of Card, so it meets the outer top edges without an inset frame, matching service cards. When `image` is omitted, the card renders an edge-to-edge localized placeholder.

## Accessibility

The title is exposed as a level-three heading for use inside a page or section headed at level two. Real media uses the localized alternative text supplied by the project data. The fallback placeholder has a generated accessible label.

## Localization

The visible action, placeholder label, project copy, image alternative text, and internal destination use Paraglide. Project content comes from `#lib/data/projects.ts`, which is re-evaluated when navigation changes the URL locale.

## Dependencies

Project Card composes the public Button and Card units, resolves its Paraglide-localized internal destination with SvelteKit `resolve()`, and merges classes with `#lib/utils.ts`.

## File organization

| File                  | Responsibility                                   |
| --------------------- | ------------------------------------------------ |
| `project-card.svelte` | Card markup, project data, routing, and styling. |
| `index.ts`            | Exports `Root` and its `RootProps` type.         |
| `project-card.md`     | Usage, API, routing, and integration guidance.   |
