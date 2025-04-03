import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { GRAIN_CATEGORIES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { ScrollEffect } from "@/components/layout/scroll-effect";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Plus, Check } from "lucide-react";

export default function Varieties() {
  const [location] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filteredCategories, setFilteredCategories] = useState(GRAIN_CATEGORIES);
  const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  // Get category ID from URL if present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('category');
    if (categoryId) {
      setSelectedCategory(parseInt(categoryId));
    }
  }, [location]);

  const displayedCategories = selectedCategory 
    ? filteredCategories.filter(category => category.id === selectedCategory)
    : filteredCategories;
    
  const handleAddToCart = (id: number, name: string, price = 9.99) => {
    addToCart({
      id: id.toString(),
      name,
      price
    });
    
    // Show animation and toast
    setAddedItems(prev => ({ ...prev, [id]: true }));
    
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
      duration: 2000,
    });
    
    // Reset animation after delay
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [id]: false }));
    }, 1500);
  };

  return (
    <MainLayout>
      <ScrollEffect type="fadeIn" delay={0.1}>
        <section className="bg-gradient-to-b from-green-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 relative inline-block">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">Grain Varieties</span>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></span>
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6 mt-6">
                Explore our premium collection of organically grown grains. We offer a diverse range of options to suit every preference and dietary need.
              </p>
              <div className="max-w-xl mx-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <input
                    type="search"
                    className="w-full px-6 py-3 rounded-full border-2 border-green-200 focus:border-green-500 focus:outline-none shadow-sm transition-all duration-300"
                    placeholder="Search in Healthy Pack..."
                    onChange={(e) => {
                      const searchTerm = e.target.value.toLowerCase();
                      setFilteredCategories(
                        GRAIN_CATEGORIES.map(category => ({
                          ...category,
                          varieties: category.varieties.filter(variety =>
                            variety.name.toLowerCase().includes(searchTerm) ||
                            variety.description.toLowerCase().includes(searchTerm)
                          )
                        })).filter(category => category.varieties.length > 0)
                      );
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* Category filter buttons */}
            <ScrollEffect type="slideUp" delay={0.2}>
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                <Button 
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-green-600 text-white hover:bg-green-700" : "text-green-700 border-green-200 hover:border-green-400 hover:bg-green-50"}
                >
                  All Categories
                </Button>
                {GRAIN_CATEGORIES.map(category => (
                  <Button 
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id 
                      ? "bg-green-600 text-white hover:bg-green-700" 
                      : "text-green-700 border-green-200 hover:border-green-400 hover:bg-green-50"}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </ScrollEffect>

            {/* Category and Product display */}
            <div className="space-y-12">
              {filteredCategories.map((category, idx) => (
                <ScrollEffect key={category.id} type={idx % 2 === 0 ? "slideLeft" : "slideRight"} delay={0.2 + (idx * 0.1)}>
                  <motion.div 
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col md:flex-row gap-6 mb-8">
                      <motion.div 
                        className="md:w-1/3"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <img 
                          src={category.imageUrl} 
                          alt={category.name} 
                          className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                      </motion.div>
                      <div className="md:w-2/3">
                        <h2 className="font-heading font-bold text-3xl mb-3 text-green-800">{category.name}</h2>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                        <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                          <h3 className="font-heading font-semibold text-xl mb-3 text-green-700">About {category.name}</h3>
                          <p className="text-gray-600">
                            Our {category.name.toLowerCase()} are carefully selected from sustainable farms and undergo strict quality control to ensure you receive only the finest products. Perfect for a variety of culinary applications and packed with essential nutrients.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="font-heading font-semibold text-2xl mb-4 text-green-800">Available Varieties</h3>
                    <div className="flex overflow-x-auto pb-4 gap-4 varieties-scroll">
                      {category.varieties.map((variety, vIdx) => (
                        <motion.div 
                          key={variety.id} 
                          className="flex-none w-72 border border-green-100 rounded-lg p-4 bg-white hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * vIdx }}
                          whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                        >
                          <div className="relative">
                            <img 
                              src={variety.imageUrl} 
                              alt={variety.name}
                              className="w-full h-48 object-cover rounded-lg mb-3"
                            />
                            <div className="absolute top-2 right-2 bg-green-100 text-green-800 font-semibold px-3 py-1 rounded-full text-sm">
                              $9.99
                            </div>
                          </div>
                          <h4 className="font-heading font-semibold text-lg mb-2 text-green-700">{variety.name}</h4>
                          <p className="text-gray-600 mb-4 h-16 overflow-hidden">{variety.description}</p>
                          
                          <Button 
                            className={`w-full transition-all duration-300 ${
                              addedItems[variety.id] 
                                ? "bg-green-700 hover:bg-green-800" 
                                : "bg-green-600 hover:bg-green-700"
                            } text-white`}
                            onClick={() => handleAddToCart(variety.id, variety.name)}
                          >
                            <AnimatePresence mode="wait">
                              {addedItems[variety.id] ? (
                                <motion.div
                                  key="check"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="flex items-center justify-center"
                                >
                                  <Check className="mr-2 h-4 w-4" /> Added
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="cart"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="flex items-center justify-center"
                                >
                                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </ScrollEffect>
              ))}
            </div>
          </div>
        </section>
      </ScrollEffect>


    </MainLayout>
  );
}
