
import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { COMPANY_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { PrivacyPolicyDialog } from "@/components/ui/privacy-policy-dialog";

export function Footer() {
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-700 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-shadow-lg">INFORMATION</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setPrivacyPolicyOpen(true)} 
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact us</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-shadow-lg">CONTACT US</h3>
            <p className="text-gray-300 mb-2">Find a location nearest you.</p>
            <motion.a 
              href="https://maps.app.goo.gl/QmCSMhu4ynprnfuv5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 mb-4 block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              See Our Store
            </motion.a>
            <div className="space-y-2">
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-green-400 hover:text-green-300 block">
                {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-green-400 hover:text-green-300 block">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-shadow-lg">OUR COMPANY</h3>
            <p className="text-gray-300 mb-4">
              GANDHI NAGAR, Mudichur Rd, West Tambaram, Chennai, Tamil Nadu 600063
            </p>
            <p className="text-gray-300 mb-2">Hours: 9:30 AM – 7:30 PM</p>
            <p className="text-gray-300">Monday to Friday</p>
          </div>
        </div>

        {/* Logo and Social Links */}
        <div className="border-t border-green-800 pt-8">
          <motion.div 
            className="flex flex-col items-center justify-center text-center mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <motion.img 
                src="/assets/green-logo.png"
                alt="Company Logo"
                className="h-48 w-auto mx-auto brightness-110 bg-white/90 p-4 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <motion.h3 
              className="text-4xl font-bold text-white mb-4"
              style={{ letterSpacing: '0.05em' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {COMPANY_INFO.name}
            </motion.h3>
          </motion.div>
          <div className="flex justify-center items-center">
            <motion.div 
              className="flex space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaFacebook size={28} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaTwitter size={28} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaYoutube size={28} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><FaInstagram size={28} /></a>
            </motion.div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400 font-italic">Copyright © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <PrivacyPolicyDialog open={privacyPolicyOpen} onOpenChange={setPrivacyPolicyOpen} />
    </footer>
  );
}
