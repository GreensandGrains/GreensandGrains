import { MapPin, Phone, Mail, Clock, ShoppingCart } from "lucide-react";
import { Instagram, Youtube } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { COMPANY_INFO } from "@/lib/constants";
import { ContactForm } from "./contact-form";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-8 bg-gradient-to-br from-green-800 to-green-900 text-white relative">
      {/* Background leaf decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute right-0 top-0 w-64 h-64 opacity-10"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.7,-57.2C55.9,-47.3,67.4,-34.4,73.8,-18.6C80.2,-2.8,81.5,16,74.5,31.1C67.4,46.2,52.1,57.5,35.9,64.8C19.8,72.1,2.8,75.4,-15.3,74.1C-33.4,72.7,-52.6,66.6,-65.2,53.7C-77.9,40.7,-84,20.8,-83.1,1.7C-82.2,-17.4,-74.4,-34.3,-61.6,-44.5C-48.9,-54.7,-31.2,-58.1,-16,-61.8C-0.8,-65.5,12,-67.5,24.5,-64.6C36.9,-61.6,49.4,-53.8,42.7,-57.2Z" fill="currentColor" />
          </svg>
        </motion.div>
        <motion.div 
          className="absolute left-0 bottom-0 w-96 h-96 opacity-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.2,-64.8C62.7,-53.8,74.9,-39.6,79.5,-23.4C84.1,-7.3,81.1,10.7,73.3,25.9C65.4,41.1,52.7,53.3,38.2,61.5C23.8,69.7,7.6,73.8,-8.3,72.8C-24.3,71.8,-40,65.6,-53.5,55.3C-67,45,-78.4,30.7,-81.3,14.6C-84.2,-1.5,-78.6,-19.5,-69.2,-34.8C-59.7,-50.1,-46.2,-62.8,-31.6,-73.5C-17,-84.3,-1.4,-93.1,11.9,-88.5C25.1,-83.8,33.8,-75.8,48.2,-64.8Z" fill="currentColor" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left Side - Subscription info */}
          <div className="w-full lg:w-1/2 text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h-full flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading leading-tight">
                Get in Touch<br />With Us
              </h2>
              <p className="text-lg mb-8 text-green-100">
                Have questions or need assistance? We're here to help! Reach out to us and our team will get back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-green-700 p-2 rounded-full mt-1">
                    <MapPin size={18} className="text-green-100" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-1">Our Location</h4>
                    <p className="text-green-100">{COMPANY_INFO.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-700 p-2 rounded-full mt-1">
                    <Phone size={18} className="text-green-100" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-1">Phone</h4>
                    <p className="text-green-100">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-700 p-2 rounded-full mt-1">
                    <Mail size={18} className="text-green-100" />
                  </div>
                  <div>
                    <h4 className="font-medium text-xl mb-1">Email</h4>
                    <p className="text-green-100">{COMPANY_INFO.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <h4 className="font-medium mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href={COMPANY_INFO.socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href={COMPANY_INFO.socials.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-300 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </a>
                  <a 
                    href={COMPANY_INFO.socials.discord} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-300 transition-colors"
                    aria-label="Discord"
                  >
                    <FaDiscord size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side - Contact form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="p-6 bg-green-600 text-white text-center flex items-center justify-center">
                <Mail className="mr-2" size={24} />
                <h3 className="text-xl font-bold">Contact Us</h3>
                <div className="ml-2 text-sm bg-green-500 px-3 py-1 rounded-full">Send Message</div>
              </div>
              <ContactForm />
            </div>
          </motion.div>
        {/* Right Side - Map */}
          <motion.div 
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="h-full flex flex-col">
              <div className="flex-1 rounded-lg overflow-hidden shadow-xl" style={{ minHeight: "250px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.0896396545646!2d80.05292844087359!3d12.953729541701392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ec504e8e62d%3A0x53c80a4ffd88c46c!2s600063%2C%20Gandhi%20Nagar%2C%20Mudichur%20Rd%2C%20West%20Tambaram%2C%20Chennai%2C%20Tamil%20Nadu%20600063!5e0!3m2!1sen!2sin!4v1709818115353!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
