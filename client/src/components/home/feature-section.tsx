import { Sprout, Leaf, Truck, Award, Heart, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollEffect } from "@/components/layout/scroll-effect";

const features = [
  {
    icon: Sprout,
    title: "Organic & Natural",
    description: "Our grains are 100% organic, grown without synthetic pesticides or fertilizers for optimal health benefits.",
    color: "from-green-500 to-green-300",
    delay: 0.2
  },
  {
    icon: Leaf,
    title: "Sustainable Farming",
    description: "Supporting responsible farming practices that preserve our environment for future generations.",
    color: "from-emerald-500 to-emerald-300",
    delay: 0.4
  },
  {
    icon: Truck,
    title: "Direct Delivery",
    description: "From our farms to your table - ensuring freshness and reducing our carbon footprint.",
    color: "from-green-600 to-green-400",
    delay: 0.6
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Our grains meet the highest quality standards, guaranteeing extraordinary taste and nutritional value.",
    color: "from-teal-500 to-teal-300",
    delay: 0.8
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Rich in essential nutrients, our grains contribute to a balanced diet and overall wellbeing.",
    color: "from-emerald-600 to-emerald-400",
    delay: 1.0
  },
  {
    icon: Shield,
    title: "Food Safety",
    description: "Rigorous testing and quality control ensure our products are safe and meet all standards.",
    color: "from-green-500 to-green-300",
    delay: 1.2
  }
];

export function FeatureSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48cGF0aCBkPSJNMTIgMTJoNnY2aC02di02em02IDZoNnY2aC02di02em0wLTZoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnptLTEyIDEyaDZ2NmgtNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      {/* Top highlight gradient */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-green-50 to-transparent"></div>

      {/* Animated blobs */}
      <motion.div 
        className="absolute top-40 -left-20 w-64 h-64 rounded-full bg-green-100 opacity-30 blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />

      <motion.div 
        className="absolute bottom-40 -right-20 w-80 h-80 rounded-full bg-emerald-100 opacity-30 blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollEffect type="fadeIn">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Us
            </motion.span>

            <motion.h2 
              className="font-heading font-bold text-4xl md:text-5xl text-gray-800 mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                type: "spring",
                bounce: 0.4
              }}
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-500 to-green-400 animate-gradient">Pack</span>
            </motion.h2>

            <motion.div 
              className="w-20 h-1.5 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto mb-6"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 80, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />

            <motion.p 
              className="text-gray-600 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We're dedicated to providing you with the highest quality organic grains, 
              maintaining our commitment to sustainability and excellence at every step.
            </motion.p>
          </div>
        </ScrollEffect>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollEffect key={index} type={index % 3 === 0 ? "slideLeft" : index % 3 === 1 ? "fadeIn" : "slideRight"} delay={0.1 * index}>
              <motion.div 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Border glow effect */}
                <div className="absolute inset-x-0 h-1 -top-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-y-0 w-1 -left-0.5 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-x-0 h-1 -bottom-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-y-0 w-1 -right-0.5 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md mb-6 mx-auto md:mx-0`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-green-700 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Border effect */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-300 to-green-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </ScrollEffect>
          ))}
        </div>

        <ScrollEffect type="fadeIn" delay={0.5}>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-green-700 font-medium text-lg mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Experience the difference with Greens & Grain quality
            </motion.p>

            <motion.div 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.div>
        </ScrollEffect>
      </div>
    </section>
  );
}