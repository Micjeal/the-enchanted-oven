import React, { useRef, useEffect, useState } from 'react';

interface BakingSectionProps {
  scrollY: number;
}

const TemperatureGauge: React.FC<{ progress: number }> = ({ progress }) => {
    const angle = -90 + (Math.min(1, progress / 0.8) * 180); // Animate from -90 to 90 degrees as progress goes 0 to 0.8
    return (
        <div className="absolute top-1/2 -translate-y-1/2 -right-16 md:-right-24 w-24 h-24 opacity-0 md:opacity-100" style={{ transition: 'opacity 0.5s', opacity: progress > 0.1 ? 1 : 0 }}>
            <svg viewBox="0 0 100 100">
                <path d="M 20 80 A 40 40 0 0 1 80 80" fill="none" stroke="#8D6E63" strokeWidth="3" />
                <text x="50" y="95" textAnchor="middle" fill="#8D6E63" fontSize="8" fontFamily="Lato">180°C</text>
                <g style={{ transformOrigin: '50px 80px', transition: 'transform 0.5s ease-out', transform: `rotate(${angle}deg)` }}>
                    <line x1="50" y1="80" x2="50" y2="40" stroke="#F06292" strokeWidth="3" strokeLinecap="round" />
                </g>
                <circle cx="50" cy="80" r="4" fill="#F06292" />
            </svg>
        </div>
    )
}

const BakingSection: React.FC<BakingSectionProps> = ({ scrollY }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
    }
  }, []);

  const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / (window.innerHeight * 0.8)));

  const ovenDoorRotation = progress > 0.1 && progress < 0.9 ? Math.sin((progress - 0.1) / 0.8 * Math.PI) * -90 : 0;
  const cakeScale = progress > 0.4 ? (progress - 0.4) / 0.5 : 0;

  return (
    <section ref={sectionRef} className="h-screen w-full relative flex flex-col justify-center items-center overflow-hidden bg-[#EFEBE9] px-4">
      <div className="text-center z-10 mb-8 max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-serif text-brown-dark">Into the Warmth</h2>
        <p className="mt-2 text-lg text-brown-light" style={{ transition: 'opacity 0.5s ease-out', opacity: progress > 0 ? 1 : 0 }}>
          Our enchanted ovens use a gentle, magical heat that ensures every crumb is moist and tender. This patient process is what gives our cakes their signature ethereal texture.
        </p>
      </div>

      {/* Oven structure */}
      <div className="relative">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-brown-dark rounded-lg p-4 shadow-2xl perspective-[1000px]">
            <div className="w-full h-full border-4 border-brown-light rounded-md relative flex justify-center items-center bg-[#212121]">
              {/* Oven inside */}
              <div className="absolute inset-2 bg-black rounded-sm flex justify-center items-end p-4">
                  {/* Glowing element */}
                  <div className="w-3/4 h-1/2 bg-amber-500 rounded-full blur-2xl animate-glow"></div>
                  
                  {/* Cake rising */}
                  <div className="absolute bottom-4 w-3/4 h-1/2 flex items-end">
                    <div 
                      className="w-full bg-yellow-800 rounded-t-full"
                      style={{ height: '20%', transform: `scaleY(${1 + cakeScale * 4})`, transformOrigin: 'bottom', transition: 'transform 0.3s ease-out' }}
                    ></div>
                  </div>
              </div>

              {/* Oven Door */}
              <div 
                className="absolute inset-0 bg-brown-dark border-4 border-brown-light rounded-md p-4 flex justify-center items-center"
                style={{ 
                    transform: `rotateX(${ovenDoorRotation}deg)`, 
                    transformOrigin: 'bottom', 
                    transition: 'transform 0.5s ease-in-out',
                    backfaceVisibility: 'hidden' 
                }}
              >
                <div className="w-1/2 h-1/2 bg-gray-500 bg-opacity-20 rounded-md border-2 border-brown-light"></div>
                <div className="absolute bottom-2 w-16 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <TemperatureGauge progress={progress} />
      </div>
      <p className="mt-8 text-2xl font-serif text-brown-light" style={{ opacity: progress > 0.5 ? 1: 0, transition: 'opacity 0.5s' }}>
        Smells like magic...
      </p>
    </section>
  );
};

export default BakingSection;