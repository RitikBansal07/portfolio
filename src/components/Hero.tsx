import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './icons';
import { Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-14 pb-12 border-b border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-base text-zinc-400 font-medium mb-6">
          {PERSONAL_INFO.tagline} • {PERSONAL_INFO.location}
        </p>

        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-6">
          {PERSONAL_INFO.intro}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-500" />
            <span>{PERSONAL_INFO.email}</span>
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-500" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
