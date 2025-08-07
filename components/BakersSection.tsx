
import React from 'react';

const bakers = [
  {
    name: "Elara Willowisp",
    title: "Head Pastry Alchemist",
    bio: "With a whisper of ancient recipes and a flair for floral infusions, Elara turns every cake into a botanical masterpiece.",
    imageUrl: "images/cake.jpeg",
    favoriteCreation: "Pistachio Rose Garden"
  },
  {
    name: "Finnian Emberwood",
    title: "Master of the Hearth",
    bio: "Finnian commands our enchanted ovens with unparalleled skill, ensuring every bake achieves the perfect golden-brown hue and ethereal texture.",
    imageUrl: "images/cake.jpeg",
    favoriteCreation: "Caramel Cloud Cake"
  },
  {
    name: "Seraphina Moon",
    title: "Sugar Sculptor & Decorator",
    bio: "Seraphina spins sugar into silk and pipes frosting with the grace of a calligrapher. Her delicate artistry gives our cakes their final, magical touch.",
    imageUrl: "images/cake.jpeg",
    favoriteCreation: "Crimson Berry Dream"
  }
];

const BakerCard: React.FC<typeof bakers[0]> = ({ imageUrl, name, title, bio, favoriteCreation }) => (
    <div className="bg-cream rounded-xl shadow-lg text-center p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
        <img src={imageUrl} alt={name} className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-pink-soft shadow-md"/>
        <h3 className="mt-4 text-2xl font-serif text-brown-dark">{name}</h3>
        <p className="text-sm font-bold text-pink-accent">{title}</p>
        <p className="mt-2 text-brown-light text-sm flex-grow">{bio}</p>
        <p className="mt-4 pt-4 border-t border-pink-soft/30 text-xs text-brown-light">
          Favorite Creation: <span className="font-serif text-base text-brown-dark">{favoriteCreation}</span>
        </p>
    </div>
);


const BakersSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8 bg-cream">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-serif text-brown-dark">Meet Our Artisans</h2>
        <p className="mt-2 text-lg text-brown-light">The hands and hearts behind the magic.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {bakers.map((baker, index) => (
          <BakerCard key={index} {...baker} />
        ))}
      </div>
    </section>
  );
};

export default BakersSection;
