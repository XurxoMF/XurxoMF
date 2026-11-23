# Problem Section

Formato compartido baseado na sección «O problema» de VS Launcher: cabeceira fixa á esquerda e contido modular á dereita.

Impórtase desde `#lib/components/site/problem-section/index.ts` e úsase como `ProblemSection.Root`. Require `kicker`, `title` e o snippet `children`; admite `description`. O contido pode incluír tarxetas, listas ou datos, pero a distribución e a xerarquía permanecen sempre iguais. `animateBody={false}` permite que unha composición xestione os triggers dos seus elementos de maneira independente sen duplicar a animación do corpo.

A cabeceira entra elemento a elemento desde a esquerda e os elementos do contido modular desde a dereita, cun desfase breve entre eles. En pantallas compactas ambas as columnas entran desde abaixo; o movemento reducido mostra o estado final sen ScrollTrigger.
