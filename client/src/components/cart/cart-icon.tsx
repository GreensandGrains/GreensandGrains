import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

export function CartIcon() {
  const { items, total, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div 
          className="relative cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isHovered ? [0, -10, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1"
          >
            <ShoppingCart className="h-6 w-6 text-green-700" />
          </motion.div>
          
          <AnimatePresence>
            {itemCount > 0 && (
              <motion.div
                key="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {itemCount}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold flex items-center">
            <motion.div 
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
            >
              <ShoppingCart className="mr-2 h-5 w-5 text-green-600" />
            </motion.div>
            Your Shopping Cart
          </SheetTitle>
          <SheetDescription>
            {items.length === 0 ? (
              "Your cart is empty"
            ) : (
              `You have ${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`
            )}
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 flex flex-col gap-5">
          <AnimatePresence>
            {items.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <motion.div 
                  className="mx-auto w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(74, 222, 128, 0)",
                      "0 0 0 10px rgba(74, 222, 128, 0.2)",
                      "0 0 0 0 rgba(74, 222, 128, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <ShoppingBag className="h-10 w-10 text-green-500" />
                </motion.div>
                <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="mt-2 text-sm text-gray-500 max-w-xs mx-auto">
                  Add some delicious organic grains to get started with your healthy journey
                </p>
                <div className="mt-6">
                  <Link href="/varieties">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Browse Our Varieties
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <>
                <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-300px)]">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="flex justify-between items-center border-b border-gray-200 pb-4"
                      whileHover={{ backgroundColor: "rgba(240, 253, 244, 0.5)" }}
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {formatCurrency(item.price)} each
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7 rounded-full border-green-200"
                            onClick={() => item.quantity > 1 && updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3 text-green-700" />
                          </Button>
                          
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          
                          <Button 
                            variant="outline" 
                            size="icon"
                            className="h-7 w-7 rounded-full border-green-200"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3 text-green-700" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-7 w-7 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-semibold">{formatCurrency(total)}</span>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <Link href="/cart">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white group">
                        <span>View Cart</span>
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </Link>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-200 text-red-600 hover:bg-red-50"
                      onClick={clearCart}
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> Clear Cart
                    </Button>
                  </div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
        
        <SheetFooter className="mt-4 text-xs text-gray-500 text-center">
          <p>Secure checkout powered by our payment processor</p>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}