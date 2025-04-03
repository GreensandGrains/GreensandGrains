import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/greens-and-grain-logo.png" 
                alt="Greens and Grain" 
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-primary">Greens & Grain</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-8">
              <Link 
                href="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-neutral-700 hover:text-primary'} transition-colors`}
              >
                Home
              </Link>
              <Link 
                href="/varieties" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/varieties') ? 'text-primary' : 'text-neutral-700 hover:text-primary'} transition-colors`}
              >
                Varieties
              </Link>
              <Link 
                href="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-primary' : 'text-neutral-700 hover:text-primary'} transition-colors`}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact') ? 'text-primary' : 'text-neutral-700 hover:text-primary'} transition-colors`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="text-neutral-700 hover:text-primary focus:outline-none"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/" 
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary' : 'text-neutral-700 hover:bg-neutral-100'} transition-colors`}
          >
            Home
          </Link>
          <Link 
            href="/varieties" 
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/varieties') ? 'text-primary' : 'text-neutral-700 hover:bg-neutral-100'} transition-colors`}
          >
            Varieties
          </Link>
          <Link 
            href="/about" 
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-primary' : 'text-neutral-700 hover:bg-neutral-100'} transition-colors`}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMobileMenu}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-primary' : 'text-neutral-700 hover:bg-neutral-100'} transition-colors`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
