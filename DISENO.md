# Dirección de arte

## Concepto: "Bento"

Todo el contenido vive en tarjetas de distintos tamaños sobre una misma grilla, como una caja bento. Cada tarjeta responde una pregunta concreta (quién soy, qué estudié, qué sé usar, cómo contactarme) y el tamaño marca la jerarquía: el proyecto de título ocupa el ancho completo, la presentación del Hero es la tarjeta más grande.

**Por qué funciona:** el diferencial del perfil es el análisis — entender el problema, ordenarlo y recién después programarlo. Una grilla bento es información organizada en bloques, así que el diseño comunica eso antes de leer una línea. A la vez se ve actual y se aleja del portfolio genérico.

Se mantienen algunos rasgos de la versión anterior que suman identidad: secciones numeradas (`01 / Sobre mí`) y anotaciones en tipografía monoespaciada (`// stack principal`).

La inspiración viene de bibliotecas de componentes como Magic UI y Aceternity UI. Los efectos se reescribieron en CSS y TypeScript dentro de Astro, sin React, para no sumar JavaScript a la página.

## Efectos

| Efecto | Dónde | Cómo |
| --- | --- | --- |
| Brillo que sigue al mouse | Todas las tarjetas (`.bento`) | Gradiente radial que se mueve con variables CSS (`Spotlight.astro`). Solo en dispositivos con mouse. |
| Haz de luz en el borde | Proyecto destacado (`.border-beam`) | Gradiente cónico animado con `@property`, recortado con `mask` para que solo se vea el borde. |
| Brillo que cruza el texto | Nombre en el Hero (`.text-shine`) | Gradiente con `background-clip: text` que se desplaza cada 7 s. |
| Vidrio esmerilado | Etiquetas sobre la foto (`.glass`) | `backdrop-filter`. Se usa solo en detalles chicos para no afectar contraste ni rendimiento. |
| Fondo de puntos con resplandor | Hero (`.dot-field`, `.hero-glow`) | Gradientes radiales con máscara, sin imágenes. |
| Aparición al hacer scroll | Tarjetas y títulos (`data-reveal`) | `IntersectionObserver`. |

Todas las animaciones se desactivan con `prefers-reduced-motion`.

## Paleta

| Rol | Modo claro | Modo oscuro |
| --- | --- | --- |
| Fondo | `#F4F2ED` | `#0E1014` |
| Tarjetas | `#FFFFFF` | `#161920` |
| Superficie secundaria (chips) | `#EBE8E1` | `#1D2129` |
| Líneas | `#DDD9D0` | `#2A2F3A` |
| Texto | `#15171C` | `#ECEAE4` |
| Texto secundario | `#565B66` | `#A0A6B1` |
| Acento — botones, links, foco, brillos | `#C2410C` naranja | `#FF7A3D` |
| Estado "disponible" | `#166534` | `#4ADE80` |

Todos los pares texto/fondo cumplen contraste WCAG AA (≥ 4.5:1). El naranja es el único color de acento: el proyecto de título se distingue con una etiqueta y el borde animado, no con otro color.

## Tipografías

- **Bricolage Grotesque** — títulos. Grotesca con carácter, funciona muy bien en tamaños grandes.
- **Atkinson Hyperlegible Next** — cuerpo de texto. Diseñada para máxima legibilidad.
- **JetBrains Mono** — anotaciones, etiquetas y badges de tecnologías.

## Layout

- Grilla de 12 columnas, ancho máximo 1216 px, separación de 16 px entre tarjetas. En mobile todo pasa a una columna.
- **Navbar** fija con fondo translúcido, numeración de secciones e indicador de la sección activa.
- **Hero:** tarjeta de presentación (8 columnas) y foto en su propia tarjeta (4 columnas) con la ubicación y el stack en etiquetas de vidrio. Abajo, cuatro tarjetas con datos clave.
- **Sobre mí:** bio (7) y ficha técnica (5); habilidades en cuatro tarjetas de anchos alternados (7 + 5, 5 + 7).
- **Proyectos:** el proyecto de título a ancho completo con borde animado y los otros dos lado a lado.
- **Formación:** línea de tiempo (7) e idiomas (5).
- **Contacto:** canales, ubicación y disponibilidad (5) y formulario (7).

## Badges de tecnologías

Cada habilidad muestra el logo de la marca en su color (`TechBadge.astro`). Los logos vienen de [Simple Icons](https://simpleicons.org) y se embeben como SVG al compilar. Si el color de una marca casi no contrasta con el fondo (por ejemplo, el negro de Next.js en modo oscuro), el logo usa el color del texto. Las marcas sin logo disponible usan un ícono genérico del mismo estilo.

## Proyectos

Cada proyecto tiene una portada ilustrada en SVG, dentro de un marco de ventana, que sintetiza su interfaz: el dashboard de ElectroTech, la grilla de pistas de Futbolle y el tablero semaforizado de Jugada Maestra. Son livianas y cambian de color con el tema.

Cuando haya capturas reales, pueden reemplazar el SVG dentro del mismo marco (`src/components/ProjectCover.astro`).
