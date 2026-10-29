import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Download, MapPin, Mail, Smartphone, Database, ShieldCheck, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Available for Mobile Developer & Data Roles</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-slate-200 mb-4">
            React Native & Mobile App Engineer | Data Analyst
          </p>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8">
            {PERSONAL_INFO.summary}
          </p>

          {/* Quick info metadata pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400 mb-10">
            <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-cyan-400" />
              {PERSONAL_INFO.location}
            </span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-indigo-500 hover:text-indigo-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apps"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Smartphone className="w-5 h-5" />
              <span>Interactive Mobile Demos</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Ritik_Bansal_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-5 h-5 text-indigo-400" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-indigo-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">3 Production Mobile Apps</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              CareSlot, ParcelPulse, and PocketLog featuring real device sensors, audio recorders, and interactive UI.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Offline-First & State Machines</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              SQLite FIFO sync queues with exponential backoff and strict finite state machine validation for mission-critical reliability.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm hover:border-sky-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">2+ Years Analytics & Systems</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Optimized SQL queries, CTEs, Power BI reporting, and automated web pipelines for high-accuracy operational reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
