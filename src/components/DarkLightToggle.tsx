import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface DarkLightToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const DarkLightToggle: React.FC<DarkLightToggleProps> = ({ isDark, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme mode"
      className="relative p-2 rounded-full bg-slate-800/80 dark:bg-slate-900/80 border border-slate-700/60 text-slate-300 dark:text-slate-200 hover:text-cyan-400 dark:hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: [0.8, 1] }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-cyan-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
};
