import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Wheat, Salad } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=2071&auto=format&fit=crop')", 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.75,
            filter: "brightness(1.3) blur(1px)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/40 via-emerald-700/50 to-green-950/60 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.15)_0%,rgba(0,0,0,0)_100%)] animate-pulse"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Side - Text Content */}
          <motion.div 
            className="lg:w-1/2 text-left relative p-6 md:p-8 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Plain background overlay */}
            <div className="absolute inset-0 bg-green-950/50 backdrop-blur-sm rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <motion.h2 
                className="font-semibold text-lg mb-4 uppercase tracking-wide drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {COMPANY_INFO.name}
              </motion.h2>

              <motion.h1 
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="block">
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-green-500 to-green-700"
                    animate={{ 
                      backgroundPosition: ["0% center", "100% center", "0% center"],
                      textShadow: [
                        '0 0 1px rgba(22,163,74,0.1)',
                        '0 0 2px rgba(22,163,74,0.2)',
                        '0 0 3px rgba(22,163,74,0.3)',
                        '0 0 2px rgba(22,163,74,0.2)',
                        '0 0 1px rgba(22,163,74,0.1)'
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                  >
                    FRESH
                  </motion.span>{" "}
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-green-700"
                    animate={{ 
                      backgroundPosition: ["0% center", "100% center", "0% center"],
                      textShadow: [
                        '0 0 1px rgba(22,163,74,0.1)',
                        '0 0 2px rgba(21,128,61,0.2)',
                        '0 0 3px rgba(21,128,61,0.3)',
                        '0 0 2px rgba(21,128,61,0.2)',
                        '0 0 1px rgba(22,163,74,0.1)'
                      ]
                    }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: 0.5
                    }}
                  >
                    GREENS
                  </motion.span>
                </span>
                <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-green-200 to-green-100 flex items-center gap-3">
                  Straight from Farm to Your Table
                  <motion.span
                    animate={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    🌾
                  </motion.span>
                </span>
              </motion.h1>

              <motion.p 
                className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl drop-shadow-sm"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Premium organic grains and fresh salads sourced directly from sustainable farms. 
                Experience nature's finest quality for a healthier, more vibrant life.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link href="/varieties">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-green-600/30 transition-all duration-300 flex items-center gap-2 overflow-hidden group">
                      <span>ORDER NOW</span>
                      <motion.div
                        className="relative"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>

                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-green-300 text-white bg-green-900/40 hover:bg-green-900/60 text-lg px-8 py-6 rounded-full hover:shadow-md transition-all duration-300"
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div 
                className="mt-8 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main product image with animation */}
              <motion.div
                className="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-2xl"
                animate={{ 
                  rotate: [0, 2, 0, -2, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8,
                  ease: "easeInOut" 
                }}
              >
                <div className="relative w-full h-full aspect-square">
                  {/* Background pattern for image */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1557682250-55991525c546?q=80&w=1000&auto=format&fit=crop')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      opacity: 0.2
                    }}
                  ></div>
                  <img 
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
                    alt="Fresh Healthy Greens & Grains Bowl" 
                    className="w-full h-auto rounded-full aspect-square object-cover relative z-10"
                  />
                </div>

                {/* Subtle pulsing highlight effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-full"
                  animate={{ 
                    opacity: [0, 0.4, 0],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut" 
                  }}
                />
                {/* Very subtle twinkling effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-bl from-transparent via-green-400/10 to-green-300/15 rounded-full"
                  animate={{ 
                    opacity: [0, 0.3, 0],
                    scale: [0.98, 1.01, 0.98]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    delay: 1,
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>

              {/* Bubbles around the image */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`bubble-decoration-${i}`}
                  className="absolute rounded-full bg-green-100 shadow-lg"
                  style={{
                    width: `${Math.random() * 30 + 15}px`,
                    height: `${Math.random() * 30 + 15}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    zIndex: 5
                  }}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}

              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 -left-6 w-20 h-20 bg-green-200 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute bottom-4 -right-6 w-28 h-28 bg-green-300 rounded-full z-0"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}