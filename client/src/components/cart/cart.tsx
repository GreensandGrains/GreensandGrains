
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="relative">
      <Button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-20 z-50 bg-primary text-white"
      >
        Cart ({items.length})
      </Button>

      {isOpen && (
        <div className="fixed right-4 top-32 w-96 bg-white shadow-lg rounded-lg p-4 z-50">
          <h3 className="font-heading font-semibold text-lg mb-4">Shopping Cart</h3>
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2 border-b">
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border rounded"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-2 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4">
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
