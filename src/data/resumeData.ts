export interface ProjectItem {
  id: string;
  title: string;
  category: 'mobile' | 'data' | 'ai';
  subtitle: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description?: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  completionDate: string;
  location?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Ritik Bansal',
  title: 'React Native & Mobile Application Developer',
  headline: 'Building High-Performance, Offline-First Mobile Applications with React Native & TypeScript',
  location: 'Indore, India',
  phone: '+91 9977784574',
  email: 'bansalritik25@gmail.com',
  github: 'https://github.com/RitikBansal07',
  linkedin: 'https://www.linkedin.com/in/ritikbansal07',
  summary:
    'Versatile software engineer and analyst with deep expertise in React Native, Expo, TypeScript, modern React, and enterprise data solutions. Proven track record building production-grade offline-first mobile apps, real-time dispatch systems, and data pipelines. Strong foundation in state machines, asynchronous sync architectures, TanStack Query, and SQL/Python optimization.',
  resumePdfUrl: './Ritik_Bansal_Resume.pdf',
};

export const MOBILE_PILLAR_APPS: ProjectItem[] = [
  {
    id: 'parcelpulse',
    title: 'ParcelPulse',
    category: 'mobile',
    subtitle: 'Enterprise Offline-First Logistics & Field Dispatch Platform',
    period: '2026',
    featured: true,
    description:
      'Engineered a robust enterprise field ops mobile application for drivers navigating low-connectivity corridors with seamless offline sync, telemetry tracking, and state machine validation.',
    highlights: [
      'Offline-first FIFO SQLite outbox with exponential backoff & idempotent sync',
      'Formal 5-state finite state machine (Assigned -> Accepted -> In Transit -> Arrived -> Completed)',
      'Real-time Google Maps telemetry with battery & network connectivity monitor',
      'Strict TypeScript domain validation and comprehensive Jest test suite',
    ],
    tags: ['React Native', 'Expo SDK 53', 'TypeScript', 'TanStack Query', 'SQLite', 'Google Maps', 'FSM'],
    liveUrl: 'https://ritikbansal07.github.io/parcelpulse/',
    repoUrl: 'https://github.com/RitikBansal07/parcelpulse',
  },
  {
    id: 'careslot',
    title: 'CareSlot',
    category: 'mobile',
    subtitle: 'Healthcare Patient Appointment Booking & Telemedicine Marketplace',
    period: '2026',
    featured: true,
    description:
      'A cross-platform healthcare appointment booking app connecting patients with medical specialists featuring live slot concurrency checks, role-based auth, and responsive layouts.',
    highlights: [
      'TanStack Query v5 cache synchronization and optimistic slot reserving',
      'Multi-role state architecture (Patient / Specialist / Admin views)',
      'Calendar slot matrix with zero-collision conflict resolution',
      'Polished mobile-first UX with dark/light theme switching and haptics',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'React 19', 'TanStack Query', 'AsyncStorage', 'Zustand'],
    liveUrl: 'https://ritikbansal07.github.io/careslot/',
    repoUrl: 'https://github.com/RitikBansal07/careslot',
  },
  {
    id: 'pocketlog',
    title: 'PocketLog',
    category: 'mobile',
    subtitle: 'Privacy-First Local-First Wellness Journal & Biometric Vault',
    period: '2026',
    featured: true,
    description:
      'A private self-reflection journal and habit tracker designed around on-device local storage, biometric security gates, voice memo recording, and visual trend analytics.',
    highlights: [
      'Local authentication simulation with device PIN fallback and app switcher blur mask',
      '28-day habit density heatmap matrix and streak calculation engine',
      'Real microphone audio recording, base64 data persistence, and playback engine',
      '100% test coverage with 15/15 passing Jest unit, domain, and component tests',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'Biometrics', 'Audio Web API', 'Zod', 'Jest'],
    liveUrl: 'https://ritikbansal07.github.io/pocketlog/',
    repoUrl: 'https://github.com/RitikBansal07/pocketlog',
  },
];

