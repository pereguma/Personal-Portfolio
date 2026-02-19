export const ca = {
  nav: {
    about: "Sobre Mi",
    profile: "Perfil",
    experience: "Experiència",
    education: "Educació",
    projects: "Projectes",
    competencies: "Competències",
    contact: "Contacte",
  },
  hero: {
    downloadCv: "Descarregar CV",
    title: "Consultoria en IA i Business Analytics | Analítica Aplicada al Màrqueting",
    subtitle: "Transformant dades en decisions estratègiques mitjançant analítica, automatització i implantació de solucions d'IA en entorns reals.",
  },
  about: {
    heading: "Qui sóc?",
    paragraph:
      "Sóc una persona orientada a la millora contínua, tant en l'àmbit professional com personal. Practico esport de forma habitual (running, gimnàs, futbol i escalada, entre d'altres), cosa que reforça la meva disciplina, constància i mentalitat de superació. Em motiva sortir de la zona de confort, aprendre constantment i afrontar reptes complexos amb enfocament analític i actitud proactiva. Busco sempre aportar valor real i evolucionar cap a la meva millor versió en cada projecte.",
  },
  profile: {
    heading: "Perfil Professional",
    paragraphs: [
      "Professional híbrid negoci–tecnologia amb formació en Enginyeria d'Organització Industrial i ADE, i especialització en analítica de dades i màrqueting digital. Experiència en definició i seguiment de KPIs, millora de processos i reporting per a la presa de decisions.",
      "Orientat a convertir dades en insights accionables mitjançant analítica, automatització i eines BI, amb enfocament pràctic en entorns de negoci i consultoria.",
      "Durant els darrers dos anys, en paral·lel a la formació acadèmica formal, he desenvolupat una formació autodidacta intensiva en Intel·ligència Artificial aplicada: integració de LLMs, generació de contingut amb IA (vídeo i imatge), automatitzacions intel·ligents, vibecoding i implementació de solucions AI-driven orientades a negoci. L'enfocament ha estat sempre l'aplicació pràctica en entorns reals, amb criteri estratègic i orientació a resultats.",
    ],
  },
  experience: {
    heading: "Experiència Professional",
    entries: [
      {
        company: "DOGA SA",
        location: "Abrera, Catalunya, Espanya",
        period: "2023 – 2024",
        duration: "1 any",
        subRoles: [
          {
            role: "Customer Quality Engineer",
            period: "2023 – 2024",
            highlights: [
              "Gestió integral de reclamacions internacionals: anàlisi de causa arrel (8D), plans d'acció i seguiment de KPIs",
              "Coordinació amb equips multifuncionals (R+D, Producció, Comercial)",
              "Ús de SAP i reporting per a traçabilitat i control d'indicadors",
              "Millora de fiabilitat mitjançant validacions i controls preventius",
            ],
          },
        ],
      },
      {
        company: "BCNonwovens",
        location: "Sant Quintí de Mediona, Catalunya, Espanya",
        period: "2019 – 2023",
        duration: "5 anys",
        subRoles: [
          {
            role: "Quality Management Systems Engineer",
            period: "2021 – 2023",
            highlights: [
              "Disseny i manteniment de sistemes de gestió de qualitat",
              "Auditories internes, de client i de tercers (P&G 20 Critical Components)",
              "Projectes Lean (A3, estandardització, formació interna)",
              "Implantació i seguiment de KPIs operatius",
            ],
          },
          {
            role: "Becari R+D – Suport Multidepartamental",
            period: "2019 – 2021",
            highlights: [
              "Suport tècnic a R+D, anàlisi de materials i organització del laboratori",
              "Suport a projectes d'estandardització i sistema formatiu",
            ],
          },
        ],
      },
    ],
  },
  education: {
    heading: "Educació",
    complementaryHeading: "Formació Complementària",
    academic: [
      {
        degree: "Postgrau en Gestió de la IA i Data Science a l'Empresa",
        institution: "La Salle – Barcelona",
        year: "En procés",
      },
      {
        degree: "Màster en Direcció de Màrqueting Digital",
        institution: "UPF Barcelona School of Management",
        year: "2024 – 2025",
      },
      {
        degree: "Postgrau en Gestió de Projectes",
        institution: "UPC School / Tech Talent Center",
        year: "2022",
      },
      {
        degree: "Grau en Administració i Direcció d'Empreses",
        institution: "Universitat Oberta de Catalunya",
        year: "2017 – 2021",
      },
      {
        degree: "Grau en Enginyeria d'Organització Industrial",
        institution: "UPC Manresa – EPSEM",
        year: "2015 – 2019",
      },
    ],
    complementary: [
      { name: "Fonaments de Programació en Python", year: "2026" },
      { name: "Certificació Microsoft Azure Administrator Associate", year: "2026" },
      { name: "AWS Cloud Practitioner Essentials", year: "2026" },
      { name: "SEO, SEM i Analítica Web", year: "2025" },
      { name: "IA aplicada a Màrqueting Digital", year: "2024" },
      { name: "PEFC Certification", year: "2022" },
      { name: "P&G Quality Training Program – 20 Critical Components", year: "2021" },
    ],
  },
  projects: {
    heading: "Projectes Seleccionats",
    viewDetails: "Veure detalls",
    viewLess: "Veure menys",
    visitProject: "Visitar projecte",
    viewOnGithub: "Veure a GitHub",
    prototypeWarning: "Actualment és un prototip. No es pot jugar ni fer compres en línia.",
    entries: [
      {
        title: "Ecommerce Strategic Segmentation & Predictive Analysis",
        subtitle: "Projecte de Data Science",
        description:
          "Anàlisi estratègica sobre un dataset de 10.000 registres d'un e-commerce. Es van validar diferències significatives en el tiquet mitjà entre segments mitjançant test ANOVA, i s'hi va aplicar Machine Learning per a segmentació no supervisada (K-Means) i modelatge predictiu (Random Forest), amb un pipeline complet d'anàlisi exploratòria i preparació de dades.",
        skills: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
        image: "project-datascience",
        details:
          "El projecte integra estadística inferencial i machine learning per extreure valor accionable de dades transaccionals. La validació ANOVA va confirmar diferències estadísticament significatives entre segments de clients. El clustering K-Means va permetre identificar perfils estratègics de valor, mentre que el model Random Forest va oferir capacitat predictiva per anticipar comportaments de compra. Tot el procés inclou anàlisi exploratòria rigorosa, tractament d'outliers, feature engineering i visualització interpretativa dels resultats.",
        link: "https://github.com/pereguma/Ecommerce-Analysis-Dataset",
        isPrototype: false,
        isGithub: true,
      },
      {
        title: "Jocs de la Terra – Projecte E-commerce Cultural",
        subtitle: "Projecte propi",
        description:
          "Projecte propi d'e-commerce orientat a la divulgació de la cultura catalana a través de jocs de taula temàtics. Desenvolupament de proposta de valor, enfocament SEO/SEM, analítica de funnels i exploració d'automatitzacions.",
        skills: ["Estratègia E-commerce", "Màrqueting Digital", "GA4", "SEO/SEM"],
        image: "project-ecommerce",
        details:
          "Desenvolupament i execució d'una estratègia de transformació digital integral: redisseny web, optimització SEO, campanyes de publicitat pagada i implementació d'analítica avançada. Ús de GA4 i insights basats en IA per optimitzar el customer journey i augmentar les taxes de conversió.",
        link: "https://jocsdelaterra.cat",
        isPrototype: true,
        isGithub: false,
      },
      {
        title: "Sistema d'Estandardització de Processos",
        subtitle: "BCNonwovens",
        description:
          "Vaig dissenyar i implementar un marc complet d'estandardització de processos (\"SKELETON\") mapejant tots els processos de l'empresa, amb documentació visual a nivell macro i descripcions detallades per a cada flux operatiu.",
        skills: ["Mapatge de processos", "Estandardització", "Metodologia Lean", "Sistemes de qualitat"],
        image: "project-standardization",
        details:
          "Creació de l'arquitectura completa de processos organitzacionals des de zero, documentant cada procés a dos nivells: una vista macro visual per a referència ràpida i procediments operatius estàndard detallats a nivell textual per a cada procés individual. Aquest marc SKELETON es va convertir en la columna vertebral per a auditories de qualitat, formació i millora contínua a tota l'organització.",
        link: undefined,
        isPrototype: false,
        isGithub: false,
      },
      {
        title: "Sistema Formatiu i de Competències",
        subtitle: "BCNonwovens",
        description:
          "Vaig implementar un sistema integral de gestió formativa, mapejant les competències requerides de cada lloc de treball i el nivell de qualificació de cada persona a l'organització.",
        skills: ["Sistemes formatius", "Mapatge de competències", "Processos RRHH", "Seguiment de qualificacions"],
        image: "project-training",
        details:
          "Disseny i desplegament del marc complet del sistema formatiu: no el programari, sinó la implementació organitzacional. Això va incloure la definició de matrius de competències per lloc, nivells de qualificació per empleat, identificació de gaps formatius i creació de plans de desenvolupament estructurats. El sistema va permetre un desenvolupament de la plantilla basat en dades, alineat amb els requisits de qualitat de P&G.",
        link: undefined,
        isPrototype: false,
        isGithub: false,
      },
    ],
  },
  competencies: {
    heading: "Competències Clau",
    categories: [
      {
        title: "Estratègia de Negoci i Excel·lència Operativa",
        skills: [
          "Disseny i seguiment de KPIs",
          "Elaboració de Business Case i ROI",
          "Modelatge LTV / CAC",
          "Optimització de processos Lean",
          "Gestió d'stakeholders multifuncional",
          "Resolució estructurada de problemes (8D)",
        ],
      },
      {
        title: "Analítica de Dades i Business Intelligence",
        skills: [
          "Disseny de dashboards executius (Power BI / Looker Studio)",
          "Google Analytics 4 (GA4)",
          "Anàlisi d'embut i cohorts",
          "Modelatge avançat de dades (Excel / Sheets)",
          "Consultes SQL bàsiques",
          "Reporting executiu basat en dades",
        ],
      },
      {
        title: "IA Aplicada i Automatització Digital",
        skills: [
          "Integració de LLMs (ChatGPT / Claude / Gemini)",
          "Automatització no-code (Make / Zapier / n8n)",
          "Optimització de fluxos amb IA",
          "Workflows de contingut i dades amb IA",
          "Estratègia de digitalització de producte",
          "Identificació i implantació de casos d'ús IA",
        ],
      },
    ],
  },
  contact: {
    heading: "Connectem",
    subtitle: "Interessat en col·laborar o tens un projecte en ment? M'encantaria saber de tu.",
    downloadCv: "Descarregar CV",
    rights: "Tots els drets reservats.",
  },
};
