import React from 'react';
import { motion } from 'framer-motion';
import { ThermometerSun, Dna, Leaf, FlaskConical, Sprout, Microscope } from 'lucide-react';
import mungbeanImg from '@assets/Mungbean_plant_1778132875162.png';
import pearlMilletImg from '@assets/Pearl_millet_plant_1778132875162.png';
import potatoImg from '@assets/Potato_Plant_1778132991564.png';
import brassicaImg from '@assets/Brassica_plant_1778132787672.png';
import pgprsImg from '@assets/pgprs_1778137057950.png';

const themes = [
  {
    id: '01',
    icon: <Leaf className="w-5 h-5" />,
    title: 'Stress Tolerance in Mungbean',
    desc: 'Investigating the molecular basis of waterlogging and heat stress responses in mungbean, with a focus on MYB transcription factors and their role in regulating adaptive gene networks.',
    keywords: ['MYB TFs', 'Mungbean', 'Waterlogging', 'Heat Stress'],
    photo: mungbeanImg,
    photoAlt: 'Mungbean plant'
  },
  {
    id: '02',
    icon: <Microscope className="w-5 h-5" />,
    title: 'Disease Resistance in Pearl Millet',
    desc: 'Exploring lipoxygenase (LOX) gene networks and their involvement in defence signalling against fungal pathogens and biotic stress in pearl millet.',
    keywords: ['LOX Genes', 'Pearl Millet', 'Fungal Pathogen', 'Biotic Stress'],
    photo: pearlMilletImg,
    photoAlt: 'Pearl millet plant'
  },
  {
    id: '03',
    icon: <Dna className="w-5 h-5" />,
    title: 'Prion-like Proteins in Potato',
    desc: 'Uncovering how prion-like proteins drive heat stress tolerance and underlie the molecular basis of stress memory in potato, linking protein phase separation to long-term adaptive outcomes.',
    keywords: ['Prion-like Proteins', 'Heat Stress', 'Stress Tolerance', 'Potato'],
    photo: potatoImg,
    photoAlt: 'Potato plant'
  },
  {
    id: '04',
    icon: <ThermometerSun className="w-5 h-5" />,
    title: 'Calcium Signalling in Indian Mustard',
    desc: 'Characterising calmodulin-binding proteins and their calcium-mediated signalling roles in Brassica juncea under heat stress, integrating genomics and molecular biology.',
    keywords: ['Calmodulin', 'Calcium Signalling', 'Brassica juncea', 'Heat Stress'],
    photo: brassicaImg,
    photoAlt: 'Brassica mustard plant'
  },
  {
    id: '05',
    icon: <FlaskConical className="w-5 h-5" />,
    title: 'Prion-like Proteins in Brassica',
    desc: 'Investigating prion-like protein aggregation and its functional role in stress adaptation and signalling in Brassica juncea under abiotic stress conditions.',
    keywords: ['Prion-like Proteins', 'Brassica juncea', 'Stress Adaptation', 'Protein Aggregation'],
    photo: brassicaImg,
    photoAlt: 'Brassica plant'
  },
  {
    id: '06',
    icon: <Sprout className="w-5 h-5" />,
    title: 'PGPRs & Rhizosphere Biology',
    desc: 'Harnessing plant-growth-promoting rhizobacteria (PGPRs) and beneficial Streptomyces strains to improve stress tolerance and soil health for sustainable agriculture.',
    keywords: ['PGPR', 'Streptomyces', 'Rhizosphere', 'Bioinoculants'],
    photo: pgprsImg,
    photoAlt: 'PGPR rhizosphere microbiome'
  }
];

export function ResearchThemes() {
  return (
    <section id="research" className="py-24 relative overflow-hidden border-b border-border bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm tracking-widest text-primary uppercase">Core Focus</span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Research Themes</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From molecular mechanisms to crop-level resilience — our research spans the full spectrum of plant stress biology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg flex flex-col"
            >
              {/* Plant photo header */}
              <div className="relative h-44 overflow-hidden shrink-0">
                <img
                  src={theme.photo}
                  alt={theme.photoAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-9 h-9 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-primary">{theme.id}</span>
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-background/85 backdrop-blur-sm border border-border px-3 py-1.5">
                  <span className="text-primary">{theme.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{theme.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm flex-1">{theme.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {theme.keywords.map(kw => (
                    <span key={kw} className="px-2.5 py-0.5 bg-primary/5 border border-primary/20 text-[10px] font-mono text-primary rounded-full group-hover:border-primary/40 transition-colors uppercase tracking-wider">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
