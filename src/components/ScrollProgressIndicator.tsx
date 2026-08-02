import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export const ScrollProgressIndicator: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-emerald-400 to-violet-500 transition-all duration-150 ease-out shadow-sm shadow-cyan-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
