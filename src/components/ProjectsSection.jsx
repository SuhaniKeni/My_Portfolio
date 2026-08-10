import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, FolderGit2, X, CheckCircle2, ChevronRight, Play, Maximize2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [isScreenshotZoomed, setIsScreenshotZoomed] = useState(false);

  useEffect(() => {
    if (activeModalProject || isScreenshotZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalProject, isScreenshotZoomed]);

  const categories = ['All', 'AI & ML', 'Web & AI', 'Web & NLP'];

  const filteredProjects = projectsData.filter((p) =>
    selectedCategory === 'All' ? true : p.category === selectedCategory
  );

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Highlighted <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Real-world enterprise systems, genomic AI pipelines, trading interfaces, and NLP applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-neon-cyan border border-cyan-400/30'
                  : 'glass-panel border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel rounded-3xl border border-slate-200/80 dark:border-white/10 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-neon-cyan transition-all duration-300"
            >
              <div className="p-6">
                {/* Card Header & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {project.badge}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider font-bold ${
                      project.status === 'Ongoing'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-100/70 dark:bg-white/5 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 group/btn"
                >
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
                      aria-label="View Live Demo"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                    aria-label="GitHub Repository"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* FULLSCREEN IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {isScreenshotZoomed && (
          <div 
            onClick={() => setIsScreenshotZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg cursor-pointer"
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setIsScreenshotZoomed(false)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white font-mono text-sm flex items-center gap-1"
              >
                <X className="w-6 h-6" />
                <span>Close</span>
              </button>
              <img
                src="/assetguard-dashboard.png"
                alt="AssetGuard Full Preview"
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {activeModalProject && (
          <div 
            onClick={() => setActiveModalProject(null)}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl lg:max-w-2xl glass-panel border border-cyan-500/40 dark:border-white/20 rounded-2xl p-4 sm:p-6 max-h-[82vh] overflow-y-auto my-auto shadow-2xl glass-glow-cyan bg-white/95 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-3.5 right-3.5 p-1.5 rounded-lg glass-panel text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-white/10 z-10 hover:border-cyan-500/40 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header Badges */}
              <div className="flex flex-wrap items-center gap-1.5 mb-2 pr-8">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                  {activeModalProject.badge}
                </span>
                {activeModalProject.deploymentBadge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    {activeModalProject.deploymentBadge}
                  </span>
                )}
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  Status: <strong className="text-slate-900 dark:text-white">{activeModalProject.status}</strong>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 pr-6">
                {activeModalProject.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-xs leading-relaxed mb-3.5">
                {activeModalProject.description}
              </p>

              {/* Highlights / Deep Details List */}
              {activeModalProject.highlights ? (
                <div className="space-y-1.5 mb-3.5 bg-slate-100/80 dark:bg-white/5 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-white/10">
                  <h4 className="text-[11px] font-mono font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider mb-1.5">
                    Key Features & Functionality:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-200">
                    {activeModalProject.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-1.5 mb-3.5 bg-slate-100/80 dark:bg-white/5 p-3 sm:p-4 rounded-xl border border-slate-200 dark:border-white/10">
                  <h4 className="text-[11px] font-mono font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider mb-1.5">
                    Key Technical Achievements:
                  </h4>
                  {activeModalProject.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies Used */}
              <div className="mb-4">
                <h4 className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Technologies & Frameworks:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {activeModalProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-[11px] font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-end gap-2.5 pt-3 border-t border-slate-200 dark:border-white/10">
                {activeModalProject.demo && activeModalProject.demo !== '#' && (
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-medium text-xs font-mono transition-all shadow-neon-cyan cursor-pointer hover:scale-[1.02] active:scale-95"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>View Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <a
                  href={activeModalProject.github || "https://github.com/SuhaniKeni"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 dark:text-cyan-300 dark:border dark:border-cyan-500/30 font-medium text-xs font-mono transition-all shadow-sm cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
