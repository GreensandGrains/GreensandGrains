import { useState } from "react";
import { Link } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/utils";
import { ScrollEffect } from "@/components/layout/scroll-effect";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, total } = useCart();
  
  return (
    <MainLayout>
      <ScrollEffect type="fadeIn" delay={0.1}>
        <section className="bg-gradient-to-b from-green-50 to-white py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center mb-8 gap-2">
              <Link href="/varieties">
                <Button variant="ghost" className="p-0 text-green-700 hover:text-green-800">
                  <ArrowLeft className="h-5 w-5 mr-2" /> 
                  Continue Shopping
                </Button>
              </Link>
            </div>

            <div className="text-center mb-10">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 relative inline-block">
                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-500">Cart</span>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></span>
              </h1>
            </div>

            <AnimatePresence mode="wait">
              {items.length === 0 ? (
                <ScrollEffect type="slideUp" delay={0.2}>
                  <motion.div 
                    className="text-center py-16 bg-white rounded-xl shadow-sm flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4">
                      <ShoppingCart className="h-10 w-10 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
                    <p className="text-gray-600 max-w-md mb-6">
                      Looks like you haven't added any items to your cart yet. Explore our varieties of organic grains to get started.
                    </p>
                    <Link href="/varieties">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Browse Varieties
                      </Button>
                    </Link>
                  </motion.div>
                </ScrollEffect>
              ) : (
                <>
                  <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    <ScrollEffect type="slideLeft" delay={0.1} className="lg:w-2/3">
                      <div className="bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                          Cart Items ({items.reduce((sum, item) => sum + item.quantity, 0)})
                        </h2>
                        
                        <div className="space-y-6">
                          <AnimatePresence>
                            {items.map((item) => (
                              <motion.div 
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 pb-6"
                              >
                                <div className="flex items-center mb-4 sm:mb-0">
                                  <div className="bg-green-50 w-16 h-16 rounded-lg flex items-center justify-center mr-4">
                                    <ShoppingCart className="h-8 w-8 text-green-500" />
                                  </div>
                                  <div>
                                    <h3 className="font-medium text-lg text-gray-900">{item.name}</h3>
                                    <p className="text-gray-500 text-sm">
                                      {formatCurrency(item.price)} each
                                    </p>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                  <div className="flex items-center border border-gray-200 rounded-lg">
                                    <button 
                                      onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                                      className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-l-lg transition-colors disabled:opacity-50"
                                      disabled={item.quantity <= 1}
                                    >
                                      <Minus className="h-4 w-4" />
                                    </button>
                                    
                                    <span className="px-4 py-2 text-center text-gray-700 w-12">
                                      {item.quantity}
                                    </span>
                                    
                                    <button 
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-r-lg transition-colors"
                                    >
                                      <Plus className="h-4 w-4" />
                                    </button>
                                  </div>
                                  
                                  <div className="text-right min-w-[80px]">
                                    <div className="font-medium text-gray-900">
                                      {formatCurrency(item.price * item.quantity)}
                                    </div>
                                  </div>
                                  
                                  <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                                  >
                                    <Trash2 className="h-5 w-5" />
                                  </button>
                                </div>
                              </motion.div>
                            ))}
                          </AnimatePresence>
                        </div>
                        
                        <div className="flex justify-end mt-8">
                          <Button 
                            variant="outline" 
                            onClick={clearCart}
                            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4 mr-2" /> Clear Cart
                          </Button>
                        </div>
                      </div>
                    </ScrollEffect>
                    
                    <ScrollEffect type="slideRight" delay={0.2} className="lg:w-1/3">
                      <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
                        
                        <div className="space-y-4">
                          <div className="flex justify-between border-b border-gray-100 pb-4">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium text-gray-900">{formatCurrency(total)}</span>
                          </div>
                          
                          <div className="flex justify-between border-b border-gray-100 pb-4">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-medium text-gray-900">Free</span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span className="text-lg font-semibold text-gray-900">Total</span>
                            <span className="text-lg font-bold text-green-700">{formatCurrency(total)}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-6">
                          Proceed to Checkout
                        </Button>
                        
                        <p className="text-sm text-gray-500 text-center mt-4">
                          Secure checkout powered by our payment processor
                        </p>
                      </div>
                    </ScrollEffect>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </section>
      </ScrollEffect>
    </MainLayout>
  );
}