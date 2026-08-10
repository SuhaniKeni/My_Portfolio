import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    // Trigger festive developer celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#8a2be2', '#ffffff']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 6000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Get In <span className="text-gradient-cyan">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Whether you have a project in mind, an opportunity to discuss, or just want to connect!
          </p>
        </div>

        {/* Centered Direct Contact Information Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 space-y-6 shadow-2xl glass-glow-cyan">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center">Contact Information</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-center">
                Feel free to reach out directly via email, phone, or LinkedIn. I am always open to discussing new software development, AI, and research opportunities!
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Box */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Email</span>
                      <a href={`mailto:${personalDetails.email}`} className="text-sm font-semibold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                        {personalDetails.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalDetails.email, 'email')}
                    className="p-2 rounded-lg glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Phone</span>
                      <a href={`tel:${personalDetails.phone}`} className="text-sm font-semibold text-slate-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
                        {personalDetails.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                    className="p-2 rounded-lg glass-panel text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">{personalDetails.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Connect & Direct Mail Button */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-4">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block text-center">Connect & Collaborate</span>
                <div className="flex gap-3">
                  <a
                    href={personalDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono font-medium transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalDetails.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass-panel border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 text-xs font-mono font-medium transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                <a
                  href={`mailto:${personalDetails.email}`}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-xs font-mono shadow-neon-cyan hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email ({personalDetails.email})</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
