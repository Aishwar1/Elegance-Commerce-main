import { useEffect } from "react";
import { motion } from "framer-motion";
import { LeadForm } from "@/components/LeadForm";

export default function JoinUs() {
  const bgUrl = "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const consultancyServices = [
    {
      icon: "📊",
      title: "Business Strategy",
      description: "We analyze your operations to identify growth opportunities and implement scalable systems that drive sustainable business expansion."
    },
    {
      icon: "💰",
      title: "Financial Leverage",
      description: "Build multiple income streams and financial independence through smart frameworks and modern digital opportunities."
    },
    {
      icon: "🛠️",
      title: "Digital Systems",
      description: "Design and implement high-performance digital tools and workflows that automate operations and increase productivity."
    },
    {
      icon: "👔",
      title: "Executive Coaching",
      description: "One-on-one strategic coaching to enhance leadership skills, decision-making, and personal performance at the executive level."
    },
    {
      icon: "⚡",
      title: "Performance Optimization",
      description: "Unlock peak potential through data-driven performance analysis and tailored strategies for continuous improvement."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-70"
        style={{ 
          backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.8) 100%), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6">
          <div className="max-w-screen-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/50 mb-8 uppercase">
                Transform Your Future
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Join the Meridian Coreline Movement
              </h1>
              <p className="text-lg sm:text-2xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                We engineer growth through strategic systems, digital innovation, and proven frameworks that transform ambitious individuals and forward-thinking businesses into industry leaders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-24 px-6 bg-white/[0.02] backdrop-blur-sm">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6">What We Do</h2>
              <p className="text-white/50 font-sans text-lg leading-relaxed max-w-2xl">
                At Meridian Coreline, we don't just consult—we partner with you to build lasting systems that compound over time. Our multi-disciplinary approach combines strategic thinking, technical execution, and measurable accountability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {consultancyServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-black/40 border border-white/5 p-6 hover:bg-white/[0.05] transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-display text-lg font-bold uppercase mb-3 text-white">{service.title}</h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6">How We Help You Win</h2>
              <p className="text-white/50 font-sans text-lg leading-relaxed max-w-3xl">
                Whether you're a business owner seeking operational excellence or a professional building financial independence, our proven methodologies deliver measurable results. We focus on what matters: sustainable growth, strategic leverage, and systems that work while you scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-white/20 pl-8 space-y-6"
              >
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">For Business Owners</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    Scale your operations with systems that increase revenue, reduce overhead, and create predictable growth. We identify inefficiencies and implement strategic solutions that compound.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">Revenue Optimization</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    Unlock hidden revenue streams through strategic repositioning, market analysis, and operational excellence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-white/20 pl-8 space-y-6"
              >
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">For Professionals</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    Build financial leverage and multiple income streams that transcend traditional employment. Our frameworks help you engineer economic freedom.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase mb-2">Financial Freedom</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    Develop digital products, service offerings, and investment strategies that create passive and active income flows.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-black/40 border border-white/5 p-6 text-center">
                <p className="font-display text-3xl font-bold text-white mb-2">500+</p>
                <p className="font-mono text-xs text-white/50 uppercase">Clients Transformed</p>
              </div>
              <div className="bg-black/40 border border-white/5 p-6 text-center">
                <p className="font-display text-3xl font-bold text-white mb-2">10x</p>
                <p className="font-mono text-xs text-white/50 uppercase">Average Growth</p>
              </div>
              <div className="bg-black/40 border border-white/5 p-6 text-center">
                <p className="font-display text-3xl font-bold text-white mb-2">15yr+</p>
                <p className="font-mono text-xs text-white/50 uppercase">Combined Experience</p>
              </div>
              <div className="bg-black/40 border border-white/5 p-6 text-center">
                <p className="font-display text-3xl font-bold text-white mb-2">24/7</p>
                <p className="font-mono text-xs text-white/50 uppercase">Support Access</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section className="py-24 px-6 bg-gradient-to-b from-white/[0.02] to-black/40">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6">Ready to Transform?</h2>
              <p className="text-white/50 font-sans text-lg leading-relaxed mb-8">
                Join hundreds of ambitious individuals and forward-thinking businesses already leveraging our proven systems. Your journey to exceptional growth starts here.
              </p>
            </motion.div>

            <div className="bg-black/60 border border-white/5 backdrop-blur-md">
              <div className="p-12">
                <h3 className="font-display text-2xl font-bold uppercase mb-2 text-center">Get Started Today</h3>
                <p className="text-white/40 font-mono text-xs uppercase tracking-[0.2em] text-center mb-12">
                  Tell us about your goals. Let's build your system.
                </p>
                <LeadForm showMessage={true} />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-white/40 font-mono text-xs uppercase tracking-[0.2em] mt-8"
            >
              We believe in radical transparency. No hidden fees. No nonsense. Just results.
            </motion.p>
          </div>
        </section>
      </div>
    </div>
  );
}
