import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, Code2, CheckCircle2, Layers, Cpu, Briefcase, Calculator, CloudSun, CheckSquare } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { Modal } from '../components/Modal';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / Machine Learning', 'Full-Stack', 'Desktop App'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const getPlaceholderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-12 h-12 text-slate-100" />;
      case 'Briefcase': return <Briefcase className="w-12 h-12 text-slate-100" />;
      case 'CheckSquare': return <CheckSquare className="w-12 h-12 text-slate-100" />;
      case 'CloudSun': return <CloudSun className="w-12 h-12 text-slate-100" />;
      case 'Calculator': return <Calculator className="w-12 h-12 text-slate-100" />;
      default: return <Code2 className="w-12 h-12 text-slate-100" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="Engineering Portfolio"
        title="Featured Projects"
        subtitle="End-to-end full-stack platforms, desktop GUI applications, and AI/ML waste classification models built independently."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid (Large Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <GlassCard
            key={project.id}
            className="flex flex-col justify-between group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="space-y-4">
              
              {/* Project Header Visual Badge */}
              <div className={`relative h-48 rounded-xl overflow-hidden bg-gradient-to-br ${project.imagePlaceholder.gradient} flex flex-col items-center justify-center p-6 shadow-inner border border-white/10 group-hover:scale-[1.02] transition-transform duration-300`}>
                <div className="p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20 shadow-xl">
                  {getPlaceholderIcon(project.imagePlaceholder.icon)}
                </div>
                <span className="mt-3 text-sm font-bold text-white tracking-wide font-mono drop-shadow">
                  {project.imagePlaceholder.title}
                </span>
                
                {/* Date Chip */}
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/20">
                  {project.date}
                </span>

                {/* Category Tag */}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[11px] font-mono text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features Bullet Points */}
              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  Key Features
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions & Tech Tags */}
            <div className="mt-6 pt-4 border-t border-slate-800 space-y-4">
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links & CTA */}
              <div className="flex items-center justify-between pt-1">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub Repo</span>
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-500">Repository Private</span>
                )}

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Details</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className={`h-40 rounded-2xl bg-gradient-to-br ${selectedProject.imagePlaceholder.gradient} flex items-center justify-center border border-white/20`}>
              <span className="text-lg font-extrabold text-white font-mono drop-shadow">
                {selectedProject.imagePlaceholder.title}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wide">
                {selectedProject.category} • {selectedProject.date}
              </span>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-100 mb-3">All Key Implementation Features</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {selectedProject.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-100 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.github && (
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};
