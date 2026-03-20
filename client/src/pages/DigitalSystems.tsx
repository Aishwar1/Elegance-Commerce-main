import { useEffect } from "react";
import { motion } from "framer-motion";

export default function DigitalSystems() {
  const bgUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop";

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
                Automate & Optimize
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                Digital Systems Design
              </h1>
              <p className="text-lg sm:text-2xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                Build high-performance digital infrastructure that automates operations, reduces manual work, and scales without proportional growth in team size.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">The Digital Transformation Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">75%</div>
                  <p className="text-white/60 font-sans text-sm">Average Automation of Manual Tasks</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Tasks eliminated or automated within 6 months</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">3.2x</div>
                  <p className="text-white/60 font-sans text-sm">Productivity Increase</p>
                  <p className="text-white/40 font-mono text-xs mt-4">Throughput per team member after implementation</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <div className="text-5xl font-bold text-white mb-2">$450K</div>
                  <p className="text-white/60 font-sans text-sm">Average Annual Savings</p>
                  <p className="text-white/40 font-mono text-xs mt-4">From reduced headcount needs and errors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Our Digital Systems</h2>
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">CRM & Customer Management</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Centralized customer database with automated workflows. Track interactions, automate follow-ups, predict customer lifetime value, and segment for targeted campaigns.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">IMPROVEMENTS:</p>
                    <p className="font-sans text-sm text-white">• Sales cycle reduced by 40%</p>
                    <p className="font-sans text-sm text-white">• Customer retention improved 35%</p>
                    <p className="font-sans text-sm text-white">• Manual data entry eliminated</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1460925895917-adf4e565db20?auto=format&fit=crop&q=80&w=600&h=600" alt="CRM Dashboard" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=600" alt="Automation Workflows" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Process Automation</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Eliminate repetitive tasks using no-code automation. Invoice generation, data entry, email campaigns, meeting scheduling—all run automatically based on triggers.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">IMPROVEMENTS:</p>
                    <p className="font-sans text-sm text-white">• 80+ hours/mo automation per employee</p>
                    <p className="font-sans text-sm text-white">• Error rate reduced to near-zero</p>
                    <p className="font-sans text-sm text-white">• Instant response times to customers</p>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 border border-white/5 p-8">
                  <h3 className="font-display text-2xl font-bold uppercase mb-4">Analytics & Intelligence</h3>
                  <p className="text-white/60 font-sans text-sm leading-relaxed mb-4">
                    Real-time dashboards tracking all business metrics. Predictive analytics identify trends before they happen. Data-driven decision making becomes standard practice.
                  </p>
                  <div className="bg-black/60 p-4 rounded border border-white/5 space-y-2">
                    <p className="font-mono text-xs text-white/50">IMPROVEMENTS:</p>
                    <p className="font-sans text-sm text-white">• Decision speed increased 5x</p>
                    <p className="font-sans text-sm text-white">• Forecast accuracy improved to 92%</p>
                    <p className="font-sans text-sm text-white">• Predictive insights identify opportunities</p>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/5 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=600&h=600" alt="Analytics" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Technology Stack We Deploy</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Zapier/Make", type: "Automation Hub" },
                { name: "HubSpot/Pipedrive", type: "CRM Solutions" },
                { name: "Airtable", type: "Data Management" },
                { name: "Stripe/Payment Gateways", type: "Transaction Processing" },
                { name: "Google Workspace", type: "Collaboration Suite" },
                { name: "Notion", type: "Knowledge Base" },
                { name: "Tableau/Metabase", type: "Analytics & Reporting" },
                { name: "Custom Integrations", type: "Proprietary Systems" }
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border border-white/5 p-6 bg-black/40"
                >
                  <p className="font-display font-bold text-white mb-1">{tech.name}</p>
                  <p className="font-mono text-xs text-white/50">{tech.type}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Implementation Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Week 1-2</p>
                <h3 className="font-display text-xl font-bold mb-3">Analysis & Design</h3>
                <p className="text-white/60 font-sans text-sm">Map all workflows, identify automation opportunities, design optimal system architecture.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Week 3-6</p>
                <h3 className="font-display text-xl font-bold mb-3">Build & Integrate</h3>
                <p className="text-white/60 font-sans text-sm">Build systems, configure integrations, create automated workflows, set up dashboards.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Week 7-8</p>
                <h3 className="font-display text-xl font-bold mb-3">Testing & Training</h3>
                <p className="text-white/60 font-sans text-sm">Full system testing, team training, documentation, optimize based on feedback.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="border border-white/5 p-6 bg-black/40">
                <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">Ongoing</p>
                <h3 className="font-display text-xl font-bold mb-3">Support & Optimization</h3>
                <p className="text-white/60 font-sans text-sm">Monthly reviews, system optimization, scaling workflows as business grows.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-16">Case Study Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">E-Commerce Brand</p>
                    <p className="font-mono text-xs text-white/50">$5M Annual Revenue</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Automated order processing, customer communication, and inventory management. Reduced manual work by 80%, eliminated fulfillment errors completely.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>80% automation</span>
                  <span>15 hrs/day saved</span>
                  <span>2 FTE cost reduction</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-white/5 p-8 bg-black/40">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded border border-white/10 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64" alt="Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white">Professional Services Firm</p>
                    <p className="font-mono text-xs text-white/50">60 employees</p>
                  </div>
                </div>
                <p className="text-white/60 font-sans text-sm mb-4">Built integrated CRM, billing, and project management system. Reduced proposal time from 2 weeks to 2 days, improved billing accuracy to 99.9%.</p>
                <div className="flex gap-2 text-xs font-mono text-white/40">
                  <span>85% faster proposals</span>
                  <span>$320K/yr additional revenue</span>
                  <span>92% accuracy improvement</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto text-center">
            <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">Investment & ROI</h2>
            <div className="bg-black/40 border border-white/5 p-12 max-w-2xl mx-auto rounded">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">$25K - $75K</p>
                  <p className="text-white/60 font-sans text-sm">Implementation Investment</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-white mb-2">4-6 months</p>
                  <p className="text-white/60 font-sans text-sm">Full ROI Timeline</p>
                </div>
              </div>
              <p className="text-white/50 font-sans text-sm">Average ROI of 8-15x within first year through cost savings and productivity gains</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
