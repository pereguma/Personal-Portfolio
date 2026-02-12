// =====================================================
// PORTFOLIO DATA - Edita este archivo para actualizar contenido
// =====================================================

export const personalInfo = {
  name: "Pere Gumà",
  title: "Consultoría en IA y Business Analytics | Analítica Aplicada al Marketing",
  subtitle: "Transformando datos en decisiones estratégicas mediante analítica, automatización e implantación de soluciones de IA en entornos reales.",
  email: "pere.guma97@gmail.com",
  linkedin: "https://www.linkedin.com/in/peregumaesteve",
  cvUrl: "/cv-pere-guma.pdf",
};

export const aboutText = {
  heading: "Quién Soy",
  paragraph:
    "Soy una persona orientada a la mejora continua, tanto en el ámbito profesional como personal. Practico deporte de forma habitual (running, gimnasio, fútbol, escalada), lo que refuerza mi disciplina, constancia y mentalidad de superación. Me motiva salir de la zona de confort, aprender constantemente y afrontar retos complejos con enfoque analítico y actitud proactiva. Busco siempre aportar valor real y evolucionar hacia mi mejor versión en cada proyecto.",
};

export const profileText = {
  heading: "Perfil Profesional",
  paragraphs: [
    "Profesional híbrido negocio–tecnología con formación en Ingeniería de Organización Industrial y ADE, y especialización en analítica de datos y marketing digital. Experiencia en definición y seguimiento de KPIs, mejora de procesos y reporting para la toma de decisiones.",
    "Orientado a convertir datos en insights accionables mediante analítica, automatización y herramientas BI, con enfoque práctico en entornos de negocio y consultoría.",
  ],
};

export const competencyCategories = [
  {
    title: "Estrategia de Negocio y Excelencia Operativa",
    skills: [
      "Diseño y seguimiento de KPIs",
      "Elaboración de Business Case y ROI",
      "Modelado LTV / CAC",
      "Optimización de procesos Lean",
      "Gestión de stakeholders multifuncional",
      "Resolución estructurada de problemas (8D)",
    ],
  },
  {
    title: "Analítica de Datos y Business Intelligence",
    skills: [
      "Diseño de dashboards ejecutivos (Power BI / Looker)",
      "Google Analytics 4 (GA4)",
      "Análisis de embudo y cohortes",
      "Modelado avanzado de datos (Excel / Sheets)",
      "Consultas SQL básicas",
      "Reporting ejecutivo basado en datos",
    ],
  },
  {
    title: "IA Aplicada y Automatización Digital",
    skills: [
      "Integración de LLMs (GPT / Claude / Gemini)",
      "Automatización no-code (Make / Zapier / n8n)",
      "Optimización de flujos con IA",
      "Workflows de contenido y datos con IA",
      "Estrategia de digitalización de producto",
      "Identificación e implantación de casos de uso IA",
    ],
  },
];

export const projects = [
  {
    title: "Jocs de la Terra",
    subtitle: "E-commerce propio",
    description:
      "Lideré la estrategia digital y el desarrollo e-commerce para una marca de juegos tradicionales, combinando analítica de mercado con insights de cliente para impulsar las ventas online.",
    skills: ["Estrategia E-commerce", "Marketing Digital", "GA4", "SEO"],
    image: "project-ecommerce",
    details:
      "Desarrollo y ejecución de una estrategia de transformación digital integral: rediseño web, optimización SEO, campañas de publicidad pagada e implementación de analítica avanzada. Uso de GA4 e insights basados en IA para optimizar el customer journey y aumentar las tasas de conversión.",
  },
  {
    title: "Sistema de Estandarización de Procesos",
    subtitle: "BCNonwovens",
    description:
      "Diseñé e implementé un marco completo de estandarización de procesos (\"SKELETON\") mapeando todos los procesos de la empresa, con documentación visual a nivel macro y descripciones detalladas para cada flujo operativo.",
    skills: ["Mapeo de procesos", "Estandarización", "Metodología Lean", "Sistemas de calidad"],
    image: "project-standardization",
    details:
      "Creación de la arquitectura completa de procesos organizacionales desde cero, documentando cada proceso a dos niveles: una vista macro visual para referencia rápida y procedimientos operativos estándar detallados a nivel textual para cada proceso individual. Este marco SKELETON se convirtió en la columna vertebral para auditorías de calidad, formación y mejora continua en toda la organización.",
  },
  {
    title: "Sistema Formativo y de Competencias",
    subtitle: "BCNonwovens",
    description:
      "Implementé un sistema integral de gestión formativa, mapeando las competencias requeridas de cada puesto de trabajo y el nivel de cualificación de cada persona en la organización.",
    skills: ["Sistemas formativos", "Mapeo de competencias", "Procesos RRHH", "Seguimiento de cualificaciones"],
    image: "project-training",
    details:
      "Diseño y despliegue del marco completo del sistema formativo: no el software, sino la implementación organizacional. Esto incluyó la definición de matrices de competencias por puesto, niveles de cualificación por empleado, identificación de gaps formativos y creación de planes de desarrollo estructurados. El sistema permitió un desarrollo de la plantilla basado en datos, alineado con los requisitos de calidad de P&G.",
  },
];

