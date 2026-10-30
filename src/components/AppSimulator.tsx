import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/resumeData';
import { RotateCw, Loader2, ArrowUpRight } from 'lucide-react';

export const AppSimulator: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>(PROJECTS[0].id);
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const currentApp = PROJECTS.find((app) => app.id === selectedAppId) || PROJECTS[0];

  useEffect(() => {
    setIsLoading(true);
  }, [selectedAppId, iframeKey]);

  return (
    <section id="simulator" className="py-14 border-b border-zinc-800/80 bg-[#0e0f12]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">
              Interactive Preview
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Running the exported Expo Web build inside an embedded viewport.
            </p>
          </div>

          {/* App Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-lg">
            {PROJECTS.map((app) => (
              <button
                key={app.id}
                onClick={() => {
                  setSelectedAppId(app.id);
                  setIframeKey((prev) => prev + 1);
                }}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  app.id === selectedAppId
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {app.title}
              </button>
            ))}
          </div>
        </div>

        {/* Device Viewport */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[360px] flex items-center justify-between px-3 py-2 bg-zinc-900 rounded-t-xl border-t border-x border-zinc-800 text-xs text-zinc-400">
            <span className="text-zinc-300 text-xs font-medium">
              {currentApp.title}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIframeKey((prev) => prev + 1)}
                title="Reload"
                className="p-1 hover:text-white"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
              <a
                href={currentApp.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white"
              >
                <span>Fullscreen</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[360px] h-[620px] bg-black rounded-b-[32px] border-4 border-zinc-800 overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-4 text-center z-20">
                <Loader2 className="w-5 h-5 text-zinc-400 animate-spin mb-2" />
                <p className="text-xs text-zinc-400">Loading {currentApp.title}...</p>
              </div>
            )}
            <iframe
              key={`${currentApp.id}-${iframeKey}`}
              src={currentApp.liveUrl}
              title={currentApp.title}
              className="w-full h-full border-none bg-black"
              onLoad={() => setIsLoading(false)}
              allow="microphone; camera; geolocation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
