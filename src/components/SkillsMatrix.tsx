import React from 'react';
import { SKILLS_CATEGORIES, EDUCATION_DATA } from '../data/resumeData';

export const SkillsAndEducation: React.FC = () => {
  return (
    <section className="py-14 border-b border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Skills */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">
            Stack & Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS_CATEGORIES.map((cat) => (
              <div key={cat.name} className="p-4 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <div className="text-xs font-semibold text-zinc-300 mb-2">
                  {cat.name}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            Education
          </h2>
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-sm">
              <div>
                <span className="font-medium text-white">{edu.institution}</span>
                <span className="text-zinc-400"> — {edu.degree}</span>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                {edu.score} • Graduated {edu.completionDate}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
