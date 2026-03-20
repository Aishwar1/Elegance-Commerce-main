import { useEffect } from "react";
import { useProducts, useProduct } from "@/hooks/use-api";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { MinimalButton } from "@/components/ui/MinimalButton";
import { useCart } from "@/store/use-cart";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Check, ShoppingCart, Shield, Zap, Globe } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useProduct(parseInt(id || "0"));
  const { data: allProducts } = useProducts();
  const addItem = useCart((state) => state.addItem);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 px-6 max-w-screen-2xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="aspect-square bg-white/5 animate-pulse" />
          <div className="space-y-6">
            <div className="h-12 w-3/4 bg-white/5 animate-pulse" />
            <div className="h-6 w-1/4 bg-white/5 animate-pulse" />
            <div className="h-32 w-full bg-white/5 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <p className="font-mono text-white/50">Artifact not found in database.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to Collection",
      description: `${product.title} has been staged for acquisition.`,
    });
  };

  const bgUrl = "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10 pt-32 pb-24 px-4 sm:px-6 max-w-screen-2xl mx-auto">
        <Link href="/collection" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-3 h-3" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 mb-32">
          {/* Images */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm"
            >
              <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
            </motion.div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.imageUrls?.map((url, i) => (
                <div key={i} className="aspect-square border border-white/10 overflow-hidden bg-black/20">
                  <img src={url} alt={`${product.title} view ${i+1}`} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40 mb-4 block">Artifact Type: Digital System</span>
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter uppercase mb-6">{product.title}</h1>
              <p className="font-display text-3xl font-bold text-white mb-8 tracking-tighter">${(product.price / 100).toFixed(2)}</p>
              
              <div className="space-y-6 mb-12">
                <p className="text-lg text-white/70 font-sans leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-white/30" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">High Fidelity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-white/30" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Instant Access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-white/30" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Global Sync</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-white/10 pt-10">
                <MinimalButton 
                  onClick={handleAddToCart}
                  variant="primary" 
                  size="lg" 
                  className="flex-1"
                >
                  <ShoppingCart className="w-4 h-4 mr-3" />
                  Acquire Artifact
                </MinimalButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Grid */}
        <section className="py-24 border-y border-white/5 mb-32">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tighter mb-16 text-center">Core Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {product.features?.map((feature, i) => (
              <div key={i} className="flex gap-4 p-8 bg-white/[0.02] border border-white/5">
                <div className="mt-1">
                  <div className="w-4 h-4 border border-white/20 rounded-full flex items-center justify-center">
                    <Check className="w-2 h-2" />
                  </div>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] leading-loose text-white/70">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Artifacts */}
        <section>
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tighter">Other Artifacts</h2>
            <Link href="/collection" className="font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts?.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
              <Link key={related.id} href={`/product/${related.id}`}>
                <div className="group cursor-pointer border border-white/5 bg-black/40 p-6 hover:bg-white/[0.05] transition-all">
                  <div className="aspect-square mb-6 overflow-hidden border border-white/10">
                    <img src={related.imageUrl} alt={related.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase mb-2">{related.title}</h3>
                  <p className="font-mono text-white/50 text-[10px] tracking-widest">${(related.price / 100).toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
