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
    { label: "Core Projects", value: "3+", suffix: "Built" },
    { label: "Certifications", value: "4", suffix: "Earned" },
    { label: "High Distinction", value: "93%", suffix: "Scored" }
  ]
};

export const technicalSkills = [
  {
    category: "Programming Languages",
    icon: "Code",
    color: "cyan",
    skills: [
      { name: "Python", level: 90, highlight: "Primary Language for AI & ML" },
      { name: "Java", level: 80, highlight: "OOP & Data Structures" }
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
      { name: "Data Analytics", level: 85 },
      { name: "Model Training & Preprocessing", level: 90 }
    ]
  },
  {
    category: "Web & Frontend",
    icon: "Layout",
    color: "blue",
    skills: [
      { name: "React", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Firebase Authentication", level: 80 },
      { name: "Frontend Architecture & UI/UX", level: 90 }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    color: "emerald",
    skills: [
      { name: "SQL & RDBMS", level: 88 },
      { name: "SQLite", level: 85 },
      { name: "DBMS Fundamentals", level: 90 },
      { name: "NoSQL", level: 75 }
    ]
  },
  {
    category: "Tools & Frameworks",
    icon: "Wrench",
    color: "pink",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "FastAPI & Flask", level: 82 },
      { name: "Gemini API", level: 85 },
      { name: "Power BI", level: 80 }
    ]
  }
];

export const projectsData = [
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
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    icon: "Brain",
    type: "AI & ML",
    color: "cyan"
  },
  {
    title: "What is Data Science?",
    issuer: "IBM",
    icon: "BarChart",
    type: "Data Science",
    color: "purple"
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
    color: "blue"
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
