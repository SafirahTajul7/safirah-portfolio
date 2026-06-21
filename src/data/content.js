export const profile = {
  name: "Safirah Binti Tajul Ariffin",
  shortName: "Safirah Tajul",
  titles: [
    "SAP Application Specialist",
    "IT PMO",
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineering Graduate",
  ],
  email: "safirahtajul@gmail.com",
  phone: "+6011-63972186",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  headline: "Bridging Enterprise Systems, SAP Solutions, and AI-Powered Applications.",
  subheadline:
    "Software Engineering graduate with experience in SAP applications, project management, full-stack development, and AI-powered solutions.",
  summary:
    "Software Engineering graduate specializing in full-stack development, system integration, cloud technologies, and AI-powered applications. Currently building experience in SAP enterprise solutions while continuing to develop expertise in AI engineering and scalable web applications.",
};

export const journey = [
  { role: "Programmer", org: "KA Digital", period: "2022 – 2023" },
  { role: "Full Stack Developer Intern", org: "Lestari Alam Sekitar", period: "2025 – 2026" },
  { role: "IT PMO", org: "Vista Kencana", period: "2026" },
  { role: "SAP Specialist Applications", org: "DKSH", period: "2026 – Present" },
];

export const currentFocus = {
  role: "SAP Specialist Applications at DKSH",
  interests: [
    "SAP MM",
    "Enterprise Systems",
    "System Integration",
    "AI Applications",
    "Full-Stack Development",
    "Cloud Technologies",
    "Business Process Solutions",
  ],
};

