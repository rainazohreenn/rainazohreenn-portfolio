import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, Calendar, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="Leadership & Hackathons"
        title="Achievements & Event Leadership"
        subtitle="Demonstrating organizational leadership, event coordination, and competitive technical problem-solving."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ACHIEVEMENTS_DATA.map((item) => (
          <GlassCard key={item.id} className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  {item.category.includes('Leadership') ? (
                    <Users className="w-5 h-5" />
                  ) : (
                    <Trophy className="w-5 h-5" />
                  )}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-400">
                  {item.date}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-slate-100 mt-0.5">
                  {item.role}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 font-mono">
                  {item.event}
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1 pt-1">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-1.5 text-xs text-slate-300">
                    <Star className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {item.certificatePath && (
              <div className="pt-3 border-t border-slate-800">
                <a
                  href={item.certificatePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Certificate Document</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
