import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const selectedWorks = [
  {
    category: "Visual Design",
    year: "2025",
    title: "Brand Identity Systems",
    desc: "End-to-end visual identity systems built for scale and coherence.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Engineering",
    year: "2025",
    title: "Digital Infrastructure",
    desc: "High-performance digital architectures for ambitious organizations.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Strategy",
    year: "2024",
    title: "Performance Frameworks",
    desc: "Operational frameworks engineered to compound results over time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "AI Systems",
    year: "2024",
    title: "Automation Ecosystems",
    desc: "Intelligent automation pipelines replacing manual operational overhead.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Studio",
    year: "2025",
    title: "Content & Media Production",
    desc: "High-fidelity content systems built for authority and reach.",
    image: "https://images.unsplash.com/photo-1536240478700-b869ad10a2eb?auto=format&fit=crop&q=80&w=800",
  },
  {
    category: "Consulting",
    year: "2025",
    title: "Growth Architecture",
    desc: "Strategic growth blueprints from zero to scalable operation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

const stats = [
  { number: "12+", label: "Brand & Identity" },
  { number: "30+", label: "Digital Systems" },
  { number: "18+", label: "AI Automation" },
  { number: "50+", label: "Strategy Engagements" },
];

export default function Studio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.97) 80%), url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070)`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-0 px-4 sm:px-6 lg:px-12">
          <div className="max-w-screen-2xl mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.3em] text-white/40 mb-8 sm:mb-12 uppercase"
            >
              Meridian Coreline — Studio
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display font-bold tracking-tighter leading-[0.88] uppercase">
                <span className="block text-[clamp(4rem,12vw,10rem)] text-white">WE BUILD</span>
                <span className="block text-[clamp(4rem,12vw,10rem)] text-white/20">WHAT WORKS</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-12 font-sans text-base sm:text-lg text-white/50 max-w-xl leading-relaxed"
            >
              The studio arm of Meridian Coreline — where strategy, design, and engineering converge into systems that compound.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-12 pb-20 sm:pb-32">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 lg:grid-cols-4 border border-white/10"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-8 sm:p-10 ${idx < stats.length - 1 ? "border-b lg:border-b-0 border-r-0 lg:border-r border-white/10" : ""} ${idx === 1 ? "border-r lg:border-r border-white/10" : ""}`}
                >
                  <p className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-white/30">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="px-4 sm:px-6 lg:px-12 pb-20 sm:pb-32">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-end justify-between mb-8 sm:mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl sm:text-5xl font-bold tracking-tighter uppercase text-white"
              >
                Selected Work
              </motion.h2>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-mono text-xs text-white/30 tracking-widest hidden sm:block"
              >
                2024 — 2025
              </motion.span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {selectedWorks.map((work, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-black group cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50 mb-1">{work.category}</p>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white leading-tight">{work.title}</h3>
                        <span className="font-mono text-[9px] text-white/30 shrink-0 mt-1">{work.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 sm:px-6 py-5 border-t border-white/10">
                    <p className="font-sans text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{work.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Start a Project CTA */}
        <section className="px-4 sm:px-6 lg:px-12 pb-20 sm:pb-32">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 sm:p-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
            >
              <div>
                <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tighter text-white mb-3">Start A Project</h2>
                <p className="font-sans text-base sm:text-lg text-white/40 max-w-md leading-relaxed">
                  Ready to build something that lasts? Let's engineer your next chapter together.
                </p>
              </div>
              <Link href="/booking">
                <button className="shrink-0 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white flex items-center gap-3 group">
                  Book A Session <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
