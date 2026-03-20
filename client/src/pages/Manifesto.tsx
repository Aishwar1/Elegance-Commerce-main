import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Manifesto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bgUrl = "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop";

  const sections = [
    {
      title: "Our Philosophy",
      description: "Most people believe growth comes from working harder—more hours, more effort, more pressure. We believe growth comes from systems, leverage, and strategic direction. This philosophy forms the foundation of everything we do.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      imagePosition: "right"
    },
    {
      title: "Systems Over Effort",
      description: "The difference between those who remain stuck and those who achieve exponential growth is not simply effort. It is the ability to operate intelligently through scalable systems, processes, and frameworks that compound over time.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      imagePosition: "left"
    },
    {
      title: "Business Growth & Optimization",
      description: "We work closely with businesses to understand their operations, identify inefficiencies, and implement smarter systems that allow them to scale effectively. Growth is not accidental—it is built through better decisions, stronger systems, and clearer strategy.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      imagePosition: "right"
    },
    {
      title: "Financial Leverage & Independence",
      description: "Hard work alone does not always create financial freedom. We help professionals move from limited income structures to scalable financial thinking, building additional income streams through modern digital frameworks and strategic opportunities.",
      image: "https://images.unsplash.com/photo-1526628652108-f250c4e6b693?q=80&w=1000&auto=format&fit=crop",
      imagePosition: "left"
    },
    {
      title: "Digital Ecosystem & Tools",
      description: "Because motivation fades but systems compound, we provide a specialized ecosystem of digital tools. From habit trackers and performance metrics to CRM systems and productivity frameworks, we design tools that help individuals and businesses optimize and scale their efforts.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
      imagePosition: "right"
    },
    {
      title: "The Movement",
      description: "At Meridian Coreline, we are building a network of individuals who refuse to operate like the majority. Business owners, builders, professionals, and people who want to operate with clarity and leverage. If you believe growth should be engineered, not left to chance, then you already understand what this movement stands for.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      imagePosition: "left"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95)), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-32 pb-24 px-6 border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-6xl sm:text-8xl font-bold tracking-tighter uppercase mb-6">
                Our Philosophy
              </h1>
              <p className="text-xl sm:text-2xl font-sans text-white/60 max-w-3xl leading-relaxed">
                Growth is engineered through systems, leverage, and strategic direction—not through effort alone.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Alternating Sections */}
        <div className="py-32 px-6 space-y-32">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-screen-2xl mx-auto"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${section.imagePosition === 'left' ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'}`}>
                
                {/* Image on left */}
                {section.imagePosition === 'left' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="order-1 lg:order-1"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                      <img 
                        src={section.image} 
                        alt={section.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Text */}
                <motion.div 
                  initial={{ opacity: 0, x: section.imagePosition === 'right' ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`order-2 lg:order-${section.imagePosition === 'left' ? '2' : '1'}`}
                >
                  <div>
                    <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter uppercase mb-6">
                      {section.title}
                    </h2>
                    <p className="text-white/60 font-sans text-base sm:text-lg leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </motion.div>

                {/* Image on right */}
                {section.imagePosition === 'right' && (
                  <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="order-1 lg:order-2"
                  >
                    <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                      <img 
                        src={section.image} 
                        alt={section.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-24 px-6 border-t border-white/5"
        >
          <div className="max-w-screen-2xl mx-auto text-center">
            <h3 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter uppercase mb-8">
              Welcome to Meridian Coreline
            </h3>
            <p className="text-white/60 font-sans text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We are building a network of individuals who refuse to operate like the majority. If you believe growth should be engineered, not left to chance, you already understand what this movement stands for.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <p className="font-mono text-sm text-white/40">Get in touch with us</p>
              <a href="mailto:onepercentloss@gmail.com" className="font-display text-xl font-bold uppercase text-white hover:text-white/70 transition-colors">
                onepercentloss@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
