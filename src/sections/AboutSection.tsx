import React from 'react';
import { GraduationCap, Languages, Award, Target, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { EDUCATION_DATA, SPOKEN_LANGUAGES, PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="About & Background"
        title="Engineering Education & Core Competencies"
        subtitle="Building a robust computer science foundation at SJCIT with hands-on full-stack & AI project experience."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Education Highlight Card */}
        <div className="lg:col-span-7 space-y-6">
          {EDUCATION_DATA.map((edu, index) => (
            <GlassCard key={index} className="relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-28 h-28 text-cyan-400" />
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                    <span>CGPA: {edu.cgpa}</span>
                    <span>•</span>
                    <span>{edu.status}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 font-mono">
                    {edu.field}
                  </p>
                  <p className="text-sm text-slate-300">
                    {edu.institution} | {edu.location}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Academic Highlights</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}

          {/* Mission & Vision */}
          <GlassCard className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold mb-2">
                <Target className="w-4 h-4" />
                <span>Mission Statement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {PERSONAL_INFO.mission}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Engineering Vision</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {PERSONAL_INFO.vision}
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Right Sidebar: Languages & Competencies */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Spoken Languages Card */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Spoken Languages</h3>
                <p className="text-xs text-slate-400">Multilingual communication capabilities</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {SPOKEN_LANGUAGES.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-left"
                >
                  <div className="font-bold text-sm text-slate-200">{lang.name}</div>
                  <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{lang.level}</div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Core Competencies */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Core Competencies</h3>
                <p className="text-xs text-slate-400">Professional & interpersonal strengths</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Problem Solving', 'Communication', 'Leadership', 'Teamwork', 'Full-Stack Development', 'AI/ML Integration', 'Modular Code Design'].map((comp, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-200 text-xs font-medium hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {comp}
                </span>
              ))}
            </div>
          </GlassCard>

        </div>

      </div>
    </section>
  );
};
