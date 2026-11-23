# Detail Hero

Banner principal compartido polas fichas de proxectos e servizos, cunha imaxe de fondo e todo o contido aliñado á esquerda. As capas son neutras e adáptanse ao tema: en modo claro, o degradado parte de branco e o texto é negro; en modo escuro, o degradado parte de negro e o texto é branco. En ambos os casos faise transparente cara á dereita e non usa tinguiduras da cor primaria.

Impórtase desde `#lib/components/site/detail-hero/index.ts` e úsase como `DetailHero.Root`. Require `image`, `title`, `lead` e `description`; admite `imageAlt`, `imagePosition` e os snippets opcionais `badges` e `actions`.

Os badges deben limitarse a categoría, tipo e estado, nesa orde. A imaxe pode ser decorativa con texto alternativo baleiro cando o seu contido xa está explicado na páxina.

O contido entra unha soa vez mediante o preset editorial compartido: badges, título, entradiña, descrición e accións aparecen de maneira graduada desde a esquerda en escritorio e desde abaixo en pantallas compactas. Con movemento reducido aplícase directamente o estado final.
