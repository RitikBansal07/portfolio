import React from 'react';
import { HOW_I_WORK_PRINCIPLES } from '../data/resumeData';

export const EngineeringPrinciples: React.FC = () => {
  return (
    <section id="principles" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            03 / Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            How I Build Software
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Opinions shaped by building across fragile mobile connections and demanding production constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HOW_I_WORK_PRINCIPLES.map((principle, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-[#121316] border border-zinc-850 hover:border-zinc-750 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono text-zinc-500 font-bold">
                  [{index + 1}]
                </span>
                <h3 className="text-sm font-semibold text-zinc-200">
                  {principle.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
