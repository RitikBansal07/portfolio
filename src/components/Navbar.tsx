import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { GithubIcon } from './icons';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'Simulator', href: '#simulator' },
    { label: 'Experience', href: '#experience' },
    { label: 'Principles', href: '#principles' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d0e]/85 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-xs font-mono font-bold text-zinc-100 group-hover:border-zinc-500 transition-colors">
            RB
          </div>
          <span className="font-medium text-sm text-zinc-200 group-hover:text-white transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-zinc-500">
            / React Native
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-850 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded text-zinc-400 hover:text-zinc-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#121316] border-b border-zinc-800 px-4 py-3 space-y-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-zinc-300 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs font-medium text-blue-400 hover:underline"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
