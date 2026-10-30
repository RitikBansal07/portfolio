import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './icons';
import { Copy, Check, Mail, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl font-bold text-white mb-2">
          Contact
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          Feel free to reach out directly if you have any questions or mobile opportunities.
        </p>

        <div className="flex flex-wrap items-center gap-3 text-xs mb-12">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-900 font-medium hover:bg-white"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy email'}</span>
          </button>
          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{PERSONAL_INFO.phone}</span>
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="text-xs text-zinc-600 font-mono border-t border-zinc-800/60 pt-6">
          {PERSONAL_INFO.name} • {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
