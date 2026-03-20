import { useState } from "react";
import { useCart } from "@/store/use-cart";
import { useCreateOrder } from "@/hooks/use-api";
import { MinimalButton } from "@/components/ui/MinimalButton";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

type PaymentMethod = "paypal" | "upi" | "card";

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const createOrder = useCreateOrder();
  
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [success, setSuccess] = useState(false);

  const bgUrl = "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop";

  // Calculate totals
  const total = totalPrice();
  const mappedItems = items.map(i => ({ productId: i.product.id, quantity: i.quantity }));

  const handleConfirm = () => {
    createOrder.mutate({
      items: mappedItems,
      total: total,
      paymentMethod
    }, {
      onSuccess: () => {
        setSuccess(true);
        clearCart();
        setTimeout(() => {
          setLocation("/");
        }, 5000);
      }
    });
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center pt-20 px-6 text-center">
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-30"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring" }}
          className="relative z-10"
        >
          <CheckCircle className="w-24 h-24 text-white mb-8 mx-auto opacity-80" />
          <h1 className="font-display text-5xl font-bold uppercase tracking-tighter mb-4">
            Transmission Complete
          </h1>
          <p className="font-mono text-white/50 mb-12 max-w-md mx-auto">
            Your artifacts have been successfully acquired. A confirmation has been transmitted to your secure channel. Returning to origin...
          </p>
          <Link href="/">
            <MinimalButton variant="outline">Return Now</MinimalButton>
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white relative flex flex-col items-center justify-center">
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-30"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${bgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10">
          <p className="font-mono text-white/50 mb-6 text-center">No selection active.</p>
          <Link href="/collection"><MinimalButton variant="outline">Return</MinimalButton></Link>
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Summary */}
          <div className="lg:w-1/2">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-8 pb-4 border-b border-white/10">
              Your Selection
            </h2>
            
            <div className="space-y-6 mb-12">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center justify-between font-mono text-sm bg-black/20 backdrop-blur-sm p-4 border border-white/5">
                  <div className="flex items-center gap-4 text-white/80">
                    <span className="text-white/40">{quantity}x</span>
                    <span className="uppercase">{product.title}</span>
                  </div>
                  <span>${((product.price * quantity) / 100).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 space-y-4 bg-black/40 backdrop-blur-md p-6">
              <div className="flex justify-between font-mono text-sm text-white/60">
                <span>Subtotal</span>
                <span>${(total / 100).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-mono text-sm text-white/60">
                <span>Transmission Protocol Fee</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-mono text-xl pt-4 border-t border-white/10">
                <span>TOTAL</span>
                <span>${(total / 100).toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Right Side: Checkout Form */}
          <div className="lg:w-1/2">
            <div className="bg-black/40 backdrop-blur-md p-8 border border-white/10">
              <h2 className="font-display text-3xl font-bold uppercase tracking-tight mb-8 pb-4 border-b border-white/10">
                Secure Checkout
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-white/50 mb-4">
                    Select Payment Protocol
                  </h3>
                  
                  <div className="space-y-3">
                    {[
                      { id: 'card', label: 'Credit / Debit Interface', desc: 'Secure global network' },
                      { id: 'paypal', label: 'International PayPal', desc: 'Standard encrypted transfer' },
                      { id: 'upi', label: 'India UPI', desc: 'Direct biometric link' }
                    ].map((method) => (
                      <label 
                        key={method.id}
                        className={`flex items-start gap-4 p-5 cursor-pointer border transition-colors ${
                          paymentMethod === method.id 
                            ? 'border-white bg-white/10' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center h-5">
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value={method.id}
                            checked={paymentMethod === method.id}
                            onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                            className="w-4 h-4 text-white bg-black border-white/30 focus:ring-white focus:ring-1"
                          />
                        </div>
                        <div className="flex flex-col font-mono text-sm">
                          <span className="uppercase text-white">{method.label}</span>
                          <span className="text-white/40 text-xs mt-1">{method.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {createOrder.isError && (
                  <div className="p-4 border border-destructive/50 bg-destructive/10 text-destructive font-mono text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Error in transmission: {createOrder.error?.message}</span>
                  </div>
                )}

                <div className="pt-8">
                  <MinimalButton 
                    size="lg" 
                    className="w-full"
                    onClick={handleConfirm}
                    isLoading={createOrder.isPending}
                  >
                    CONFIRM PURCHASE [ ${(total / 100).toFixed(2)} ]
                  </MinimalButton>
                  <p className="font-mono text-[10px] text-white/30 text-center mt-4 uppercase">
                    By confirming, you agree to the assimilation terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
