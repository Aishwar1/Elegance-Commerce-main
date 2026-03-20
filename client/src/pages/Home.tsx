import { Link } from "wouter";
import { MinimalButton } from "@/components/ui/MinimalButton";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, BarChart3, Rocket } from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1bafba67efcc7212003f9055964af17aa539&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/449170430.sd.mp4?s=fd90453303c27140e698888062b801452601720d&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/384738719.sd.mp4?s=38219de4e1069f957116a3a4aa6374828b18ecf5&profile_id=165&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/510843477.sd.mp4?s=404226f98103d8d6a89c313271f20a7b4898e3b1&profile_id=165&oauth2_token_id=57447761"
  ];

  const bgUrl = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop";

  const handleManifestoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const manifestoSection = document.getElementById("manifesto");
    if (manifestoSection) {
      manifestoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const automationCards = [
    {
      title: "AI Client Acquisition",
      desc: "Automated lead gen systems.",
      icon: Target,
      href: "/automation/client-acquisition",
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
      color: "from-blue-600/40 to-cyan-500/20"
    },
    {
      title: "Workflow Optimization",
      desc: "Smart process automation.",
      icon: Zap,
      href: "/automation/workflow-optimization",
      bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
      color: "from-purple-600/40 to-pink-500/20"
    },
    {
      title: "Data Intelligence",
      desc: "AI-driven decision making.",
      icon: BarChart3,
      href: "/automation/data-intelligence",
      bg: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=400",
      color: "from-green-600/40 to-emerald-500/20"
    },
    {
      title: "System Scaling",
      desc: "Infinite growth infrastructure.",
      icon: Rocket,
      href: "/automation/system-scaling",
      bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      color: "from-orange-600/40 to-red-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-80"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9)), url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-screen-2xl mx-auto w-full z-10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-white/50 mb-8 uppercase">
                    Engineering high-fidelity digital systems
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[7rem] font-bold tracking-tighter leading-[0.9] text-glow mb-12 uppercase">
                    MAKING YOUR <br />
                    <span className="text-white/40">LIFE EASIER</span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link href="/join-us">
                    <MinimalButton variant="primary" size="lg" className="w-full sm:w-auto group">
                      Join Us
                      <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </MinimalButton>
                  </Link>
                  
                  <button
                    onClick={handleManifestoClick}
                    className="px-8 py-4 border border-white/20 text-white font-display text-sm font-bold uppercase tracking-wider hover:border-white/40 transition-colors"
                  >
                    Read Manifesto
                  </button>
                </motion.div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {automationCards.map((card, i) => (
                  <Link key={i} href={card.href}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="group p-6 border border-white/10 bg-black/40 backdrop-blur-md hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer aspect-square flex flex-col justify-between relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-100 group-hover:opacity-100 transition-opacity pointer-events-none`} />
                      <div className="absolute inset-0 opacity-100 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <img src={card.bg} alt="" className="w-full h-full object-cover" />
                      </div>
                      <card.icon className="w-8 h-8 text-white/40 group-hover:text-white transition-colors relative z-10" />
                      <div className="relative z-10">
                        <h3 className="font-display text-sm font-bold uppercase mb-2 tracking-tight group-hover:text-glow transition-all">{card.title}</h3>
                        <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest leading-tight">{card.desc}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business Owner / Employee Section */}
        <section className="py-20 px-6 bg-white/[0.01]">
          <div className="max-w-screen-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-3xl sm:text-6xl font-bold tracking-tighter uppercase mb-8">
                Are you a business owner or employee struggling to make money?
              </h2>
              <p className="text-white/50 font-sans text-base sm:text-lg mb-12">
                Most people believe growth comes from working harder. We believe it comes from systems.
              </p>
              <Link href="/booking">
                <MinimalButton variant="primary" size="lg" className="group w-full sm:w-auto">
                  Book a Consultation
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MinimalButton>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-16">Our Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
              {[
                { title: "Business Strategy", href: "/consultancy/business", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=850" },
                { title: "Financial Leverage", href: "/consultancy/financial", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=850" },
                { title: "Digital Systems", href: "/consultancy/digital", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=850" },
                { title: "Executive Coaching", href: "/consultancy/executive", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=850" },
                { title: "Performance Optimization", href: "/consultancy/performance", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=850" }
              ].map((service, i) => (
                <Link key={i} href={service.href}>
                  <motion.div 
                    whileHover={{ y: -10 }} 
                    className="group cursor-pointer border border-white/5 overflow-hidden transition-all flex flex-col h-[480px] relative"
                  >
                    <img 
                      src={service.img} 
                      alt={service.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center pb-8">
                      <h3 className="font-display text-xl font-bold uppercase text-white text-center group-hover:text-white transition-colors">{service.title}</h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-16">Selected Artifacts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { id: 1, title: "Ultimate Habit Tracker", price: "$29.00", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" },
                { id: 2, title: "Focus Timer Pro", price: "$19.00", img: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?auto=format&fit=crop&q=80&w=800" },
                { id: 3, title: "Creative Workspace", price: "$49.00", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800" },
                { id: 4, title: "Code Architect Blueprint", price: "$89.00", img: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800" }
              ].map((artifact) => (
                <Link key={artifact.id} href={`/product/${artifact.id}`}>
                  <motion.div 
                    whileHover={{ y: -10 }} 
                    className="group cursor-pointer border border-white/5 bg-black/40 backdrop-blur-sm p-6 hover:bg-white/[0.05] transition-all"
                  >
                    <div className="aspect-square mb-6 overflow-hidden border border-white/10">
                      <img src={artifact.img} alt={artifact.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase mb-2">{artifact.title}</h3>
                    <p className="font-mono text-white/50 text-sm tracking-wider">{artifact.price}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white/[0.02] overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-6">
            <div className="mb-8 max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-4">The Hard Truths</h2>
              <p className="text-white/50 font-sans text-base sm:text-lg">Motivation is for those who aren't obsessed. Discipline is for the elite.</p>
            </div>
            <div className="grid grid-cols-4 gap-6 pb-6">
              {videos.map((src, i) => (
                <div key={i} className="aspect-[9/16] bg-black border border-white/10 overflow-hidden relative group">
                  <video 
                    src={src} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 pointer-events-none">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] mb-2">Artifact {i+1}</span>
                    <p className="font-display text-sm font-bold uppercase text-white">The Path to the 1%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results / Case Study Strip */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 overflow-hidden border-y border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-10 text-center"
            >
              Proven Results Across Every Engagement
            </motion.p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {[
                { stat: "340%", label: "Average Revenue Growth", sub: "within 6 months" },
                { stat: "80%", label: "Workflow Automation Rate", sub: "across client operations" },
                { stat: "150+", label: "Clients Transformed", sub: "globally" },
                { stat: "$50M+", label: "Collective Revenue Unlocked", sub: "for our clients" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-black px-6 sm:px-10 py-10 sm:py-12 text-center"
                >
                  <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">{item.stat}</p>
                  <p className="font-display text-sm sm:text-base font-bold uppercase tracking-tight text-white/80 mb-1">{item.label}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work - Process Section */}
        <section className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20"
            >
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter uppercase">How We Work</h2>
              <p className="font-sans text-white/40 text-sm max-w-xs">A four-stage system engineered for compounding results.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {[
                { step: "01", title: "Discovery", desc: "We audit your current operations, identify bottlenecks, and map every growth lever available to you." },
                { step: "02", title: "Strategy", desc: "A bespoke growth blueprint tailored to your business model, goals, and constraints. Nothing generic." },
                { step: "03", title: "Build", desc: "We implement systems, automations, and frameworks with precision — moving from plan to execution fast." },
                { step: "04", title: "Scale", desc: "Continuous optimization, iteration, and expansion. Your results compound over time, not plateau." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black p-8 sm:p-10 group hover:bg-white/[0.03] transition-all"
                >
                  <p className="font-display text-5xl sm:text-6xl font-bold text-white/10 mb-6 group-hover:text-white/20 transition-colors">{item.step}</p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="font-sans text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-white/[0.02]">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 sm:mb-20"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30 mb-4">Client Results</p>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter uppercase">What Clients Say</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {[
                {
                  quote: "Meridian Coreline restructured our entire sales and operations model. We went from $200K to $1.1M ARR in 14 months. The systems they built run on autopilot.",
                  name: "Rohan Mehta",
                  title: "CEO, TechVentures Ltd",
                  result: "+450% ARR",
                },
                {
                  quote: "They automated 80% of our back-office workflows. My team now focuses on high-value work only. The ROI in the first quarter alone paid for the entire engagement.",
                  name: "Priya Sharma",
                  title: "COO, ScaleUp Inc",
                  result: "80% Automated",
                },
                {
                  quote: "The financial architecture they designed for us completely changed how we manage capital. We're growing faster with less risk than we thought possible.",
                  name: "James O'Brien",
                  title: "CFO, FinEdge Capital",
                  result: "3x Capital Efficiency",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black p-8 sm:p-10 flex flex-col justify-between gap-8 group hover:bg-white/[0.03] transition-all"
                >
                  <div>
                    <p className="font-display text-3xl sm:text-4xl font-bold text-white/10 mb-4 group-hover:text-white/20 transition-colors">"</p>
                    <p className="font-sans text-white/70 text-sm sm:text-base leading-relaxed italic">{item.quote}</p>
                  </div>
                  <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-tight">{item.name}</p>
                      <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-1">{item.title}</p>
                    </div>
                    <span className="font-mono text-[10px] text-white/50 border border-white/15 px-3 py-1.5 uppercase tracking-wider">{item.result}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="manifesto" className="py-20 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="font-display text-4xl sm:text-7xl font-bold tracking-tighter uppercase mb-12">The Manifesto</h2>
              <p className="text-xl sm:text-3xl font-sans text-white/70 leading-relaxed italic">
                "Growth is not accidental. It is engineered through better decisions, stronger systems, and clearer strategy."
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 text-white/60 font-sans text-base sm:text-lg leading-relaxed">
              <div className="lg:col-span-4 space-y-8">
                <h3 className="font-display text-2xl font-bold text-white uppercase">Business Growth</h3>
                <p>Our primary mission is to help business owners analyze and grow their businesses. We work closely with businesses to understand their operations, identify inefficiencies, and implement smarter systems that allow them to scale more effectively.</p>
              </div>
              
              <div className="lg:col-span-4 space-y-8">
                <h3 className="font-display text-2xl font-bold text-white uppercase">Financial Leverage</h3>
                <p className="mb-4">Many professionals today feel trapped in traditional work structures. At Meridian Coreline, we help individuals build additional income streams and financial leverage through smarter frameworks and modern digital opportunities.</p>
                <div className="pt-4 space-y-8">
                  <p className="text-white font-display text-xl font-bold uppercase">Welcome to Meridian Coreline.</p>
                  <div className="font-mono text-xs sm:text-sm text-white/40 space-y-2">
                    <p className="text-white/60 italic">Because motivation fades. But systems compound.</p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/80 font-bold uppercase tracking-widest">Aishwar Bhatnagar</p>
                      <p>Founder — Meridian Coreline</p>
                      <p className="text-white/60">onepercentloss@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <h3 className="font-display text-2xl font-bold text-white uppercase">Digital Systems & Tools</h3>
                <p>We design and provide digital products that help individuals and businesses operate more effectively. These include tools such as habit and performance trackers, financial tracking systems, CRM tools, and productivity frameworks.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
