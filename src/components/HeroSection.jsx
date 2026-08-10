import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FileText, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function HeroSection({ openResumeModal }) {

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/25 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/25 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Bio & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI & Data Science Student @ VTU • CGPA 8.85</span>
          </div>

          {/* Name & Animated Role */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-gradient-cyan">{personalDetails.name}</span>
          </h1>

          <div className="h-12 sm:h-14 mb-6 flex items-center">
            <h2 className="text-xl sm:text-3xl font-mono font-semibold text-slate-700 dark:text-slate-300 lg:whitespace-nowrap">
              Exploring the world of Data Science
            </h2>
          </div>

          {/* Short Bio */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {personalDetails.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-neon-cyan hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={openResumeModal}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 font-semibold hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="flex items-center gap-4 pt-2 border-t border-slate-200 dark:border-white/10 w-full">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Connect:</span>
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-panel border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2.5 rounded-xl glass-panel border border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              aria-label="Email Direct"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Circular Portrait Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center py-4"
        >
          <div className="relative group flex flex-col items-center">
            
            {/* Background Ambient Glowing Blur Ring */}
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse-glow pointer-events-none" />

            {/* Circular Photo Frame */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-2xl glass-glow-cyan">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-slate-900/90 bg-slate-900 shadow-inner">
                <img
                  src="/suhani-keni.jpg"
                  alt="Suhani Keni"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Status Pill Badge Centered Under Avatar */}
            <div className="mt-4 px-4 py-2 rounded-full glass-panel border border-cyan-500/40 backdrop-blur-md bg-slate-950/95 text-white shadow-xl flex flex-wrap items-center justify-center gap-2 text-xs font-mono shadow-neon-cyan text-center z-10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <span className="font-semibold text-slate-100">AI & Data Science Student</span>
              <span className="text-cyan-400 font-bold">• 8.85 CGPA</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
