# Technical Section

Formato compartido baseado na sección «Por baixo» de VS Launcher: imaxe e explicación técnica en dúas columnas.

Impórtase desde `#lib/components/site/technical-section/index.ts` e úsase como `TechnicalSection.Root`. Require `kicker`, `title`, `description`, `image` e `imageAlt`; admite `caption`, `reverse`, `imageFit` (`cover` ou `contain`) e un snippet `children` para tecnoloxías, datos ou listas.

A imaxe e a explicación entran desde os seus lados visuais, mentres a cabeceira, a descrición e os elementos do snippet aparecen en secuencia. `reverse` mantén sincronizadas a orde e a dirección; en pantallas compactas emprégase movemento vertical.
