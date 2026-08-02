import React, { useState, Suspense, lazy } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import { AnimatedLoadingScreen } from './components/AnimatedLoadingScreen';
import { FloatingNavbar } from './components/FloatingNavbar';
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator';
import { BackToTopButton } from './components/BackToTopButton';
import { BackgroundGradients } from './components/BackgroundGradients';
import { HeroSection } from './sections/HeroSection';

// Lazy loaded section components for optimal performance & code splitting
const AboutSection = lazy(() =>
  import('./sections/AboutSection').then((module) => ({ default: module.AboutSection }))
);
const SkillsSection = lazy(() =>
  import('./sections/SkillsSection').then((module) => ({ default: module.SkillsSection }))
);
const ProjectsSection = lazy(() =>
  import('./sections/ProjectsSection').then((module) => ({ default: module.ProjectsSection }))
);
const IndustryProgramsSection = lazy(() =>
  import('./sections/IndustryProgramsSection').then((module) => ({ default: module.IndustryProgramsSection }))
);
const LeadershipSection = lazy(() =>
  import('./sections/LeadershipSection').then((module) => ({ default: module.LeadershipSection }))
);
const ContactSection = lazy(() =>
  import('./sections/ContactSection').then((module) => ({ default: module.ContactSection }))
);

export const App: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden font-sans transition-colors duration-300">
      {/* Startup Loading Animation */}
      {isLoading && <AnimatedLoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Global Scroll Progress Tracker */}
      <ScrollProgressIndicator />

      {/* Dynamic Background Glowing Gradients */}
      <BackgroundGradients />

      {/* Floating Glass Navbar */}
      <FloatingNavbar isDark={isDark} onToggleTheme={toggleDarkMode} />

      {/* Page Sections */}
      <main className="relative z-10">
        <HeroSection />

        <Suspense
          fallback={
            <div className="py-20 flex items-center justify-center text-cyan-400 font-mono text-xs">
              <span>Loading Section...</span>
            </div>
          }
        >
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <IndustryProgramsSection />
          <LeadershipSection />
          <ContactSection />
        </Suspense>
      </main>

      {/* Floating Action Back To Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default App;
