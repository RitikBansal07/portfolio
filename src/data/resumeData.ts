export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  bullets: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  score: string;
  completionDate: string;
  location: string;
}

export const PERSONAL_INFO = {
  name: 'Ritik Bansal',
  tagline: 'React Native Developer',
  location: 'Indore, India',
  phone: '+91 9977784574',
  email: 'bansalritik25@gmail.com',
  github: 'https://github.com/RitikBansal07',
  intro:
    "I'm a mobile developer specializing in React Native and TypeScript. I focus on building reliable, responsive apps with clean client state management, offline support, and good mobile performance. Earlier, I worked on data systems and query optimization at Masai School.",
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'parcelpulse',
    title: 'ParcelPulse',
    subtitle: 'Field logistics & delivery dispatch mobile app',
    period: '2026',
    description:
      'A cross-platform mobile dispatch tool designed for drivers working in low-connectivity areas.',
    bullets: [
      'Offline-first SQLite outbox queue that stores actions locally and syncs them once connectivity is restored',
      'Finite state machine to prevent invalid delivery status transitions',
      'Live Google Maps route rendering with network and battery monitor',
    ],
    techStack: ['React Native', 'Expo SDK 53', 'TypeScript', 'SQLite', 'TanStack Query', 'Google Maps'],
    liveUrl: 'https://ritikbansal07.github.io/parcelpulse/',
    repoUrl: 'https://github.com/RitikBansal07/parcelpulse',
  },
  {
    id: 'pocketlog',
    title: 'PocketLog',
    subtitle: 'Local-first private wellness journal & biometric vault',
    period: '2026',
    description:
      'A privacy-focused mobile journal that stores reflections and voice memos entirely on the user’s device.',
    bullets: [
      'On-device audio recording and playback engine with base64 storage in AsyncStorage',
      'Local authentication gate with device PIN fallback and app-switcher privacy mask',
      '28-day habit density heatmap matrix and streak calculation logic',
      '15 unit and component tests with Jest and React Native Testing Library',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Web Audio API', 'Biometrics', 'Jest'],
    liveUrl: 'https://ritikbansal07.github.io/pocketlog/',
    repoUrl: 'https://github.com/RitikBansal07/pocketlog',
  },
  {
    id: 'careslot',
    title: 'CareSlot',
    subtitle: 'Doctor appointment scheduling marketplace',
    period: '2026',
    description:
      'A healthcare booking app supporting multi-role views for patients and medical specialists.',
    bullets: [
      'Optimistic booking mutations with TanStack Query v5 to prevent double-booking collisions',
      'Role-based interface supporting Patient reservations and Specialist slot calendars',
      'Clean calendar slot matrix handling timezone-accurate schedule selection',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'Zustand', 'AsyncStorage'],
    liveUrl: 'https://ritikbansal07.github.io/careslot/',
    repoUrl: 'https://github.com/RitikBansal07/careslot',
  },
];

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Freelance',
    role: 'React Native & Mobile Developer',
    period: 'Mar 2026 – Present',
    location: 'Remote',
    bullets: [
      'Built and deployed three production-grade React Native & Expo applications with strict TypeScript.',
      'Implemented offline-first client patterns using SQLite queues, AsyncStorage, and TanStack Query v5.',
      'Integrated native hardware features including audio recording, biometric auth, and geolocation.',
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'SQLite', 'Zustand'],
  },
  {
    company: 'Masai School',
    role: 'Data Analyst',
    period: 'Sep 2024 – Mar 2026',
    location: 'Bengaluru / Remote',
    bullets: [
      'Wrote and maintained complex SQL queries using recursive CTEs and window functions to evaluate student progression across multiple cohorts.',
      'Automated weekly reporting pipelines with Python and Pandas, significantly reducing manual data prep time.',
      'Collaborated with operations and instructional teams to track curriculum performance.',
    ],
    skills: ['SQL', 'PostgreSQL', 'Python', 'Pandas', 'Query Optimization'],
  },
  {
    company: 'SourcX',
    role: 'Data Science Intern',
    period: 'Dec 2024 – Feb 2025',
    location: 'Remote',
    bullets: [
      'Developed automated Python web scraping pipelines using Selenium and BeautifulSoup.',
      'Handled dynamic content rendering, rate limits, and structured data storage.',
    ],
    skills: ['Python', 'Selenium', 'Data Extraction', 'MongoDB'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Medi-Caps University',
    degree: 'B.Tech in Computer Science & Engineering',
    score: 'CGPA 8.3 / 10',
    completionDate: 'Nov 2023',
    location: 'Indore, India',
  },
];

export const SKILLS_CATEGORIES = [
  {
    name: 'Mobile & Frontend',
    skills: ['React Native', 'Expo', 'TypeScript', 'React 19', 'JavaScript', 'Expo Router', 'Tailwind CSS'],
  },
  {
    name: 'State & Storage',
    skills: ['TanStack Query v5', 'Zustand', 'SQLite', 'AsyncStorage', 'Context API'],
  },
  {
    name: 'Hardware & Native APIs',
    skills: ['Biometric Auth', 'Audio Engine', 'Google Maps', 'Haptics', 'React Native SVG'],
  },
  {
    name: 'Backend & Tools',
    skills: ['SQL / PostgreSQL', 'REST APIs', 'FastAPI', 'Jest', 'Git', 'GitHub Actions', 'Docker'],
  },
];
