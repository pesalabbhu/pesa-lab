import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Beaker } from 'lucide-react';
import creativeBg from '@assets/A_creative_photo_for_background_1778136910327.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Full-bleed DNA photo — prominent right panel */}
      <div className="absolute inset-y-0 right-0 w-[52%] overflow-hidden hidden lg:block">
        <img
          src={creativeBg}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Gradient mask fading left so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
      </div>

      {/* Full-bleed for mobile — very subtle tint */}
      <div className="absolute inset-0 lg:hidden overflow-hidden">
        <img
          src={creativeBg}
          alt=""
          className="w-full h-full object-cover object-right opacity-15"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      {/* Soft colour blobs */}
      <div className="absolute top-1/4 left-1/4 w-[28vw] h-[28vw] bg-primary/6 rounded-full blur-[130px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Beautifully Redesigned Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-primary/5 border border-primary/15 backdrop-blur-md mb-8 shadow-sm"
          >
            {/* Live Indicator Dot */}
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            
            {/* Two-Line Architecture with Full-Length Text */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-mono font-bold tracking-[0.15em] text-primary uppercase leading-tight">
                Banaras Hindu University
              </span>
              <span className="text-[10px] font-mono font-medium tracking-[0.12em] text-muted-foreground uppercase mt-1">
                Department of Botany
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[1.1]"
          >
            Decoding <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stress.</span><br />
            Designing Resilience.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A multidisciplinary plant science lab at BHU — decoding how crops respond to environmental stress and engineering them to thrive despite it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#research"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest uppercase text-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-primary/20"
              style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
            >
              <Beaker className="w-4 h-4" />
              Explore Research
            </a>
            <a
              href="#collaborate"
              className="w-full sm:w-auto px-8 py-4 bg-foreground/5 border border-foreground/15 text-foreground font-bold tracking-widest uppercase text-sm hover:bg-foreground/10 transition-all flex items-center justify-center gap-3 group"
              style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
            >
              Work With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
    </section>
  );
}
