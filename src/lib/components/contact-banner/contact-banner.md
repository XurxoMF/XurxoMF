# Contact Banner

A reusable contact callout that presents the project's primary contact channels, current availability, response time, and location in a responsive card.

## Import

Import the component through its public entry point:

```svelte
<script lang="ts">
	import * as ContactBanner from "$lib/components/contact-banner";
</script>
```

## Usage

The default instance uses `id="contacto"` and includes the section spacing used on full pages:

```svelte
<ContactBanner.Root />
```

Override native section attributes or layout classes when embedding it in another context:

```svelte
<ContactBanner.Root id="consulta" class="py-12 lg:py-16" aria-label="Contacto do proxecto" />
```

## Public API

`ContactBanner.Root` renders a native `section` and accepts its standard HTML attributes, a merged `class`, an optional bindable `ref`, and an `id` that defaults to `contacto`. The stable styling hook is `data-slot="contact-banner"`.

The component owns no mutable state. Contact destinations and the displayed location come from `$lib/data/contact`; changing that data updates every instance.

## Accessibility

The heading preserves the surrounding page's level-two hierarchy. Icon-only contact links include accessible names and decorative icons are hidden from assistive technology. External web destinations open in a new tab and use `rel="external noreferrer"`; email stays in the current context and uses `rel="external"`.

## Localization

The current visible copy is authored in Galician, matching the existing page. When the project migrates page copy to Paraglide messages, move the banner's labels, heading, description, availability, response time, and accessibility names with it. Brand names and contact destinations remain in the shared contact data.

## Dependencies

Contact Banner composes the public Button, Card, and Typography units, semantic contact icons from `$lib/icons`, the shared `cn` utility, and `$lib/data/contact`. It requires the consuming application's existing theme tokens and global focus styles.

## File organization

| File                    | Responsibility                                      |
| ----------------------- | --------------------------------------------------- |
| `contact-banner.svelte` | Markup, styling, contact data, and native props.    |
| `index.ts`              | Exports `Root` and its matching `RootProps` type.   |
| `contact-banner.md`     | Usage, API, accessibility, and dependency guidance. |
