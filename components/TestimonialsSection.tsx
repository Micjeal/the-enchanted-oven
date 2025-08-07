
import React from 'react';
import { StarIcon } from './icons';

const testimonials = [
  {
    quote: "The Crimson Berry Dream was not just a cake, it was an experience. It tasted like a fairy tale. Absolutely unforgettable!",
    name: "Amelia Rose",
    order: "Crimson Berry Dream",
    rating: 5,
  },
  {
    quote: "I ordered the Chocolate Abyss for a special occasion, and it was divine. The richness and depth of flavor were simply out of this world. The best chocolate cake I have ever had.",
    name: "James Finch",
    order: "Chocolate Abyss",
    rating: 5,
  },
  {
    quote: "The artistry is breathtaking. Our cake was the centerpiece of the party, and every guest was enchanted. Thank you, Enchanted Oven!",
    name: "The Parkers",
    order: "Custom Wedding Cake",
    rating: 5,
  }
];

const QuoteIcon: React.FC = () => (
    <svg className="w-12 h-12 text-pink-soft/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-gold-accent' : 'text-brown-light/30'}`} />
        ))}
    </div>
);

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ quote, name, order, rating }) => (
    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-pink-soft/20 relative flex flex-col h-full">
        <div className="absolute top-4 left-4 z-0">
            <QuoteIcon />
        </div>
        <div className="flex-grow z-10 relative">
            <p className="text-brown-light italic leading-relaxed">"{quote}"</p>
        </div>
        <div className="mt-6 text-right z-10">
            <div className="flex justify-end mb-2">
                <StarRating rating={rating} />
            </div>
            <p className="font-serif text-xl text-brown-dark">- {name}</p>
            <p className="text-sm text-pink-accent">Ordered: {order}</p>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-[#EFEBE9]">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-serif text-brown-dark">Whispers of Delight</h2>
        <p className="mt-2 text-lg text-brown-light">Sweet words from our cherished customers.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
