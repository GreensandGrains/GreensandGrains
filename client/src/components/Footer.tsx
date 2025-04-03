import React from 'react';
import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Greens & Grain</h3>
            <p className="mb-4 text-white/80">
              Your trusted partner for premium quality grains with hundreds of varieties to choose from.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/varieties" className="text-white/80 hover:text-white transition-colors">Our Varieties</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Grain Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/varieties" className="text-white/80 hover:text-white transition-colors">Organic Grains</Link>
              </li>
              <li>
                <Link href="/varieties" className="text-white/80 hover:text-white transition-colors">Ancient Grains</Link>
              </li>
              <li>
                <Link href="/varieties" className="text-white/80 hover:text-white transition-colors">Specialty Grains</Link>
              </li>
              <li>
                <Link href="/varieties" className="text-white/80 hover:text-white transition-colors">Commercial Grains</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-2"></i>
                <span className="text-white/80">123 Grain Avenue, Harvest District, CA 90210</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-2"></i>
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-2"></i>
                <span className="text-white/80">info@greensandgrain.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Greens & Grain. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
