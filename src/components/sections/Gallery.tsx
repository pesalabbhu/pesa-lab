import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gallery1 from '@assets/Gallery_1_1778132846904.jpeg';
import gallery2 from '@assets/Gallery_2_new_1778137090597.jpg';
import gallery3 from '@assets/Gallery_3_1778132846904.jpg';
import gallery4 from '@assets/Gallery_4_1778132846904.jpg';
import gallery6 from '@assets/Gallery_6_1778132861903.jpg';

const slides = [
  {
    id: 1,
    photo: gallery1,
    title: 'Prashasti at In Vitro Biology Meeting, USA',
    desc: 'Ms. Prashasti Pandey presenting her research at the 2025 In Vitro Biology Meeting, Society for In Vitro Biology — Norfolk, Virginia, USA.',
    tag: 'International Conference',
  },
  {
    id: 2,
    photo: gallery2,
    title: 'International Conference on Ecosystem Functioning & Sustainability, BHU',
    desc: 'PESA Lab actively participated and helped in organising the International Conference on "Ecosystem Functioning and Sustainability in Changing Environment" organised by Department of Botany, Banaras Hindu University.',
    tag: 'Conference · BHU',
  },
  {
    id: 3,
    photo: gallery3,
    title: "Mr. Shivam's Poster at ICEFSCE 2025",
    desc: 'Mr. Shivam presented poster at the International Conference on "Ecosystem Functioning and Sustainability in Changing Environment 2025" organised by Department of Botany, Banaras Hindu University.',
    tag: 'Poster Presentation',
  },
  {
    id: 4,
    photo: gallery4,
    title: "Ms. Garima's Poster at ICEFSCE 2025",
    desc: 'Ms. Garima presented poster at the International Conference on "Ecosystem Functioning and Sustainability in Changing Environment 2025" organised by Department of Botany, Banaras Hindu University.',
    tag: 'Poster Presentation',
  },
  {
    id: 5,
    photo: gallery6,
    title: 'PESA Lab at PTCA 46th Annual Meeting, Goa',
    desc: 'PESA Lab members at the 46th Annual Meeting of PTCA (India) & Symposium on Current Trends in Plant Biotechnology, BITS Pilani Goa Campus, 2025.',
    tag: 'Conference · Goa',
  },
];

const tagColors: Record<string, string> = {
  'International Conference': 'text-blue-700 bg-blue-50 border-blue-200',
  'Conference · BHU': 'text-primary bg-primary/10 border-primary/20',
  'Poster Presentation': 'text-secondary bg-secondary/10 border-secondary/20',
  'Conference · Goa': 'text-amber-700 bg-amber-50 border-amber-200',
};

const variants = {
  enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
};

export function Gallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + slides.length) % slides.length);
  }, []);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  return (
    <section id="gallery" className="py-24 relative border-b border-border bg-accent/10 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="font-mono text-sm tracking-widest text-primary uppercase">Lab Life</span>
            <span className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Faces &amp; Moments</h2>
          <p className="text-muted-foreground mt-3 text-sm font-mono tracking-wide">
            Drag to swipe or use arrows · {slides.length} photos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="relative h-[460px] md:h-[520px] overflow-hidden border border-border shadow-xl bg-card">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) go(1);
                    else if (info.offset.x > 60) go(-1);
                  }}
                  className="absolute inset-0 flex flex-col cursor-grab active:cursor-grabbing select-none"
                >
                  <div className="flex-1 relative overflow-hidden">
                    <img
                      src={slides[current].photo}
                      alt={slides[current].title}
                      className="w-full h-full object-cover object-center"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 border rounded-full backdrop-blur-sm bg-white/80 ${tagColors[slides[current].tag] ?? 'text-primary bg-primary/10 border-primary/20'}`}>
                        {slides[current].tag}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-mono text-white/90 bg-black/40 backdrop-blur-sm border border-white/20 px-2 py-1 rounded-full">
                        {current + 1} / {slides.length}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-card border-t border-border shrink-0">
                    <h3 className="text-base font-bold text-foreground mb-1 tracking-tight leading-snug">{slides[current].title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{slides[current].desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => go(-1)}
              className="absolute left-0 top-[calc(50%-24px)] -translate-x-5 md:-translate-x-6 w-11 h-11 bg-card/95 backdrop-blur-sm border border-border shadow-md flex items-center justify-center hover:bg-accent hover:border-primary/40 hover:text-primary transition-all z-20 group"
              style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-0 top-[calc(50%-24px)] translate-x-5 md:translate-x-6 w-11 h-11 bg-card/95 backdrop-blur-sm border border-border shadow-md flex items-center justify-center hover:bg-accent hover:border-primary/40 hover:text-primary transition-all z-20 group"
              style={{ clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)' }}
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => goTo(i)}
                className={`shrink-0 w-16 h-12 overflow-hidden border-2 transition-all duration-200 ${
                  i === current ? 'border-primary shadow-md scale-105' : 'border-border opacity-60 hover:opacity-100'
                }`}
              >
                <img src={slide.photo} alt={slide.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
