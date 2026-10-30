import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCaseStudies } from './components/ResumeProjects';
import { AppSimulator } from './components/AppSimulator';
import { EngineeringPrinciples } from './components/EngineeringPrinciples';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCard } from './components/EducationCard';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectCaseStudies />
        <AppSimulator />
        <EngineeringPrinciples />
        <ExperienceTimeline />
        <SkillsMatrix />
        <EducationCard />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
