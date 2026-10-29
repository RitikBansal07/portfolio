import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppSimulator } from './components/AppSimulator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ResumeProjects } from './components/ResumeProjects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCard } from './components/EducationCard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <AppSimulator />
          <ExperienceTimeline />
          <ResumeProjects />
          <SkillsMatrix />
          <EducationCard />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
