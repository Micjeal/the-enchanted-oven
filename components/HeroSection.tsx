
import React from 'react';

interface HeroSectionProps {
  scrollY: number;
}

const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div
    className="absolute rounded-full bg-gold-accent"
    style={style}
  ></div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ scrollY }) => {
  const particles = React.useMemo(() => Array.from({ length: 50 }).map((_, i) => {
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return {
      id: i,
      style: {
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}vw`,
        top: `${y}vh`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
        opacity: Math.random() * 0.5 + 0.2,
      },
    };
  }), []);

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background fog/sparkle effect */}
      <div className="absolute inset-0 z-0">
        {particles.map(p => <Particle key={p.id} style={p.style} />)}
      </div>
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cream opacity-50 z-10" 
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
      </div>
      
      <div className="z-20 text-center animate-fade-in-up">
        <h1 
          className="text-6xl md:text-9xl font-serif text-brown-dark transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${scrollY * -0.3}px) scale(${1 - scrollY/1000})` }}
        >
          The Enchanted Oven
        </h1>
        <p 
          className="mt-4 text-lg md:text-2xl text-brown-light transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${scrollY * -0.15}px) scale(${1 - scrollY/1200})` }}
        >
          Where every bite is a fairy tale.
        </p>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-10 z-20 animate-bounce text-brown-light"
      >
        <span className="text-sm mb-1">Discover Our Process</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
