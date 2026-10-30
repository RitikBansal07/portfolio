import React from 'react';
import { SKILLS_CATEGORIES } from '../data/resumeData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            05 / Tooling
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills & Stack
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Technologies I reach for on production mobile codebases.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="p-5 rounded-xl bg-[#121316] border border-zinc-850"
            >
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3 pb-2 border-b border-zinc-800">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-850 text-zinc-300 border border-zinc-800"
                  >
                    {skill}
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
