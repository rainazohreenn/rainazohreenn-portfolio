import React from 'react';

export const BackgroundGradients: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Cyan Orb */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-3xl animate-pulse-glow" />

      {/* Center Right Purple Orb */}
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-600/10 dark:bg-purple-600/15 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Bottom Left Emerald Orb */}
      <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Subtle Mesh Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px] opacity-15 dark:opacity-20" />
    </div>
  );
};
