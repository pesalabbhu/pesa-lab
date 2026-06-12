import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Award, Linkedin } from 'lucide-react';
import piPhoto from '@assets/Dr_Deepak_kumar_profile_1778132799197.jpg';
import prashasti from '@assets/Prashasti_profile_1778132991564.jpg';
import anjali from '@assets/Anjali_Profile_1778132778521.jpg';
import shivam from '@assets/Shivam_Profile_1778132991564.jpg';
import garima from '@assets/GArima_profile_1778132875162.jpg';
import khushboo from '@assets/Khushboo_profile_1778132875162.jpg';

const pi = {
  name: "Dr. Deepak Kumar",
  role: "Principal Investigator",
  position: "Associate Professor, Dept of Botany, BHU",
  desc: "Dr. Deepak Kumar leads PESA Lab's multidisciplinary research with 11+ years of experience and 50+ publications. Funded by DBT, ANRF, and CSTUP grants. His expertise spans molecular biology, bioinformatics, crop engineering, and plant stress physiology — recognised with the Young Scientist Award and IBC's Excellent Scholar award.",
  tags: ["Molecular Biology", "Bioinformatics", "Crop Engineering", "Stress Adaptomics"],
  initials: "DK",
  email: "deepakkumar@bhu.ac.in",
  orcid: "https://orcid.org/0000-0002-1160-4534",
  scholar: "https://scholar.google.com/citations?user=Fttx__kAAAAJ&hl=en",
  awards: ["Young Scientist Award", "IBC Excellent Scholar"]
};

const scholars = [
  {
    name: "Prashasti Pandey",
    role: "Research Scholar",
    fellowship: "PMRF Fellow",
    desc: "Working on MYB transcription factors in mungbean under waterlogging and heat stress. Former IISER Pune researcher in chemical ecology.",
    tags: ["MYB TFs", "Mungbean", "Waterlogging"],
    initials: "PP",
    photo: prashasti,
    email: "prashasti.pandey@bhu.ac.in",
    linkedin: "https://www.linkedin.com/in/prashasti-pandey-bhu"
  },
  {
    name: "Anjali Singh",
    role: "Research Scholar",
    fellowship: "DST-INSPIRE Fellow",
    desc: "Studying calmodulin-binding proteins and calcium-mediated stress signalling in Brassica juncea using genomics and molecular biology.",
    tags: ["CaM-binding Proteins", "Brassica juncea", "Ca²⁺ Signalling"],
    initials: "AS",
    photo: anjali,
    email: "anjali18@bhu.ac.in",
    linkedin: "https://www.linkedin.com/company/pesa-lab/"
  },
  {
    name: "Shivam Mishra",
    role: "Research Scholar",
    fellowship: "CSIR-JRF",
    desc: "Investigating prion-like proteins and their role in heat stress tolerance in potato. Skilled in molecular biology, bioinformatics, and tissue culture.",
    tags: ["Prion-like Proteins", "Potato", "Heat Stress"],
    initials: "SM",
    photo: shivam,
    email: "mishrashivam780@gmail.com",
    linkedin: "https://www.linkedin.com/company/pesa-lab/"
  },
  {
    name: "Garima Rai",
    role: "Research Scholar",
    fellowship: "DST-WISE Fellow",
    desc: "Characterising LOX genes in pearl millet under fungal and biotic stress. M.Tech Biotechnology (AKTU); former CSIR-IIIM Project Associate.",
    tags: ["LOX Genes", "Pearl Millet", "Biotic Stress"],
    initials: "GR",
    photo: garima,
    email: "raigarima26@gmail.com",
    linkedin: "https://www.linkedin.com/company/pesa-lab/"
  },
  {
    name: "Nikita Joshi",
    role: "Research Scholar",
    fellowship: "",
    desc: "Characterising calmodulins and their roles in stress signalling and adaptive responses in Brassica juncea.",
    tags: ["Calmodulins", "Brassica juncea", "Ca²⁺ Signalling"],
    initials: "NJ",
    photo: undefined as string | undefined,
    email: "",
    linkedin: "https://www.linkedin.com/company/pesa-lab/"
  }
];

