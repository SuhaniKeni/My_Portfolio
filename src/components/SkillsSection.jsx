import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Layout, Database, Wrench, Search, CheckCircle2 } from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...technicalSkills.map((cat) => cat.category)];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const filteredCategories = technicalSkills
    .map((catGroup) => {
      if (selectedCategory !== 'All' && catGroup.category !== selectedCategory) {
        return null;
      }
      const filtered = catGroup.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.highlight && skill.highlight.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      if (filtered.length === 0) return null;
      return { ...catGroup, skills: filtered };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Tools, frameworks, and programming languages I use to build AI models and scalable applications.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto">
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

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. PyTorch)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel border border-slate-200/80 dark:border-white/10 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400 text-xs font-mono focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-white/10">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                    {getIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group.category}</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{group.skills.length} competencies</span>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-mono font-semibold">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 rounded-full bg-slate-200/80 dark:bg-white/5 overflow-hidden p-0.5 border border-slate-300/40 dark:border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: sIdx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600"
                        />
                      </div>

                      {skill.highlight && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 italic pl-5">
                          ↳ {skill.highlight}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
