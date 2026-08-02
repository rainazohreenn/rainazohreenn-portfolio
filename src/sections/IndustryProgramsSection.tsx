import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, CheckCircle2, ExternalLink, Calendar, ShieldCheck, Eye } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { Modal } from '../components/Modal';
import { INDUSTRY_PROGRAMS, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

export const IndustryProgramsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="Certifications & Training"
        title="Internships & Industry Programs"
        subtitle="Specialized industry job simulations, cloud data engineering credentials, and enterprise networking certifications."
      />

      {/* Industry Programs & Simulation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INDUSTRY_PROGRAMS.map((program) => (
          <GlassCard key={program.id} className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{program.date}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {program.type}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-1">
                  {program.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {program.organization}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {program.description}
              </p>

              {/* Key Learnings */}
              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  Key Skills & Knowledge Gained
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {program.keyLearnings.map((learning, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Certificate View Trigger Button */}
            {program.certificatePath && (
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={program.certificatePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-200 hover:text-cyan-400 transition-colors"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Certificate (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Match with Certifications Data Modal if present */}
                {CERTIFICATIONS_DATA.find((c) => c.pdfPath === program.certificatePath) && (
                  <button
                    onClick={() => {
                      const certMatch = CERTIFICATIONS_DATA.find((c) => c.pdfPath === program.certificatePath);
                      if (certMatch) setSelectedCert(certMatch);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Preview</span>
                  </button>
                )}
              </div>
            )}
          </GlassCard>
        ))}
      </div>

      {/* Certifications Modal Viewer */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title}
      >
        {selectedCert && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-cyan-500/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>{selectedCert.credentialType}</span>
                <span>{selectedCert.issueDate}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-100">{selectedCert.title}</h3>
              <p className="text-sm font-semibold text-emerald-400">{selectedCert.issuer}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{selectedCert.description}</p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedCert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <a
                href={selectedCert.pdfPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:brightness-110 transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>Open Full Certificate Document</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
