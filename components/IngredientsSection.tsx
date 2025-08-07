import React, { useRef, useEffect, useState } from 'react';

interface IngredientsSectionProps {
  scrollY: number;
}

const ParallaxItem: React.FC<{ src: string; className: string; speed: number; scrollY: number; sectionTop: number }> = ({ src, className, speed, scrollY, sectionTop }) => {
    const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / window.innerHeight));
    const translateY = -progress * speed * 100;
    const rotate = progress * speed * 5;
    const scale = 1 + progress * 0.1;

    return (
        <img
            src={src}
            className={`absolute transition-transform duration-100 ease-out ${className}`}
            style={{ transform: `translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})` }}
            alt="ingredient"
        />
    );
};

const IngredientsSection: React.FC<IngredientsSectionProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
    }
  }, []);
  
  const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / window.innerHeight));

  return (
    <section ref={sectionRef} className="h-screen w-full relative flex justify-center items-center overflow-hidden py-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 relative h-96 md:h-full">
           {/* Parallax Items */}
          <ParallaxItem src="images/cake.jpeg" className="w-48 h-48 top-1/4 left-1/4" speed={1.5} scrollY={scrollY} sectionTop={sectionTop} />
          <ParallaxItem src="images/cake.jpeg" className="w-32 h-32 top-1/2 right-1/4" speed={2.5} scrollY={scrollY} sectionTop={sectionTop} />
          <ParallaxItem src="images/cake.jpeg" className="w-40 h-40 bottom-1/4 left-1/3" speed={1.2} scrollY={scrollY} sectionTop={sectionTop} />
          <ParallaxItem src="images/cake.jpeg" className="w-24 h-24 top-1/3 right-1/3" speed={3} scrollY={scrollY} sectionTop={sectionTop} />
          <ParallaxItem src="images/cake.jpeg" className="w-28 h-28 bottom-1/3 right-1/4" speed={1.8} scrollY={scrollY} sectionTop={sectionTop} />
          
           {/* The mixing bowl */}
          <div className="absolute -bottom-16 md:bottom-[-50px] left-1/2 -translate-x-1/2 z-20 transition-transform duration-500 ease-out" style={{ transform: `translateX(-50%) scale(${1 + progress * 0.5})` }}>
              <img src="images/cake.jpeg" alt="Mixing Bowl" className="w-64 h-64 md:w-96 md:h-96 object-contain" />
          </div>
        </div>
        <div className="w-full md:w-1/2 z-30 p-8 text-center md:text-left">
           <h2 className="text-5xl md:text-7xl font-serif text-brown-dark">The Finest Ingredients</h2>
            <p className="mt-4 text-lg text-brown-light" style={{ transition: 'opacity 0.5s ease-out', opacity: progress > 0.2 ? 1 : 0 }}>
                We believe magic starts with the source. Our flour is milled from golden wheat grown in sun-drenched fields, our sugar is spun from pure cane, and our fruits are plucked from mystical orchards at the peak of perfection. Each ingredient is chosen for its purity and character, ensuring every creation is a taste of the sublime.
            </p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent z-20"></div>

    </section>
  );
};

export default IngredientsSection;