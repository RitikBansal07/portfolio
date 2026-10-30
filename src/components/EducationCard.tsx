import React from 'react';
import { EDUCATION_DATA } from '../data/resumeData';

export const EducationCard: React.FC = () => {
  return (
    <section id="education" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            06 / Education
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Education
          </h2>
        </div>

        {EDUCATION_DATA.map((edu, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-[#121316] border border-zinc-850 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-base font-bold text-white">
                {edu.institution}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-0.5">
                {edu.degree}
              </p>
              <p className="text-xs font-mono text-zinc-500 mt-1">
                Graduated: {edu.completionDate} • {edu.location}
              </p>
            </div>
            <div className="sm:text-right shrink-0">
              <span className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-zinc-800 text-zinc-300 border border-zinc-750">
                {edu.score}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
