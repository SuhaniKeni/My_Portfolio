import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, MapPin, Globe, Sparkles, GraduationCap, Code2, Brain } from 'lucide-react';
import { personalDetails, languagesData } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            About <span className="text-gradient-cyan">Suhani Keni</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Engineering intelligent machine learning models and crafting performant web applications.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {personalDetails.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-white/10 text-center hover:border-cyan-500/40 hover:scale-[1.02] transition-all group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan font-mono mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
                <span className="text-lg font-normal text-cyan-600 dark:text-cyan-400 ml-1">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Academic & Research Background</h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base sm:text-lg">
                I am an Artificial Intelligence and Data Science undergraduate student at <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">K S School of Engineering and Management (VTU)</strong> maintaining an academic score of <strong className="text-cyan-700 dark:text-cyan-300 font-semibold">8.85 CGPA</strong>.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                My work spans across deep learning architecture (CNN & LSTM models for genomic sequence analysis), reinforcement learning algorithms, and modern frontend development with React and Tailwind CSS.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether preprocessing complex DNA datasets from ClinVar/NCBI or architecting natural-language-to-SQL user interfaces, I focus on building high-performance, robust, and user-centric software solutions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{personalDetails.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Expected Graduation: 2027</span>
              </div>
            </div>
          </motion.div>

          {/* Languages & Core Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
          >
            {/* Core Competencies Box */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Core Competencies</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Deep Learning (CNN/LSTM)",
                  "Genomic Data Pipelines",
                  "Python & Java OOP",
                  "React & Tailwind CSS",
                  "SQL & RDBMS Schemas",
                  "UI/UX Design",
                  "NLP Interfaces",
                  "Firebase Authentication",
                  "FastAPI & Gemini API"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>Languages</span>
              </h3>
              <div className="space-y-3">
                {languagesData.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/5">
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{lang.name}</span>
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20 font-semibold">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
