export type ProjectCategory = "desarrollado" | "en-desarrollo" | "en-venta" | "master-plan";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: number;
  location: string;
  region?: string;
  units: number;
  surface?: string;
  floors?: number;
  towers?: number;
  stages?: number;
  highlight: string;
  summary: string;
  scope: string[];
  management: string;
  heroImage: string;
  images: { src: string; alt: string }[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  desarrollado: "Entregados",
  "en-desarrollo": "En Desarrollo",
  "en-venta": "En Venta",
  "master-plan": "Master Plan",
};

export const projects: Project[] = [
  // ── Proyectos Desarrollados ──
  {
    slug: "farellon-norte",
    name: "Farellón Norte III",
    category: "desarrollado",
    categoryLabel: "Vivienda Social DS19",
    year: 2020,
    location: "Antofagasta",
    region: "Antofagasta",
    units: 294,
    floors: 15,
    towers: 2,
    highlight: "294 viviendas en Antofagasta — referente regional en densidad responsable",
    summary:
      "Torres residenciales bajo el programa DS19, entregando 294 departamentos que consolidaron a TRIACORP como un actor relevante en la II Región. El proyecto destaca por su escala y eficiencia en la gestión de subsidios habitacionales.",
    scope: [
      "Gestión de terreno",
      "Gestión SERVIU",
      "Arquitectura y desarrollo",
      "Coordinación de permisos",
    ],
    management: "Gestión terreno + Gestión Serviu + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ANTOFAGASTA-FARELLON-NORTE-III-3-scaled.png",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ANTOFAGASTA-FARELLON-NORTE-III-3-scaled.png", alt: "Vista exterior Farellón Norte III" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ANTOFAGASTA-FARELLON-NORTE-III-4-scaled.png", alt: "Fachada Farellón Norte III" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ANTOFAGASTA-FARELLON-NORTE-III-5-scaled.png", alt: "Detalle arquitectónico Farellón Norte III" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ANTOFAGASTA-FARELLON-NORTE-III-6-scaled.png", alt: "Entorno Farellón Norte III" },
    ],
  },
  {
    slug: "gran-vista",
    name: "Gran Vista I",
    category: "desarrollado",
    categoryLabel: "Vivienda Social DS19",
    year: 2019,
    location: "Alto Hospicio",
    region: "Tarapacá",
    units: 298,
    floors: 22,
    towers: 1,
    highlight: "298 departamentos — torre emblemática en Alto Hospicio",
    summary:
      "Proyecto de vivienda social que levantó una torre de 22 pisos en Alto Hospicio, ofreciendo 298 unidades habitacionales. Gestión integral desde la adquisición del terreno hasta la entrega final.",
    scope: [
      "Gestión de terreno",
      "Gestión SERVIU",
      "Arquitectura y desarrollo",
    ],
    management: "Gestión terreno + Gestión Serviu + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ALTO-HOSPICIO-GRAN-VISTA-I-2.jpg",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ALTO-HOSPICIO-GRAN-VISTA-I-2.jpg", alt: "Torre Gran Vista" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ALTO-HOSPICIO-GRAN-VISTA-I-10.jpg", alt: "Fachada Gran Vista" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ALTO-HOSPICIO-GRAN-VISTA-I-12.jpg", alt: "Vista aérea Gran Vista" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/ALTO-HOSPICIO-GRAN-VISTA-I-14.jpg", alt: "Entorno Gran Vista" },
    ],
  },
  {
    slug: "los-alpes",
    name: "Los Alpes I y II",
    category: "desarrollado",
    categoryLabel: "Vivienda Social DS19",
    year: 2016,
    location: "Rancagua",
    region: "O'Higgins",
    units: 600,
    highlight: "600 departamentos en Rancagua — uno de los mayores desarrollos de la Región de O'Higgins",
    summary:
      "Desarrollo habitacional de gran escala con dos etapas que totalizan 600 unidades en Rancagua. Proyecto que demostró la capacidad de TRIACORP para gestionar volúmenes significativos manteniendo calidad y plazos.",
    scope: [
      "Gestión de terreno",
      "Gestión SERVIU",
      "Coordinación técnica",
    ],
    management: "Gestión terreno + Gestión Serviu",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/RANCAGUA-LOS-ALPES-I-1-scaled.png",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/RANCAGUA-LOS-ALPES-I-1-scaled.png", alt: "Condominio Los Alpes I" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/RANCAGUA-LOS-ALPES-I-3-scaled.png", alt: "Vista general Los Alpes" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/RANCAGUA-LOS-ALPES-II-1-scaled.png", alt: "Los Alpes II exterior" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/RANCAGUA-LOS-ALPES-II-4-scaled.png", alt: "Los Alpes II fachada" },
    ],
  },
  {
    slug: "carmela-carvajal",
    name: "Carmela Carvajal",
    category: "desarrollado",
    categoryLabel: "Vivienda Social DS19",
    year: 2019,
    location: "Alto Hospicio",
    region: "Tarapacá",
    units: 267,
    floors: 22,
    towers: 1,
    highlight: "267 departamentos en torre de 22 pisos en Alto Hospicio",
    summary:
      "Proyecto de vivienda social bajo programa DS19 que levantó una torre de 22 pisos en Alto Hospicio, consolidando la presencia de TRIACORP en la Región de Tarapacá con un diseño que responde al contexto climático del norte.",
    scope: [
      "Gestión de terreno",
      "Gestión SERVIU",
    ],
    management: "Gestión terreno + Gestión Serviu",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Carmela-Carvajal-1.jpg",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Carmela-Carvajal-1.jpg", alt: "Condominio Carmela Carvajal exterior" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Carmela-Carvajal-3.jpg", alt: "Vista lateral Carmela Carvajal" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Carmela-Carvaja-2.jpg", alt: "Fachada Carmela Carvajal" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Carmela-Carvajal-4.jpg", alt: "Entorno Carmela Carvajal" },
    ],
  },
  {
    slug: "director-azolas",
    name: "Director Azolas",
    category: "desarrollado",
    categoryLabel: "Vivienda Social DS19",
    year: 2020,
    location: "Arica",
    region: "Arica y Parinacota",
    units: 162,
    floors: 5,
    towers: 9,
    highlight: "162 departamentos en 9 bloques — presencia en el extremo norte de Chile",
    summary:
      "Proyecto de baja altura en Arica compuesto por 9 bloques residenciales de 5 pisos. Una tipología que responde al contexto sísmico y climático de la XV Región con densidad equilibrada.",
    scope: [
      "Gestión de terreno",
      "Gestión SERVIU",
      "Arquitectura y desarrollo",
    ],
    management: "Gestión terreno + Gestión Serviu + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Doctos-Azolas-1.jpg",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Doctos-Azolas-1.jpg", alt: "Condominio Director Azolas" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Doctos-Azolas-2.jpg", alt: "Bloques residenciales Director Azolas" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Doctos-Azolas-3.jpg", alt: "Fachada Director Azolas" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Condominio-Doctos-Azolas-4.jpg", alt: "Entorno Director Azolas" },
    ],
  },
  {
    slug: "copa-dorada",
    name: "Copa Dorada",
    category: "desarrollado",
    categoryLabel: "Vivienda Social DS19",
    year: 2020,
    location: "Copiapó",
    region: "Atacama",
    units: 274,
    floors: 15,
    towers: 2,
    highlight: "274 departamentos en Copiapó — consolidando presencia en el norte de Chile",
    summary:
      "Desarrollo de vivienda social en Copiapó bajo programa DS19, compuesto por dos torres de 15 pisos que totalizan 274 unidades. Gestión integral desde terreno hasta entrega final.",
    scope: [
      "Gestión de terreno",
      "Gestión SERVIU",
    ],
    management: "Gestión terreno + Gestión Serviu",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Edificio-Copa-Dorada-4.jpg",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Edificio-Copa-Dorada-4.jpg", alt: "Edificio Copa Dorada exterior" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Edificio-Copa-Dorada-3.jpg", alt: "Fachada Copa Dorada" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Edificio-Copa-Dorada-2.jpg", alt: "Detalle Copa Dorada" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Edificio-Copa-Dorada-1.jpg", alt: "Vista general Copa Dorada" },
    ],
  },

  // ── En Desarrollo ──
  {
    slug: "kings-park",
    name: "Kings Park Torre 600",
    category: "en-desarrollo",
    categoryLabel: "Edificación en Altura",
    year: 2024,
    location: "Ciudad de Panamá",
    region: "Panamá",
    units: 198,
    surface: "33.625 m²",
    floors: 41,
    towers: 1,
    highlight: "198 departamentos en 41 pisos — el primer proyecto internacional de TRIACORP",
    summary:
      "Torre residencial premium en Ciudad de Panamá desarrollada en alianza con IKLP y Pacific Developers. 41 pisos con amenidades de primer nivel que marcan la expansión internacional de TRIACORP hacia el mercado centroamericano.",
    scope: [
      "Gestión de terreno",
      "Estructuración financiera",
      "Arquitectura y desarrollo",
      "Alianza estratégica internacional",
    ],
    management: "Gestión terreno + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/01-VISTA-EXTERIOR-1-scaled.jpg",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/01-VISTA-EXTERIOR-1-scaled.jpg", alt: "Render Kings Park Torre 600" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/04-IMAGEN-EXTERIOR-PISCINA-1-scaled.jpg", alt: "Piscina Kings Park" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/OE_KP_Cocina-C-scaled.png", alt: "Interior cocina Kings Park" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/OE_KP_Dorm-A-scaled.png", alt: "Dormitorio Kings Park" },
    ],
  },
  {
    slug: "casa-pirque",
    name: "Casa Pirque",
    category: "en-desarrollo",
    categoryLabel: "Vivienda Unifamiliar",
    year: 2025,
    location: "Pirque",
    region: "Metropolitana",
    units: 1,
    surface: "394 m²",
    floors: 1,
    highlight: "394 m² de arquitectura residencial premium en Pirque",
    summary:
      "Vivienda unifamiliar de autor en Pirque, un proyecto que refleja la capacidad de TRIACORP para abordar desarrollos de escala íntima con el mismo rigor y calidad de gestión que aplica a proyectos de mayor envergadura.",
    scope: [
      "Gestión de terreno",
      "Arquitectura y desarrollo",
      "Diseño de interiores",
    ],
    management: "Gestión terreno + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Imagen4-2-scaled.png",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Imagen4-2-scaled.png", alt: "Render Casa Pirque" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Imagen3-1-scaled.png", alt: "Vista Casa Pirque" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Imagen2-1-scaled.png", alt: "Interior Casa Pirque" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Imagen1-1-scaled.png", alt: "Jardín Casa Pirque" },
    ],
  },

  // ── En Venta ──
  {
    slug: "isla-negra",
    name: "Isla Negra — Bosques del Poeta",
    category: "en-venta",
    categoryLabel: "Vivienda en Extensión",
    year: 2025,
    location: "Isla Negra",
    region: "Valparaíso",
    units: 700,
    stages: 10,
    surface: "500 – 2.000 m²",
    highlight: "700 viviendas en 10 etapas — un nuevo estándar de vida en el litoral central",
    summary:
      "Desarrollo residencial de gran escala en Isla Negra con lotes entre 500 y 2.000 m². Diez etapas que integran arquitectura contemporánea con el paisaje costero, bajo la visión de TRIACORP de crear comunidades que respetan la identidad del lugar.",
    scope: [
      "Gestión de terreno",
      "Master plan",
      "Arquitectura y desarrollo",
      "Ventas y marketing",
    ],
    management: "Gestión terreno + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Casa-Bosque-scaled.png",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Casa-Bosque-scaled.png", alt: "Casa Bosque — Isla Negra" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Casa-Horizonte-scaled.png", alt: "Casa Horizonte — Isla Negra" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/10-scaled.png", alt: "Vista aérea Isla Negra" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/5-1-scaled.png", alt: "Master plan Isla Negra" },
    ],
  },
  {
    slug: "frutillar",
    name: "Frutillar",
    category: "en-venta",
    categoryLabel: "Vivienda Unifamiliar",
    year: 2025,
    location: "Frutillar",
    region: "Los Lagos",
    units: 220,
    surface: "27.700 m²",
    stages: 9,
    highlight: "220 casas en 9 etapas frente al lago Llanquihue",
    summary:
      "Comunidad residencial en Frutillar con tres tipologías de vivienda (88, 127 y 139 m²) distribuidas en nueve etapas. Un proyecto que captura la esencia del sur de Chile, diseñado para quienes buscan calidad de vida junto al lago.",
    scope: [
      "Gestión de terreno",
      "Arquitectura y desarrollo",
      "Ventas y marketing",
      "Planificación multi-etapa",
    ],
    management: "Gestión terreno + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/CASA-B.png",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/CASA-B.png", alt: "Render comunidad Frutillar" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/CASA-A.png", alt: "Casa tipo A Frutillar" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/CASA-B.png", alt: "Casa tipo B Frutillar" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/CASA-C.png", alt: "Casa tipo C Frutillar" },
    ],
  },

  // ── Master Plan ──
  {
    slug: "bosques-del-poeta",
    name: "Bosques del Poeta",
    category: "master-plan",
    categoryLabel: "Master Plan",
    year: 2025,
    location: "Isla Negra",
    region: "Valparaíso",
    units: 700,
    highlight: "Master plan costero — 700 lotes integrados al paisaje del litoral central",
    summary:
      "Planificación maestra para un desarrollo de 700 unidades en Isla Negra, articulando vialidad, áreas verdes, equipamiento y distintas tipologías residenciales en armonía con el entorno natural costero.",
    scope: [
      "Planificación territorial",
      "Diseño urbano",
      "Estrategia de etapamiento",
      "Gestión ambiental",
    ],
    management: "Gestión terreno + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Casa-Horizonte-scaled.png",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/Casa-Horizonte-scaled.png", alt: "Master plan Bosques del Poeta" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/3-1-scaled.png", alt: "Plano general Bosques del Poeta" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/4-1-scaled.png", alt: "Tipología residencial" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/5-2-scaled.png", alt: "Paisaje Isla Negra" },
    ],
  },
  {
    slug: "rano-kau",
    name: "Rano Kau",
    category: "desarrollado",
    categoryLabel: "Vivienda Social DS19",
    year: 2020,
    location: "Valparaíso",
    region: "Valparaíso",
    units: 255,
    highlight: "255 departamentos en Valparaíso — desarrollo urbano estratégico en la V Región",
    summary:
      "Proyecto de vivienda social en Valparaíso bajo programa DS19, con 255 unidades que aportan al desarrollo habitacional de la región portuaria. Gestión integral desde terreno hasta entrega.",
    scope: [
      "Gestión de terreno",
      "Gestión SERVIU",
      "Arquitectura y desarrollo",
    ],
    management: "Gestión terreno + Gestión Serviu + Arquitectura y desarrollo",
    heroImage: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/VALPARAISO-PROYECTO-RANO-KAU-1-scaled.png",
    images: [
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/VALPARAISO-PROYECTO-RANO-KAU-1-scaled.png", alt: "Condominio Rano Kau exterior" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/VALPARAISO-PROYECTO-RANO-KAU-4-scaled.png", alt: "Vista Rano Kau" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/VALPARAISO-PROYECTO-RANO-KAU-7-scaled.png", alt: "Fachada Rano Kau" },
      { src: "https://triacorp.estalisto.cl/wp-content/uploads/2026/01/VALPARAISO-PROYECTO-RANO-KAU-8-scaled.png", alt: "Entorno Rano Kau" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  };
}
