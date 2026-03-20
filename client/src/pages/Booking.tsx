import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MinimalButton } from "@/components/ui/MinimalButton";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

const DENSE_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&h=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=400&h=400&auto=format&fit=crop",
];

export default function Booking() {
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      region: "",
      type: "business_owner",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      await apiRequest("POST", "/api/bookings", values);
    },
    onSuccess: () => {
      toast({ title: "Success", description: "Application submitted. We will be in touch." });
      form.reset();
    },
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 pt-24 pb-12 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/80 border border-white/10 p-8 md:p-12 backdrop-blur-xl relative z-20 flex flex-col"
            >
              <div className="flex-1">
                <h1 className="font-display text-4xl font-bold tracking-tighter uppercase mb-2">Book Consultation</h1>
                <p className="font-sans text-white/50 mb-8 text-sm uppercase tracking-widest">Limited availability for Q2 2026</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Full Name</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-white/[0.03] border-white/10 h-10 rounded-none focus-visible:ring-white/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="name@example.com" {...field} className="bg-white/[0.03] border-white/10 h-10 rounded-none focus-visible:ring-white/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Phone Number</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-white/[0.03] border-white/10 h-10 rounded-none focus-visible:ring-white/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="region"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Region / Country</FormLabel>
                            <FormControl>
                              <Input {...field} className="bg-white/[0.03] border-white/10 h-10 rounded-none focus-visible:ring-white/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Professional Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/[0.03] border-white/10 h-10 rounded-none focus:ring-white/20">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black border-white/10 rounded-none">
                              <SelectItem value="business_owner">Business Owner</SelectItem>
                              <SelectItem value="employee">Employee / Executive</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Current Challenges</FormLabel>
                          <FormControl>
                            <Textarea {...field} className="bg-white/[0.03] border-white/10 min-h-[100px] rounded-none focus-visible:ring-white/20 resize-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <MinimalButton type="submit" variant="primary" className="w-full h-12" disabled={mutation.isPending}>
                      {mutation.isPending ? "Processing..." : "Submit Application"}
                    </MinimalButton>
                  </form>
                </Form>
              </div>

              {/* Dynamic Asset Grid - To Fill Space */}
              <div className="mt-12 grid grid-cols-4 gap-4 opacity-40">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="aspect-video bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                    <div className="absolute bottom-2 left-2 font-mono text-[6px] tracking-widest text-white/20 uppercase">Asset.{(Math.random()*10000).toFixed(0)}</div>
                    <motion.div 
                      className="absolute inset-0 bg-white/5"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </div>
                ))}
              </div>

              {/* Mini Graphs / Data Section */}
              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-8 flex-shrink-0">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Network Growth</p>
                  <div className="h-12 w-full bg-white/[0.02] relative overflow-hidden group">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0 35 L10 32 L20 38 L30 25 L40 28 L50 15 L60 22 L70 10 L80 18 L90 5 L100 12" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        d="M0 35 L10 32 L20 38 L30 25 L40 28 L50 15 L60 22 L70 10 L80 18 L90 5 L100 12" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1.5" 
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  </div>
                  <p className="font-display text-xl font-bold mt-2">+24.8%</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Efficiency Rate</p>
                  <div className="h-12 w-full bg-white/[0.02] flex items-end gap-1 px-1">
                    {[40, 70, 45, 90, 65, 80, 55, 95].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="flex-1 bg-white/20 hover:bg-white transition-colors"
                      />
                    ))}
                  </div>
                  <p className="font-display text-xl font-bold mt-2">98.2%</p>
                </div>
              </div>
            </motion.div>

            {/* Dense Visual Grid Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:flex flex-col gap-8 h-full"
            >
              <div className="grid grid-cols-3 gap-2 overflow-hidden content-start flex-1">
                {DENSE_IMAGES.map((url, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i }}
                    className="aspect-square bg-white/5 border border-white/5 overflow-hidden"
                  >
                    <img src={url} alt={`Visual ${i}`} className="w-full h-full object-cover transition-all duration-500 hover:scale-110" />
                  </motion.div>
                ))}
              </div>
              
              <div className="p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                <h3 className="font-display text-xl font-bold uppercase mb-4 tracking-tighter">Strategic Excellence</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Our consultancy is reserved for those who demand exponential growth. We operate at the intersection of data, design, and digital systems.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="border-l border-white/20 pl-4">
                    <p className="text-3xl font-bold text-white">$400M+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Managed Assets</p>
                  </div>
                  <div className="border-l border-white/20 pl-4">
                    <p className="text-3xl font-bold text-white">150+</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">Global Partners</p>
                  </div>
                </div>

                {/* Strategic Pulse */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex justify-between items-end mb-4">
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">Strategic Pulse</p>
                    <p className="font-mono text-[9px] text-white/40 tracking-widest">LIVE_SYSTEM_ACTIVE</p>
                  </div>
                  <div className="flex items-end gap-[2px] h-8">
                    {[30, 45, 25, 60, 75, 40, 90, 55, 30, 45, 70, 85, 40, 60, 35, 50, 80, 45, 30].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ scaleY: 0.1, opacity: 0.1 }}
                        animate={{ 
                          scaleY: [1, 0.5, 1.2, 0.8, 1],
                          opacity: [0.2, 0.5, 0.3, 0.6, 0.2]
                        }}
                        transition={{ 
                          duration: 2 + Math.random(), 
                          repeat: Infinity, 
                          delay: i * 0.05,
                          ease: "easeInOut"
                        }}
                        className="flex-1 bg-white origin-bottom"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                        <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest">Neural Link</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="font-mono text-[7px] text-white/30 uppercase tracking-widest">Data Stream</span>
                      </div>
                    </div>
                    <p className="font-mono text-[7px] text-white/20 tracking-[0.2em]">0x7F...3B9</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full opacity-30 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full opacity-20 -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}
