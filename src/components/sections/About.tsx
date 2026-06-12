import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock } from 'lucide-react';

const stats = [
  { value: '50+', label: 'Publications' },
  { value: '4',   label: 'Active Grants' },
  { value: '11+', label: 'Years of Research' },
  { value: '10',  label: 'Lab Members' },
];

const activeGrants = [
  { code: 'DBT', title: 'DBT Grant I', full: 'Dept. of Biotechnology, Govt. of India' },
  { code: 'DBT', title: 'DBT Grant II', full: 'Dept. of Biotechnology, Govt. of India' },
  { code: 'ANRF', title: 'ANRF Grant', full: 'Anusandhan National Research Foundation' },
  { code: 'CSTUP', title: 'CSTUP Grant', full: 'Council of Science & Technology, UP' },
];

const completedGrants = [
  { code: 'SERB', title: 'SERB Grant', full: 'Science and Engineering Research Board' },
  { code: 'IoE', title: 'IoE Grant', full: 'Institute of Eminence, BHU' },
];

const awards = ["Young Scientist Award"];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-b border-border bg-accent/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — description + grants */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-sm tracking-widest text-primary uppercase">About The Lab</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight tracking-tight">
              Advancing the frontier of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">plant stress tolerance.</span>
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-base mb-10">
              <p>
                We are a multidisciplinary research lab in the Department of Botany, Banaras Hindu University, working to understand how plants perceive, respond to, and overcome environmental stresses — including heat, waterlogging, fungal pathogens, and more.
              </p>
              <p>
                Led by Dr. Deepak Kumar, our team integrates molecular biology, genetic engineering, bioinformatics, and plant physiology to unravel mechanisms of stress adaptation in diverse crop species — mungbean, pearl millet, potato, Indian mustard, and tomato.
              </p>
            </div>

            {/* Funding */}
            <div className="space-y-4">
              <div>
                <p className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-primary uppercase mb-3">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Active Funding
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeGrants.map((g, i) => (
                    <div key={i} className="group relative">
                      <span className="text-xs font-mono border border-primary/30 text-primary px-3 py-1 bg-primary/6 uppercase tracking-wider rounded-full cursor-default flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {g.title}
                      </span>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-[9px] font-mono rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                        {g.full}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-muted-foreground uppercase mb-3">
                  <Clock className="w-3.5 h-3.5" /> Completed
                </p>
                <div className="flex flex-wrap gap-2">
                  {completedGrants.map((g, i) => (
                    <span key={i} className="text-xs font-mono border border-border text-muted-foreground px-3 py-1 bg-muted/30 uppercase tracking-wider rounded-full line-through decoration-muted-foreground/40">
                      {g.title}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {awards.map(badge => (
                    <span key={badge} className="text-xs font-mono border border-secondary/30 text-secondary px-3 py-1 bg-secondary/5 uppercase tracking-wider rounded-full">
                      🏆 {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — stat blocks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 lg:mt-20"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-card border border-border p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-primary/40 transition-colors shadow-sm cursor-default"
              >
                <div className="absolute inset-0 bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-4xl lg:text-5xl font-bold font-mono text-primary mb-2 relative z-10">{stat.value}</span>
                <span className="text-sm text-muted-foreground tracking-widest uppercase font-mono relative z-10">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
