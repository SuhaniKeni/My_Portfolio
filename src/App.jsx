import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#080a11] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Dynamic 2D Canvas Particle Background */}
      <BackgroundCanvas theme={theme} />

      {/* Main Navbar */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Page Content Sections */}
      <main className="relative z-10">
        <HeroSection openResumeModal={() => setIsResumeModalOpen(true)} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
