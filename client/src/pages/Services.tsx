import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MinimalButton } from "@/components/ui/MinimalButton";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Business Strategy",
      desc: "Transform your operations through data-driven strategy, operational excellence, and sustainable growth frameworks.",
      href: "/consultancy/business",
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
      result: "340% avg revenue growth"
    },
    {
      title: "Financial Leverage",
      desc: "Optimize capital structure, maximize returns, and create sustainable wealth through intelligent financial engineering.",
      href: "/consultancy/financial",
      bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      result: "$2.8B assets under management"
    },
    {
      title: "Digital Systems",
      desc: "Build scalable, high-performance digital infrastructure that supports unlimited growth and operational efficiency.",
      href: "/consultancy/digital",
      bg: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      result: "99.99% uptime guarantee"
    },
    {
      title: "Executive Coaching",
      desc: "Develop elite leadership capabilities through personalized coaching from industry veterans and thought leaders.",
      href: "/consultancy/executive",
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600",
      result: "48% leadership effectiveness gain"
    },
    {
      title: "Performance Optimization",
      desc: "Unlock peak performance across teams, processes, and systems through advanced optimization methodologies.",
      href: "/consultancy/performance",
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      result: "67% productivity increase"
    }
  ];

  const bgUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-60"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center pt-32 pb-20 px-6">
          <div className="max-w-screen-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/50 mb-8 uppercase">
                Comprehensive Consultancy Solutions
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                Expert consultancy across five specialized domains, each designed to drive measurable growth and transformation.
              </p>
              <Link href="/booking">
                <MinimalButton variant="primary" className="font-mono text-sm">
                  Explore Our Services <ArrowRight className="w-4 h-4 ml-2" />
                </MinimalButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-white/30 transition-all cursor-pointer h-full flex flex-col">
                      {/* Small image at top */}
                      <div className="w-full h-40 overflow-hidden opacity-60 group-hover:opacity-80 transition-opacity">
                        <div 
                          className="w-full h-full"
                          style={{
                            backgroundImage: `url(${service.bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col flex-grow">
                        {/* Title */}
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-3">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/60 font-sans text-sm leading-relaxed mb-8 flex-grow">
                          {service.desc}
                        </p>

                        {/* Result footer */}
                        <div className="border-t border-white/10 pt-6 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-mono text-white/40 mb-1">RESULT</p>
                            <p className="font-display text-lg font-bold text-white">{service.result}</p>
                          </div>
                          <div className="text-white/20 group-hover:text-white transition-colors">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Services Section */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold tracking-tighter uppercase mb-16"
            >
              Why Choose Meridian Coreline
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "150+ Enterprises", desc: "Trusted by leading organizations worldwide" },
                { label: "24-Month Commitment", desc: "Sustained transformation and measurable results" },
                { label: "$18B+ Impact", desc: "Combined value created for our clients" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-white/10 bg-black/40 p-8"
                >
                  <p className="font-display text-2xl font-bold uppercase tracking-tight mb-3">{item.label}</p>
                  <p className="text-white/50 font-sans text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">Ready to transform your business?</h2>
              <p className="text-white/60 font-sans text-lg mb-12 max-w-2xl mx-auto">
                Schedule a consultation with one of our expert strategists to discuss which services align with your goals.
              </p>
              <Link href="/booking">
                <MinimalButton variant="primary" className="font-mono text-sm">
                  Book Your Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </MinimalButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
