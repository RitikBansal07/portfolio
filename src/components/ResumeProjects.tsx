import React from 'react';
import { PROJECTS } from '../data/resumeData';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';

export const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="py-14 border-b border-zinc-800/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-white mb-8">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs text-zinc-500">
                    — {project.subtitle}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-medium pt-1 sm:pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-200 hover:text-white underline decoration-zinc-600 underline-offset-4"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-zinc-400 hover:text-zinc-200"
                  >
                    <GithubIcon className="w-3 h-3" />
                    <span>Source</span>
                  </a>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-1.5 pl-4 text-xs text-zinc-400 list-disc">
                {project.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                  >
                    {tech}
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