const postdocs = [
  {
    name: "Dr. Khushboo",
    role: "Postdoctoral Fellow",
    fellowship: "DBT Research Associate",
    desc: "Exploring Streptomyces strains for plant growth promotion and soil health. Ph.D. in Biotechnology from Central University of Haryana.",
    tags: ["Streptomyces", "PGPR", "Soil Health"],
    initials: "KB",
    photo: khushboo,
    email: "khusi079@gmail.com",
    linkedin: "https://www.linkedin.com/company/pesa-lab/"
  },
  {
    name: "Dr. Anchal Garg",
    role: "Postdoctoral Fellow",
    fellowship: "NPDF (National Post Doctoral Fellow)",
    desc: "Investigating prion-like protein aggregation and its role in stress adaptation and signalling in Brassica juncea under abiotic stress.",
    tags: ["Prion-like Proteins", "Brassica juncea", "Stress Adaptation"],
    initials: "AG",
    photo: undefined as string | undefined,
    email: "",
    linkedin: "https://www.linkedin.com/company/pesa-lab/"
  }
];

const associates = [
  {
    name: "Stuti Gupta",
    role: "Project Associate",
    fellowship: "Project Associate",
    desc: "Working on prion-like proteins in Brassica juncea; supports molecular biology experiments and stress physiology assays.",
    tags: ["Prion-like Proteins", "Brassica juncea"],
    initials: "SG",
    photo: undefined as string | undefined,
    email: "",
    linkedin: "https://www.linkedin.com/company/pesa-lab/"
  }
];

type Member = { name: string; role: string; fellowship: string; desc: string; tags: string[]; initials: string; photo: string | undefined; email: string; linkedin: string };

function ScholarCard({ member, i }: { member: Member; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="group relative bg-card border border-border p-6 hover:border-primary/50 hover:shadow-md transition-all flex flex-col shadow-sm"
    >
      <div className="mb-4 flex justify-center">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-20 h-20 rounded-full object-cover object-top border-2 border-border group-hover:border-primary/50 group-hover:scale-105 transition-all duration-400 shadow-sm"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-accent border-2 border-border flex items-center justify-center text-xl font-mono text-primary group-hover:scale-105 group-hover:border-primary/50 transition-all duration-400 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 font-bold">{member.initials}</span>
          </div>
        )}
      </div>
      <div className="text-center mb-3">
        {member.fellowship && (
          <span className="text-[9px] font-mono tracking-widest text-secondary uppercase mb-1 block">{member.fellowship}</span>
        )}
        <span className="text-[10px] font-mono tracking-widest text-primary uppercase mb-1 block">{member.role}</span>
        <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
      </div>
      <p className="text-xs text-muted-foreground text-center mb-3 flex-1 leading-relaxed">{member.desc}</p>
      <div className="flex flex-wrap justify-center gap-1.5 mb-3">
        {member.tags.map(tag => (
          <span key={tag} className="text-[9px] text-primary border border-primary/25 px-2 py-0.5 rounded-full uppercase tracking-wider bg-primary/4">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 pt-2 border-t border-border">
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary transition-colors" title={member.email}>
            <Mail className="w-3.5 h-3.5" />
          </a>
        )}
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors" title="LinkedIn">
          <Linkedin className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

function PostdocCard({ member, i }: { member: Member; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="group relative bg-card border border-border p-6 hover:border-secondary/50 hover:shadow-md transition-all flex flex-col shadow-sm"
    >
      <div className="flex items-center gap-4 mb-4">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-16 h-16 shrink-0 rounded-full object-cover object-top border-2 border-secondary/20 group-hover:border-secondary/50 group-hover:scale-105 transition-all duration-400 shadow-sm"
          />
        ) : (
          <div className="w-16 h-16 shrink-0 rounded-full bg-secondary/10 border-2 border-secondary/20 flex items-center justify-center text-base font-mono text-secondary group-hover:scale-105 group-hover:border-secondary/40 transition-all duration-400">
            <span className="font-bold">{member.initials}</span>
          </div>
        )}
        <div>
          <span className="text-[9px] font-mono tracking-widest text-secondary uppercase block mb-0.5">{member.fellowship}</span>
          <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase block mb-0.5">{member.role}</span>
          <h3 className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors">{member.name}</h3>
        </div>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1">{member.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {member.tags.map(tag => (
          <span key={tag} className="text-[9px] text-secondary border border-secondary/25 px-2 py-0.5 rounded-full uppercase tracking-wider bg-secondary/5">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 pt-2 border-t border-border">
        {member.email && (
          <a href={`mailto:${member.email}`} className="flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-secondary transition-colors font-mono flex-1 truncate">
            <Mail className="w-3 h-3 shrink-0" /> {member.email}
          </a>
        )}
        <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors shrink-0" title="LinkedIn">
          <Linkedin className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
}

