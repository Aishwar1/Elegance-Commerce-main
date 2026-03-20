import { useEffect } from "react";
import { useProducts } from "@/hooks/use-api";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MinimalButton } from "@/components/ui/MinimalButton";

export default function Collection() {
  const { data: products, isLoading, isError } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgUrl = "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop";

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 px-6 max-w-screen-2xl mx-auto flex flex-col">
        <div className="h-12 w-48 bg-white/5 animate-pulse mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="aspect-[4/5] bg-black/40 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <p className="font-mono text-white/50">Failed to load artifacts. System error.</p>
      </div>
    );
  }

  const displayProducts = products || [];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

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
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter uppercase">
              The Collection
            </h1>
            <p className="font-mono text-sm text-white/40 mt-4 max-w-md">
              001 / CURATED DIGITAL ARTIFACTS / ACQUIRE AND ASSIMILATE
            </p>
          </div>
          <div className="font-mono text-xs text-white/30 uppercase tracking-widest">
            {displayProducts.length} Items Listed
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border border-white/10"
        >
          {displayProducts.map((product: any) => (
            <motion.div variants={item} key={product.id} className="bg-black/40 backdrop-blur-sm group relative flex flex-col">
              <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={product.imageUrl} 
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-4 right-4 z-20">
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-black/60 backdrop-blur-md px-2 py-1 border border-white/10">
                    ${(product.price / 100).toFixed(2)}
                  </span>
                </div>
              </Link>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight mb-2">
                    {product.title}
                  </h3>
                  <p className="font-mono text-xs text-white/50 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link href={`/product/${product.id}`} className="w-full">
                    <MinimalButton variant="outline" size="sm" className="w-full">
                      View Details
                    </MinimalButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
