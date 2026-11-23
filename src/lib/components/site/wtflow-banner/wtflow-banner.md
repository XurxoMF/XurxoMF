# What The Flow Banner

Banner compartido para acreditar os proxectos deseñados por What The Flow e programados por Xurxo MF.

## Importación

```svelte
<script lang="ts">
	import * as WtflowBanner from "#lib/components/site/wtflow-banner/index.ts";
</script>
```

## Uso

```svelte
<WtflowBanner.Root />
```

O compoñente inclúe o ancho máximo e o espazado superior das páxinas de proxecto. Debe colocarse ao final do contido, inmediatamente antes do banner de contacto. A composición, o texto, o logo e as ligazóns son deliberadamente comúns para que os créditos se presenten igual en todas as páxinas.

## API pública

### `WtflowBanner.Root`

`RootProps` estende os atributos nativos de `HTMLElement` e engade unha referencia enlazable.

| Prop             | Tipo                          | Comportamento                               |
| ---------------- | ----------------------------- | ------------------------------------------- |
| `class`          | `string`                      | Combínase coas clases do contedor exterior. |
| `ref`            | `HTMLElement \| null`         | Referencia enlazable ao elemento `section`. |
| demais atributos | `HTMLAttributes<HTMLElement>` | Reenvíanse ao `section`.                    |

## Estrutura e estilo

- Renderiza un `section` con `data-slot="wtflow-banner"`.
- Colócase inmediatamente antes do banner de contacto nas páxinas que precisan créditos.
- Emprega o amarelo, o logo e a ligazón oficial de What The Flow porque o bloque representa explicitamente a súa marca.
- Mantén o logo nunha columna e os créditos noutra a partir de escritorio; en pantallas pequenas apílaos.
- O botón reutiliza `Button.rootVariants` e os textos usan os compoñentes públicos de Typography.
- O logo entra desde a esquerda e os textos desde a dereita mediante o preset compartido; en pantallas compactas ambas as columnas aparecen desde abaixo.

## Accesibilidade

As dúas ligazóns son áncoras nativas, abren a web oficial nunha nova pestana e declaran `rel="external noreferrer"`. A ligazón do logo ten un nome accesible explícito e a imaxe conserva o nome da marca como texto alternativo.

## Localización

O texto visible está actualmente escrito en galego. Cando as páxinas de proxecto se conecten a Paraglide, as mensaxes deste compoñente deberán extraerse xuntas para conservar a mesma redacción en todos os usos.

## Dependencias

- `#lib/utils.ts` para combinar clases e expoñer a referencia.
- `#lib/components/ui/button/index.ts` para o estilo da ligazón principal.
- `#lib/components/ui/typography/index.ts` para o título e o parágrafo.
- `#lib/motion/content-reveal.ts` para a entrada responsive e o tratamento de movemento reducido.
- `/static/images/brands/wtflow-logo.webp` como recurso compartido da marca.

## Organización

| Ficheiro               | Responsabilidade                                   |
| ---------------------- | -------------------------------------------------- |
| `wtflow-banner.svelte` | Marcado, texto, ligazóns e presentación do banner. |
| `index.ts`             | Exportación pública de `Root` e `RootProps`.       |
| `wtflow-banner.md`     | Guía de uso e contrato público.                    |
