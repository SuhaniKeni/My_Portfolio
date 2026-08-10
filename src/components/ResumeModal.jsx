import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, GraduationCap, Code, Award, CheckCircle2 } from 'lucide-react';
import { personalDetails, educationData, technicalSkills, projectsData, certificationsData, activitiesData, languagesData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl glass-panel border border-slate-200 dark:border-white/20 rounded-3xl p-6 sm:p-10 my-8 shadow-2xl bg-white dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 max-h-[92vh] overflow-y-auto"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-white/10 no-print">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-semibold">Official Resume View</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/Suhani_Keni_Resume.pdf"
                download="Suhani_Keni_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-mono text-xs font-semibold shadow-neon-cyan transition-all cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl glass-panel text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Container */}
          <div id="printable-resume" className="space-y-6">
            
            {/* Header / Name */}
            <div className="border-b border-slate-200 dark:border-white/15 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
                  {personalDetails.name}
                </h1>
                <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm font-semibold mt-1">
                  {personalDetails.title}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-600 dark:text-slate-300 space-y-1 text-center sm:text-right">
                <div>{personalDetails.location}</div>
                <div>
                  <a href={`tel:${personalDetails.phone}`} className="hover:underline hover:text-slate-900 dark:hover:text-white transition-colors">
                    {personalDetails.phone}
                  </a>
                  {" | "}
                  <a href={`mailto:${personalDetails.email}`} className="hover:underline hover:text-slate-900 dark:hover:text-white transition-colors">
                    {personalDetails.email}
                  </a>
                </div>
                <div className="text-cyan-700 dark:text-cyan-400 font-medium">
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
                  >
                    linkedin.com/in/suhanikeni
                  </a>
                  {" | "}
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
                  >
                    github.com/SuhaniKeni
                  </a>
                </div>
              </div>
            </div>

            {/* Summary text paragraph (without header line) */}
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {personalDetails.summary}
            </p>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-bold mb-3 pb-1 border-b border-cyan-500/30">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm gap-2">
                    <div className="min-w-0">
                      <strong className="text-slate-900 dark:text-white font-semibold">{edu.degree}</strong>
                      <span className="text-slate-500 dark:text-slate-400"> — {edu.institution}</span>
                    </div>
                    <div className="text-cyan-700 dark:text-cyan-300 font-mono text-xs shrink-0 whitespace-nowrap">
                      {edu.period} | <strong className="text-slate-900 dark:text-white">{edu.score}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-bold mb-3 pb-1 border-b border-cyan-500/30">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-200 font-mono">
                <div><strong className="text-slate-900 dark:text-white font-semibold">Programming:</strong> Python, SQL, JavaScript</div>
                <div><strong className="text-slate-900 dark:text-white font-semibold">AI & ML:</strong> Machine Learning, Deep Learning, CNN, LSTM, Data Analytics</div>
                <div><strong className="text-slate-900 dark:text-white font-semibold">Web & Frontend:</strong> React, Tailwind CSS, Firebase Auth, Frontend Dev</div>
                <div><strong className="text-slate-900 dark:text-white font-semibold">Databases:</strong> SQL, SQLite, DBMS, RDBMS, NoSQL</div>
                <div><strong className="text-slate-900 dark:text-white font-semibold">Tools & Frameworks:</strong> Git, GitHub, Power BI, FastAPI, Flask, Gemini API</div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-bold mb-3 pb-1 border-b border-cyan-500/30">
                PROJECTS
              </h2>
              <div className="space-y-4">
                {projectsData.map((proj) => (
                  <div key={proj.id} className="space-y-1.5">
                    <div className="flex flex-wrap items-baseline justify-between">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {proj.title} <span className="text-cyan-600 dark:text-cyan-400 font-normal font-mono text-xs">({proj.status})</span>
                      </h3>
                    </div>
                    <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-4">
                      {proj.details.map((det, dIdx) => (
                        <li key={dIdx}>{det}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-bold mb-2 pb-1 border-b border-cyan-500/30">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 space-y-1 font-mono pl-4">
                {certificationsData.map((c, idx) => (
                  <li key={idx}>
                    <strong className="text-slate-900 dark:text-white">{c.title}</strong> - {c.issuer}
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities & Involvement */}
            <div>
              <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-bold mb-2 pb-1 border-b border-cyan-500/30">
                ACTIVITIES & INVOLVEMENT
              </h2>
              <ul className="list-disc list-outside text-xs text-slate-600 dark:text-slate-300 space-y-1 font-mono pl-4">
                {activitiesData.map((act, idx) => (
                  <li key={idx}>
                    <strong className="text-slate-900 dark:text-white">{act.title}:</strong> {act.event} - {act.description}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider font-bold mb-2 pb-1 border-b border-cyan-500/30">
                LANGUAGES
              </h2>
              <p className="text-xs text-slate-700 dark:text-slate-200 font-mono">
                English, Kannada, Hindi
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
