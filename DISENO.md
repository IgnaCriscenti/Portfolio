# Dirección de arte

## Concepto: "Ficha técnica"

Minimalismo tipográfico con la estética de un documento de análisis de sistemas: secciones numeradas (`01 / Sobre mí`), anotaciones en tipografía monoespaciada, líneas finas de grilla tipo papel milimetrado y la foto tratada como una figura (`fig. 01`) con marcas de corte.

**Por qué funciona:** el diferencial del perfil es el análisis — entender el problema, modelarlo y recién después programarlo. Un reclutador percibe orden y estructura antes de leer una línea. Además se aleja del portfolio genérico (gradientes violetas, glassmorphism) y al ser liviano carga muy rápido.

## Paleta

| Rol | Modo claro | Modo oscuro |
| --- | --- | --- |
| Fondo | `#F4F2ED` (papel) | `#0E1014` |
| Superficie (tarjetas) | `#FFFFFF` | `#161920` |
| Superficie secundaria | `#EBE8E1` | `#1D2129` |
| Líneas | `#DDD9D0` | `#2A2F3A` |
| Texto | `#15171C` | `#ECEAE4` |
| Texto secundario | `#565B66` | `#A0A6B1` |
| Acento 1 — botones, links, foco | `#C2410C` naranja señal | `#FF7A3D` |
| Acento 2 — solo el estado "disponible" | `#166534` | `#4ADE80` |

Todos los pares texto/fondo cumplen contraste WCAG AA (≥ 4.5:1).

## Tipografías

- **Bricolage Grotesque** — títulos. Grotesca con carácter, terminaciones expresivas, funciona muy bien en tamaños grandes.
- **Atkinson Hyperlegible Next** — cuerpo de texto. Diseñada específicamente para máxima legibilidad.
- **JetBrains Mono** — anotaciones técnicas, etiquetas y chips de tecnologías.

## Layout

- Grilla de 12 columnas, ancho máximo 1216 px. Los títulos de sección ocupan 3 columnas para la etiqueta y 9 para el contenido, como un índice de documento.
- **Navbar** fija y delgada, con numeración de secciones e indicador de la sección activa.
- **Hero** asimétrico: texto en 7 columnas y foto en 5, con una tarjeta flotante del stack y una franja de datos clave abajo.
- **Sobre mí:** bio a la izquierda, ficha técnica a la derecha y habilidades en 4 tarjetas por categoría.
- **Proyectos:** grilla bento — el proyecto principal a ancho completo y los otros dos lado a lado.
- **Formación:** línea de tiempo vertical e idiomas en una ficha aparte.
- **Contacto:** canales a la izquierda, formulario a la derecha.
- **Microinteracciones:** aparición suave al hacer scroll, tarjetas que se elevan al pasar el mouse, subrayado animado en links. Todo se desactiva con `prefers-reduced-motion`.

## Proyectos

Cada proyecto tiene una portada ilustrada en SVG, dentro de un marco de ventana minimal, que sintetiza su interfaz: el dashboard de ElectroTech, la grilla de pistas de Futbolle y el tablero semaforizado de Jugada Maestra. Son livianas, nítidas en cualquier pantalla y cambian de color con el tema.

Cuando haya capturas reales, pueden reemplazar el SVG dentro del mismo marco (`src/components/ProjectCover.astro`).
