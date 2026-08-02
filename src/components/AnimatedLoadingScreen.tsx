import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

interface AnimatedLoadingScreenProps {
  onComplete?: () => void;
}

export const AnimatedLoadingScreen: React.FC<AnimatedLoadingScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.6, ease: 'easeInOut' }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100"
    >
      <div className="relative flex items-center justify-center mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-24 h-24 rounded-full border-2 border-dashed border-cyan-500/50 border-t-cyan-400"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Code2 className="w-8 h-8 text-slate-950 stroke-[2.5]" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-100 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
          RAINA ZOHREEN N
        </h2>
        <div className="flex items-center justify-center gap-2 mt-2 text-xs font-mono text-cyan-400/80">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full-Stack & AI Software Engineer</span>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="w-48 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500"
        />
      </div>
    </motion.div>
  );
};
