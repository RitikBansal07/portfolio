import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
            RB
          </div>
          <span className="font-semibold text-slate-400">{PERSONAL_INFO.name}</span>
          <span className="text-slate-600">•</span>
          <span>Portfolio & Resume Showcase</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Engineered with React 19, TypeScript & Tailwind CSS</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors text-xs font-medium border border-slate-800"
          title="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
