
import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon } from './icons';

const DeliveryVan: React.FC = () => (
  <svg width="120" height="70" viewBox="0 0 120 70" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(0, 5)">
      <path d="M5 50V30C5 21.7157 11.7157 15 20 15H50L60 5H95C100.523 5 105 9.47715 105 15V50H5Z" fill="#FFFBF5"/>
      <rect x="5" y="50" width="100" height="5" fill="#BCAAA4" />
      <circle cx="25" cy="55" r="9" fill="#4E342E"/>
      <circle cx="25" cy="55" r="4" fill="#EFEBE9"/>
      <circle cx="85" cy="55" r="9" fill="#4E342E"/>
      <circle cx="85" cy="55" r="4" fill="#EFEBE9"/>
      <path d="M22 20H48L55 12H30L22 20Z" fill="#FCE4EC"/>
      <rect x="60" y="25" width="40" height="10" fill="#F06292" rx="2"/>
      <path d="M105 16L110 19L105 22" fill="#FFCA28"/>
      <text x="80" y="33" fontFamily="Dancing Script" fontSize="8" fill="#4E342E" textAnchor="middle">Sweet Ride</text>
    </g>
  </svg>
);


const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here.
    alert("Thank you for your sweet message!");
    (e.target as HTMLFormElement).reset();
  }
  return (
    <footer className="relative bg-brown-dark text-cream pt-32 pb-12 px-8 overflow-hidden">
      {/* Delivery Van Animation */}
      <div className="absolute top-8 left-0 w-full h-20 pointer-events-none">
          <div className="absolute animate-drive">
            <DeliveryVan />
          </div>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* About & Social */}
        <div className="space-y-4">
          <h3 className="text-2xl font-serif text-gold-accent">The Enchanted Oven</h3>
          <p className="text-sm text-brown-light leading-relaxed">Crafting magical moments and edible dreams from our hearth to your heart.</p>
          <div className="flex space-x-4 pt-2">
            <a href="#" aria-label="Facebook" className="text-brown-light hover:text-gold-accent transition-colors"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="text-brown-light hover:text-gold-accent transition-colors"><InstagramIcon /></a>
            <a href="#" aria-label="Twitter" className="text-brown-light hover:text-gold-accent transition-colors"><TwitterIcon /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2 text-brown-light">
                <li><a href="#" className="hover:text-gold-accent transition-colors">Our Philosophy</a></li>
                <li><a href="#" className="hover:text-gold-accent transition-colors">Masterpieces</a></li>
                <li><a href="#" className="hover:text-gold-accent transition-colors">Our Artisans</a></li>
                <li><a href="#" className="hover:text-gold-accent transition-colors">Contact Us</a></li>
            </ul>
        </div>
        
        {/* Hours */}
        <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-brown-light">
                <li>Monday - Friday: 9am - 7pm</li>
                <li>Saturday: 10am - 6pm</li>
                <li>Sunday: Closed for magic refills</li>
            </ul>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold mb-4">Send a Sweet Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required
                className="w-full p-3 rounded-lg bg-brown-light text-cream placeholder-cream/70 border border-transparent focus:border-gold-accent focus:ring-gold-accent outline-none transition" 
              />
              <textarea 
                name="message"
                placeholder="Your Message..." 
                rows={3}
                required
                className="w-full p-3 rounded-lg bg-brown-light text-cream placeholder-cream/70 border border-transparent focus:border-gold-accent focus:ring-gold-accent outline-none transition"
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-pink-accent text-white font-bold rounded-lg hover:bg-pink-soft hover:text-brown-dark transition-colors duration-300"
              >
                Send
              </button>
          </form>
        </div>
      </div>

       {/* Copyright */}
      <div className="mt-12 border-t border-brown-light/20 pt-8 text-center text-brown-light text-sm">
        <p>&copy; {new Date().getFullYear()} The Enchanted Oven. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
