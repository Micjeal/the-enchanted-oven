
import React, { useRef, useEffect, useState } from 'react';

interface PhilosophySectionProps {
  scrollY: number;
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
    }
  }, []);
  
  const progress = Math.max(0, Math.min(1, (scrollY - (sectionTop - window.innerHeight * 0.8)) / (window.innerHeight * 0.6)));

  return (
    <section ref={sectionRef} className="min-h-[80vh] w-full relative flex justify-center items-center overflow-hidden py-24 px-4 bg-cream">
       <div 
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{backgroundImage: `url('https://www.transparenttextures.com/patterns/notebook-dark.png')`}}
       ></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div 
            className="w-full h-full transition-all duration-1000 ease-out"
            style={{ opacity: progress, transform: `translateX(${(1 - progress) * -50}px)` }}
        >
            <img src="images/cake.jpeg" alt="Hands kneading dough" className="rounded-xl shadow-2xl object-cover w-full h-[500px]" />
        </div>
        <div 
            className="text-left transition-all duration-1000 ease-out delay-200"
            style={{ opacity: progress, transform: `translateX(${(1 - progress) * 50}px)` }}
        >
            <h2 className="text-5xl md:text-7xl font-serif text-brown-dark">Crafted with Heart</h2>
            <div className="mt-6 text-lg text-brown-light leading-relaxed space-y-4">
                <p>
                    <span className="font-serif text-4xl text-pink-accent float-left mr-3 mt-1">A</span>t The Enchanted Oven, we believe baking is more than a process—it’s an ancient magic. It's the art of transforming simple, honest ingredients into moments of pure joy. Our philosophy is rooted in patience, passion, and a pinch of fairy dust. We see every bowl of batter as a cauldron of possibilities, every oven as a chamber of transformation.
                </p>
                <p>
                    We honor time-tested traditions passed down through generations of storytellers and bakers, while simultaneously dreaming up new confections that delight the senses and ignite the imagination. Each creation that leaves our kitchen is a testament to our love for the craft, a piece of our heart given to you.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
