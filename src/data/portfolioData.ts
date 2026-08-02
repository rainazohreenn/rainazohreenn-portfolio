import {
  Project,
  Certification,
  SkillCategory,
  EducationItem,
  IndustryProgram,
  AchievementItem
} from '../types';

export const PERSONAL_INFO = {
  name: 'Raina Zohreen N',
  title: 'Aspiring Software Engineer | Full-Stack & AI Developer',
  location: 'Bengaluru, India',
  phone: '+91 8050633699',
  email: 'rainazohreenn@gmail.com',
  github: 'https://github.com/rainazohreenn',
  linkedin: 'https://linkedin.com/in/raina-zohreen-n-54684a2bb',
  resumeUrl: '/Raina_Zohreen_N_Resume.pdf',
  profilePhoto: '/images/raina.jpg',
  summary:
    'Aspiring Software Engineer with a strong interest in Full-Stack Development and real-world problem solving. Has independently built 5 end-to-end applications across Full-Stack, AI, and Desktop technologies using React.js, Node.js, Express.js, and Python. Proficient with Supabase, PostgreSQL, MongoDB, REST APIs, PyTorch, and Google Gemini API.',
  mission:
    'To architect intuitive, scalable, and intelligent software solutions that bridge complex backend algorithms with modern, high-performance user interfaces.',
  vision:
    'Leveraging state-of-the-art web frameworks, cloud databases, and artificial intelligence integration to engineer impactful technology that solves real-world challenges.',
  stats: [
    { label: 'Applications Built', value: '5+' },
    { label: 'CGPA in BE (CSE)', value: '8.43' },
    { label: 'Industry Certifications', value: '4' },
    { label: 'Languages Spoken', value: '4' }
  ]
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science and Engineering',
    institution: 'SJC Institute of Technology (SJCIT)',
    location: 'Chikkaballapur, Karnataka, India',
    cgpa: '8.43/10',
    graduationDate: '2023-2027',
    status: 'Pursuing',
    highlights: [
      'Maintaining a CGPA of 8.43/10 with consistent academic performance.',
      'Focused on Software Engineering, Full-Stack Web Development, Artificial Intelligence, and Database Systems through hands-on projects and academic coursework.',
      'Served as Department Technical Coordinator for Technotsava 7.0, leading technical event coordination.',
      'Participated in regional and college hackathons, including Cicada, Robofiesta, and the SJCIT Internal Hackathon.'
    ]
  }
];

