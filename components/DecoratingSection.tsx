import React, { useRef, useEffect, useState } from 'react';

interface DecoratingSectionProps {
  scrollY: number;
}

const DecoratingItem: React.FC<{ src: string; className: string; speed: number; scrollY: number; sectionTop: number }> = ({ src, className, speed, scrollY, sectionTop }) => {
    const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / window.innerHeight));
    const translateY = (1 - progress) * speed * 100;
    const rotate = (1 - progress) * speed * 20;
    
    return (
        <img
            src={src}
            className={`absolute transition-transform duration-100 ease-out ${className}`}
            style={{ transform: `translateY(${translateY}px) rotate(${rotate}deg)`, opacity: progress > 0.2 ? 1 : 0 }}
            alt="decoration"
        />
    );
};

const DecoratingSection: React.FC<DecoratingSectionProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
    }
  }, []);

  const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / window.innerHeight));

  return (
    <section ref={sectionRef} className="h-screen w-full relative flex flex-col justify-center items-center overflow-hidden bg-pink-soft px-4">
      <div className="text-center z-30 mb-8 max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-serif text-brown-dark">The Final Touch</h2>
        <p className="mt-2 text-lg text-brown-light" style={{ transition: 'opacity 0.5s ease-out', opacity: progress > 0.1 ? 1 : 0 }}>
          Here, our baked canvases await their flourish. With whisks as wands and frosting as paint, our artisans pipe, drizzle, and sculpt. Each berry is placed with intention, every sparkle dusted with joy, transforming a simple cake into a breathtaking work of edible art.
        </p>
      </div>

      {/* Parallax Items */}
      <DecoratingItem src="images/cake.jpeg" className="w-40 h-40 top-20 left-10" speed={2} scrollY={scrollY} sectionTop={sectionTop} />
      <DecoratingItem src="images/cake.jpeg" className="w-32 h-32 top-1/4 right-20" speed={3} scrollY={scrollY} sectionTop={sectionTop} />
      <DecoratingItem src="images/cake.jpeg" className="w-24 h-24 bottom-1/4 left-1/4" speed={1.5} scrollY={scrollY} sectionTop={sectionTop} />
      
      {/* Base Cake */}
      <div className="relative z-10">
        <img src="images/cake.jpeg" alt="Base Cake" className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl" />
        {/* Frosting layer that appears with scroll */}
        <div 
          className="absolute inset-0 rounded-full bg-white opacity-70"
          style={{ clipPath: `circle(${progress * 75}% at 50% 50%)`, transition: 'clip-path 0.5s ease-out' }}
        ></div>
      </div>
      
      {progress > 0.8 && (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-40">
            {Array.from({length: 20}).map((_, i) => (
                <div key={i} className="absolute bg-pink-accent rounded-full animate-sparkle" style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 0.5}s`
                }}></div>
            ))}
        </div>
      )}
    </section>
  );
};

export default DecoratingSection;