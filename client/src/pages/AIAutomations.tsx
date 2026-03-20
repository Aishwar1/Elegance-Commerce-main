import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, BarChart3, Rocket } from "lucide-react";
import { MinimalButton } from "@/components/ui/MinimalButton";

export default function AIAutomations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const automations = [
    {
      title: "AI Client Acquisition",
      desc: "Intelligent lead generation systems that identify, qualify, and nurture high-intent prospects automatically.",
      features: ["Predictive lead scoring", "24/7 automated outreach", "Multi-channel prospecting", "Conversion optimization"],
      icon: Target,
      href: "/automation/client-acquisition",
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-600/40 to-cyan-500/20",
      result: "340% increase in qualified leads"
    },
    {
      title: "Workflow Optimization",
      desc: "Smart process automation that eliminates manual tasks and reduces operational friction by 70%.",
      features: ["Intelligent task automation", "Process mapping & optimization", "API integration", "Custom workflow design"],
      icon: Zap,
      href: "/automation/workflow-optimization",
      bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      color: "from-purple-600/40 to-pink-500/20",
      result: "58% reduction in operational costs"
    },
    {
      title: "Data Intelligence",
      desc: "AI-powered analytics that transforms raw data into actionable business intelligence for real-time decisions.",
      features: ["Real-time dashboards", "Predictive analytics", "Anomaly detection", "Custom AI models"],
      icon: BarChart3,
      href: "/automation/data-intelligence",
      bg: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=800",
      color: "from-green-600/40 to-emerald-500/20",
      result: "95% faster decision-making"
    },
    {
      title: "System Scaling",
      desc: "Scalable infrastructure that grows with your business without manual intervention or downtime.",
      features: ["Cloud architecture", "Load balancing", "Infinite scalability", "Zero-downtime deployment"],
      icon: Rocket,
      href: "/automation/system-scaling",
      bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      color: "from-orange-600/40 to-red-500/20",
      result: "Supports 10M+ concurrent users"
    }
  ];

  const bgUrl = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop";

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
                Intelligent Automation For Modern Business
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-8">
                AI Automations
              </h1>
              <p className="text-lg sm:text-xl font-sans text-white/60 leading-relaxed mb-12 max-w-2xl">
                Leverage artificial intelligence to automate complex business processes, eliminate inefficiencies, and unlock exponential growth.
              </p>
              <Link href="/booking">
                <MinimalButton variant="primary" className="font-mono text-sm">
                  Start Your Automation Journey <ArrowRight className="w-4 h-4 ml-2" />
                </MinimalButton>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Automations Grid */}
        <section className="py-24 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold tracking-tighter uppercase mb-20"
            >
              Our Automation Suite
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {automations.map((automation, idx) => {
                const Icon = automation.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <Link href={automation.href}>
                      <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 hover:border-white/30 transition-all cursor-pointer h-full">
                        {/* Small image in top right */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                          <div 
                            className="w-full h-full"
                            style={{
                              backgroundImage: `url(${automation.bg})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          />
                        </div>

                        {/* Icon */}
                        <div className="relative z-10 mb-6">
                          <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center bg-white/5">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight mb-4 relative z-10">
                          {automation.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/60 font-sans text-sm leading-relaxed mb-6 relative z-10">
                          {automation.desc}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6 relative z-10">
                          {automation.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/50 text-xs font-mono">
                              <div className="w-1 h-1 bg-white/30 rounded-full" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Result */}
                        <div className="border-t border-white/10 pt-6 relative z-10">
                          <p className="text-xs font-mono text-white/40 mb-2">EXPECTED RESULT</p>
                          <p className="font-display text-lg font-bold text-white">{automation.result}</p>
                        </div>

                        {/* Arrow indicator */}
                        <div className="absolute bottom-6 right-6 text-white/20 group-hover:text-white transition-colors">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Automations Section */}
        <section className="py-24 px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold tracking-tighter uppercase mb-16"
            >
              Why Automation Matters
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "73%", label: "Time saved on routine tasks", desc: "Free your team to focus on high-impact strategic work" },
                { number: "92%", label: "Error reduction", desc: "Eliminate human mistakes and ensure consistency" },
                { number: "340%", label: "ROI increase", desc: "Compound growth through intelligent automation" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-white/10 bg-black/40 p-8"
                >
                  <div className="text-5xl font-bold text-white mb-3">{stat.number}</div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight mb-3">{stat.label}</h3>
                  <p className="text-white/50 font-sans text-sm">{stat.desc}</p>
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
              <h2 className="font-display text-4xl font-bold tracking-tighter uppercase mb-8">Ready to automate?</h2>
              <p className="text-white/60 font-sans text-lg mb-12 max-w-2xl mx-auto">
                Schedule a consultation to discover how our AI automation solutions can transform your business operations.
              </p>
              <Link href="/booking">
                <MinimalButton variant="primary" className="font-mono text-sm">
                  Book A Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </MinimalButton>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
