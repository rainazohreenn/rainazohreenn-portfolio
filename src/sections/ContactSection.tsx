import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, Check, Copy, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#10b981', '#8b5cf6'],
        });
      } catch {
        // Fallback silently if confetti fails
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <SectionHeader
        badge="Get in Touch"
        title="Let's Build Together"
        subtitle="Open to entry-level Software Engineering, Full-Stack Developer, and Technical Intern positions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Direct Contact Details & Quick Copy */}
        <div className="lg:col-span-5 space-y-6">
          <GlassCard className="space-y-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <span>Contact Information</span>
            </h3>

            {/* Email Widget */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-cyan-400">
                  <Mail className="w-4 h-4" /> Direct Email
                </span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-sm font-bold text-slate-200 hover:text-cyan-300 transition-colors block font-mono"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Widget */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-emerald-400">
                  <Phone className="w-4 h-4" /> Phone / Mobile
                </span>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-sm font-bold text-slate-200 hover:text-cyan-300 transition-colors block font-mono"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Location */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <div className="text-slate-400 text-[10px] font-mono uppercase">Location</div>
                  <div className="font-bold text-slate-200">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Connect Across Platforms
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-200 text-xs font-mono transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 text-slate-200 text-xs font-mono transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Resume Download CTA */}
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Raina_Zohreen_N_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Official Resume (PDF)</span>
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Right Side: Working Contact Form */}
        <div className="lg:col-span-7">
          <GlassCard>
            <h3 className="text-xl font-bold text-slate-100 mb-2">Send a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Have a position or opportunity? Feel free to reach out directly using this form.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. I will respond to your message as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Opportunity / Inquiry regarding Full-Stack / Software Engineering"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Raina, I came across your portfolio..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </div>

      </div>

      {/* Footer copyright note */}
      <div className="mt-20 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 space-y-1">
        <p>© {new Date().getFullYear()} Raina Zohreen N. Designed & Engineered with React 19, TypeScript & Vite.</p>
        <p className="font-mono text-[11px] text-slate-600">Bengaluru, Karnataka, India • rainazohreenn@gmail.com</p>
      </div>
    </section>
  );
};
