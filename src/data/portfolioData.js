export const personalDetails = {
  name: "Suhani Keni",
  title: "AI & Data Science Engineer | Full-Stack Developer",
  tagline: "Building intelligent AI systems & sleek web interfaces",
  location: "Bengaluru, Karnataka, India",
  phone: "+91 9110423745",
  email: "suhanikeni5412@gmail.com",
  linkedin: "https://linkedin.com/in/suhanikeni",
  github: "https://github.com/SuhaniKeni",
  cgpa: "8.85 / 10",
  summary: "Artificial Intelligence and Data Science undergraduate (CGPA 8.85/10) with project experience in Python, SQL, and machine learning. Worked on a genomic data pipeline using CNN and LSTM models, contributed UI/UX and frontend work to a reinforcement-learning trading interface, and built the frontend for a natural-language-to-SQL assistant. Comfortable across data preprocessing, model training, and full-stack development in team-based academic projects.",
  heroTypingRoles: [
    "AI & Data Science Engineer",
    "Genomic AI Researcher",
    "Full-Stack Web Developer",
    "Machine Learning Specialist"
  ],
  stats: [
    { label: "CGPA (VTU)", value: "8.85", suffix: "/ 10" },
    { label: "Core Projects", value: "4+", suffix: "Built" },
    { label: "Certifications", value: "5", suffix: "Earned" },
    { label: "High Distinction", value: "93%", suffix: "Scored" }
  ]
};

