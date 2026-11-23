# Content Reveal

Sistema de animación de entrada para o contido editorial de XurxoMF. Centraliza sobre `animateInView` a distancia, duración, easing, punto de activación, comportamento responsive e respecto por `prefers-reduced-motion`.

`contentReveal` recibe unha secuencia de grupos. Cada grupo selecciona descendentes do elemento que actúa como trigger ou emprega `target: "children"`, escolle unha dirección e pode definir o seu `stagger` e a súa posición na timeline. En escritorio, `left` e `right` entran horizontalmente; por debaixo de `1024px`, todas as direccións se converten nun desprazamento vertical curto.

`contentRevealEach` está pensado para coleccións que continúan máis alá do primeiro viewport, como timelines, grellas de servizos, proxectos ou galerías. Crea un trigger por elemento para que as filas posteriores non se animen antes de entrar. Os elementos que comparten fila manteñen un `stagger` curto e visualmente ordenado.

As animacións reprodúcense ao entrar desde abaixo. Ao saír ou volver entrar por arriba, o contido conserva o estado final; unicamente ao saír por abaixo a timeline se reproduce en sentido inverso e queda preparada para a seguinte entrada desde abaixo. Isto evita que un scroll automático durante unha navegación deixe consumidas as entradas do contido que o usuario aínda non visitou. ScrollTrigger recalcula os valores ao cambiar o tamaño da xanela e a política de movemento reducido aplica directamente o estado final sen crear o trigger.

O preset aplica de maneira síncrona o estado inicial a todos os destinos cando monta cada attachment. Isto mantén ocultos tamén os elementos cun inicio atrasado por `stagger` ou pola posición da súa secuencia, evitando que aparezan no estado final e desaparezan xusto antes de animarse.

Durante cada entrada ou saída inversa, o preset suspende temporalmente o `transition-property` CSS dos elementos animados. Ao completar, primeiro deixa que GSAP limpe `transform`, `opacity` e `visibility` e restaura a transición orixinal no seguinte frame. Así, as transicións de compoñentes como Button non compiten cos fotogramas de GSAP e volven funcionar normalmente despois do reveal. Esta protección é local a `contentReveal` e `contentRevealEach`; non modifica o attachment xenérico `animateInView` nin afecta animacións longas con `scrub`.

Debe colocarse o attachment nun contedor estable e animar descendentes, especialmente cando o trigger usa `sticky`, transformacións ou medidas dependentes do fluxo. Os efectos de apertura, peche e estado da interface seguen pertencendo ás animacións propias de xvelte.
