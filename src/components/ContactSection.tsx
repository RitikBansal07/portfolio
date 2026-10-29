import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { GithubIcon } from './icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Open to full-time React Native & Mobile engineering positions, contract projects, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-colors backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</h4>
                  <p className="text-base font-bold text-white mt-0.5 break-all">{PERSONAL_INFO.email}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-colors backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Phone</h4>
                  <p className="text-base font-bold text-white mt-0.5">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5"
                title="Copy Phone to Clipboard"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedPhone ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Socials & Resume Bar */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">Based in {PERSONAL_INFO.location} • Available Globally</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
