
import React from 'react';

const CakeCard: React.FC<{ imageUrl: string; name: string; description: string; featured?: boolean }> = ({ imageUrl, name, description, featured = false }) => {
    if (featured) {
        return (
            <div className="group bg-cream p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 overflow-hidden rounded-lg">
                    <img src={imageUrl} alt={name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-4xl font-serif text-brown-dark">{name}</h3>
                    <p className="mt-2 text-base text-brown-light flex-grow">{description}</p>
                    <button className="mt-4 px-6 py-2 bg-pink-accent text-white font-bold rounded-lg hover:bg-brown-dark transition-colors duration-300 self-start">
                        Discover More
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="group perspective-[1000px]">
            <div className="bg-cream p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-style-3d group-hover:rotate-y-3 group-hover:-translate-y-2 h-full">
                <img src={imageUrl} alt={name} className="w-full h-56 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105" />
                <h3 className="mt-4 text-2xl font-serif text-brown-dark">{name}</h3>
                <p className="mt-1 text-sm text-brown-light h-24">{description}</p>
            </div>
        </div>
    );
};

const cakes = [
  {
    name: "Crimson Berry Dream",
    description: "Our signature creation. A dreamy confection of light-as-air vanilla sponge, layered with freshly whipped Chantilly cream and a vibrant compote made from a bounty of sun-ripened forest berries. Crowned with fresh fruit, it's a taste of a perfect summer's day.",
    imageUrl: "images/cake.jpeg",
  },
  {
    name: "Chocolate Abyss",
    description: "Dive into pure decadence with this intense dark chocolate fudge cake. Made with 70% cacao, it's enrobed in a velvety smooth, high-cocoa ganache and finished with delicate chocolate shavings.",
    imageUrl: "images/cake.jpeg",
  },
  {
    name: "Lemon Zest Delight",
    description: "A refreshing celebration of citrus. Our airy sponge cake is infused with lemon syrup, filled with a zesty, homemade lemon curd, and topped with lightly torched Swiss meringue frosting.",
    imageUrl: "images/cake.jpeg",
  },
  {
    name: "Caramel Cloud Cake",
    description: "Experience blissful comfort with this fluffy brown sugar sponge, generously drizzled with our signature sea-salted caramel sauce and topped with crunchy, toasted pralines for a delightful texture.",
    imageUrl: "images/cake.jpeg",
  },
  {
    name: "Pistachio Rose Garden",
    description: "An elegant and fragrant cake featuring a delicate pistachio sponge, layered with rosewater-infused buttercream and sprinkled with edible rose petals and crushed pistachios.",
    imageUrl: "images/cake.jpeg",
  }
];

const ShowcaseSection: React.FC = () => {
  return (
    <section className="min-h-screen w-full py-20 px-4 md:px-8 bg-[#EFEBE9]">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-serif text-brown-dark">Our Masterpieces</h2>
        <p className="mt-2 text-lg text-brown-light">Baked with love, decorated with passion.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <CakeCard {...cakes[0]} featured={true} />
        </div>
        {cakes.slice(1).map((cake, index) => (
          <CakeCard key={index} {...cake} />
        ))}
      </div>
    </section>
  );
};

export default ShowcaseSection;