export const RESUME_DATA_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-data-bi-studio',
    title: 'AI Data & BI Studio',
    category: 'data',
    subtitle: 'Interactive Data Exploration & AI Insights Application',
    period: 'Mar 2026 – Present',
    description:
      'Developed and deployed a Streamlit-based analytics application for interactive data exploration, visualization, and AI-assisted business insights.',
    highlights: [
      'Interactive dataset exploration with dynamic filtering, histograms, and correlation matrices',
      'AI-assisted conversational querying and insight synthesis for non-technical stakeholders',
      'Automated summary generation and report exporting in multiple formats',
    ],
    tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Data Storytelling', 'GenAI'],
    liveUrl: 'https://github.com/RitikBansal07',
    repoUrl: 'https://github.com/RitikBansal07',
  },
  {
    id: 'student-cohort-analytics',
    title: 'Student Cohort Analytics Engine',
    category: 'data',
    subtitle: 'Operational Curriculum Reporting & Grade Variance Pipeline',
    period: 'Mar 2025 – Apr 2025',
    description:
      'Built an SQL and Python analytics pipeline using CTEs and Pandas to analyze grade variance and deliver Power BI dashboards for curriculum and operational reporting.',
    highlights: [
      'Engineered optimized SQL queries with window functions for multi-cohort retention tracking',
      'Automated grade variance outlier detection reducing review cycles from days to minutes',
      'Designed interactive Power BI operational dashboards used by academic leaders',
    ],
    tags: ['SQL', 'PostgreSQL', 'Python', 'Pandas', 'Power BI', 'CTEs'],
    repoUrl: 'https://github.com/RitikBansal07',
  },
  {
    id: 'youtube-shorts-system',
    title: 'AI YouTube Shorts Refinement System',
    category: 'ai',
    subtitle: 'Containerized Automated Content Synthesis Workflow',
    period: 'Mar 2026 – Apr 2026',
    description:
      'Developed a containerized, n8n-orchestrated workflow using FastAPI, Gemini, HeyGen, and ElevenLabs to automate script refinement, voiceover generation, and visual assembly.',
    highlights: [
      'Orchestrated multi-agent pipeline with n8n webhooks and asynchronous queue workers',
      'Automated prompt engineering with Gemini API for virality and pacing optimization',
      'Integrated ElevenLabs synthetic audio generation with subtitle timing synchronization',
    ],
    tags: ['FastAPI', 'Gemini API', 'ElevenLabs', 'n8n', 'Docker', 'Python'],
    repoUrl: 'https://github.com/RitikBansal07',
  },
  {
    id: 'linkedin-data-retriever',
    title: 'LinkedIn Data Retriever Pipeline',
    category: 'data',
    subtitle: 'High-Reliability Automated Web Scraping & MongoDB Storage',
    period: 'Dec 2024 – Feb 2025',
    description:
      'Developed a Python-based Selenium and BeautifulSoup pipeline to extract, structure, and store LinkedIn profile data in MongoDB as part of the SourcX internship.',
    highlights: [
      'Built fault-tolerant extraction pipelines handling dynamic JavaScript rendering and pagination',
      'Implemented rate-limiting guards and proxy rotation for consistent data ingestion',
      'Structured unformatted web artifacts into normalized MongoDB schemas for analytical queries',
    ],
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'MongoDB', 'Data Pipelines'],
    repoUrl: 'https://github.com/RitikBansal07',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Freelance',
    role: 'React Native & Mobile Developer',
    period: 'Mar 2026 – Present',
    location: 'Remote',
    bullets: [
      'Architect and build production-ready, cross-platform iOS and Android mobile applications using React Native, Expo, and strict TypeScript.',
      'Implement offline-first client architectures leveraging SQLite, AsyncStorage, and TanStack Query v5 with optimistic UI updates and background synchronization queues.',
      'Integrate native device hardware modules including biometric authentication, audio recording engines, Google Maps telemetry, and gesture interactions.',
      'Translate complex product requirements and Figma design systems into responsive, pixel-perfect, 60fps mobile interfaces with dark/light themes and haptic feedback.',
    ],
    skills: ['React Native', 'Expo SDK', 'TypeScript', 'TanStack Query', 'Zustand', 'SQLite / Offline Sync', 'Native APIs', 'REST APIs'],
  },
  {
    company: 'Masai School',
    role: 'Data Analyst',
    period: 'Sep 2024 – Mar 2026',
    location: 'Bengaluru / Remote',
    bullets: [
      'Developed Power BI dashboards for student cohort tracking and operational reporting, enabling data-driven decision-making by senior management.',
      'Optimized complex SQL queries using CTEs and window functions, improving the efficiency of recurring data retrieval and analysis.',
      'Performed statistical analysis using Python, Pandas, and NumPy to evaluate curriculum performance and learner outcomes, supporting consistently high satisfaction scores.',
      'Led operational analytics and stakeholder discussions while coordinating a TA team to maintain data quality, reporting accuracy, and execution efficiency.',
    ],
    skills: ['Power BI', 'SQL', 'CTEs', 'Window Functions', 'Pandas', 'NumPy', 'Stakeholder Management'],
  },
  {
    company: 'SourcX',
    role: 'Data Science Intern',
    period: 'Dec 2024 – Feb 2025',
    location: 'Remote',
    bullets: [
      'Developed production-oriented Python and Selenium web-scraping pipelines to extract and structure data from complex websites.',
      'Automated data collection workflows, reducing manual effort and improving the consistency of analytical inputs.',
      'Created automated functional web-testing scripts to improve reliability across analytical and application workflows.',
    ],
    skills: ['Python', 'Selenium', 'Web Scraping', 'Automation', 'Functional Testing', 'Data Pipelines'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Medi-Caps University',
    degree: 'B.Tech. in Computer Science & Engineering',
    score: 'CGPA 8.3 / 10',
    completionDate: 'Nov 2023',
    location: 'Indore, India',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Mobile & Frontend Core',
    skills: [
      'React Native',
      'Expo SDK (53/54)',
      'TypeScript',
      'React 19',
      'JavaScript (ES6+)',
      'Expo Router',
      'React Navigation',
      'Tailwind CSS',
      'HTML5 / CSS3',
      'Flutter',
    ],
  },
  {
    name: 'State, Cache & Architecture',
    skills: [
      'TanStack Query v5',
      'Zustand',
      'Offline-First Sync',
      'FIFO Outbox Queues',
      'Finite State Machines (FSM)',
      'AsyncStorage',
      'React Context API',
      'Axios Interceptors',
    ],
  },
  {
    name: 'Native Device APIs & UI',
    skills: [
      'Biometric Authentication',
      'Audio Recording & Playback',
      'Google Maps & Telemetry',
      'React Native Reanimated',
      'Gesture Handler',
      'Haptics & Device Sensors',
      'React Native SVG',
      'Safe Area Context',
    ],
  },
  {
    name: 'Backend, Databases & DevOps',
    skills: [
      'SQLite (On-Device)',
      'SQL & PostgreSQL',
      'REST APIs & Webhooks',
      'FastAPI',
      'Docker',
      'Jest Testing Suite',
      'Git & GitHub',
      'GitHub Actions (CI/CD)',
    ],
  },
];

