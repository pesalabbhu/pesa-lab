import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';

const publications = [
  {
    id: 1,
    title: "Loss-of-function of VrMYB104 in Mungbean hampers growth and multiple adaptive responses under waterlogging stress",
    authors: "Prashasti Pandey, Shivani Kashaudhan, Siddharth Maurya, Deepak Kumar",
    journal: "Plant Cell Reports",
    year: "2025",
    doi: "10.1007/s00299-025-03625-4",
    tags: ["Mungbean", "Waterlogging", "MYB TF"]
  },
  {
    id: 2,
    title: "Myo-inositol Reduces Drought-Induced Oxidative Damage and Improves Mungbean Photosynthetic Efficiency and Antioxidant Machinery",
    authors: "Tirth Bhargav Bhai Patel, Khushboo, Pramod Kumar Saroj, Neelam Prabha Negi, Meenakshi Raina, Prashasti Pandey, Ravi Rajwanshi, Deepak Kumar",
    journal: "Journal of Plant Growth Regulation",
    year: "2025",
    doi: "10.1007/s00344-025-11819-z",
    tags: ["Drought", "Mungbean", "Antioxidant"]
  },
  {
    id: 3,
    title: "Contrasting effects of melatonin on Brassica juncea and Alternaria brassicae reduce pathogenicity of the fungus and alleviate damage to plants",
    authors: "A Garg, S Shah, TBB Patel, V Gautam, D Kumar",
    journal: "Plant Stress",
    year: "2025",
    doi: "10.1016/j.stress.2025.100845",
    tags: ["Biotic Stress", "Melatonin", "Brassica"]
  },
  {
    id: 4,
    title: "Comprehensive in-silico characterization and expression pattern of calmodulin genes under various abiotic and biotic stresses in Indian mustard (Brassica juncea)",
    authors: "P Pandey, G Rai, A Garg, D Kumar",
    journal: "Physiology and Molecular Biology of Plants",
    year: "2025",
    doi: "10.1007/s12298-025-01561-x",
    tags: ["Calmodulin", "Brassica juncea", "Bioinformatics"]
  },
  {
    id: 5,
    title: "Genome-wide profiling of CBL interacting protein kinases (CIPKs) in banana unveils their role in abiotic stress signaling and stress tolerance enhancement",
    authors: "P Narwal, RK Singh, AK Pathak, D Kumar, NP Negi",
    journal: "Plant Stress",
    year: "2024",
    doi: "10.1016/j.stress.2024.100417",
    tags: ["CIPK", "Banana", "Abiotic Stress"]
  },
  {
    id: 6,
    title: "Unlocking the secrets of rhizosphere microbes: a new dimension for agriculture",
    authors: "M Thakur, Khushboo, S Shah, P Kumari, M Kumar, RK Vibhuti, A Pramanik, V Yadav, M Raina, NP Negi, V Gautam, A Rustagi, SK Verma, D Kumar",
    journal: "Symbiosis",
    year: "2024",
    doi: "10.1007/s13199-024-00980-w",
    tags: ["Rhizosphere", "Microbiome", "Sustainable Agriculture"]
  },
  {
    id: 7,
    title: "Unraveling the involvement of WRKY TFs in regulating plant disease defense signaling",
    authors: "B Saha, J Nayak, R Srivastava, S Samal, D Kumar, J Chanwala, N Dey, MK Giri",
    journal: "Planta",
    year: "2024",
    doi: "10.1007/s00425-023-04269-y",
    tags: ["WRKY", "Disease Resistance", "Signaling"]
  }
];

export function Publications() {
  const [search, setSearch] = useState('');

  const filtered = publications.filter(pub =>
    pub.title.toLowerCase().includes(search.toLowerCase()) ||
    pub.authors.toLowerCase().includes(search.toLowerCase()) ||
    pub.tags.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
    pub.year.includes(search) ||
    pub.journal.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="publications" className="py-24 relative border-b border-border bg-accent/15">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="font-mono text-sm tracking-widest text-primary uppercase">Literature</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Publications</h2>
            <p className="text-muted-foreground mt-2 text-sm">50+ peer-reviewed articles. Showing recent highlights.</p>
          </div>

          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by keyword, author, year..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border py-2 pl-10 pr-4 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filtered.length > 0 ? filtered.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-card border border-border p-6 hover:border-primary/40 transition-all flex flex-col md:flex-row gap-6 md:items-center justify-between shadow-sm hover:shadow-md"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-primary bg-primary/8 px-2 py-0.5">{pub.year}</span>
                  <span className="text-sm text-secondary font-medium">{pub.journal}</span>
                </div>
                <h3 className="text-base text-foreground font-medium mb-2 leading-snug group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {pub.authors}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <div className="hidden md:flex gap-2 flex-wrap max-w-[180px] justify-end">
                  {pub.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-muted-foreground uppercase tracking-wider border border-border px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shrink-0"
                  title="Open DOI"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )) : (
            <div className="py-12 text-center border border-border border-dashed">
              <p className="text-muted-foreground">No publications found matching "{search}".</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://scholar.google.com/citations?user=Fttx__kAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary border border-primary/40 px-6 py-3 hover:bg-primary/8 transition-colors font-mono uppercase tracking-widest"
          >
            View all on Google Scholar <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
