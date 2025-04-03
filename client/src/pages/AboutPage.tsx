import React from 'react';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';

const AboutPage = () => {
  return (
    <div>
      <div className="bg-neutral-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col items-center gap-6">
                <img 
                  src="/assets/green-logo.png" 
                  alt="Greens & Grains Logo" 
                  className="w-64 h-auto mb-4"
                />
                <img 
                  src="/assets/green-salad.png" 
                  alt="Fresh green salad" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Greens & Grain</h2>
              <p className="text-lg mb-6">
                Founded with a passion for quality and sustainability, Greens & Grain has grown to become a leading supplier of premium grains for businesses and consumers around the world.
              </p>
              <p className="text-lg mb-6">
                Our mission is to connect farmers growing exceptional grain varieties with the businesses and individuals who appreciate quality. We carefully source our products from trusted farms that use sustainable practices.
              </p>
              <p className="text-lg mb-8">
                With over 400 grain varieties across our four main categories, we offer one of the most comprehensive selections available in the market today.
              </p>
              
              <div className="flex space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-emerald-600 transition-colors">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-emerald-600 transition-colors">
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-emerald-600 transition-colors">
                  <i className="fab fa-discord text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              Greens & Grain was established with a simple vision: to provide the highest quality grains to businesses and individuals who care about what they eat and serve. What started as a small family operation has grown into a global business serving customers across the food industry.
            </p>
            <p className="text-lg mb-6">
              Our founder, with over 20 years of experience in sustainable agriculture, set out to create a company that would prioritize quality, sustainability, and exceptional service. Today, we continue to uphold these values in everything we do.
            </p>
            <p className="text-lg mb-6">
              We work directly with farmers who share our commitment to sustainable and ethical farming practices. This allows us to offer you grains that are not only delicious but also responsibly sourced.
            </p>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <Testimonials />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Follow Us On Social Media</h2>
            <div className="flex justify-center space-x-10">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-emerald-600 transition-colors">
                <i className="fab fa-instagram text-5xl"></i>
                <p className="mt-2">Instagram</p>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-emerald-600 transition-colors">
                <i className="fab fa-youtube text-5xl"></i>
                <p className="mt-2">YouTube</p>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-emerald-600 transition-colors">
                <i className="fab fa-discord text-5xl"></i>
                <p className="mt-2">Discord</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
