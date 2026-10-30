import React from 'react';
import { MOBILE_APPS } from '../data/resumeData';
import { GithubIcon } from './icons';
import { Terminal, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ProjectCaseStudies: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-b border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            01 / Case Studies
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Production Mobile Work
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Real apps built to solve real mobile constraints: offline reliability, slot concurrency, and local-first privacy.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {MOBILE_APPS.map((app, index) => (
            <article
              key={app.id}
              className="bg-[#121316] border border-zinc-850 rounded-2xl p-6 sm:p-8 hover:border-zinc-700/80 transition-all shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-zinc-800/60">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      0{index + 1}
                    </span>
                    <span className="text-zinc-600">/</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                      React Native + Expo
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {app.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-400 mt-1">
                    {app.subtitle}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={app.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-850 border border-zinc-750 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              {/* Pitch */}
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mt-6 mb-6">
                {app.pitch}
              </p>

              {/* Why I Built This (Human engineer story) */}
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800/80 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-300 uppercase tracking-wide mb-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>The Problem & Architecture Rationale</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed italic">
                  "{app.whyIBuiltThis}"
                </p>
              </div>

              {/* Key Technical Decisions & Challenges */}
              <div className="mb-6">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wide mb-3">
                  Key Technical Decisions
                </div>
                <ul className="grid grid-cols-1 gap-2.5">
                  {app.technicalChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {app.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono rounded bg-zinc-850 text-zinc-400 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
