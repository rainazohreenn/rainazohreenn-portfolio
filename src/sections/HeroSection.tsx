import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, MapPin, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 dark:bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-slate-300">
              Open to Software Engineering & Full-Stack Roles
            </span>
            <span className="text-xs text-slate-500">|</span>
            <span className="flex items-center gap-1 text-xs text-cyan-400 font-mono">
              <MapPin className="w-3 h-3" />
              <span>Bengaluru, India</span>
            </span>
          </div>
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Info Column */}
          <div className="lg:col-span-8 text-center lg:text-left space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-none">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-cyan-500 dark:text-cyan-400 font-mono">
                {PERSONAL_INFO.title}
              </p>
            </motion.div>

            {/* Objective Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Raina_Zohreen_N_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-100 font-semibold text-sm shadow-md active:scale-95 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 text-slate-300 font-medium text-sm transition-all"
              >
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Social Link Quick Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-slate-400"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Email"
                className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Profile Visual Badge Column */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Outer Glowing Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-emerald-500 to-violet-600 blur-lg opacity-40 animate-pulse-glow" />
              
              <div className="relative w-64 h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-2 flex flex-col justify-between">
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-56 object-cover object-top rounded-2xl"
                  onError={(e) => {
                    // Fallback to stylized SVG placeholder if image missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback Icon Container if photo load fails */}
                <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center text-cyan-400 space-y-2 hidden border border-slate-800" id="avatarFallback">
                  <Code2 className="w-12 h-12 stroke-[1.5]" />
                  <span className="text-xs font-mono text-slate-400">Raina Zohreen N</span>
                </div>

                <div className="p-3 bg-slate-950/80 rounded-xl backdrop-blur-md border border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">EDUCATION</span>
                    <span className="font-bold text-slate-200">B.E. CS (SJCIT)</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px]">CGPA</span>
                    <span className="font-extrabold text-emerald-400">8.43</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl text-center hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
