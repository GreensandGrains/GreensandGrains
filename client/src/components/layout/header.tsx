import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, Sprout, Phone, ShoppingCart, Info } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { CartIcon } from "@/components/cart/cart-icon";
import { motion } from "framer-motion";


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path ? "text-green-700" : "text-neutral-700 hover:text-green-600";
  };

  return (
    <motion.nav 
      className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-green-100"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/assets/green-salad-logo.png" 
                alt="Greens and Grain" 
                className="h-12 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-green-700">Greens and Grains</span>
            </Link>
          </div>

          {/* Desktop Navigation - CENTERED */}
          <div className="hidden md:block flex-1 text-center">
            <div className="flex justify-center space-x-10">
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-md text-base font-medium ${isActive('/')} transition-all duration-300 flex items-center hover:bg-green-50 hover:-translate-y-1`}
              >
                <Home size={20} className="mr-2" />
                Home
              </Link>
              <Link 
                href="/varieties" 
                className={`px-4 py-2 rounded-md text-base font-medium ${isActive('/varieties')} transition-all duration-300 flex items-center hover:bg-green-50 hover:-translate-y-1`}
              >
                <Sprout size={20} className="mr-2" />
                Varieties
              </Link>
              <Link 
                href="/about" 
                className={`px-4 py-2 rounded-md text-base font-medium ${isActive('/about')} transition-all duration-300 flex items-center hover:bg-green-50 hover:-translate-y-1`}
              >
                <span className="flex items-center gap-2">
                  <Info className="h-4 w-4" /> About Us
                </span>
              </Link>
              <Link 
                href="/contact" 
                className={`px-4 py-2 rounded-md text-base font-medium ${isActive('/contact')} transition-all duration-300 flex items-center hover:bg-green-50 hover:-translate-y-1`}
              >
                <Phone size={20} className="mr-2" />
                Contact
              </Link>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <CartIcon />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              type="button" 
              onClick={toggleMobileMenu}
              className="text-neutral-700 hover:text-green-700 focus:outline-none p-2 rounded-md hover:bg-green-50"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white shadow-inner">
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-md text-base font-medium ${isActive('/')} transition-colors flex items-center`}
          >
            <Home size={20} className="mr-3" />
            Home
          </Link>
          <Link 
            href="/varieties" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-md text-base font-medium ${isActive('/varieties')} transition-colors flex items-center`}
          >
            <Sprout size={20} className="mr-3" />
            Varieties
          </Link>
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-md text-base font-medium ${isActive('/about')} transition-colors flex items-center`}
          >
            <span className="flex items-center gap-2">
              <Info className="h-4 w-4" /> About Us
            </span>
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-4 py-3 rounded-md text-base font-medium ${isActive('/contact')} transition-colors flex items-center`}
          >
            <Phone size={20} className="mr-3" />
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}