import { useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart, LineChart, ResponsiveContainer, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from "recharts";

interface AutomationPageProps {
  title: string;
  type: "client-acquisition" | "workflow-optimization" | "data-intelligence" | "system-scaling";
}

const chartData = [
  { name: "Week 1", value: 400, growth: 240 },
  { name: "Week 2", value: 300, growth: 139 },
  { name: "Week 3", value: 200, growth: 980 },
  { name: "Week 4", value: 278, growth: 390 },
  { name: "Week 5", value: 189, growth: 480 },
  { name: "Week 6", value: 239, growth: 380 },
  { name: "Week 7", value: 349, growth: 430 },
];

const contentMap = {
  "client-acquisition": {
    subtitle: "Inbound Vector Acceleration",
    description: "Our proprietary AI frameworks analyze your existing market footprint to identify high-intent lead clusters. By injecting autonomous outreach agents at scale, we reduce client acquisition costs by up to 65% while increasing conversion density and ensuring your sales pipeline is always saturated with qualified prospects. The system learns from every interaction, refining its targeting parameters in real-time.",
    mainImg: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800",
    img1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    img2: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-cyan-400",
    model: {
      label1: "Lead Scoring",
      val1: "Predictive Intent",
      label2: "Outreach",
      val2: "Hyper-Personalized",
      label3: "Conversion",
      val3: "Automated Nurturing"
    }
  },
  "workflow-optimization": {
    subtitle: "Operational Latency Reduction",
    description: "We deploy neural-orchestration layers that sit atop your existing tech stack. These agents identify repetitive cognitive tasks and automate them using LLM-native reasoning, turning complex Excel sheets and manual workflows into streamlined, autonomous processes that grow with your business. We eliminate human error and reduce turnaround times from days to seconds.",
    mainImg: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    img1: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400",
    img2: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-purple-400",
    model: {
      label1: "Bottleneck Analysis",
      val1: "Task Mapping",
      label2: "Automation Layer",
      val2: "Cognitive Offloading",
      label3: "Efficiency Gain",
      val3: "90% Reduction"
    }
  },
  "data-intelligence": {
    subtitle: "Predictive Analytics Mesh",
    description: "Transform your raw data into actionable strategic leverage. Our AI models process multi-modal data streams in real-time to provide predictive insights that steer your business toward growth opportunities, making sense of complex data sets and driving informed decision-making across all levels of the organization.",
    mainImg: "https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800",
    img1: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=400",
    img2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-green-400",
    model: {
      label1: "Data Ingestion",
      val1: "Structured/Unstructured",
      label2: "Synthesis",
      val2: "Neural Pattern Matching",
      label3: "Insight",
      val3: "Strategic Leverage"
    }
  },
  "system-scaling": {
    subtitle: "Infrastructure Elasticity",
    description: "Scale your business without scaling your overhead. We build self-healing, AI-managed digital infrastructure that automatically adjusts resource allocation based on demand, ensuring your systems remain performant under heavy load and supporting rapid business expansion effortlessly.",
    mainImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    img1: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
    img2: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
    color: "from-orange-500/20 to-red-500/20",
    accent: "text-orange-400",
    model: {
      label1: "Compute Mesh",
      val1: "Elastic Distribution",
      label2: "Self-Healing",
      val2: "Automatic Mitigation",
      label3: "Scale Cap",
      val3: "Infinite Horizon"
    }
  }
};

export default function AutomationPage({ title, type }: AutomationPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = contentMap[type] || contentMap["client-acquisition"];
  const bgUrl = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div 
        className={`fixed inset-0 z-0 pointer-events-none opacity-40 bg-gradient-to-br ${content.color}`}
      />
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{ 
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={`font-mono text-xs ${content.accent} uppercase tracking-[0.4em] mb-4`}>{content.subtitle}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">{title}</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
              <div className="lg:col-span-7 space-y-12">
                <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md">
                  <h3 className="font-display text-xl font-bold uppercase mb-8 text-glow">Performance Metrics</h3>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#fff" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#fff" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis dataKey="name" stroke="#ffffff40" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis stroke="#ffffff40" fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff20', fontSize: '12px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="growth" stroke="#fff" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <p className="text-white/80 text-xl leading-relaxed font-sans">
                  {content.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: "Efficiency", val: "+92%" },
                    { label: "Scale", val: "Unlimited" },
                    { label: "Latency", val: "-85%" }
                  ].map((stat, i) => (
                    <div key={i} className="p-6 border border-white/5 bg-white/[0.01]">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">{stat.label}</p>
                      <p className="font-display text-3xl font-bold text-white">{stat.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden relative group">
                  <img src={content.mainImg} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Detail" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                
                <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-md">
                  <h3 className="font-display text-xl font-bold uppercase mb-8 text-glow">Architecture Protocol</h3>
                  <div className="space-y-8 font-mono text-xs">
                    <div className="flex flex-col gap-2">
                      <span className="text-white/40 uppercase tracking-widest text-[10px]">{content.model.label1}</span>
                      <span className={`${content.accent} text-lg font-bold uppercase`}>{content.model.val1}</span>
                      <div className="w-full h-px bg-white/10" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-white/40 uppercase tracking-widest text-[10px]">{content.model.label2}</span>
                      <span className={`${content.accent} text-lg font-bold uppercase`}>{content.model.val2}</span>
                      <div className="w-full h-px bg-white/10" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-white/40 uppercase tracking-widest text-[10px]">{content.model.label3}</span>
                      <span className={`${content.accent} text-lg font-bold uppercase`}>{content.model.val3}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-white/5 border border-white/10 overflow-hidden">
                    <img src={content.img1} className="w-full h-full object-cover opacity-60" alt="Sub" />
                  </div>
                  <div className="aspect-video bg-white/5 border border-white/10 overflow-hidden">
                    <img src={content.img2} className="w-full h-full object-cover opacity-60" alt="Sub" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
