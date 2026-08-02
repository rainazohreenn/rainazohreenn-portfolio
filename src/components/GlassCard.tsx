import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../utils/cn';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'relative rounded-2xl p-6 transition-all duration-300',
        'bg-slate-900/60 dark:bg-slate-900/70 backdrop-blur-xl',
        'border border-slate-800/80 dark:border-slate-800/90',
        'shadow-xl shadow-slate-950/20',
        hoverEffect && 'hover:border-cyan-500/40 hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/10',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
