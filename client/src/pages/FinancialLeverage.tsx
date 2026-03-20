import { useEffect } from "react";
import { motion } from "framer-motion";

export default function FinancialLeverage() {
  const bgUrl = "https://images.unsplash.com/photo-1457066183024-b4dbe3a86e6d?q=80&w=2070&auto=format&fit=crop";

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
                Build Multiple Income Streams
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Financial Leverage Planning
              </h1>
              <p className="text-lg sm:text-2xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                Escape traditional employment and build lasting wealth through strategic income diversification and financial systems.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">The Income Architecture Model</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">$8.2K</div>
                  <p className="text-white/60 font-sans text-sm">Average Monthly Additional Income in Year 1</p>
                  <p className="text-white/40 font-mono text-xs mt-4">From diversified revenue streams</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">73%</div>
                  <p className="text-white/60 font-sans text-sm">Passive Income Ratio by Year 2</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Systems earning while you sleep</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">4.2</div>
                  <p className="text-white/60 font-sans text-sm">Average Income Stream Count</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Per client after 18 months</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Income Stream Framework</h2>
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Digital Products</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Create once, sell infinitely. From digital courses ($3K-$50K/mo) to software tools ($2K-$100K/mo), we guide you through product development, marketing, and scaling.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5">
                    <p className="font-mono text-xs text-white/50 mb-2">AVERAGE CLIENT OUTCOMES:</p>
                    <p className="font-sans text-sm text-white">$2,500/mo income after 4 months</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=600&h=600" alt="Digital Products" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=600" alt="Service Business" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Service Business</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    High-ticket services ($5K-$50K per project). We help you position yourself as an expert, build a personal brand, and attract premium clients willing to pay for results.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5">
                    <p className="font-mono text-xs text-white/50 mb-2">AVERAGE CLIENT OUTCOMES:</p>
                    <p className="font-sans text-sm text-white">$3,500/mo from 3-4 clients after 6 months</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Investment Strategy</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Build investment portfolios (stocks, real estate, crypto, businesses). We teach risk management, portfolio diversification, and wealth accumulation strategies used by high-net-worth individuals.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5">
                    <p className="font-mono text-xs text-white/50 mb-2">AVERAGE CLIENT OUTCOMES:</p>
                    <p className="font-sans text-sm text-white">15-22% annual returns with proper risk allocation</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=600" alt="Investment" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">The 12-Month Transformation</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Months 1-3</p>
                <h3 className="font-display text-xl font-bold mb-3">Foundation</h3>
                <p className="text-white/60 font-sans text-sm">Identify your expertise, design first income stream, build audience and brand positioning.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Months 4-6</p>
                <h3 className="font-display text-xl font-bold mb-3">Launch</h3>
                <p className="text-white/60 font-sans text-sm">First product/service launches. Target: $2-3K/mo revenue. Build second income stream in parallel.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Months 7-9</p>
                <h3 className="font-display text-xl font-bold mb-3">Scale</h3>
                <p className="text-white/60 font-sans text-sm">Scale first stream to $5-8K/mo. Launch second stream. Target combined: $7-10K/mo.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Months 10-12</p>
                <h3 className="font-display text-xl font-bold mb-3">Leverage</h3>
                <p className="text-white/60 font-sans text-sm">Build 3rd-4th income streams. Automate existing systems. Target: $12-15K/mo revenue.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Client Transformations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Priya Sharma</p>
                    <p className="font-mono text-xs text-white/50">Former Corporate Manager</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Built digital course + consulting business generating $12,000/mo in 11 months. Left corporate job after Month 8.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>+$144K Year 1</span>
                  <span>2 income streams</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Marcus Chen</p>
                    <p className="font-mono text-xs text-white/50">Engineer Turned Entrepreneur</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Created SaaS product ($3K/mo), added agency services ($2K/mo), built investment portfolio. Total wealth increase: $240K in 12 months.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>+$60K Passive</span>
                  <span>3 income streams</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">Investment Structure</h2>
            <div className="bg-black/40 border border-white/5 p-12 max-w-2xl mx-auto rounded">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">$5,000 - $15,000</p>
                  <p className="text-white/60 font-sans text-sm">Program Investment</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">12 months</p>
                  <p className="text-white/60 font-sans text-sm">Full Support Duration</p>
                </div>
              </div>
              <p className="text-white/50 font-sans text-sm">Most clients generate $100K+ in additional income by Year 1, making the investment ROI of 8-20x</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
