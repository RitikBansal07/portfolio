import React from 'react';
import { WORK_EXPERIENCES } from '../data/resumeData';
import { Calendar } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            04 / History
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            From data extraction pipelines to shipping cross-platform mobile architectures.
          </p>
        </div>

        <div className="space-y-10">
          {WORK_EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#121316] border border-zinc-850 hover:border-zinc-750 transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-zinc-400">
                    {exp.company}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                    {exp.period}
                  </span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Context line */}
              <p className="text-xs text-zinc-400 font-mono mb-4">
                // {exp.context}
              </p>

              {/* Bullets */}
              <ul className="space-y-2 mb-5">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <span className="text-zinc-600 font-mono shrink-0 mt-0.5">›</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-850 text-zinc-400 border border-zinc-800"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
