export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  pitch: string;
  whyIBuiltThis: string;
  technicalChallenges: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
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
  tagline: 'React Native & Mobile Engineer',
  location: 'Indore, India',
  phone: '+91 9977784574',
  email: 'bansalritik25@gmail.com',
  github: 'https://github.com/RitikBansal07',
  bio: [
    "I build mobile apps that stay fast, resilient, and responsive even under poor network conditions.",
    "My primary focus is React Native (Expo) paired with strict TypeScript, local-first SQLite / AsyncStorage caching, and TanStack Query state machines.",
    "Previously, I worked in data systems and query optimization at Masai School, which gave me an obsessive respect for data integrity, latency budgets, and edge cases.",
  ],
};

export const MOBILE_APPS: ProjectItem[] = [
  {
    id: 'parcelpulse',
    title: 'ParcelPulse',
    subtitle: 'Offline-First Field Logistics & Driver Dispatch',
    period: '2026',
    pitch:
      'Field logistics app built for drivers working through basement loading docks and remote highways where cell reception constantly drops.',
    whyIBuiltThis:
      'Most delivery apps fail silently or display confusing loading spinners when drivers lose cell connectivity in parking garages or basements. I wanted to build a bulletproof offline outbox where drivers can confirm 50+ deliveries with zero latency, and the app guarantees eventual reconciliation without duplicate requests.',
    technicalChallenges: [
      'Engineered an offline FIFO outbox backed by SQLite with exponential backoff & idempotent sync headers.',
      'Enforced a formal 5-state Finite State Machine (Assigned -> Accepted -> In Transit -> Arrived -> Completed) so drivers can never trigger illegal delivery transitions.',
      'Live Google Maps route telemetry with simulated battery and connectivity degrade modes to test drop-off scenarios.',
      'Zero external native binary dependencies for web — compiles cleanly to both iOS/Android and mobile web.',
    ],
    techStack: ['React Native', 'Expo SDK 53', 'TypeScript', 'TanStack Query', 'SQLite', 'Google Maps', 'FSM'],
    liveUrl: 'https://ritikbansal07.github.io/parcelpulse/',
    repoUrl: 'https://github.com/RitikBansal07/parcelpulse',
  },
  {
    id: 'pocketlog',
    title: 'PocketLog',
    subtitle: 'Local-First Privacy Wellness Journal & Biometric Vault',
    period: '2026',
    pitch:
      'Zero-cloud personal reflection journal with on-device hardware microphone voice memos, biometric lock, and habit heatmaps.',
    whyIBuiltThis:
      'Modern journal apps monetize personal thoughts by streaming private audio and notes to external cloud databases. PocketLog was built to prove you can have a beautiful, feature-complete wellness experience that runs 100% locally on the device with zero third-party telemetry.',
    technicalChallenges: [
      'Built a cross-platform audio engine using native browser MediaRecorder & permanent base64 data URIs stored directly in AsyncStorage.',
      'Implemented local biometric authentication (FaceID/PIN simulation) paired with app-switcher blur obfuscation to prevent shoulder surfing.',
      '28-day habit density heatmap matrix calculated on-the-fly using pure functional TypeScript algorithms with 100% test coverage.',
      '15/15 unit and component tests passing with Jest and React Native Testing Library.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Web Audio API', 'Biometrics', 'Zod Validation', 'Jest'],
    liveUrl: 'https://ritikbansal07.github.io/pocketlog/',
    repoUrl: 'https://github.com/RitikBansal07/pocketlog',
  },
  {
    id: 'careslot',
    title: 'CareSlot',
    subtitle: 'Patient Appointment Booking & Doctor Slot Matrix',
    period: '2026',
    pitch:
      'Healthcare marketplace app that handles simultaneous slot reservations, doctor filtering, and instant confirmations.',
    whyIBuiltThis:
      'Booking medical appointments is notoriously frustrating when two users tap the same slot simultaneously. I designed CareSlot with optimistic TanStack Query caching and deterministic slot conflict detection to give patients immediate feedback.',
    technicalChallenges: [
      'Integrated TanStack Query v5 optimistic mutations with immediate rollback if a slot collision occurs.',
      'Multi-role state architecture accommodating both Patient booking flows and Specialist schedule management.',
      'Calendar slot matrix with zero-collision conflict resolution across different time zones.',
      'Clean 60fps mobile navigation using custom gesture dismissals and haptic confirmations.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'React 19', 'TanStack Query', 'AsyncStorage', 'Zustand'],
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
    context: 'Independent client projects and mobile architecture consulting.',
    bullets: [
      'Architected and shipped 3 production-grade React Native & Expo applications with strict TypeScript and zero compiler warnings.',
      'Designed offline-first synchronization pipelines utilizing SQLite outbox queues, AsyncStorage, and TanStack Query v5.',
      'Integrated hardware capabilities: microphone recording, camera, device biometrics, geolocation telemetry, and haptics.',
      'Built reusable, highly accessible UI component systems running smoothly across iOS, Android, and Web viewports.',
    ],
    skills: ['React Native', 'Expo', 'TypeScript', 'TanStack Query', 'SQLite', 'Zustand', 'REST APIs'],
  },
  {
    company: 'Masai School',
    role: 'Data Analyst & Systems',
    period: 'Sep 2024 – Mar 2026',
    location: 'Bengaluru / Remote',
    context: 'Student cohort progression tracking and operational data pipelines.',
    bullets: [
      'Wrote high-performance SQL queries using recursive CTEs and window functions to compute student drop-off risks across 15+ parallel cohorts.',
      'Automated daily performance monitoring with Python (Pandas/NumPy), cutting weekly manual audit time from 6 hours to 15 minutes.',
      'Partnered closely with product leads and instructional directors to align operational metrics with curriculum updates.',
    ],
    skills: ['SQL', 'PostgreSQL', 'Python', 'Pandas', 'Data Pipelines', 'Query Optimization'],
  },
  {
    company: 'SourcX',
    role: 'Data Science & Automation Intern',
    period: 'Dec 2024 – Feb 2025',
    location: 'Remote',
    context: 'Web data extraction infrastructure and testing.',
    bullets: [
      'Developed resilient Python scraping pipelines using Selenium & BeautifulSoup to collect unstructured market intelligence.',
      'Implemented automated retry strategies and proxy rotation to handle dynamic DOM re-renders and anti-bot rate limits.',
    ],
    skills: ['Python', 'Selenium', 'Automation', 'Data Cleaning', 'MongoDB'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Medi-Caps University',
    degree: 'B.Tech in Computer Science & Engineering',
    score: '8.3 / 10 CGPA',
    completionDate: 'Nov 2023',
    location: 'Indore, India',
  },
];

export const HOW_I_WORK_PRINCIPLES = [
  {
    title: 'Offline-First by Default',
    desc: 'Mobile networks are unreliable. Every user action should update the UI optimistically and queue into local storage before waiting on a remote server.',
  },
  {
    title: 'Strict TypeScript Always',
    desc: 'No `any` escapes. Comprehensive domain models with Zod schemas catch bugs at compile-time rather than in production crash logs.',
  },
  {
    title: 'Test the Critical Path',
    desc: 'I write unit tests for state machines, sync queues, and business math (like streak counters) before touching UI components.',
  },
  {
    title: 'Respect Device Resources',
    desc: 'Minimal re-renders, lightweight stores (Zustand over bloated boilerplate), and keeping bundles lean so apps launch in under a second.',
  },
];

export const SKILLS_CATEGORIES = [
  {
    name: 'Mobile Core',
    skills: ['React Native', 'Expo SDK 53/54', 'TypeScript', 'React 19', 'JavaScript (ES6+)', 'Expo Router', 'Tailwind CSS'],
  },
  {
    name: 'State & Data Layer',
    skills: ['TanStack Query v5', 'Zustand', 'SQLite (On-Device)', 'AsyncStorage', 'Offline FIFO Outbox', 'Finite State Machines'],
  },
  {
    name: 'Hardware & Native APIs',
    skills: ['Biometric Auth (FaceID/PIN)', 'Web & Native Audio Recording', 'Google Maps & Telemetry', 'Haptics', 'React Native SVG'],
  },
  {
    name: 'Tooling & Backend',
    skills: ['Jest & RN Testing Library', 'Git / GitHub Actions CI/CD', 'REST APIs', 'FastAPI', 'PostgreSQL / SQL', 'Docker'],
  },
];
