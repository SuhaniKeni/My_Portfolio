import React, { useState, useEffect } from 'react';
import { Sun, Moon, FileText, Menu, X, Terminal } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar({ theme, toggleTheme, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      if (window.scrollY < 150) setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/85 dark:bg-[#080a11]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-xl font-extrabold tracking-wider group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/80 to-purple-600/80 p-[1px] shadow-neon-cyan flex items-center justify-center">
            <div className="w-full h-full bg-white/40 dark:bg-[#080a11]/60 backdrop-blur-md rounded-[11px] flex items-center justify-center border border-white/60 dark:border-white/10 shadow-inner">
              <Terminal className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-mono text-lg font-bold text-slate-900 dark:text-white">
            SK<span className="text-cyan-500 dark:text-cyan-400">.</span>dev
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 shadow-sm border border-cyan-500/20 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-xl glass-panel border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={openResumeModal}
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-neon-cyan hover:opacity-95 hover:scale-[1.02] active:scale-95 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg glass-panel border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-panel border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-200/80 dark:border-white/10 px-6 py-6 mt-3 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 py-1 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openResumeModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-neon-cyan mt-2"
          >
            <FileText className="w-4 h-4" />
            <span>View & Download Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}
