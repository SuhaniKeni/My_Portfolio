import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, BarChart, Layers, Code, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function CertificationsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'BarChart': return <BarChart className="w-6 h-6 text-purple-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'Code': return <Code className="w-6 h-6 text-blue-400" />;
      default: return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Certifications & <span className="text-gradient-cyan">Badges</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Professional certifications earned from industry leaders IBM and Spidervella Technologies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 hover:scale-[1.03] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                    {getIcon(cert.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
                    {cert.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-slate-600 dark:text-slate-300 text-xs font-mono font-medium mb-4">
                  Issuer: <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{cert.issuer}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