export const experience = [
  {
    role: "Customer Quality Engineer",
    company: "DOGA SA",
    location: "Abrera, Cataluña, España",
    period: "2023 – 2024",
    duration: "1 año",
    description: null,
    highlights: [
      "Gestión integral de reclamaciones internacionales: análisis de causa raíz (8D), planes de acción y seguimiento de KPIs",
      "Coordinación con equipos multifuncionales (I+D, Producción, Comercial)",
      "Uso de SAP y reporting para trazabilidad y control de indicadores",
      "Mejora de fiabilidad mediante validaciones y controles preventivos",
    ],
    isGrouped: false,
  },
  {
    role: "BCNonwovens",
    company: "BCNonwovens",
    location: "Sant Quintí de Mediona, Cataluña, España",
    period: "2019 – 2023",
    duration: "5 años",
    description: null,
    highlights: [],
    isGrouped: true,
    subRoles: [
      {
        role: "Quality Management Systems Engineer",
        period: "2021 – 2023",
        highlights: [
          "Diseño y mantenimiento de sistemas de gestión de calidad",
          "Auditorías internas, de cliente y de terceros (P&G 20 Critical Components)",
          "Proyectos Lean (A3, estandarización, formación interna)",
          "Implantación y seguimiento de KPIs operativos",
        ],
      },
      {
        role: "Becario I+D – Soporte Multidepartamental",
        period: "2019 – 2021",
        highlights: [
          "Soporte técnico a I+D, análisis de materiales y organización del laboratorio",
          "Apoyo a proyectos de estandarización y sistema formativo",
        ],
      },
    ],
  },
];

export const academicEducation = [
  {
    degree: "Postgrado en Gestión de la IA y Data Science en la Empresa",
    institution: "La Salle – Barcelona",
    year: "En proceso",
  },
  {
    degree: "Máster en Dirección de Marketing Digital",
    institution: "UPF Barcelona School of Management",
    year: "2024 – 2025",
  },
  {
    degree: "Postgrado en Gestión de Proyectos",
    institution: "UPC School / Tech Talent Center",
    year: "2022",
  },
  {
    degree: "Grado en Administración y Dirección de Empresas",
    institution: "Universitat Oberta de Catalunya",
    year: "2017 – 2021",
  },
  {
    degree: "Grado en Ingeniería de Organización Industrial",
    institution: "UPC Manresa – EPSEM",
    year: "2015 – 2019",
  },
];

export const complementaryTraining = [
  { name: "AWS Cloud Practitioner Essentials", year: "2026" },
  { name: "SEO, SEM y Analítica Web", year: "2025" },
  { name: "IA aplicada a Marketing Digital", year: "2024" },
  { name: "PEFC Certification", year: "2022" },
  { name: "P&G Quality Training Program – 20 Critical Components", year: "2021" },
];

export const officialCertifications: string[] = [];

export const navLinks = [
  { label: "Sobre Mí", href: "#about" },
  { label: "Perfil", href: "#profile" },
  { label: "Experiencia", href: "#experience" },
  { label: "Educación", href: "#education" },
  { label: "Proyectos", href: "#projects" },
  { label: "Competencias", href: "#competencies" },
  { label: "Contacto", href: "#contact" },
];
