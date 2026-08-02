import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Sparkles, Terminal } from 'lucide-react';
import { DarkLightToggle } from './DarkLightToggle';
import { useActiveSection } from '../hooks/useActiveSection';

interface FloatingNavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'programs', label: 'Programs' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 z-40 px-4 sm:px-6 max-w-6xl mx-auto pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between px-4 py-2.5 rounded-full bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-xl border border-slate-700/50 dark:border-slate-800/80 shadow-xl shadow-slate-950/20 text-slate-100 transition-all duration-300">
        
        {/* Brand Monogram */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full hover:bg-slate-800/60 transition-colors focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 via-teal-400 to-emerald-500 flex items-center justify-center text-slate-950 font-mono font-bold text-xs shadow-md shadow-cyan-500/20">
            <Terminal className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="font-bold text-sm tracking-tight text-slate-100 block leading-none">
              Raina Zohreen N
            </span>
            <span className="text-[10px] font-mono text-cyan-400/90 block mt-0.5 leading-none">
              Software Engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-800/50 dark:bg-slate-900/50 p-1 rounded-full border border-slate-700/40">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/40 shadow-sm shadow-cyan-500/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Dark / Light Toggle */}
          <DarkLightToggle isDark={isDark} onToggle={onToggleTheme} />

          {/* Download Resume Button */}
          <a
            href="/resume.pdf"
            download="Raina_Zohreen_N_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 hover:brightness-110 shadow-md shadow-cyan-500/25 transition-all duration-200 active:scale-95"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full bg-slate-800/80 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden mt-2 p-4 rounded-3xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 shadow-2xl space-y-2"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-cyan-500/10 text-cyan-400 font-semibold border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <Sparkles className="w-4 h-4 text-cyan-400" />}
              </button>
            ))}

            <div className="pt-2 border-t border-slate-800/80">
              <a
                href="/resume.pdf"
                download="Raina_Zohreen_N_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-md shadow-cyan-500/20"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
