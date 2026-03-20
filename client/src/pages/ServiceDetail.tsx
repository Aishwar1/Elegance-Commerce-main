import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { MinimalButton } from "@/components/ui/MinimalButton";

const serviceData: Record<string, any> = {
  ecommerce: {
    title: "E-Commerce Platform",
    description: "We build powerful e-commerce solutions that convert visitors into customers and scale with your business.",
    bgUrl: "https://images.unsplash.com/photo-1460925895917-adf4e565b900?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        title: "How We Do It",
        content: "Our e-commerce platforms are engineered for conversion. We combine strategic user experience design with performance optimization, ensuring every element works toward your business goals. From product discovery to checkout, we eliminate friction and maximize revenue per visitor."
      },
      {
        title: "Our Process",
        content: "We start by understanding your market and customers. Then we architect a system that grows with you—handling inventory, payments, analytics, and customer relationships seamlessly. Your platform becomes the engine of your business."
      }
    ],
    plans: [
      { name: "Starter", price: "$2,999", features: ["Up to 100 products", "Basic analytics", "Email support"] },
      { name: "Professional", price: "$5,999", features: ["Unlimited products", "Advanced analytics", "24/7 support", "Custom integrations"] },
      { name: "Enterprise", price: "Custom", features: ["Everything included", "Dedicated account manager", "Custom development"] }
    ]
  },
  saas: {
    title: "SaaS Dashboard",
    description: "Powerful SaaS platforms built to scale with minimal operational overhead.",
    bgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        title: "How We Do It",
        content: "SaaS requires a different architecture. We build dashboards that provide real-time insights, automate workflows, and reduce manual work. Every feature is designed to justify its existence through measurable business impact."
      },
      {
        title: "Our Process",
        content: "From user onboarding to retention, we engineer every touchpoint. Our platforms have built-in virality mechanics, advanced reporting, and integrations that connect to your existing ecosystem."
      }
    ],
    plans: [
      { name: "Starter", price: "$1,999/mo", features: ["Up to 10 users", "Core features", "Community support"] },
      { name: "Growth", price: "$4,999/mo", features: ["Unlimited users", "Advanced features", "Priority support", "API access"] },
      { name: "Enterprise", price: "Custom", features: ["Everything included", "Custom features", "Dedicated support"] }
    ]
  },
  mobile: {
    title: "Mobile App Design",
    description: "Native and cross-platform mobile applications that users love.",
    bgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        title: "How We Do It",
        content: "Mobile apps are different from web. They need to be fast, intuitive, and deeply integrated with the device. We design for behavior change, not just functionality. Every interaction is deliberate."
      },
      {
        title: "Our Process",
        content: "We conduct user research to understand your audience. Then we build an app architecture that's maintainable, scalable, and delightful. Push notifications, offline functionality, and analytics are built in from day one."
      }
    ],
    plans: [
      { name: "MVP", price: "$8,999", features: ["Core features", "Single platform", "90 days support"] },
      { name: "Full App", price: "$18,999", features: ["iOS & Android", "Advanced features", "6 months support", "Analytics"] },
      { name: "Ongoing", price: "$2,999/mo", features: ["Maintenance & updates", "Feature development", "24/7 support"] }
    ]
  },
  crm: {
    title: "CRM System",
    description: "Customer relationship management systems that centralize your business operations.",
    bgUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        title: "How We Do It",
        content: "Your CRM is the nerve center of your business. We build systems that capture customer data intelligently, automate follow-ups, and provide insights that lead to better decisions. Integration is seamless—your CRM works with everything."
      },
      {
        title: "Our Process",
        content: "We map your entire sales and customer journey. Then we engineer a CRM that removes busywork, surfaces the right information at the right time, and creates accountability throughout your organization."
      }
    ],
    plans: [
      { name: "Small Business", price: "$999/mo", features: ["Up to 5 users", "Contact management", "Basic automation"] },
      { name: "Growing Company", price: "$2,999/mo", features: ["Up to 20 users", "Advanced automation", "Custom fields", "API access"] },
      { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Custom development", "Dedicated support"] }
    ]
  },
  analytics: {
    title: "Analytics Engine",
    description: "Data analytics platforms that transform raw data into actionable insights.",
    bgUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    sections: [
      {
        title: "How We Do It",
        content: "Data is only valuable if you can act on it. We build analytics systems that show you what's working, what's broken, and what opportunities you're missing. Real-time dashboards, predictive analytics, and automated reporting."
      },
      {
        title: "Our Process",
        content: "We identify your key metrics and critical questions. Then we build a system that answers them automatically. Your data becomes your competitive advantage—accessible to everyone who needs it."
      }
    ],
    plans: [
      { name: "Starter", price: "$3,999/mo", features: ["Up to 100M events/mo", "5 users", "Basic dashboards"] },
      { name: "Professional", price: "$9,999/mo", features: ["Unlimited events", "Unlimited users", "Advanced dashboards", "Predictive models"] },
      { name: "Enterprise", price: "Custom", features: ["Everything included", "Custom models", "Dedicated support"] }
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = serviceData[id || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <p className="font-mono text-white/50">Service not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-35"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95)), url(${service.bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="pt-32 pb-24 px-6 border-b border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-6xl sm:text-8xl font-bold tracking-tighter uppercase mb-6">
                {service.title}
              </h1>
              <p className="text-xl sm:text-2xl font-sans text-white/60 max-w-3xl">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="py-32 px-6 space-y-32">
          {service.sections.map((section: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-screen-2xl mx-auto"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'}`}>
                
                {/* Image on left for even, right for odd */}
                {idx % 2 === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                      <img 
                        src={service.bgUrl} 
                        alt={section.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Text */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter uppercase mb-6">
                    {section.title}
                  </h2>
                  <p className="text-white/60 font-sans text-lg leading-relaxed mb-8">
                    {section.content}
                  </p>
                </motion.div>

                {/* Image on right for even, left for odd */}
                {idx % 2 === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                      <img 
                        src={service.bgUrl} 
                        alt={section.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="font-display text-5xl sm:text-6xl font-bold tracking-tighter uppercase mb-6">Plans & Pricing</h2>
              <p className="text-white/60 font-sans text-lg max-w-2xl mx-auto">Choose the plan that fits your business. Or let's discuss a custom solution.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.plans.map((plan: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`rounded-lg border p-8 backdrop-blur-sm transition-all ${idx === 1 ? 'border-white/30 bg-white/5 scale-105' : 'border-white/10 bg-black/40 hover:border-white/20'}`}
                >
                  <h3 className="font-display text-2xl font-bold uppercase mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string, fidx: number) => (
                      <li key={fidx} className="text-white/60 font-sans text-sm flex items-start gap-3">
                        <span className="text-white/40 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <MinimalButton variant="primary" className="w-full bg-white text-black hover:bg-white/90">
                    Get Started
                  </MinimalButton>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Booking Form */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-5xl font-bold tracking-tighter uppercase mb-6">Join Us</h2>
                <p className="text-white/60 font-sans text-lg">Let's discuss how we can help you achieve your goals.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-black/60 backdrop-blur-md p-8 rounded-lg border border-white/10"
              >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">First Name*</label>
                    <input type="text" className="w-full bg-white/5 border-b border-white/20 px-3 py-2 focus:border-white outline-none transition-colors font-sans text-sm text-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Last Name*</label>
                    <input type="text" className="w-full bg-white/5 border-b border-white/20 px-3 py-2 focus:border-white outline-none transition-colors font-sans text-sm text-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Email*</label>
                    <input type="email" className="w-full bg-white/5 border-b border-white/20 px-3 py-2 focus:border-white outline-none transition-colors font-sans text-sm text-white" required />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Phone*</label>
                    <input type="tel" className="w-full bg-white/5 border-b border-white/20 px-3 py-2 focus:border-white outline-none transition-colors font-sans text-sm text-white" required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Company*</label>
                    <input type="text" className="w-full bg-white/5 border-b border-white/20 px-3 py-2 focus:border-white outline-none transition-colors font-sans text-sm text-white" required />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Tell us about your project</label>
                    <textarea className="w-full bg-white/5 border border-white/20 px-3 py-2 focus:border-white outline-none transition-colors font-sans text-sm text-white resize-none" rows={4} />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <MinimalButton variant="primary" className="w-full bg-white text-black hover:bg-white/90">
                      Schedule Consultation
                    </MinimalButton>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
