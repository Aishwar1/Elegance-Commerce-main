import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MinimalButton } from "@/components/ui/MinimalButton";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";

export function LeadForm({ showMessage = false }) {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      email: "",
      topic: "digital products",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      await apiRequest("POST", "/api/leads", values);
    },
    onSuccess: () => {
      toast({ title: "Welcome", description: "You've successfully joined Meridian Coreline." });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit((v) => mutation.mutate(v))} className="space-y-8 bg-black/60 border border-white/5 p-12 backdrop-blur-md">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} className="bg-white/[0.02] border-white/10 h-12 rounded-none focus-visible:ring-white/20" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Area of Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white/[0.02] border-white/10 h-12 rounded-none focus:ring-white/20">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-black border-white/10 rounded-none">
                    <SelectItem value="Business onwer">Business owner</SelectItem>
                    <SelectItem value="employee">Employee</SelectItem>
                    <SelectItem value="digital products">Digital products</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {showMessage && (
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Message (Optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your needs and how we can help you..." {...field} className="bg-white/[0.02] border-white/10 rounded-none focus-visible:ring-white/20 min-h-24 resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <MinimalButton type="submit" variant="primary" className="w-full" disabled={mutation.isPending}>
            {mutation.isPending ? "Submitting..." : "Get Started"}
          </MinimalButton>
        </form>
      </Form>
    </motion.div>
  );
}
