
import { motion } from 'framer-motion';
import { CategoryCard } from './category-card';
import { GRAIN_CATEGORIES } from '@/lib/constants';

export function VarietiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">Our Pack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of fun and interactive entertainment options, each designed to provide endless enjoyment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GRAIN_CATEGORIES.slice(0, 3).map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="transform transition-all duration-300 hover:shadow-lg"
            >
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