export const skills = [
  {
    category: "Enterprise Solutions",
    items: [
      "SAP MM",
      "SAP Applications",
      "Requirement Gathering",
      "Business Process Analysis",
      "Project Coordination",
      "Documentation",
      "IT PMO",
    ],
  },
  {
    category: "Full-Stack Development",
    items: ["React", "Vue", "JavaScript", "TypeScript", "FastAPI", "Laravel", "REST APIs", "Node.js"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Firestore", "BigQuery", "MongoDB"],
  },
  {
    category: "AI Engineering",
    items: ["Google Gemini", "RAG Architecture", "Prompt Engineering", "OCR", "NLP", "AI Workflows"],
  },
  {
    category: "Cloud & Tools",
    items: ["Google Cloud", "Cloud Run", "Git", "GitHub", "Jira", "Trello", "Figma", "Insomnia"],
  },
];

export const projects = [
  {
    id: "carbon-footprint-calculator",
    title: "AI-Powered Carbon Footprint Calculator",
    tag: "Hero Project",
    period: "Jan 2026 – Mar 2026",
    tech: ["React", "FastAPI", "PostgreSQL", "Firestore", "Google Gemini", "RAG", "OCR", "NLP", "Cloud Run"],
    overview:
      "An AI-powered system for construction materials that extracts structured data from PDFs and generates carbon footprint analysis, built during an industry project.",
    challenges:
      "Extracting structured data reliably from inconsistent, unstructured construction material PDFs and presenting AI-generated insights in a way decision-makers could trust.",
    solutions:
      "Designed an OCR and NLP pipeline integrated with Google Gemini via RAG architecture, connecting backend services and AI modules through APIs for seamless data processing, plus a recommendation module to support decision-making.",
    highlights: [
      "Reduced manual processing time by approximately 90%",
      "Integrated AI-powered document analysis pipeline",
      "Top 2 placement (2nd place) among 8 teams",
    ],
    github: "https://github.com",
  },
  {
    id: "purefarm-management-system",
    title: "PureFarm Management System",
    tag: "Final Year Project",
    tech: ["React", "PostgreSQL", "Dashboards"],
    overview:
      "A centralized system to manage farm operations, including dashboard analytics, inventory tracking, and data visualization for agricultural decision-making.",
    challenges:
      "Designing a relational database schema capable of handling large, real-time operational datasets while keeping the dashboard intuitive for non-technical farm operators.",
    solutions:
      "Built relational schemas handling 1,000+ records for real-time monitoring and developed dashboards for data visualization, improving operational decision-making and workflow efficiency by ~40%.",
    highlights: ["Farm operation management", "Dashboard analytics", "Inventory tracking", "Data visualization"],
    github: "https://github.com",
  },
  {
    id: "forest-tree-ecosystem-simulation",
    title: "Forest Tree Ecosystem Simulation",
    tag: "Academic Project",
    tech: ["Java", "PHP", "JavaScript", "MySQL"],
    overview:
      "A rule-based ecosystem simulation modelling forest growth dynamics, paired with real-time environmental dashboards for analysis.",
    challenges:
      "Modelling realistic ecosystem growth behaviour across 1,000+ data points while keeping visualizations performant and clear in real time.",
    solutions:
      "Developed rule-based algorithms in Java to simulate ecosystem growth, and built real-time dashboards that improved analysis efficiency by ~30%.",
    highlights: ["Rule-based ecosystem simulation", "Real-time environmental dashboards", "Data visualization"],
    github: "https://github.com",
  },
];

export const experience = [
  {
    role: "SAP Specialist Applications",
    org: "DKSH",
    period: "July 2026 – Present",
    points: [
      "Supporting SAP application design, development, and implementation, with a focus on SAP MM (Materials Management) module support and architecture alignment",
      "Gathering and analyzing business requirements",
      "Developing SAP solution designs",
      "Supporting issue resolution to ensure high service levels",
    ],
  },
  {
    role: "IT PMO",
    org: "Vista Kencana Sdn. Bhd. (Contract)",
    period: "May 2026 – June 2026",
    points: [
      "Supported project documentation and administrative activities for a project implemented at DBKL (Kuala Lumpur City Hall)",
      "Meeting coordination and stakeholder follow-ups",
      "Documentation of action items to support project tracking and delivery",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "Lestari Alam Sekitar, Seremban",
    period: "Sept 2025 – Jan 2026",
    points: [
      "Engineered and integrated 10+ REST APIs for backend-AI communication, reducing integration errors by ~30%",
      "Performed API testing and validation using Insomnia",
      "Developed modular Vue.js components, improving UI responsiveness by ~25%",
      "Supported technical documentation and system workflows",
      "Assisted in cross-functional product demos between technical and non-technical stakeholders",
    ],
  },
  {
    role: "Programmer",
    org: "KA Digital, Cyberjaya",
    period: "Jun 2022 – Jan 2023",
    points: [
      "Customized and optimized WordPress websites using HTML, CSS, and JavaScript, improving performance by ~35%",
      "Translated client requirements into UI components and functional features across 5+ projects",
      "Worked closely with clients to implement tailored web solutions",
    ],
  },
];

export const education = [
  {
    school: "Gamuda AI Academy",
    program: "AI & Full-Stack Development Program",
    period: "January 2026 – March 2026",
    highlight: true,
    points: [
      "Selected for an industry-led AI engineering program",
      "Developed 6+ full-stack modules using React, FastAPI, PostgreSQL, and Google Cloud services",
      "Implemented RAG-based AI workflows using Google Gemini",
      "Deployed scalable backend services using Cloud Run and Firestore",
    ],
  },
  {
    school: "Universiti Kuala Lumpur",
    program: "Bachelor of Information Technology (Hons.) Software Engineering",
    period: "Feb 2023 – Jan 2026",
    points: ["Final Year Project: PureFarm Management System", "Software Engineering coursework"],
  },
  {
    school: "Kolej Universiti Poly Tech Mara (KUPTM)",
    program: "Diploma in Computer Science",
    period: "Jun 2019 – Oct 2021",
    points: ["CGPA: 3.88"],
  },
];

export const certifications = [
  {
    title: "Google Project Management Professional Certificate",
    issuer: "Google",
    date: "January 2025",
    url: "#",
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "August 2025",
    url: "#",
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "October 2025",
    url: "#",
  },
  {
    title: "Google Business Intelligence Certificate",
    issuer: "Google",
    date: "November 2025",
    url: "#",
  },
];

export const galleryCategories = ["All", "Professional", "Projects", "Photography", "Workplace", "Achievements"];

export const galleryItems = [
  { id: 1, category: "Professional", src: "/gallery/placeholder-1.jpg", title: "Professional headshot" },
  { id: 2, category: "Projects", src: "/gallery/placeholder-2.jpg", title: "Carbon Calculator demo" },
  { id: 3, category: "Workplace", src: "/gallery/placeholder-3.jpg", title: "At DKSH" },
  { id: 4, category: "Achievements", src: "/gallery/placeholder-4.jpg", title: "Top 2 placement" },
  { id: 5, category: "Photography", src: "/gallery/placeholder-5.jpg", title: "Photography" },
  { id: 6, category: "Projects", src: "/gallery/placeholder-6.jpg", title: "PureFarm dashboard" },
];
