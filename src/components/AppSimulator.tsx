import React, { useState, useEffect } from 'react';
import { MOBILE_APPS } from '../data/resumeData';
import { RotateCw, ShieldAlert, Loader2, ArrowUpRight } from 'lucide-react';

export const AppSimulator: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(MOBILE_APPS[0].id);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadTimedOut, setLoadTimedOut] = useState<boolean>(false);
  const [isBrave, setIsBrave] = useState<boolean>(false);
  const [isOpera, setIsOpera] = useState<boolean>(false);
  const [showAdblockWarning, setShowAdblockWarning] = useState<boolean>(true);

  const currentApp = MOBILE_APPS.find((app) => app.id === selectedAppId) || MOBILE_APPS[0];

  useEffect(() => {
    const userAgent = navigator.userAgent || '';
    setIsOpera(/OPR|Opera/i.test(userAgent));

    if ((navigator as any).brave && typeof (navigator as any).brave.isBrave === 'function') {
      (navigator as any).brave.isBrave().then((braveDetected: boolean) => {
        setIsBrave(braveDetected);
      });
    } else if (/Brave/i.test(userAgent)) {
      setIsBrave(true);
    }
  }, []);

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
    <section id="simulator" className="py-16 border-b border-zinc-800/80 bg-[#0e0f12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            02 / Interactive Testing
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Live Device Simulator
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Interact with the actual compiled React Native Web builds inside this virtual viewport.
          </p>

          {/* Browser Shield Advisory */}
          {showAdblockWarning && (
            <div className="mt-6 text-left p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-semibold text-zinc-200">
                    {isBrave
                      ? 'Brave Shields Notice:'
                      : isOpera
                      ? 'Opera Script Blocker Notice:'
                      : 'Browser Ad-Blocker Notice:'}
                  </span>{' '}
                  <span className="text-zinc-400">
                    {isBrave ? (
                      <>
                        Brave blocks nested iframe storage by default. Please toggle Shields DOWN for this tab, or click <strong>Open Fullscreen</strong>.
                      </>
                    ) : isOpera ? (
                      <>
                        Opera restricts iframe execution. Please pause Opera's script blocker or test fullscreen.
                      </>
                    ) : (
                      <>
                        If the simulator takes long to initialize, third-party iframe blocking might be active. You can launch fullscreen in a new tab anytime.
                      </>
                    )}
                  </span>
                </div>
                <button
                  onClick={() => setShowAdblockWarning(false)}
                  className="text-zinc-500 hover:text-zinc-300 ml-2"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Tab Switcher */}
          <div className="mt-6 flex flex-wrap gap-2">
            {MOBILE_APPS.map((app) => {
              const isActive = app.id === selectedAppId;
              return (
                <button
                  key={app.id}
                  onClick={() => {
                    setSelectedAppId(app.id);
                    setIframeKey((prev) => prev + 1);
                  }}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-900 font-semibold shadow-sm'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-zinc-900' : 'bg-zinc-600'}`} />
                  {app.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Device Container */}
        <div className="flex flex-col items-center justify-center">
          {/* Top Bar */}
          <div className="w-full max-w-[370px] flex items-center justify-between px-3 py-2 bg-zinc-900 rounded-t-xl border-t border-x border-zinc-800 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isLoading ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
              <span className="text-zinc-300 font-sans text-xs">
                {currentApp.title} — {isLoading ? 'loading...' : 'ready'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleReload}
                title="Reload"
                className="p-1 hover:text-white rounded hover:bg-zinc-800 transition-colors"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-zinc-400' : ''}`} />
              </button>
              <a
                href={currentApp.liveUrl}
                target="_blank"
                rel="noreferrer"
                title="Open in new tab"
                className="flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white"
              >
                <span>New Tab</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Virtual Phone Viewport */}
          <div className="relative w-full max-w-[370px] h-[640px] bg-black rounded-b-[36px] border-4 border-zinc-800 shadow-2xl overflow-hidden flex flex-col">
            {/* Minimal speaker notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-full z-30 flex items-center justify-center border border-zinc-800">
              <div className="w-8 h-1 bg-zinc-700 rounded-full" />
            </div>

            {/* In-simulator loading view */}
            {isLoading && (
              <div className="absolute inset-0 bg-[#0c0d0e] z-20 flex flex-col items-center justify-center p-6 text-center">
                <Loader2 className="w-6 h-6 text-zinc-400 animate-spin mb-3" />
                <h4 className="text-sm font-semibold text-white mb-1">
                  Loading {currentApp.title}
                </h4>
                <p className="text-xs text-zinc-500 max-w-[220px]">
                  Downloading client JavaScript bundle...
                </p>

                {loadTimedOut && (
                  <div className="mt-6 p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 text-left">
                    <p className="text-xs text-zinc-300 mb-2.5">
                      Taking longer than usual? Your browser may block cross-origin iframes.
                    </p>
                    <a
                      href={currentApp.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-900 hover:bg-white"
                    >
                      <span>Open Fullscreen in New Tab</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Iframe */}
            <iframe
              key={`${currentApp.id}-${iframeKey}`}
              src={currentApp.liveUrl}
              title={`${currentApp.title} Live Preview`}
              className="w-full h-full border-none bg-black pt-6"
              onLoad={handleIframeLoaded}
              allow="microphone; camera; geolocation; clipboard-read; clipboard-write"
            />

            {/* Home indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-zinc-700 rounded-full z-30 pointer-events-none" />
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs font-mono text-zinc-500">
            <span>Scroll, tap & test like a real device</span>
            <span>•</span>
            <a
              href={currentApp.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-zinc-200 underline"
            >
              Inspect Source on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
