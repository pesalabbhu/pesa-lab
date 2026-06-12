import React from 'react';
import { motion } from 'framer-motion';
import { Award, Mic } from 'lucide-react';

const news = [
  {
    id: 1,
    type: 'grant',
    icon: <Award className="w-4 h-4" />,
    date: '2024–2025',
    title: 'PESA Lab receives major grants — 2 × DBT and 1 × ANRF',
    desc: 'PESA Lab has been sanctioned two research projects from the Department of Biotechnology (DBT) and one project from the Anusandhan National Research Foundation (ANRF), recognising the lab\'s research in plant stress biology and molecular adaptomics.'
  },
  {
    id: 2,
    type: 'conference',
    icon: <Mic className="w-4 h-4" />,
    date: '2025',
    title: 'Prashasti presents at In Vitro Biology Meeting, Norfolk USA',
    desc: 'Ms. Prashasti Pandey (PMRF Fellow) presented her research at the 2025 In Vitro Biology Meeting organised by the Society for In Vitro Biology, held at Norfolk, Virginia, USA — an international platform for plant and cell biology.'
  },
  {
    id: 3,
    type: 'conference',
    icon: <Mic className="w-4 h-4" />,
    date: '2025',
    title: 'PESA Lab at PTCA 46th Annual Meeting, Goa',
    desc: 'PESA Lab members presented at the 46th Annual Meeting of PTCA (India) & Symposium on Current Trends and Challenges in Plant Biotechnology 2025, organised by BITS Pilani K K Birla Goa Campus, Goa.'
  }
];

const typeStyles: Record<string, { text: string; bg: string; border: string }> = {
  conference: { text: 'text-secondary', bg: 'bg-secondary/8', border: 'border-secondary/30' },
  grant: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
};

export function News() {
  return (
    <section id="news" className="py-24 relative border-b border-border bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm tracking-widest text-primary uppercase">Updates</span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">News &amp; Events</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {news.map((item, i) => {
            const style = typeStyles[item.type] ?? typeStyles.conference;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-card border border-border p-6 hover:border-primary/40 transition-colors relative group shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />

                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center ${style.bg} ${style.text} border ${style.border} shrink-0`}>
                    {item.icon}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{item.date}</span>
                  <span className={`ml-auto text-[9px] border px-2 py-0.5 rounded-full uppercase tracking-wider font-mono whitespace-nowrap ${style.text} ${style.border}`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
