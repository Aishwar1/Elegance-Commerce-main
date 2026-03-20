import { useEffect } from "react";
import { motion } from "framer-motion";

export default function BusinessConsultancy() {
  const bgUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";

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
                Strategic Growth Solutions
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Business Strategy Consultancy
              </h1>
              <p className="text-lg sm:text-2xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                Transform your operations through data-driven strategy, operational excellence, and sustainable growth frameworks.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">The Business Growth Model</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">340%</div>
                  <p className="text-white/60 font-sans text-sm">Average Revenue Growth in Year 1</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Across 150+ enterprises we've consulted</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">58%</div>
                  <p className="text-white/60 font-sans text-sm">Operating Cost Reduction</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Through process optimization and automation</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">18mo</div>
                  <p className="text-white/60 font-sans text-sm">Average ROI Timeline</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Measurable results from implementation</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Our Framework</h2>
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Phase 1: Diagnostic Audit</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    We conduct a comprehensive 4-week operational audit analyzing 50+ business metrics: revenue streams, cost structures, team efficiency, market positioning, and growth bottlenecks.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5">
                    <p className="font-mono text-xs text-white/50 mb-2">METRICS ANALYZED:</p>
                    <p className="font-sans text-sm text-white">Customer Acquisition Cost, Lifetime Value, Burn Rate, Unit Economics, Market Share, Competitive Position</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-adf4e565db20?auto=format&fit=crop&q=80&w=600&h=600" alt="Analytics Dashboard" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=600" alt="Strategy Planning" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Phase 2: Strategy Design</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Custom growth strategy incorporating market opportunities, competitive advantages, and operational improvements. We design a 3-5 year roadmap with quarterly milestones.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5">
                    <p className="font-mono text-xs text-white/50 mb-2">DELIVERABLES:</p>
                    <p className="font-sans text-sm text-white">Strategic Playbook, Growth Roadmap, KPI Dashboard, Implementation Timeline, Resource Allocation Plan</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Phase 3: Execution & Scaling</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    On-the-ground implementation with dedicated strategy team embedded in your organization. Monthly performance reviews, strategy pivots, and continuous optimization.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5">
                    <p className="font-mono text-xs text-white/50 mb-2">SUPPORT:</p>
                    <p className="font-sans text-sm text-white">Dedicated Account Manager, Weekly Sync Calls, Monthly Strategy Review, Real-time Performance Dashboards, Quarterly Pivots</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=600" alt="Team Execution" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">TechVenture Inc</p>
                    <p className="font-mono text-xs text-white/50">B2B SaaS, $8M ARR</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Increased revenue by 420% in 18 months through market expansion strategy and pricing optimization. Reduced customer churn from 8% to 2%.</p>
                <div className="flex gap-4 text-xs font-mono text-white/40">
                  <span>+420% Revenue</span>
                  <span>18 months</span>
                  <span>$2.8M added ARR</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Global Manufacturing Co</p>
                    <p className="font-mono text-xs text-white/50">Industrial, $125M Revenue</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Cut operational costs by 62% and improved delivery speed by 45%. Implemented lean systems across all facilities in 12 months.</p>
                <div className="flex gap-4 text-xs font-mono text-white/40">
                  <span>-62% OpEx</span>
                  <span>$18M saved</span>
                  <span>12 months</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">Investment & ROI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="bg-black/40 border border-white/5 p-8">
                <p className="font-display text-3xl font-bold text-white mb-2">$150K - $500K</p>
                <p className="text-white/60 font-sans text-sm">Project Cost Range</p>
              </div>
              <div className="bg-black/40 border border-white/5 p-8">
                <p className="font-display text-3xl font-bold text-white mb-2">12-18mo</p>
                <p className="text-white/60 font-sans text-sm">Typical Implementation</p>
              </div>
              <div className="bg-black/40 border border-white/5 p-8">
                <p className="font-display text-3xl font-bold text-white mb-2">5-12x</p>
                <p className="text-white/60 font-sans text-sm">Average ROI Multiple</p>
              </div>
            </div>
            <p className="text-white/50 font-sans text-lg max-w-2xl mx-auto">Most clients recover their investment within 6 months and see 5-12x returns over the first 3 years.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
