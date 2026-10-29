import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/resumeData';
import { Wrench, Check } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const allCategories = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const displayedCategories =
    activeFilter === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === activeFilter);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A comprehensive overview of mobile frameworks, analytical toolsets, databases, and automated workflows.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.name}
              className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-indigo-500/30 transition-all backdrop-blur-sm"
            >
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-slate-800 flex items-center justify-between">
                <span>{category.name}</span>
                <span className="text-xs font-normal text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                  {category.skills.length} skills
                </span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/50 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    <Check className="w-3 h-3 text-indigo-400 shrink-0" />
                    <span>{skill}</span>
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
