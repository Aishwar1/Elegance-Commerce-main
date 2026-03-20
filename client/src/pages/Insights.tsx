import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "AI & Automation",
    date: "March 2025",
    readTime: "8 min read",
    title: "How AI Client Acquisition Systems Are Replacing Traditional Sales Teams",
    desc: "A deep dive into automated lead generation pipelines that operate 24/7, qualify leads intelligently, and convert at 3x the rate of manual outreach.",
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    category: "Business Strategy",
    date: "February 2025",
    readTime: "6 min read",
    title: "The Systems Mindset: Why Most Businesses Stay Small",
    desc: "Growth without systems is just noise. Here's the framework we use to engineer sustainable scale for every client we work with.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    category: "Financial Intelligence",
    date: "February 2025",
    readTime: "10 min read",
    title: "Leverage Over Labour: Building Wealth in the Digital Age",
    desc: "The old model of trading time for money is broken. Here's how the top 1% use financial leverage, digital assets, and compounding systems to build real wealth.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    category: "Digital Systems",
    date: "January 2025",
    readTime: "7 min read",
    title: "Building a Digital Infrastructure That Scales to $10M+",
    desc: "The technology stack, automation layer, and data architecture behind businesses that scale to eight figures without proportionally scaling headcount.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    category: "Leadership",
    date: "January 2025",
    readTime: "5 min read",
    title: "The Executive Operating System: How Elite Leaders Manage Time and Decisions",
    desc: "Elite performance isn't about working more — it's about operating with a system. Here's how the executives we coach structure their days, decisions, and energy.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
  {
    category: "Case Study",
    date: "December 2024",
    readTime: "12 min read",
    title: "From $200K to $1.1M ARR: A 14-Month Growth Case Study",
    desc: "A detailed breakdown of how we helped a professional services firm restructure their business model, automate operations, and grow ARR by 450% in 14 months.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    featured: false,
  },
];

const categories = ["All", "AI & Automation", "Business Strategy", "Financial Intelligence", "Digital Systems", "Leadership", "Case Study"];

export default function Insights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div className="relative z-10">
        {/* Header */}
        <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-screen-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs tracking-[0.3em] text-white/40 mb-6 uppercase"
            >
              Meridian Coreline — Insights
            </motion.p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]"
              >
                Insights
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-sans text-white/40 text-sm sm:text-base max-w-sm leading-relaxed"
              >
                Strategy, systems, and intelligence for those building at the top.
              </motion.p>
            </div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 sm:gap-3 mt-10 sm:mt-14 border-t border-white/10 pt-8"
            >
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] border transition-all ${
                    i === 0
                      ? "border-white text-white"
                      : "border-white/15 text-white/40 hover:border-white/40 hover:text-white/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        {featured && (
          <section className="px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20">
            <div className="max-w-screen-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-2 border border-white/10 overflow-hidden hover:border-white/30 transition-all"
              >
                <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60 hidden lg:block" />
                  <span className="absolute top-5 left-5 bg-white text-black font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1.5">
                    Featured
                  </span>
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center bg-black">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40 border border-white/15 px-3 py-1">{featured.category}</span>
                    <span className="font-mono text-[9px] text-white/30">{featured.date}</span>
                    <span className="font-mono text-[9px] text-white/30">{featured.readTime}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight leading-tight mb-5 group-hover:text-white/80 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="font-sans text-white/50 text-sm sm:text-base leading-relaxed mb-8">{featured.desc}</p>
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="px-4 sm:px-6 lg:px-12 pb-24 sm:pb-32">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {rest.map((article, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="bg-black group cursor-pointer hover:bg-white/[0.02] transition-all"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 border border-white/10 px-2 py-1">{article.category}</span>
                      <span className="font-mono text-[9px] text-white/25">{article.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight leading-tight mb-3 group-hover:text-white/80 transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-sans text-white/40 text-sm leading-relaxed mb-5 line-clamp-2">{article.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/25">{article.date}</span>
                      <ArrowRight className="w-4 h-4 text-white/25 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-12 pb-20">
          <div className="max-w-screen-2xl mx-auto border border-white/10 p-10 sm:p-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tighter mb-3">Want Insights Direct?</h2>
              <p className="font-sans text-white/40 max-w-md">Join the movement — get our latest strategy and intelligence delivered to you.</p>
            </div>
            <a href="#footer-form">
              <button className="shrink-0 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white flex items-center gap-3 group">
                Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
