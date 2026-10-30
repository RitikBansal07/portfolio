import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './icons';

export const Navbar: React.FC = () => {
  return (
    <header className="border-b border-zinc-800/80 bg-[#0c0d0e]/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold text-sm text-zinc-100 hover:text-white">
          {PERSONAL_INFO.name}
        </a>

        <nav className="flex items-center gap-5 text-xs text-zinc-400">
          <a href="#projects" className="hover:text-zinc-200 transition-colors">
            Projects
          </a>
          <a href="#simulator" className="hover:text-zinc-200 transition-colors">
            Demo
          </a>
          <a href="#experience" className="hover:text-zinc-200 transition-colors">
            Experience
          </a>
          <a href="#contact" className="hover:text-zinc-200 transition-colors">
            Contact
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-zinc-100 transition-colors ml-2"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
};
