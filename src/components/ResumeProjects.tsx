import React, { useState } from 'react';
import { MOBILE_PILLAR_APPS, RESUME_DATA_PROJECTS } from '../data/resumeData';
import { Smartphone, ExternalLink, Sparkles, Terminal, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './icons';

export const ResumeProjects: React.FC = () => {
  const [showDataProjects, setShowDataProjects] = useState(false);

  return (
    <section id="projects" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Featured Production Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected Engineering Projects
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Production-ready React Native architectures featuring offline-first SQLite queues, finite state machines, TanStack Query concurrency, and hardware biometrics.
          </p>
        </div>

        {/* 3 Main Mobile Pillar Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOBILE_PILLAR_APPS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all hover:translate-y-[-4px] backdrop-blur-sm shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    {project.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <Smartphone className="w-3 h-3" /> React Native
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-3 min-h-[32px]">
                  {project.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Key Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800/60">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800/80 text-slate-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/60"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Repo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Section for Data & AI Projects */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 text-center">
          <button
            onClick={() => setShowDataProjects(!showDataProjects)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>
              {showDataProjects ? 'Hide Data & AI Pipelines' : 'View Previous Data & AI Pipeline Projects (4)'}
            </span>
            {showDataProjects ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDataProjects && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left animate-fadeIn">
              {RESUME_DATA_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-900/40 border border-slate-800/60 rounded-xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {project.period}
                      </span>
                      {project.category === 'ai' ? (
                        <span className="flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                          <Sparkles className="w-3 h-3" /> AI System
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">
                          <Terminal className="w-3 h-3" /> Pipeline
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
                    <p className="text-xs text-slate-400 mb-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/50">
                    {project.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] rounded bg-slate-800 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
