// Todo el contenido del sitio vive acá: para actualizar textos, proyectos o links
// no hace falta tocar los componentes.

export const profile = {
  name: 'Ignacio Criscenti',
  firstName: 'Ignacio',
  lastName: 'Criscenti',
  role: 'Analista en Sistemas Informáticos',
  subtitle: 'Estudiante de 4.º año de Ingeniería en Sistemas',
  tagline: 'Del diagrama al deploy: analizo, ordeno y construyo software que llega a tiempo.',
  status: 'Disponible para mi primer empleo en IT',
  email: 'igcriscenti@gmail.com',
  github: 'https://github.com/IgnaCriscenti',
  githubUser: 'IgnaCriscenti',
  linkedin: 'https://www.linkedin.com/in/ignacio-criscenti-551a733b3/',
  linkedinUser: 'ignacio-criscenti',
  cv: '/cv-ignacio-criscenti.pdf',
};

export const bio = [
  'Soy Analista en Sistemas Informáticos y curso el 4.º año de Ingeniería en Sistemas en la Universidad Abierta Interamericana. Tengo un perfil estructurado: me gusta entender el problema, modelarlo con diagramas y recién después llevarlo al código.',
  'Disfruto el trabajo en equipo, recibo el feedback con buena disposición y me tomo en serio entregar cada proyecto en tiempo y forma. Hoy perfecciono mi inglés (nivel B2) y busco mi primera experiencia profesional para seguir creciendo en el desarrollo de software.',
];

/** "Ficha técnica" que acompaña la bio */
export const facts = [
  { label: 'Título', value: 'Analista en Sistemas Informáticos', note: 'UAI · 2025' },
  { label: 'Cursando', value: 'Ingeniería en Sistemas', note: '4.º año' },
  { label: 'Idiomas', value: 'Español nativo · Inglés B2', note: 'Portugués básico' },
  { label: 'Enfoque', value: 'Análisis y desarrollo web', note: 'Del modelado al código' },
];

export const skills = [
  {
    group: 'Frontend',
    code: 'FE',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Blazor'],
  },
  {
    group: 'Backend',
    code: 'BE',
    items: ['Node.js', 'Next.js API Routes', 'C# / .NET 8', 'ASP.NET Core', 'Entity Framework Core', 'JWT · Bcrypt'],
  },
  {
    group: 'Bases de datos',
    code: 'DB',
    items: ['SQL', 'MySQL', 'Microsoft Access', 'Bases no relacionales'],
  },
  {
    group: 'Herramientas y análisis',
    code: 'TL',
    items: ['Git & GitHub', 'VS Code', 'ESLint', 'Diagramas UML', 'Modelado de datos', 'Relevamiento de requisitos'],
  },
];

export type Project = {
  id: string;
  code: string;
  title: string;
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo: string;
  demo?: string;
  cover: 'electrotech' | 'futbolle' | 'jugada';
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 'electrotech',
    code: 'P-01',
    title: 'ElectroTech',
    context: 'Trabajo final · Analista en Sistemas',
    description:
      'Sistema integral de gestión para empresas de electrodomésticos, especializado en la administración de producción, facturación, inventario y reportes. Es el proyecto con el que obtuve el título de Analista en Sistemas.',
    highlights: [
      'Autenticación con JWT y control de acceso por roles (RBAC)',
      'Facturación, remitos y control de inventario y stock',
      'Reportes de ventas con gráficos y exportación a PDF',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Recharts', 'MySQL', 'JWT', 'Bcrypt', 'Nodemailer', 'jsPDF'],
    repo: 'https://github.com/Sap3252/electrotech-v2',
    cover: 'electrotech',
    featured: true,
  },
  {
    id: 'futbolle',
    code: 'P-02',
    title: 'Futbolle',
    context: 'Proyecto final · Desarrollo y Arquitecturas Web',
    description:
      'Juego web de adivinanza de jugadores de fútbol inspirado en Wordle: hay que descubrir al jugador secreto en 8 intentos o menos, usando las pistas que aparecen con cada intento.',
    highlights: [
      'Pistas por atributo: coincidencias en verde y flechas para edad, overall y altura',
      'Tres dificultades, buscador con autocompletado',
    ],
    stack: ['HTML5', 'CSS3', 'Flexbox', 'JavaScript'],
    repo: 'https://github.com/IgnaCriscenti/futbolle-uai',
    demo: 'https://ignacriscenti.github.io/futbolle-uai/',
    cover: 'futbolle',
  },
  {
    id: 'jugada-maestra',
    code: 'P-03',
    title: 'Jugada Maestra',
    context: 'Trabajo práctico · Base de Datos Aplicadas',
    description:
      'Sistema web para gestionar y visualizar apuestas deportivas mediante un tablero interactivo con semaforización por colores y navegación Drill Up / Drill Down entre tres entidades.',
    highlights: [
      'Tablero con indicadores visuales por estado y resultado',
      'Navegación jerárquica para explorar distintos niveles de detalle',
    ],
    stack: ['C#', '.NET 8', 'Blazor Server', 'Entity Framework Core', 'Microsoft Access', 'Git'],
    repo: 'https://github.com/IgnaCriscenti/Jugada_Maestra',
    cover: 'jugada',
  },
];

export const education = [
  {
    period: '2026 — 2027',
    title: 'Ingeniería en Sistemas Informáticos',
    place: 'Universidad Abierta Interamericana',
    detail: 'En curso · 4.º año',
    current: true,
  },
  {
    period: '2023 — 2025',
    title: 'Analista en Sistemas Informáticos',
    place: 'Universidad Abierta Interamericana',
    detail: 'Título intermedio obtenido',
  },
  {
    period: '2017 — 2022',
    title: 'Título secundario argentino y Bachillerato español',
    place: 'Colegio e Instituto Superior Parque España',
    detail: 'Doble titulación',
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo', value: 100 },
  { name: 'Inglés', level: 'B2 · cursando en Aricana', value: 70 },
  { name: 'Portugués', level: 'Básico', value: 30 },
];

export const nav = [
  { href: '#sobre-mi', label: 'Sobre mí', num: '01' },
  { href: '#proyectos', label: 'Proyectos', num: '02' },
  { href: '#formacion', label: 'Formación', num: '03' },
  { href: '#contacto', label: 'Contacto', num: '04' },
];
