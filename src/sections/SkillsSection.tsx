import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, Monitor, Sparkles, Wrench, CheckCircle } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Icon Map helper
const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
    case 'Layout': return <Layout className="w-5 h-5 text-teal-400" />;
    case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
    case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
    case 'Monitor': return <Monitor className="w-5 h-5 text-purple-400" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-violet-400" />;
    case 'Wrench': return <Wrench className="w-5 h-5 text-amber-400" />;
    default: return <Code2 className="w-5 h-5 text-cyan-400" />;
  }
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((cat) => cat.title)];

  const filteredCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.title === activeCategory);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="Technical Expertise"
        title="Skills & Technologies"
        subtitle="End-to-end full-stack capabilities across modern web frameworks, cloud databases, desktop applications, and AI APIs."
      />

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, catIdx) => (
          <GlassCard key={catIdx} className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                {getCategoryIcon(category.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-100">{category.title}</h3>
            </div>

            <div className="space-y-3 pt-1">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-medium text-slate-200">
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                          Core
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-cyan-400 font-bold">{skill.level}%</span>
                  </div>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800/80">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIdx * 0.1, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        skill.highlight
                          ? 'bg-gradient-to-r from-cyan-400 to-emerald-400'
                          : 'bg-gradient-to-r from-cyan-500/80 to-blue-500/80'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