export const INDUSTRY_PROGRAMS: IndustryProgram[] = [
  {
    id: 'tata-genai',
    title: 'GenAI Powered Data Analytics Job Simulation',
    organization: 'Tata (via Forage)',
    date: 'July 2026',
    type: 'Virtual Industry Simulation',
    description:
      'Completed an intensive virtual job simulation focused on applying Generative AI techniques to data analytics, predictive modeling insights, and business intelligence visualization.',
    keyLearnings: [
      'Generative AI Prompt Engineering for Data Insights',
      'Data Cleaning & Analytical Visualizations',
      'Translating raw datasets into strategic business recommendations'
    ],
    certificatePath: '/certificates/tata_genai_analytics.pdf'
  },
  {
    id: 'aws-de',
    title: 'Data Engineering on AWS – Foundations',
    organization: 'AWS Training & Certification',
    date: 'July 2026',
    type: 'Cloud Industry Program',
    description:
      'Mastered fundamentals of cloud-native data architecture, AWS storage solutions, data pipeline ingestion, and analytical query optimization.',
    keyLearnings: [
      'AWS Cloud Storage & Data Warehousing Architecture',
      'ETL Pipeline Concepts & Data Ingestion',
      'Security & Access Management in Cloud Data Engineering'
    ],
    certificatePath: '/certificates/aws_data_engineering.pdf'
  },
  {
    id: 'cisco-ccna',
    title: 'CCNA Enterprise Networking & Security',
    organization: 'Cisco Networking Academy',
    date: 'May 2025',
    type: 'Networking & Infrastructure Certification Program',
    description:
      'Completed comprehensive training in enterprise networking, switching, routing, IPv4/IPv6 network configuration, and security fundamentals.',
    keyLearnings: [
      'Enterprise Routing, Switching & Protocol Configuration',
      'Network Security, Firewalls & Access Control Lists',
      'IPv4 / IPv6 Subnetting & Network Troubleshooting'
    ],
    certificatePath: '/certificates/ccna_cisco.pdf'
  },
  {
    id: 'cisco-virtual',
    title: 'Cisco Virtual Internship Program',
    organization: 'Cisco Networking Academy',
    date: '2025',
    type: 'Industry Virtual Internship',
    description:
      'Gained practical insight into network architecture, packet analysis using Cisco Packet Tracer, and cybersecurity concepts.',
    keyLearnings: [
      'Cisco Packet Tracer Network Modeling',
      'Infrastructure Security & Protocols',
      'System Reliability & Network Diagnostics'
    ],
    certificatePath: '/certificates/cisco_virtual_internship.pdf'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'task-manager',
    title: 'Task Manager Desktop Application',
    category: 'Desktop App',
    tech: ['Python', 'CustomTkinter', 'Git', 'OOP'],
    github: 'https://github.com/rainazohreenn/synent-task3-TaskManager-raina',
    description:
      'A modular Python desktop task management system engineered with custom graphical user interface elements, task completion tracking, and structured object-oriented programming principles.',
    keyFeatures: [
      'Full CRUD (Create, Read, Update, Delete) task operations with completion toggling',
      'Custom dark-themed GUI created with CustomTkinter for ergonomic usability',
      'Clean, modular code structure adhering to Python best software practices'
    ],
    date: 'July 2026',
    imagePlaceholder: {
      title: 'Task Manager UI',
      gradient: 'from-purple-600 via-indigo-600 to-blue-600',
      icon: 'CheckSquare'
    }
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard Pro',
    category: 'Desktop App',
    tech: ['Python', 'CustomTkinter', 'OpenWeather API', 'REST APIs'],
    github: 'https://github.com/rainazohreenn/synent-task2-WeatherDashboard-raina',
    description:
      'An interactive desktop weather dashboard fetching real-time global weather telemetry through the OpenWeather REST API, presenting detailed atmospheric data in a responsive graphical interface.',
    keyFeatures: [
      'Real-time atmospheric telemetry fetching (temperature, humidity, wind, pressure, visibility)',
      'Asynchronous REST API consumption with automatic error handling',
      'Dynamic weather state displays with sleek modern aesthetics'
    ],
    date: 'July 2026',
    imagePlaceholder: {
      title: 'Weather Dashboard UI',
      gradient: 'from-blue-600 via-cyan-600 to-teal-500',
      icon: 'CloudSun'
    }
  },
  {
    id: 'modern-calculator',
    title: 'Modern Calculator Desktop Application',
    category: 'Desktop App',
    tech: ['Python', 'CustomTkinter', 'GUI Design'],
    github: 'https://github.com/rainazohreenn/modern-calculator',
    description:
      'A desktop calculator application with a dark-themed UI design, high-precision arithmetic handling, percentage support, and keyboard event bindings.',
    keyFeatures: [
      'Sleek dark-themed UI layout with responsive button grids',
      'Support for mathematical arithmetic, percentage logic, clear, and backspace functions',
      'Full keyboard shortcut binding for immediate productivity'
    ],
    date: 'July 2026',
    imagePlaceholder: {
      title: 'Modern Calculator UI',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      icon: 'Calculator'
    }
  },
  {
    id: 'sortiwise',
    title: 'SortiWise — AI-Powered Waste Management Platform',
    category: 'AI / Machine Learning',
    tech: ['React.js', 'Node.js', 'Python', 'PyTorch', 'Google Gemini API', 'Supabase'],
    github: 'https://github.com/rainazohreenn',
    description:
      'An end-to-end intelligent waste classification platform integrating a custom PyTorch Convolutional Neural Network (CNN) and Google Gemini API for real-time, image-based waste recognition and cloud database persistence.',
    keyFeatures: [
      'Deep learning CNN model for automated, high-accuracy waste sorting',
      'Google Gemini API integration to generate eco-friendly disposal guidelines',
      'Scalable full-stack React + Supabase backend for real-time cloud data storage'
    ],
    date: 'December 2025',
    imagePlaceholder: {
      title: 'SortiWise AI Platform',
      gradient: 'from-violet-600 via-purple-600 to-pink-600',
      icon: 'Cpu'
    }
  },
  {
    id: 'placement-portal',
    title: 'Placement Management Portal',
    category: 'Full-Stack',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/rainazohreenn',
    description:
      'A secure role-based web application tailored for Students, Department HODs, and Placement Officers, featuring resume filtering, applicant tracking, and RESTful job-matching APIs.',
    keyFeatures: [
      'Role-Based Access Control (RBAC) for Students, HODs, and Placement Coordinators',
      'Automated resume filtering and job candidate matching engine',
      'Integrated Supabase Authentication, PostgreSQL database, and cloud document storage'
    ],
    date: 'November 2025',
    imagePlaceholder: {
      title: 'Placement Portal',
      gradient: 'from-blue-600 via-indigo-600 to-violet-600',
      icon: 'Briefcase'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 92, icon: 'SiPython', highlight: true },
      { name: 'Java', level: 82, icon: 'FaJava' },
      { name: 'C', level: 78, icon: 'SiC' }
    ]
  },
  {
    title: 'Frontend Development',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 90, icon: 'SiReact', highlight: true },
      { name: 'JavaScript / TypeScript', level: 88, icon: 'SiTypescript' },
      { name: 'HTML5 & CSS3', level: 95, icon: 'SiHtml5' },
      { name: 'Tailwind CSS', level: 92, icon: 'SiTailwindcss', highlight: true },
      { name: 'Vite', level: 85, icon: 'SiVite' }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 85, icon: 'SiNodedotjs' },
      { name: 'Express.js', level: 82, icon: 'SiExpress' },
      { name: 'RESTful APIs', level: 90, icon: 'Webhook', highlight: true }
    ]
  },
  {
    title: 'Databases & Cloud',
    icon: 'Database',
    skills: [
      { name: 'Supabase', level: 88, icon: 'SiSupabase', highlight: true },
      { name: 'PostgreSQL', level: 82, icon: 'SiPostgresql' },
      { name: 'MongoDB', level: 78, icon: 'SiMongodb' }
    ]
  },
  {
    title: 'Desktop App Development',
    icon: 'Monitor',
    skills: [
      { name: 'Python GUI', level: 88, icon: 'SiPython' },
      { name: 'CustomTkinter', level: 86, icon: 'AppWindow' }
    ]
  },
  {
    title: 'AI & API Integrations',
    icon: 'Sparkles',
    skills: [
      { name: 'Google Gemini API', level: 86, icon: 'SiGoogle' },
      { name: 'PyTorch (CNN)', level: 76, icon: 'SiPytorch' },
      { name: 'OpenWeather API', level: 88, icon: 'CloudSun' }
    ]
  },
  {
    title: 'Developer Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 92, icon: 'SiGit' },
      { name: 'VS Code', level: 95, icon: 'SiVisualstudiocode' },
      { name: 'Postman', level: 85, icon: 'SiPostman' }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'tata-genai-cert',
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata (Forage)',
    issueDate: 'July 2026',
    pdfPath: '/certificates/tata_genai_analytics.pdf',
    description:
      'Practical virtual experience program focusing on AI-assisted data analysis, data storytelling, and strategic executive reporting.',
    skills: ['GenAI', 'Data Analytics', 'Business Intelligence', 'Data Visualization'],
    credentialType: 'Job Simulation Certificate'
  },
  {
    id: 'aws-de-cert',
    title: 'Data Engineering on AWS – Foundations',
    issuer: 'AWS Training & Certification',
    issueDate: 'July 2026',
    pdfPath: '/certificates/aws_data_engineering.pdf',
    description:
      'Official AWS foundational credential demonstrating competence in cloud data pipelines, storage optimization, and data security.',
    skills: ['AWS Storage', 'Cloud Data Pipelines', 'Data Warehousing', 'IAM Security'],
    credentialType: 'Industry Foundation Certificate'
  },
  {
    id: 'nptel-blockchain-cert',
    title: 'Blockchain and Its Applications',
    issuer: 'NPTEL (IIT)',
    issueDate: 'April 2026',
    pdfPath: '/certificates/nptel_blockchain.pdf',
    description:
      'Comprehensive academic course certification covering distributed ledger technology, consensus protocols, cryptography, and smart contracts.',
    skills: ['Blockchain Architecture', 'Cryptography', 'Consensus Algorithms', 'Smart Contracts'],
    credentialType: 'NPTEL Online Certification'
  },
  {
    id: 'ccna-cert',
    title: 'CCNA (Enterprise Networking, Security & Automation)',
    issuer: 'Cisco Networking Academy',
    issueDate: 'May 2025',
    pdfPath: '/certificates/ccna_cisco.pdf',
    description:
      'Globally recognized Cisco networking qualification verifying knowledge in routing protocols, switching, security, and network automation.',
    skills: ['Networking Protocols', 'IP Routing', 'Cisco IOS', 'Network Security', 'Subnetting'],
    credentialType: 'Cisco Career Certification'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'technotsava',
    role: 'Technical Fest Coordinator',
    event: 'Technotsava 7.0 (Annual Technical Fest)',
    date: 'April 2025',
    category: 'Leadership & Event Management',
    description:
      'Appointed as Department Technical Coordinator for SJCIT annual tech fest. Spearheaded event planning, budget tracking, technical competition rules, and led on-ground execution for over 500+ attendees.',
    highlights: [
      'Managed end-to-end event logistics for coding and hardware competitions',
      'Coordinated cross-functional teams of student volunteers and faculty advisors',
      'Received certificate of appreciation for exemplary leadership'
    ]
  },
  {
    id: 'farewell-organizer',
    role: 'Core Organizing Committee Member',
    event: 'Department Senior Farewell Event',
    date: '2025',
    category: 'Leadership & Teamwork',
    description:
      'Key member of the core planning committee for the graduating senior farewell celebration. Handled stage coordination, multimedia presentations, and event management.',
    highlights: [
      'Orchestrated event schedule and stage management',
      'Ensured seamless execution and high student satisfaction'
    ]
  },
  {
    id: 'cicada-hackathon',
    role: 'Hackathon Participant & Finalist',
    event: 'Cicada Hackathon',
    date: '2024 - 2025',
    category: 'Hackathons & Competitions',
    description:
      'Designed and pitched an innovative prototype solving real-world challenges within tight 24-hour hackathon deadlines.',
    highlights: [
      'Rapid prototype development under tight constraints',
      'Certificate of achievement for hackathon participation'
    ],
    certificatePath: '/certificates/cicada_hackathon.pdf'
  },
  {
    id: 'robofiesta-hackathon',
    role: 'Hackathon Participant',
    event: 'Robofiesta Technical Hackathon',
    date: '2024 - 2025',
    category: 'Hackathons & Competitions',
    description:
      'Engaged in technical problem-solving, building automated software/hardware logic prototypes during the Robofiesta competition.',
    highlights: ['Hands-on engineering problem solving', 'Team collaboration and rapid iteration'],
    certificatePath: '/certificates/robofiesta_hackathon.pdf'
  },
  {
    id: 'sjcit-internal-hackathon',
    role: 'Internal Hackathon Qualifier',
    event: 'SJCIT Internal College Hackathon',
    date: '2024 - 2025',
    category: 'College Competitions',
    description:
      'Demonstrated high-impact technical solution to college evaluation panel during the internal hackathon sprint.',
    highlights: ['Recognized by faculty panel for innovative design'],
    certificatePath: '/certificates/sjcit_internal_hackathon.jpg'
  }
];

export const SPOKEN_LANGUAGES = [
  { name: 'Urdu', level: 'Native / Fluent' },
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Kannada', level: 'Fluent' },
  { name: 'Hindi', level: 'Fluent' }
];
