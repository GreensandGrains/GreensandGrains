
import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop"
              alt="Premium Grains" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-green-800">About Us</h2>
            <p className="text-gray-600 mb-6">
              We are dedicated to providing the highest quality organic grains and products 
              to our customers. Our commitment to sustainability and excellence drives 
              everything we do.
            </p>
            <p className="text-gray-600">
              With years of experience in the industry, we understand the importance 
              of quality and reliability in every grain we source and deliver.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
