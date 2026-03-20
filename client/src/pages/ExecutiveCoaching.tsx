import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ExecutiveCoaching() {
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
                Personal Leadership Transformation
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Executive Coaching
              </h1>
              <p className="text-lg sm:text-2xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                1-on-1 strategic coaching for high-performing leaders. Master decision-making, team leadership, and personal performance at the C-suite level.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">The Leadership Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">47%</div>
                  <p className="text-white/60 font-sans text-sm">Average Leadership Effectiveness Increase</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Measured through 360 feedback and team engagement</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">$1.8M</div>
                  <p className="text-white/60 font-sans text-sm">Average Value Created per Client</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Through better decisions, team retention, and business growth</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">6mo</div>
                  <p className="text-white/60 font-sans text-sm">Average Coaching Duration</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Bi-weekly 1-on-1 sessions with ongoing support</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Core Coaching Pillars</h2>
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Strategic Decision Making</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Master frameworks for complex decisions. Learn decision velocity, scenario planning, risk assessment, and conviction building. Transform analysis paralysis into decisive action.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">OUTCOMES:</p>
                    <p className="font-sans text-sm text-white">• Decision quality improved 63%</p>
                    <p className="font-sans text-sm text-white">• Decision speed increased 3.2x</p>
                    <p className="font-sans text-sm text-white">• Confidence in decisions up 58%</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=600" alt="Strategic Planning" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=600" alt="Team Leadership" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Team Leadership & Culture</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Build high-performing teams. Learn to inspire, delegate effectively, provide feedback, resolve conflict, and create a winning culture that attracts top talent.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">OUTCOMES:</p>
                    <p className="font-sans text-sm text-white">• Team engagement up 51%</p>
                    <p className="font-sans text-sm text-white">• Retention improved by 42%</p>
                    <p className="font-sans text-sm text-white">• Productivity increased 35%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Personal Performance</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Optimize your personal effectiveness. Manage stress, build resilience, master time management, and achieve work-life integration. Become the CEO your organization needs.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">OUTCOMES:</p>
                    <p className="font-sans text-sm text-white">• Stress levels reduced 54%</p>
                    <p className="font-sans text-sm text-white">• Work satisfaction up 67%</p>
                    <p className="font-sans text-sm text-white">• Personal leadership impact +73%</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-adf4e565db20?auto=format&fit=crop&q=80&w=600&h=600" alt="Personal Growth" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">The 6-Month Coaching Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Months 1-2</p>
                <h3 className="font-display text-xl font-bold mb-3">Foundation & Assessment</h3>
                <div className="space-y-2 text-white/60 font-sans text-sm">
                  <p>• In-depth leadership assessment</p>
                  <p>• 360 feedback from team & peers</p>
                  <p>• Identify core growth areas</p>
                  <p>• Build coaching roadmap</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Months 3-4</p>
                <h3 className="font-display text-xl font-bold mb-3">Deep Work & Integration</h3>
                <div className="space-y-2 text-white/60 font-sans text-sm">
                  <p>• Master key frameworks</p>
                  <p>• Practice new behaviors</p>
                  <p>• Real-world application</p>
                  <p>• Monthly progress check-in</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Months 5-6</p>
                <h3 className="font-display text-xl font-bold mb-3">Mastery & Sustainability</h3>
                <div className="space-y-2 text-white/60 font-sans text-sm">
                  <p>• Advanced skill development</p>
                  <p>• Build your leadership system</p>
                  <p>• Final 360 assessment</p>
                  <p>• Ongoing support plan</p>
                </div>
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
                    <p className="font-display font-bold text-white">David Kumar</p>
                    <p className="font-mono text-xs text-white/50">VP Product, TechCorp</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Transformed from micromanager to strategic leader. Team engagement up 58%, product velocity improved 3x, promoted to SVP after coaching.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>+58% engagement</span>
                  <span>3x velocity</span>
                  <span>Promotion secured</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Sarah Mitchell</p>
                    <p className="font-mono text-xs text-white/50">CEO, Growth Inc</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Overcame decision paralysis and imposter syndrome. Increased company revenue 240%, expanded team from 12 to 45 people, built sustainable scaling system.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>+240% revenue</span>
                  <span>3.7x team growth</span>
                  <span>$8M in new value</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">Coaching Investment</h2>
            <div className="bg-black/40 border border-white/5 p-12 max-w-2xl mx-auto rounded">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">$3,500/mo</p>
                  <p className="text-white/60 font-sans text-sm">Bi-weekly 1-on-1 Sessions</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">6 months</p>
                  <p className="text-white/60 font-sans text-sm">Full Engagement Duration</p>
                </div>
              </div>
              <p className="text-white/50 font-sans text-sm mb-8">Average ROI: Clients create $1.8M in value within 18 months (making the coaching investment ROI of 70-100x)</p>
              <p className="text-white/40 font-mono text-xs">Includes: Bi-weekly sessions, 360 feedback, personalized resources, unlimited email support, quarterly strategy reviews</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
