import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Users, Award, Calendar, BookmarkCheck, Brain } from 'lucide-react';
import { educationData, activitiesData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC TIMELINE & ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Education & <span className="text-gradient-cyan">Involvement</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Academic milestones, distinctions, ideathons, and community participation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              <span>Education Qualifications</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-10">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-50 dark:bg-[#080a11] border-2 border-cyan-500 dark:border-cyan-400 shadow-neon-cyan flex items-center justify-center group-hover:scale-125 transition-transform">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                  </div>

                  {/* Glass Card */}
                  <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        {edu.score}
                      </span>
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-medium text-sm mb-4">
                      {edu.institution}
                    </p>

                    <div className="space-y-1.5 border-t border-slate-200/80 dark:border-white/10 pt-3">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <BookmarkCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Activities & Leadership */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
              <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <span>Activities & Hackathons</span>
            </h3>

            <div className="space-y-4">
              {activitiesData.map((act, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-purple-500/40 hover:scale-[1.01] transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                    {idx === 0 ? <Brain className="w-6 h-6" /> : idx === 1 ? <Trophy className="w-6 h-6" /> : <Users className="w-6 h-6" />}
                  </div>

                  <div>
                    <span className="text-xs font-mono font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      {act.title}
                    </span>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {act.event}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      {act.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Summary Banner */}
            <div className="glass-panel p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 dark:from-cyan-950/20 dark:to-purple-950/20">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Academic Distinction</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Consistently scored in top percentiles: 8.85 CGPA in B.E. VTU, 93% in Class XII, and 93.5% in ICSE Class X.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
