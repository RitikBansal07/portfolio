import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
            07 / Contact
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Get in touch.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
            Currently interviewing for full-time React Native & Mobile engineering positions. If you have an opening or want to talk offline mobile architecture, let's connect.
          </p>
        </div>

        {/* Contact action cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {/* Email */}
          <div className="p-5 rounded-xl bg-[#121316] border border-zinc-850 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Direct Email</div>
              <p className="text-base font-semibold text-white break-all">{PERSONAL_INFO.email}</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="px-3 py-1.5 rounded-md text-xs font-mono text-zinc-400 hover:text-white bg-zinc-850 hover:bg-zinc-800 transition-colors flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-xl bg-[#121316] border border-zinc-850 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase mb-1">Phone / WhatsApp</div>
              <p className="text-base font-semibold text-white">{PERSONAL_INFO.phone}</p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="px-3 py-1.5 rounded-md text-xs font-mono text-zinc-400 hover:text-white bg-zinc-850 hover:bg-zinc-800 transition-colors flex items-center gap-1"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer meta */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name} • Handcrafted in React & TypeScript
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>View code on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
