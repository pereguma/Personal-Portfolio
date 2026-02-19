export const en = {
  nav: {
    about: "About Me",
    profile: "Profile",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    competencies: "Competencies",
    contact: "Contact",
  },
  hero: {
    downloadCv: "Download CV",
    title: "AI Consulting & Business Analytics | Applied Marketing Analytics",
    subtitle: "Turning data into strategic decisions through analytics, automation, and real-world AI implementation.",
  },
  about: {
    heading: "Who am I?",
    paragraph:
      "I am a person driven by continuous improvement, both professionally and personally. I regularly practice sports (running, gym, football and climbing, among others), which reinforces my discipline, consistency, and growth mindset. I am motivated by stepping out of my comfort zone, constantly learning, and tackling complex challenges with an analytical approach and proactive attitude. I always strive to deliver real value and evolve towards my best version in every project.",
  },
  profile: {
    heading: "Professional Profile",
    paragraphs: [
      "Hybrid business–technology professional with a background in Industrial Engineering and Business Administration, specialising in data analytics and digital marketing. Experience in KPI definition and tracking, process improvement, and reporting for decision-making.",
      "Focused on turning data into actionable insights through analytics, automation, and BI tools, with a hands-on approach in business and consulting environments.",
      "Over the past two years, alongside formal academic training, I have pursued intensive self-directed learning in applied Artificial Intelligence: LLM integration, AI-driven content generation (video and image), intelligent automation, vibecoding, and the implementation of AI-driven solutions with a clear business orientation. The focus has consistently been on practical application in real-world environments, combining strategic thinking with a results-driven approach.",
    ],
  },
  experience: {
    heading: "Professional Experience",
    entries: [
      {
        company: "DOGA SA",
        location: "Abrera, Catalonia, Spain",
        period: "2023 – 2024",
        duration: "1 year",
        subRoles: [
          {
            role: "Customer Quality Engineer",
            period: "2023 – 2024",
            highlights: [
              "End-to-end management of international claims: root cause analysis (8D), action plans, and KPI tracking",
              "Coordination with cross-functional teams (R&D, Production, Sales)",
              "Use of SAP and reporting for traceability and indicator control",
              "Reliability improvement through validations and preventive controls",
            ],
          },
        ],
      },
      {
        company: "BCNonwovens",
        location: "Sant Quintí de Mediona, Catalonia, Spain",
        period: "2019 – 2023",
        duration: "5 years",
        subRoles: [
          {
            role: "Quality Management Systems Engineer",
            period: "2021 – 2023",
            highlights: [
              "Design and maintenance of quality management systems",
              "Internal, customer, and third-party audits (P&G 20 Critical Components)",
              "Lean projects (A3, standardisation, internal training)",
              "Implementation and monitoring of operational KPIs",
            ],
          },
          {
            role: "R&D Intern – Multi-department Support",
            period: "2019 – 2021",
            highlights: [
              "Technical support for R&D, materials analysis, and lab organisation",
              "Support for standardisation and training system projects",
            ],
          },
        ],
      },
    ],
  },
  education: {
    heading: "Education",
    complementaryHeading: "Complementary Training",
    academic: [
      {
        degree: "Postgraduate in AI Management and Data Science for Business",
        institution: "La Salle – Barcelona",
        year: "In progress",
      },
      {
        degree: "Master's in Digital Marketing Management",
        institution: "UPF Barcelona School of Management",
        year: "2024 – 2025",
      },
      {
        degree: "Postgraduate in Project Management",
        institution: "UPC School / Tech Talent Center",
        year: "2022",
      },
      {
        degree: "Bachelor's in Business Administration",
        institution: "Universitat Oberta de Catalunya",
        year: "2017 – 2021",
      },
      {
        degree: "Bachelor's in Industrial Engineering",
        institution: "UPC Manresa – EPSEM",
        year: "2015 – 2019",
      },
    ],
    complementary: [
      { name: "Python Programming Fundamentals", year: "2026" },
      { name: "Microsoft Azure Administrator Associate Certification", year: "2026" },
      { name: "AWS Cloud Practitioner Essentials", year: "2026" },
      { name: "SEO, SEM & Web Analytics", year: "2025" },
      { name: "AI Applied to Digital Marketing", year: "2024" },
      { name: "PEFC Certification", year: "2022" },
      { name: "P&G Quality Training Program – 20 Critical Components", year: "2021" },
    ],
  },
  projects: {
    heading: "Selected Projects",
    viewDetails: "View details",
    viewLess: "View less",
    visitProject: "Visit project",
    viewOnGithub: "View on GitHub",
    prototypeWarning: "Currently a prototype. Online purchases and gameplay are not available.",
    entries: [
      {
        title: "Ecommerce Strategic Segmentation & Predictive Analysis",
        subtitle: "Data Science Project",
        description:
          "Strategic analysis on a 10,000-record e-commerce dataset. ANOVA testing was used to validate statistically significant differences in average order value across customer segments, complemented by unsupervised clustering (K-Means) for strategic segmentation and a Random Forest model for predictive analysis, within a full exploratory data analysis and preparation pipeline.",
        skills: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
        image: "project-datascience",
        details:
          "The project integrates inferential statistics and machine learning to extract actionable value from transactional data. ANOVA validation confirmed statistically significant differences between customer segments. K-Means clustering identified strategic value profiles, while the Random Forest model provided predictive capability to anticipate purchasing behaviour. The full pipeline includes rigorous exploratory analysis, outlier treatment, feature engineering, and interpretive visualisation of results.",
        link: "https://github.com/pereguma/Ecommerce-Analysis-Dataset",
        isPrototype: false,
        isGithub: true,
      },
      {
        title: "Jocs de la Terra – Cultural E-commerce Project",
        subtitle: "Personal project",
        description:
          "Personal e-commerce project aimed at promoting Catalan culture through themed board games. Development of value proposition, SEO/SEM approach, funnel analytics, and automation exploration.",
        skills: ["E-commerce Strategy", "Digital Marketing", "GA4", "SEO/SEM"],
        image: "project-ecommerce",
        details:
          "Development and execution of a comprehensive digital transformation strategy: website redesign, SEO optimisation, paid advertising campaigns, and advanced analytics implementation. Use of GA4 and AI-driven insights to optimise the customer journey and increase conversion rates.",
        link: "https://jocsdelaterra.cat",
        isPrototype: true,
        isGithub: false,
      },
      {
        title: "Process Standardisation System",
        subtitle: "BCNonwovens",
        description:
          "Designed and implemented a comprehensive process standardisation framework (\"SKELETON\") mapping all company processes, with visual macro-level documentation and detailed descriptions for each operational flow.",
        skills: ["Process Mapping", "Standardisation", "Lean Methodology", "Quality Systems"],
        image: "project-standardization",
        details:
          "Creation of the complete organisational process architecture from scratch, documenting each process at two levels: a visual macro view for quick reference and detailed standard operating procedures at the textual level for each individual process. This SKELETON framework became the backbone for quality audits, training, and continuous improvement across the organisation.",
        link: undefined,
        isPrototype: false,
        isGithub: false,
      },
      {
        title: "Training and Competency System",
        subtitle: "BCNonwovens",
        description:
          "Implemented a comprehensive training management system, mapping the competencies required for each job position and the qualification level of each person in the organisation.",
        skills: ["Training Systems", "Competency Mapping", "HR Processes", "Qualification Tracking"],
        image: "project-training",
        details:
          "Design and deployment of the complete training system framework: not the software, but the organisational implementation. This included defining competency matrices by position, qualification levels per employee, identifying training gaps, and creating structured development plans. The system enabled data-driven workforce development aligned with P&G quality requirements.",
        link: undefined,
        isPrototype: false,
        isGithub: false,
      },
    ],
  },
  competencies: {
    heading: "Key Competencies",
    categories: [
      {
        title: "Business Strategy & Operational Excellence",
        skills: [
          "KPI design and monitoring",
          "Business Case and ROI development",
          "LTV / CAC modelling",
          "Lean process optimisation",
          "Cross-functional stakeholder management",
          "Structured problem solving (8D)",
        ],
      },
      {
        title: "Data Analytics & Business Intelligence",
        skills: [
          "Executive dashboard design (Power BI / Looker Studio)",
          "Google Analytics 4 (GA4)",
          "Funnel and cohort analysis",
          "Advanced data modelling (Excel / Sheets)",
          "Basic SQL queries",
          "Data-driven executive reporting",
        ],
      },
      {
        title: "Applied AI & Digital Automation",
        skills: [
          "LLM integration (ChatGPT / Claude / Gemini)",
          "No-code automation (Make / Zapier / n8n)",
          "AI-powered workflow optimisation",
          "AI content and data workflows",
          "Product digitalisation strategy",
          "AI use case identification and implementation",
        ],
      },
    ],
  },
  contact: {
    heading: "Let's Connect",
    subtitle: "Interested in collaborating or have a project in mind? I'd love to hear from you.",
    downloadCv: "Download CV",
    rights: "All rights reserved.",
  },
};
