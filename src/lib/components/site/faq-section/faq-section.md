# FAQ Section

Sección compartida de preguntas frecuentes para as páxinas de servizo. Mantén fixa e localizada a cabeceira editorial e permite variar unicamente as preguntas e respostas.

## Importación

```svelte
<script lang="ts">
	import * as FaqSection from "#lib/components/site/faq-section/index.ts";
</script>
```

## Uso

```svelte
<FaqSection.Root
	faqs={[
		{ question: "Pregunta?", answer: "Resposta." },
		{ question: "Outra pregunta?", answer: "Outra resposta." }
	]}
/>
```

## API

`FaqSection.Root` require `faqs`, unha lista de elementos con `question` e `answer`. A cabeceira usa sempre `service_page_faq_kicker` e `service_page_faq_title` desde Paraglide, polo que non se poden substituír desde cada páxina.

As preguntas renderízanse con `details` e `summary` nativos. Isto mantén a apertura accesible mediante rato, teclado e tecnoloxías de asistencia sen estado JavaScript adicional.

Cada despregable ten o seu propio trigger de entrada. As preguntas posteriores permanecen ocultas ata chegar á zona visible, en lugar de reproducirse todas cando entra a primeira.

## Ficheiros

- `faq-section.svelte`: estrutura, textos comúns e lista despregable.
- `index.ts`: exporta `Root`, `RootProps` e `Item`.
- `faq-section.md`: documentación pública do compoñente.