export const technicalSkills = [
  {
    category: "Programming Languages",
    icon: "Code",
    color: "cyan",
    skills: [
      { name: "Python", level: 92, highlight: "Primary Language for AI, ML & Backend" },
      { name: "SQL", level: 90, highlight: "Database Queries & Data Architecture" },
      { name: "JavaScript (ES6+)", level: 88, highlight: "Frontend Logic & Web Development" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    color: "purple",
    skills: [
      { name: "Machine Learning", level: 88 },
      { name: "Deep Learning", level: 85 },
      { name: "CNN & LSTM Models", level: 88, highlight: "Genomic sequence classification" },
      { name: "AI Risk & Analytics Insights", level: 86, highlight: "Operational risk telemetry" },
      { name: "Model Preprocessing", level: 90 }
    ]
  },
  {
    category: "Web & Frontend",
    icon: "Layout",
    color: "blue",
    skills: [
      { name: "React", level: 90 },
      { name: "Recharts", level: 88, highlight: "Real-time data visualizations" },
      { name: "Tailwind CSS", level: 92 },
      { name: "Firebase Authentication", level: 80 },
      { name: "UI/UX & Responsive Design", level: 90 }
    ]
  },
  {
    category: "Backend & Databases",
    icon: "Database",
    color: "emerald",
    skills: [
      { name: "FastAPI & REST APIs", level: 88, highlight: "Enterprise API architecture" },
      { name: "SQL & SQLite", level: 88, highlight: "RDBMS asset registries" },
      { name: "Flask", level: 82 },
      { name: "NoSQL", level: 75 }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: "Wrench",
    color: "pink",
    skills: [
      { name: "Docker & Containerization", level: 85, highlight: "Full-stack deployment" },
      { name: "AWS EC2 & Nginx", level: 85, highlight: "Production hosting" },
      { name: "Git & GitHub", level: 88 },
      { name: "Power BI & Analytics", level: 80 }
    ]
  }
];

export const projectsData = [
  {
    id: "assetguard",
    title: "AssetGuard — Enterprise Asset Management & AI-Powered Predictive Maintenance",
    shortTitle: "AssetGuard",
    subtitle: "Enterprise Asset Management & AI-Powered Predictive Maintenance",
    status: "Completed",
    category: "AI & ML",
    categoryLabel: "AI • Full Stack • Cloud • Enterprise Software",
    badge: "Full-Stack Enterprise",
    deploymentBadge: "🚀 Deployed on AWS EC2",
    description: "A full-stack enterprise asset management platform for equipment tracking, maintenance operations, work orders, scheduling, analytics, and AI-assisted operational risk insights.",
    image: "/assetguard-dashboard.png",
    details: [
      "Built a full-stack enterprise asset management platform for centralizing equipment tracking, department classification, maintenance scheduling, and work order tracking.",
      "Engineered high-performance REST APIs in Python using FastAPI backed by SQLite for robust data persistence.",
      "Built interactive operational analytics dashboards with React and Recharts to visualize maintenance metrics and expenditure tracking.",
      "Integrated AI-assisted risk and operational insights to evaluate equipment telemetry and predictive maintenance indicators.",
      "Containerized backend and frontend services using Docker and Nginx and deployed full stack on AWS EC2."
    ],
    highlights: [
      "Enterprise Asset Registry for managing equipment and assets",
      "Asset classification and department management",
      "Maintenance Management Hub & Work order creation and tracking",
      "Maintenance scheduling and calendar analytics",
      "Maintenance analytics and expenditure tracking",
      "AI-assisted risk and operational insights",
      "Enterprise executive dashboard with data visualizations",
      "Role-based access and authentication with secure REST APIs"
    ],
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "SQLite",
      "Docker",
      "Nginx",
      "AWS EC2",
      "Recharts",
      "REST APIs"
    ],
    featured: true,
    github: "https://github.com/SuhaniKeni/AssetGuard-AI",
    demo: "http://13.235.97.154/dashboard"
  },
  {
    id: "genome-ai",
    title: "GenomeAI - AI-Based DNA Disease Prediction System",
    status: "Ongoing",
    category: "AI & ML",
    badge: "Featured AI Pipeline",
    description: "Built a genomic analysis pipeline using ClinVar and NCBI datasets for DNA-based disease prediction.",
    details: [
      "Built a high-throughput genomic analysis pipeline using ClinVar and NCBI datasets for disease risk prediction.",
      "Implemented preprocessing workflows covering DNA sequence extraction, tokenization, mutation processing, and dataset generation.",
      "Trained Convolutional Neural Networks (CNN) and Long Short-Term Memory (LSTM) models on processed DNA sequences for accurate variant classification.",
      "Scoped future modules for Explainable AI (XAI) and clinical decision reporting."
    ],
    technologies: ["Python", "CNN", "LSTM", "ClinVar", "NCBI", "Deep Learning", "Data Analytics"],
    featured: true,
    github: "https://github.com/SuhaniKeni/GenomeAI",
    demo: "#"
  },
  {
    id: "rl-trading-agent",
    title: "AI-Powered Reinforcement Learning Trading Agent",
    status: "Completed",
    category: "Web & AI",
    badge: "Full-Stack UI/UX",
    description: "Designed UI/UX for portfolio visualization and trading workflows, and built the corresponding frontend.",
    details: [
      "Conducted research and contributed to project architecture & strategy planning for a reinforcement-learning-based trading agent.",
      "Designed an intuitive, futuristic UI/UX for live portfolio visualization and automated trading execution workflows.",
      "Built responsive, interactive frontend components with real-time feedback and metrics display."
    ],
    technologies: ["React", "Tailwind CSS", "Reinforcement Learning", "Frontend Development", "UI/UX Design"],
    featured: true,
    github: "https://github.com/SuhaniKeni/RL-Agent",
    demo: "#"
  },
  {
    id: "nl-to-sql-assistant",
    title: "Natural Language to SQL Query Assistant",
    status: "Completed",
    category: "Web & NLP",
    badge: "NLP Frontend",
    description: "Built the frontend for a natural-language-to-SQL query assistant with integrated user authentication.",
    details: [
      "Built a seamless frontend interface that translates natural language prompts into executable SQL queries.",
      "Contributed to project planning, comprehensive technical documentation, and user story mapping.",
      "Integrated secure Firebase User Authentication and session management for personal query history."
    ],
    technologies: ["React", "Tailwind CSS", "SQL", "Firebase Auth", "NLP Interface"],
    featured: true,
    github: "https://github.com/SuhaniKeni/LLM-to-SQL-Project",
    demo: "#"
  }
];

export const educationData = [
  {
    degree: "B.E. Artificial Intelligence & Data Science",
    institution: "K S School of Engineering & Management (VTU)",
    period: "2023 - Expected 2027",
    score: "CGPA: 8.85/10",
    status: "Undergraduate",
    highlights: [
      "Specializing in Machine Learning, Deep Learning, SQL, and Data Analytics.",
      "Consistent academic performer with 8.85 CGPA out of 10.",
      "Active team player in team-based academic projects and hackathons."
    ]
  },
  {
    degree: "Class XII (Pre-University)",
    institution: "SDM PU College",
    period: "2021 - 2023",
    score: "Percentage: 93%",
    status: "Completed",
    highlights: [
      "Focused on Physics, Chemistry, Mathematics, and Computer Science.",
      "Graduated with Distinction (93%)."
    ]
  },
  {
    degree: "Class X (ICSE)",
    institution: "Guardian School",
    period: "2021",
    score: "Percentage: 93.5%",
    status: "Completed",
    highlights: [
      "High academic excellence across Mathematics and Science stream (93.5%)."
    ]
  }
];

export const certificationsData = [
  {
    title: "AI for App Building",
    issuer: "Google (via Coursera)",
    icon: "Sparkles",
    type: "AI & App Dev",
    color: "cyan",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/FUMSSOR55N85"
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    icon: "Brain",
    type: "AI & ML",
    color: "purple"
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    icon: "BarChart",
    type: "Data Science",
    color: "blue"
  },
  {
    title: "Full Stack Python",
    issuer: "Spidervella Technologies",
    icon: "Layers",
    type: "Full Stack",
    color: "emerald"
  },
  {
    title: "Core Python",
    issuer: "Spidervella Technologies",
    icon: "Code",
    type: "Programming",
    color: "pink"
  }
];

export const activitiesData = [
  {
    title: "Participant",
    event: "IndiaAI Ideathon",
    description: "Innovated AI application concepts for real-world impact challenges."
  },
  {
    title: "Participant",
    event: "National Level Hire-4-Thon",
    description: "Competed in rapid coding, problem-solving, and algorithmic solution design."
  },
  {
    title: "Active Member",
    event: "National Service Scheme (NSS)",
    description: "Engaged in community development, social initiatives, and team leadership events."
  }
];

export const languagesData = [
  { name: "English", proficiency: "Full Professional" },
  { name: "Kannada", proficiency: "Native / Bilingual" },
  { name: "Hindi", proficiency: "Professional Working" }
];
