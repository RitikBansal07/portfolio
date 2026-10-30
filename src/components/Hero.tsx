import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './icons';
import { MapPin, Mail, ArrowDown, Smartphone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-16 pb-16 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Availability pill */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for React Native & Mobile engineering roles</span>
        </div>

        {/* Introduction */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
          Hey, I'm {PERSONAL_INFO.name}.
        </h1>

        <p className="text-lg sm:text-xl font-medium text-zinc-300 mb-6">
          I build mobile apps that don't crash when your train enters a tunnel.
        </p>

        {/* Bio paragraphs */}
        <div className="space-y-3 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mb-8">
          {PERSONAL_INFO.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Meta badges & quick links */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800/60">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
            {PERSONAL_INFO.location}
          </span>
          <span className="text-zinc-700">•</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-500" />
            {PERSONAL_INFO.email}
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-zinc-500" />
            github.com/RitikBansal07
          </a>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-900 hover:bg-white transition-all shadow-sm"
          >
            <span>Explore Mobile Case Studies</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-zinc-900 border border-zinc-750 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
          >
            <Smartphone className="w-3.5 h-3.5 text-zinc-400" />
            <span>Interactive Device Simulator</span>
          </a>
        </div>
      </div>
    </section>
  );
};
