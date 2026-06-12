import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileCode2, Github, Download } from 'lucide-react';

const resources = [
  {
    id: 1,
    title: 'Heat Stress RNA-seq Atlas',
    type: 'Dataset',
    icon: <Database className="w-6 h-6" />,
    desc: 'Comprehensive time-course transcriptome profiling of Arabidopsis under severe heat stress and recovery phases.',
    link: '#',
    tags: ['RNA-seq', 'Arabidopsis', 'Heat Stress']
  },
  {
    id: 2,
    title: 'Prion-like Domain Predictor',
    type: 'Tool',
    icon: <FileCode2 className="w-6 h-6" />,
    desc: 'Machine learning pipeline for identifying potential prion-like domains in plant proteomes.',
    link: '#',
    tags: ['Python', 'Bioinformatics', 'PLDs']
  },
  {
    id: 3,
    title: 'ChIP-seq Analysis Pipeline',
    type: 'Code',
    icon: <Github className="w-6 h-6" />,
    desc: 'Standardized automated pipeline for calling differential histone modifications from raw sequencing reads.',
    link: '#',
    tags: ['Snakemake', 'Epigenetics']
  },
  {
    id: 4,
    title: 'Protoplast Transformation',
    type: 'Protocol',
    icon: <Download className="w-6 h-6" />,
    desc: 'Optimized protocol for high-efficiency mesophyll protoplast isolation and transient expression.',
    link: '#',
    tags: ['Protocol', 'Bench Work']
  }
];

export function DataTools() {
  return (
    <section id="data-tools" className="py-24 relative border-b border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-sm tracking-widest text-primary uppercase">Open Science</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Data & Tools
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm md:text-right">
            We believe in accelerating discovery through open access to our datasets, pipelines, and optimized protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((res, i) => (
            <motion.a
              href={res.link}
              key={res.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block p-6 bg-card border border-white/10 hover:border-primary/50 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-12 h-12 rounded bg-background border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                  {res.icon}
                </div>
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{res.type}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-primary transition-colors">{res.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 relative z-10">{res.desc}</p>
              
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {res.tags.map(tag => (
                  <span key={tag} className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
