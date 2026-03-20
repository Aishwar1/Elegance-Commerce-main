import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PerformanceOptimization() {
  const bgUrl = "https://images.unsplash.com/photo-1460925895917-adf4e565db20?q=80&w=2070&auto=format&fit=crop";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <section className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-6">
          <div className="max-w-screen-2xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/50 mb-8 uppercase">
                Unlock Peak Performance
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Performance Optimization
              </h1>
              <p className="text-lg sm:text-2xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                Data-driven optimization of individual and organizational performance through measurement, analysis, and continuous improvement systems.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">The Performance Revolution</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">340%</div>
                  <p className="text-white/60 font-sans text-sm">Average Performance Improvement</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Across all measured KPIs in 12 months</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">87%</div>
                  <p className="text-white/60 font-sans text-sm">Goal Achievement Rate</p>
                  <p className="text-white/40 font-mono text-xs mt-4">vs. 22% industry average without system</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">15.2x</div>
                  <p className="text-white/60 font-sans text-sm">ROI Multiplier</p>
                  <p className="text-white/40 font-mono text-xs mt-4">From improved performance outcomes</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Performance Systems We Build</h2>
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Measurement & Analytics</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    What gets measured gets managed. We establish baseline metrics, define KPIs, build dashboards, and track progress weekly. Data becomes your decision guide.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">METRICS TRACKED:</p>
                    <p className="font-sans text-sm text-white">Productivity, Quality, Efficiency, Customer Satisfaction, Growth Rate, Profitability, Team Health</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-adf4e565db20?auto=format&fit=crop&q=80&w=600&h=600" alt="Analytics Dashboard" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=600" alt="Team Performance" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Goal Setting & Accountability</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Structure ambitious goals using proven frameworks. Create accountability systems, track progress, celebrate wins. High-performing cultures run on visible goals.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">FRAMEWORK USED:</p>
                    <p className="font-sans text-sm text-white">OKRs (Objectives & Key Results) - Used by Google, Amazon, Apple, and top performers globally</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Habit & System Building</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Performance is 99% systems, 1% willpower. We engineer routines, habits, and systems that make excellence automatic. Remove decision fatigue, increase consistency.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">SYSTEMS BUILT:</p>
                    <p className="font-sans text-sm text-white">Daily routines, weekly reviews, monthly planning, quarterly strategy sessions, annual vision</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=600&h=600" alt="System Building" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=600" alt="Continuous Improvement" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Continuous Improvement</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    1% improvements compound to exponential results. Build kaizen systems of constant, incremental optimization. Small wins create momentum and culture shift.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">IMPROVEMENT RATE:</p>
                    <p className="font-sans text-sm text-white">1% daily improvement = 37x better in one year (1.01^365 = 37.8)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">The 52-Week Performance Blueprint</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { weeks: "1-4", title: "Assessment", items: ["Performance audit", "Baseline metrics", "Goal clarity", "System design"] },
                { weeks: "5-13", title: "Build Foundation", items: ["Implement OKRs", "Daily routines", "Measurement system", "Weekly reviews"] },
                { weeks: "14-26", title: "Accelerate", items: ["Scale systems", "Team adoption", "Monthly optimization", "Track progress"] },
                { weeks: "27-52", title: "Mastery", items: ["Advanced systems", "Culture shift", "Self-management", "Sustainability"] }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-white/5 p-6 bg-black/40"
                >
                  <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-3">Weeks {phase.weeks}</p>
                  <h3 className="font-display text-xl font-bold mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-white/60 font-sans text-sm">• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Real Performance Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Alex Rodriguez</p>
                    <p className="font-mono text-xs text-white/50">Sales Director, $50M Division</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Implemented OKR system and daily routines. Team exceeded quota by 28%, individual performance improvement 156%, promotion to VP in 9 months.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>+156% personal performance</span>
                  <span>+28% team quota</span>
                  <span>$7.2M revenue impact</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Jordan Bennett</p>
                    <p className="font-mono text-xs text-white/50">Operations Manager, 45-person team</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Built company-wide performance system with OKRs and daily routines. Productivity +240%, quality improved 67%, employee retention up to 94%.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>+240% productivity</span>
                  <span>67% quality improvement</span>
                  <span>94% retention rate</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">Investment & ROI</h2>
            <div className="bg-black/40 border border-white/5 p-12 max-w-2xl mx-auto rounded">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">$15K - $50K</p>
                  <p className="text-white/60 font-sans text-sm">Program Investment</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">52 weeks</p>
                  <p className="text-white/60 font-sans text-sm">Full Optimization Cycle</p>
                </div>
              </div>
              <p className="text-white/50 font-sans text-sm mb-4">Average ROI of 15-50x through improved productivity, revenue impact, and quality gains within first year</p>
              <p className="text-white/40 font-mono text-xs">For a 50-person team: $25K investment generates average $375-500K value annually</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
