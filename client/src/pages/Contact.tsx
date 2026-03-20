import { useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

const DENSE_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1512941691920-25bda36ae277?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=400",
];

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 pt-24 pb-12 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/80 border border-white/10 p-8 md:p-12 backdrop-blur-xl relative z-20 flex flex-col"
            >
              <div className="flex-1">
                <h1 className="font-display text-4xl font-bold tracking-tighter uppercase mb-2">Contact</h1>
                <p className="font-sans text-white/50 mb-8 text-sm uppercase tracking-widest">Direct access to leadership</p>

                <div className="space-y-8">
                  {/* Name */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Full Name</p>
                    <p className="font-display text-2xl font-bold uppercase tracking-tight">Aishwar Bhatnagar</p>
                    <p className="font-sans text-sm text-white/50 mt-1">Founder — Meridian Coreline</p>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Email Address</p>
                    <a href="mailto:onepercentloss@gmail.com" className="font-display text-lg font-bold uppercase tracking-tight hover:text-white/60 transition-colors break-all">
                      onepercentloss@gmail.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">Phone Number</p>
                    <p className="font-display text-2xl font-bold uppercase tracking-tight">+91 6306248624</p>
                  </div>

                  {/* Social */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4">Social Channels</p>
                    <div className="flex gap-6">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Meta Section */}
                <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-2 gap-8 flex-shrink-0">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Availability</p>
                    <p className="font-display text-lg font-bold text-white">24/7</p>
                    <p className="text-[10px] text-white/40 mt-1">Response within 24hrs</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Services</p>
                    <p className="font-display text-lg font-bold text-white">5+</p>
                    <p className="text-[10px] text-white/40 mt-1">Specializations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dense Visual Grid Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:flex flex-col gap-4 h-full"
            >
              <div className="grid grid-cols-3 gap-2 overflow-hidden content-start flex-1">
                {DENSE_IMAGES.map((url, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="aspect-square bg-white/5 border border-white/5 overflow-hidden"
                  >
                    <img src={url} alt={`Contact ${i}`} className="w-full h-full object-cover transition-all duration-500 hover:scale-110" />
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <h3 className="font-display text-sm font-bold uppercase mb-3 tracking-tighter">Engineering Growth</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-6">
                  We specialize in digital transformation, operational scaling, and strategic leverage for ambitious organizations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l border-white/20 pl-3">
                    <p className="text-2xl font-bold text-white">100+</p>
                    <p className="text-[8px] uppercase tracking-[0.1em] text-white/40 mt-1">Clients Served</p>
                  </div>
                  <div className="border-l border-white/20 pl-3">
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-[8px] uppercase tracking-[0.1em] text-white/40 mt-1">Countries</p>
                  </div>
                </div>

                {/* Activity Pulse */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex justify-between items-end mb-3">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">Active Response</p>
                    <p className="font-mono text-[8px] text-white/40 tracking-widest">ONLINE</p>
                  </div>
                  <div className="flex items-end gap-[2px] h-6">
                    {[30, 45, 25, 60, 75, 40, 90, 55, 30, 45, 70, 85, 40, 60, 35].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0.1, opacity: 0.1 }}
                        animate={{ 
                          scaleY: [1, 0.5, 1.2, 0.8, 1],
                          opacity: [0.2, 0.5, 0.3, 0.6, 0.2]
                        }}
                        transition={{ 
                          duration: 2 + Math.random(), 
                          repeat: Infinity, 
                          delay: i * 0.05,
                          ease: "easeInOut"
                        }}
                        className="flex-1 bg-white origin-bottom"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 px-6 pb-20 mt-16">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-4">Common Questions</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter uppercase">FAQ</h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
            {[
              {
                q: "How much does it cost?",
                a: "Our engagements are scoped to your specific situation. We offer project-based and retainer models. Every arrangement starts with a discovery call — no generic packages.",
              },
              {
                q: "How long until I see results?",
                a: "Most clients see measurable impact within 60–90 days of implementation. Full system compounding typically becomes visible at the 6-month mark. We move fast.",
              },
              {
                q: "What industries do you work with?",
                a: "We work across professional services, tech, finance, e-commerce, and consulting. If you have a business with revenue and growth ambitions, we can help.",
              },
              {
                q: "How do I get started?",
                a: "Book a discovery session via the Booking page. We'll assess your current situation, identify the biggest levers, and outline a clear path forward — no obligation.",
              },
              {
                q: "What makes Meridian Coreline different?",
                a: "We don't give advice and leave. We build the systems ourselves, stay through implementation, and measure everything. Results are non-negotiable — they're our standard.",
              },
              {
                q: "Do you work with early-stage businesses?",
                a: "Yes. We have frameworks for both early-stage founders building their first systems and established businesses needing to scale intelligently. The approach is tailored either way.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="bg-black p-8 sm:p-10 group hover:bg-white/[0.02] transition-all"
              >
                <p className="font-display text-base sm:text-lg font-bold uppercase tracking-tight mb-4 group-hover:text-white/80 transition-colors">{item.q}</p>
                <p className="font-sans text-white/40 text-sm leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full opacity-30 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full opacity-20 -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}
