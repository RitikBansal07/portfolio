import React, { useState } from 'react';
import { MOBILE_PILLAR_APPS } from '../data/resumeData';
import { ExternalLink, RotateCw, CheckCircle2, Layers, Cpu, Smartphone } from 'lucide-react';
import { GithubIcon } from './icons';

export const AppSimulator: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(MOBILE_PILLAR_APPS[0].id);
  const [iframeKey, setIframeKey] = useState<number>(0);

  const currentApp = MOBILE_PILLAR_APPS.find((app) => app.id === selectedAppId) || MOBILE_PILLAR_APPS[0];

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="apps" className="py-20 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Interactive Mobile App Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production-Grade React Native Applications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Click between the applications to test the live Expo builds inside the interactive device simulator.
          </p>

          {/* App Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 max-w-xl mx-auto shadow-xl">
            {MOBILE_PILLAR_APPS.map((app) => {
              const isActive = app.id === selectedAppId;
              return (
                <button
                  key={app.id}
                  onClick={() => {
                    setSelectedAppId(app.id);
                    setIframeKey((prev) => prev + 1);
                  }}
                  className={`flex-1 min-w-[130px] py-2.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-slate-500'}`} />
                  {app.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left / Info Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>React Native • Expo SDK 53 • TypeScript</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              {currentApp.title}
            </h3>

            <p className="text-lg font-medium text-cyan-400">
              {currentApp.subtitle}
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              {currentApp.description}
            </p>

            {/* Architecture Highlights */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Architecture & Engineering Highlights</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {currentApp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentApp.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {currentApp.liveUrl && (
                <a
                  href={currentApp.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Fullscreen App</span>
                </a>
              )}
              {currentApp.repoUrl && (
                <a
                  href={currentApp.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all hover:scale-[1.02]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Right / Device Mockup Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            {/* Simulator Controls Top Bar */}
            <div className="w-full max-w-[360px] flex items-center justify-between px-3 py-2 bg-slate-900 rounded-t-2xl border-t border-x border-slate-800 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Web Build
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReload}
                  title="Reload Simulator"
                  className="p-1 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
                <a
                  href={currentApp.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Fullscreen"
                  className="p-1 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Bezel Frame */}
            <div className="relative w-full max-w-[360px] h-[680px] bg-slate-950 rounded-b-[40px] border-4 border-slate-800 shadow-2xl shadow-indigo-950/40 overflow-hidden flex flex-col">
              {/* Dynamic Island / Speaker */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-2 border border-slate-800">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-950 border border-indigo-700" />
              </div>

              {/* Iframe Viewport */}
              {currentApp.liveUrl ? (
                <iframe
                  key={`${currentApp.id}-${iframeKey}`}
                  src={currentApp.liveUrl}
                  title={`${currentApp.title} Live Preview`}
                  className="w-full h-full border-none bg-slate-950 pt-7"
                  loading="lazy"
                  allow="microphone; camera; geolocation"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-500">
                  <Smartphone className="w-12 h-12 text-slate-700 mb-3" />
                  <p className="text-sm">Preview Loading...</p>
                </div>
              )}

              {/* Home indicator bar at bottom */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full z-30 pointer-events-none" />
            </div>

            <p className="text-xs text-slate-500 mt-3 text-center">
              💡 Fully interactive — scroll, tap tabs, and interact inside the simulated device!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
