import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, FileText, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function HeroSection({ openResumeModal }) {
  // Typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalDetails?.heroTypingRoles || ["AI & Data Science Engineer"];
    if (!roles || roles.length === 0) return;
    const safeIndex = roleIndex % roles.length;
    const fullText = roles[safeIndex] || "";
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 2000; // Pause at end
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timeout = setTimeout(() => {
      if (fullText) {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, Math.max(0, currentText.length - 1))
            : fullText.substring(0, Math.min(fullText.length, currentText.length + 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

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
            <h2 className="text-xl sm:text-3xl font-mono font-semibold text-slate-700 dark:text-slate-300">
              I build <span className="text-purple-600 dark:text-purple-400 border-b-2 border-purple-500">{currentText}</span>
              <span className="animate-pulse text-cyan-500 dark:text-cyan-400">|</span>
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

        {/* Right Column: Futuristic Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="relative rounded-2xl glass-panel border border-slate-300/80 dark:border-white/15 shadow-2xl overflow-hidden glass-glow-cyan">
            {/* Terminal Window Header */}
            <div className="px-4 py-3 bg-[#0d121f] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>genome_ai_pipeline.py</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">v2.4</span>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto space-y-3 bg-[#0a0d14]/95">
              <div className="text-slate-500"># Suhani Keni - GenomeAI Model Training</div>
              <div>
                <span className="text-purple-400">import</span> torch<br />
                <span className="text-purple-400">from</span> models <span className="text-purple-400">import</span> GenomicCNN_LSTM<br />
                <span className="text-purple-400">from</span> datasets <span className="text-purple-400">import</span> ClinVarDataset
              </div>

              <div className="pt-1 text-cyan-300">
                <span className="text-slate-500"># Initialize pipeline & tokenizer</span><br />
                dataset = ClinVarDataset(<span className="text-emerald-400">"ncbi_genomic_v2"</span>)<br />
                model = GenomicCNN_LSTM(layers=[<span className="text-amber-300">256, 128, 64</span>])
              </div>

              <div className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-xs">
                <div className="text-cyan-400 font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Pipeline Execution Output:</span>
                </div>
                <div className="text-slate-300 pl-5 space-y-0.5">
                  <div>[STATUS] Sequence tokenization: Complete (100k samples)</div>
                  <div>[STATUS] CNN Feature Extraction: Done</div>
                  <div>[STATUS] LSTM Mutation Mapping: Done</div>
                  <div className="text-emerald-400 font-bold pt-1">[METRIC] Validation Accuracy: 98.65%</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1 text-slate-400">
                <span className="text-cyan-400 font-bold">$</span>
                <span className="animate-pulse">python evaluate_xai.py --model GenomeAI</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
