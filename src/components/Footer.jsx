import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-white/10 bg-slate-100/90 dark:bg-[#06080e]/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500/80 to-purple-600/80 p-[1px] flex items-center justify-center shadow-sm">
              <div className="w-full h-full bg-white/40 dark:bg-[#080a11]/60 backdrop-blur-md rounded-[11px] flex items-center justify-center border border-white/60 dark:border-white/10 shadow-inner">
                <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-mono text-base font-bold text-slate-900 dark:text-white">
                Suhani Keni<span className="text-cyan-600 dark:text-cyan-400">.</span>
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                AI & Data Science Engineer • VTU
              </p>
            </div>
          </div>

          {/* Copyright & Made with details */}
          <div className="text-center text-xs text-slate-600 dark:text-slate-400 font-mono">
            <span>© {new Date().getFullYear()} Suhani Keni. All rights reserved. Built with React & Tailwind CSS.</span>
          </div>

          {/* Back to Top & Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:text-black transition-all shadow-neon-cyan"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
