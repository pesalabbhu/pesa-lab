import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, ArrowUpRight, MapPin, Mail, Phone } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export function JoinUs() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', interest: '', message: '' }
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent",
      description: "We've received your inquiry. A lab representative will contact you shortly.",
    });
    form.reset();
  }

  return (
    <section id="collaborate" className="py-24 relative overflow-hidden bg-accent/15 border-b border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm tracking-widest text-primary uppercase">Collaborate</span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Work With Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Whether you're a prospective PhD student, postdoc, or dissertation intern — we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-10">
              {[
                {
                  num: '01',
                  color: 'text-primary',
                  bg: 'bg-primary/8 border-primary/20',
                  title: 'PhD Opportunities',
                  desc: 'Applications open via BHU entrance test (RET) or CSIR-NET / JRF / DST-INSPIRE / PMRF fellowships. We welcome motivated students from plant biology, biochemistry, or bioinformatics backgrounds.'
                },
                {
                  num: '02',
                  color: 'text-secondary',
                  bg: 'bg-secondary/8 border-secondary/20',
                  title: 'Postdoctoral Positions',
                  desc: 'Candidates with experience in molecular biology, ChIP-seq, RNA-seq, or plant stress physiology are encouraged to apply. We can support NPDF and DBT-RA applications.'
                },
                {
                  num: '03',
                  color: 'text-primary',
                  bg: 'bg-primary/8 border-primary/20',
                  title: 'Dissertation and Internship',
                  desc: 'MSc / MTech dissertation projects and short-term research internships are available for motivated students from Indian universities. Reach out early to discuss placement timelines.'
                }
              ].map((item) => (
                <motion.div
                  key={item.num}
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex gap-4 group cursor-default"
                >
                  <div className={`w-12 h-12 rounded border flex items-center justify-center shrink-0 ${item.bg}`}>
                    <span className={`font-mono font-bold text-sm ${item.color}`}>{item.num}</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1 group-hover:text-primary transition-colors flex items-center gap-1.5">
                      {item.title}
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 p-5 rounded">
              <p className="text-sm text-foreground font-medium mb-1">Direct email</p>
              <a href="mailto:deepakkumar@bhu.ac.in" className="text-primary font-mono text-sm hover:underline flex items-center gap-2">
                deepakkumar@bhu.ac.in <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 font-mono tracking-tighter uppercase flex items-center gap-2">
              Send a Message
              <span className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" className="bg-background border-border focus-visible:ring-primary/50" {...field} />
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
                        <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@institute.edu" className="bg-background border-border focus-visible:ring-primary/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">I am interested in</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border focus:ring-primary/50">
                            <SelectValue placeholder="Select an option..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="phd">PhD Application</SelectItem>
                          <SelectItem value="postdoc">Postdoctoral Position</SelectItem>
                          <SelectItem value="dissertation">Dissertation Project</SelectItem>
                          <SelectItem value="internship">Research Internship</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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
                      <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Briefly describe your background and research interests..."
                          className="bg-background border-border focus-visible:ring-primary/50 min-h-[110px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group shadow-sm"
                  style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </motion.button>
              </form>
            </Form>
          </motion.div>
        </div>

        {/* ── Address & Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 border border-border bg-card shadow-sm overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Address panel */}
            <div className="p-8 flex flex-col gap-5 border-b md:border-b-0 md:border-r border-border">
              <h4 className="font-mono text-xs tracking-widest uppercase text-primary font-bold">Find Us</h4>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-foreground mb-1">Department of Botany</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Institute of Science,<br />
                    Banaras Hindu University (BHU),<br />
                    Varanasi, Uttar Pradesh — 221005<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:deepakkumar@bhu.ac.in" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                    deepakkumar@bhu.ac.in
                  </a>
                  <a href="mailto:pesa.lab.bhu@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                    pesa.lab.bhu@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919873259890" className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
                  +91 98732 59890
                </a>
              </div>
            </div>

            {/* Map embed — col-span-2 */}
            <div className="col-span-1 md:col-span-2 h-64 md:h-auto min-h-[300px] relative">
              <iframe
                title="Department of Botany, BHU — Map"
                src="https://maps.google.com/maps?q=Department+of+Botany,+Banaras+Hindu+University,+Varanasi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href="https://maps.google.com/?q=Department+of+Botany,+Banaras+Hindu+University,+Varanasi"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1.5 hover:bg-primary/90 transition-colors"
                >
                  Open in Maps <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
