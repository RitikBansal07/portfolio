import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectList } from './components/ResumeProjects';
import { AppSimulator } from './components/AppSimulator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsAndEducation } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 selection:bg-zinc-700 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectList />
        <AppSimulator />
        <ExperienceTimeline />
        <SkillsAndEducation />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
