import React from 'react';
import { Link } from 'wouter';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div 
        className="w-full h-[70vh] bg-cover bg-center" 
        style={{backgroundImage: "url('/assets/green-salad.png')"}}
      >
        <div className="absolute inset-0 bg-neutral-800 opacity-40"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-12">
            <div className="w-full lg:w-2/3 text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                Premium Quality Grains for Every Need
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8">
                Discover hundreds of grain varieties sourced from the best farms globally.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/varieties" className="inline-block bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-lg transition-colors text-center">
                  Explore Varieties
                </Link>
                <Link href="/contact" className="inline-block bg-transparent hover:bg-white hover:text-primary text-white font-medium py-3 px-6 rounded-lg border-2 border-white transition-colors text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
