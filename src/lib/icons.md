# Icons

A semantic facade for the Tabler icons used by xvelte components and application interfaces.

Import named icons from `$lib/icons` instead of importing the upstream package directly. This keeps icon choices consistent and gives application code stable, meaningful names.

```svelte
<script lang="ts">
	import { MoonIcon, SunIcon } from "$lib/icons";
</script>

<SunIcon aria-hidden="true" />
<MoonIcon aria-hidden="true" />
```

Icon-only controls need an accessible name on their button or link. Mark decorative icons with `aria-hidden="true"`. The facade re-exports Svelte components from `@tabler/icons-svelte`; their standard SVG props remain available.
