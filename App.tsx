import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import IngredientsSection from './components/IngredientsSection';
import BakingSection from './components/BakingSection';
import DecoratingSection from './components/DecoratingSection';
import ShowcaseSection from './components/ShowcaseSection';
import BakersSection from './components/BakersSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-cream text-brown-dark relative overflow-x-hidden">
      <main>
        <HeroSection scrollY={scrollY} />
        <PhilosophySection scrollY={scrollY} />
        <IngredientsSection scrollY={scrollY} />
        <BakingSection scrollY={scrollY} />
        <DecoratingSection scrollY={scrollY} />
        <ShowcaseSection />
        <BakersSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;