import React from 'react';
import { EXPERIENCES } from '../data/resumeData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Proven track record in analytical delivery, automated workflows, and practical user-facing software development.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="relative pl-8 md:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-md shadow-indigo-500/20">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Date stamp for desktop (offset left) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24 text-xs font-bold text-slate-400">
                {exp.period}
              </div>

              {/* Content Card */}
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition-all backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-semibold text-cyan-400">
                    {exp.company}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1 md:hidden">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {exp.period}
                  </span>
                  {exp.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  )}
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-sm text-slate-300 mb-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