function GroupLabel({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex flex-col items-center gap-2 mb-8 mt-12">
      <div className="flex items-center gap-4 w-full">
        <span className="h-[1px] flex-1 bg-border" />
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase whitespace-nowrap">{label}</span>
        <span className="h-[1px] flex-1 bg-border" />
      </div>
      {sub && <p className="text-xs text-muted-foreground/70 font-mono">{sub}</p>}
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="py-24 relative border-b border-border bg-background">
      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm tracking-widest text-primary uppercase">The People</span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Our Team</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A collaborative group driven by curiosity and a shared passion for plant science — from bench experiments to bioinformatics, we grow together.
          </p>
        </div>

        {/* ── PI CARD ── */}
        <GroupLabel label="Principal Investigator" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden max-w-3xl mx-auto shadow-md hover:shadow-lg transition-shadow"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-primary/8 to-secondary/10 border border-primary/30 group-hover:from-primary/22 transition-colors" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/6 rounded-full blur-2xl" />

          <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0 flex flex-col items-center gap-3">
              {/* Real PI photo */}
              <img
                src={piPhoto}
                alt={pi.name}
                className="w-32 h-32 rounded-full object-cover object-top border-4 border-primary/30 group-hover:border-primary/60 shadow-lg group-hover:scale-105 transition-all duration-500"
              />
              <div className="flex flex-col items-center gap-1.5">
                {pi.awards.map(a => (
                  <span key={a} className="flex items-center gap-1 text-[9px] font-mono text-primary/80 uppercase tracking-wider">
                    <Award className="w-3 h-3 text-secondary" /> {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <span className="text-[10px] font-mono tracking-widest text-primary uppercase mb-1 block">{pi.role}</span>
              <h3 className="text-2xl font-bold text-foreground mb-1 tracking-tight group-hover:text-primary transition-colors">{pi.name}</h3>
              <p className="text-sm text-secondary font-mono mb-4">{pi.position}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{pi.desc}</p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-5">
                {pi.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-primary border border-primary/30 px-3 py-1 rounded-full uppercase tracking-wider bg-primary/6">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-5 justify-center md:justify-start pt-4 border-t border-primary/15">
                <a href={`mailto:${pi.email}`} className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                  <Mail className="w-3.5 h-3.5" /> {pi.email}
                </a>
                <a href={pi.orcid} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                  <ExternalLink className="w-3.5 h-3.5" /> ORCID
                </a>
                <a href={pi.scholar} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                  <ExternalLink className="w-3.5 h-3.5" /> Scholar
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── RESEARCH SCHOLARS ── */}
        <GroupLabel label="Research Scholars" sub="PhD students pursuing funded research fellowships" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {scholars.map((member, i) => (
            <ScholarCard key={member.name} member={member as Member} i={i} />
          ))}
        </div>

        {/* ── POSTDOCTORAL FELLOWS ── */}
        <GroupLabel label="Postdoctoral Fellows" sub="Nationally funded researchers driving independent projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {postdocs.map((member, i) => (
            <PostdocCard key={member.name} member={member as Member} i={i} />
          ))}
        </div>

        {/* ── PROJECT ASSOCIATE ── */}
        <GroupLabel label="Project Associate" />
        <div className="max-w-xs mx-auto">
          {associates.map((member, i) => (
            <ScholarCard key={member.name} member={member as Member} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
