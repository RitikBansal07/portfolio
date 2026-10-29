import React, { useState, useEffect } from 'react';
import { MOBILE_PILLAR_APPS } from '../data/resumeData';
import { ExternalLink, RotateCw, CheckCircle2, Layers, Cpu, Smartphone, AlertTriangle, ShieldAlert, Loader2 } from 'lucide-react';
import { GithubIcon } from './icons';

export const AppSimulator: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(MOBILE_PILLAR_APPS[0].id);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadTimedOut, setLoadTimedOut] = useState<boolean>(false);
  const [isBrave, setIsBrave] = useState<boolean>(false);
  const [isOpera, setIsOpera] = useState<boolean>(false);
  const [showAdblockWarning, setShowAdblockWarning] = useState<boolean>(true);

  const currentApp = MOBILE_PILLAR_APPS.find((app) => app.id === selectedAppId) || MOBILE_PILLAR_APPS[0];

  // Detect Brave and Opera browsers
  useEffect(() => {
    const userAgent = navigator.userAgent || '';
    const isOperaBrowser = /OPR|Opera/i.test(userAgent);
    setIsOpera(isOperaBrowser);

    // Check for Brave
    if ((navigator as any).brave && typeof (navigator as any).brave.isBrave === 'function') {
      (navigator as any).brave.isBrave().then((braveDetected: boolean) => {
        setIsBrave(braveDetected);
      });
    } else if (/Brave/i.test(userAgent)) {
      setIsBrave(true);
    }
  }, []);

  // Handle timeout if iframe takes too long to load
  useEffect(() => {
    setIsLoading(true);
    setLoadTimedOut(false);

    const timer = setTimeout(() => {
      setLoadTimedOut(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, [selectedAppId, iframeKey]);

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  const handleIframeLoaded = () => {
    setIsLoading(false);
    setLoadTimedOut(false);
  };

  return (
    <section id="apps" className="py-20 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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

          {/* Browser Warning Alert Banner (Brave, Opera & General Adblock) */}
          {showAdblockWarning && (
            <div className="mt-6 text-left max-w-3xl mx-auto p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex-1 text-xs sm:text-sm">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-amber-300">
                      {isBrave
                        ? '🦁 Brave Browser Detected — Shield Alert'
                        : isOpera
                        ? '🔴 Opera Browser Detected — Script Blocker Alert'
                        : '⚠️ Ad-Blocker & Privacy Shield Notice'}
                    </span>
                    <button
                      onClick={() => setShowAdblockWarning(false)}
                      className="text-amber-400/70 hover:text-amber-200 text-xs font-medium"
                    >
                      Dismiss
                    </button>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {isBrave ? (
                      <>
                        Brave's built-in Shields aggressively block iframe execution and storage.
                        Please <strong className="text-amber-300">click the Lion icon 🦁 in your address bar and toggle Shields DOWN</strong> (or turn off Ad & JavaScript Blockers) for this page to test the embedded simulator.
                      </>
                    ) : isOpera ? (
                      <>
                        Opera's built-in Ad & JavaScript blocker restricts embedded iframe execution.
                        Please <strong className="text-amber-300">pause Opera's Ad & Script Blocker</strong> for this site, or open the app directly.
                      </>
                    ) : (
                      <>
                        If the live app takes longer than usual or appears blank, please ensure your browser's <strong className="text-amber-300">Ad-Blocker or JavaScript Shield</strong> (e.g. Brave Shields, Opera Blocker, uBlock) is paused for embedded frames, or use the <strong>Open Fullscreen App</strong> button.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}

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
                <span className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                <span>{isLoading ? 'Loading...' : 'Live Web Build'}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReload}
                  title="Reload Simulator"
                  className="p-1 hover:text-white rounded hover:bg-slate-800 transition-colors"
                >
                  <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-indigo-400' : ''}`} />
                </button>
                <a
                  href={currentApp.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Fullscreen in New Tab"
                  className="p-1 hover:text-white rounded hover:bg-slate-800 transition-colors flex items-center gap-1 text-[11px] text-cyan-400 font-semibold"
                >
                  <span>New Tab</span>
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

              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-slate-950 z-20 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 animate-bounce">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">
                    Loading {currentApp.title}...
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 max-w-[240px]">
                    Initializing React Native Web bundle & assets from GitHub Pages.
                  </p>
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-medium">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Connecting engine...</span>
                  </div>

                  {/* Fallback if taking > 7s (Brave/Opera blocker or slow network) */}
                  {loadTimedOut && (
                    <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-left animate-fadeIn">
                      <div className="flex items-start gap-2 text-amber-300 text-xs font-bold mb-2">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>Taking longer than expected?</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                        If you are using <strong>Brave</strong> or <strong>Opera</strong>, your browser's ad/script shields may be blocking the embedded simulator.
                      </p>
                      <a
                        href={currentApp.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Launch App Fullscreen Instead</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Iframe Viewport */}
              {currentApp.liveUrl && (
                <iframe
                  key={`${currentApp.id}-${iframeKey}`}
                  src={currentApp.liveUrl}
                  title={`${currentApp.title} Live Preview`}
                  className="w-full h-full border-none bg-slate-950 pt-7"
                  onLoad={handleIframeLoaded}
                  allow="microphone; camera; geolocation; clipboard-read; clipboard-write"
                />
              )}

              {/* Home indicator bar at bottom */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full z-30 pointer-events-none" />
            </div>

            <p className="text-xs text-slate-500 mt-3 text-center">
              💡 Tip: Click <strong>"New Tab"</strong> above to test full-screen if your browser restricts iframes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
