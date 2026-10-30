import React from 'react';
import { WORK_EXPERIENCES } from '../data/resumeData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-14 border-b border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-white mb-8">
          Work Experience
        </h2>

        <div className="space-y-10">
          {WORK_EXPERIENCES.map((exp, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {exp.role} <span className="text-zinc-500 font-normal">at {exp.company}</span>
                  </h3>
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  {exp.period} • {exp.location}
                </div>
              </div>

              <ul className="space-y-1.5 pl-4 text-xs text-zinc-400 list-disc pt-1">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
