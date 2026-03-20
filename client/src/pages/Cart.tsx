import { useCart } from "@/store/use-cart";
import { MinimalButton } from "@/components/ui/MinimalButton";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const bgUrl = "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop";

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white relative">
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-30"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 pt-32 px-6 flex flex-col items-center justify-center">
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter uppercase mb-6 text-white/20">
            Empty Buffer
          </h1>
          <p className="font-mono text-sm text-white/40 mb-10 text-center max-w-md">
            Your selection buffer is currently empty. Acquire artifacts from the collection to proceed.
          </p>
          <Link href="/collection">
            <MinimalButton variant="outline">Enter Collection</MinimalButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global Background Wallpaper with Dimmed Brightness */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 max-w-screen-xl mx-auto">
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter uppercase">
            Your Selection
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Cart Items */}
          <div className="lg:col-span-2 flex flex-col gap-1">
            {items.map(({ product, quantity }) => (
              <motion.div 
                layout
                key={product.id} 
                className="flex flex-col sm:flex-row items-center gap-6 p-4 sm:p-6 bg-black/40 backdrop-blur-sm border border-white/10"
              >
                <div className="w-full sm:w-24 aspect-square bg-black border border-white/10 flex-shrink-0">
                  <img 
                    src={product.imageUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div>
                    <Link href={`/product/${product.id}`} className="hover:underline">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="font-mono text-xs text-white/50 mt-1 uppercase">
                      ID: {product.id.toString().padStart(6, '0')}
                    </p>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-8">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-white/20">
                      <button 
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-2 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-mono text-sm">{quantity}</span>
                      <button 
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-2 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="font-mono text-lg tracking-wider text-right w-24">
                      ${((product.price * quantity) / 100).toFixed(2)}
                    </div>

                    <button 
                      onClick={() => removeItem(product.id)}
                      className="text-white/30 hover:text-destructive transition-colors p-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 border border-white/10 p-8 bg-black/40 backdrop-blur-md">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-8 border-b border-white/10 pb-4">
                Summary
              </h2>
              
              <div className="flex justify-between items-center mb-4 font-mono text-sm text-white/70">
                <span>Subtotal</span>
                <span>${(totalPrice() / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-8 font-mono text-sm text-white/70">
                <span>Transmission Fee</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="flex justify-between items-center mb-10 pt-4 border-t border-white/10 font-mono text-xl">
                <span>TOTAL</span>
                <span>${(totalPrice() / 100).toFixed(2)}</span>
              </div>

              <Link href="/checkout" className="block w-full">
                <MinimalButton className="w-full group">
                  PROCEED TO CHECKOUT
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MinimalButton>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
