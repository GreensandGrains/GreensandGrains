import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or ready to place an order? We're here to help.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg mb-8">
              Fill out the form and our team will get back to you as soon as possible. We look forward to hearing from you and discussing how our premium grain products can meet your needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-map-marker-alt text-primary"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-700">123 Grain Avenue, Harvest District, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-phone text-primary"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-envelope text-primary"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-700">info@greensandgrain.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i className="fas fa-clock text-primary"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 8am - 5pm<br/>Saturday: 9am - 2pm<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
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
          
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
