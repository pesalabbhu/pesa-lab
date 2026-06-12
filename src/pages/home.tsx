import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { LabCoverPhoto } from '@/components/sections/LabCoverPhoto';
import { About } from '@/components/sections/About';
import { ResearchThemes } from '@/components/sections/ResearchThemes';
import { StressExplorer } from '@/components/sections/StressExplorer';
import { Team } from '@/components/sections/Team';
import { Gallery } from '@/components/sections/Gallery';
import { Publications } from '@/components/sections/Publications';
import { News } from '@/components/sections/News';
import { JoinUs } from '@/components/sections/JoinUs';
import { Footer } from '@/components/sections/Footer';
import { BotanicalBackground } from '@/components/sections/BotanicalBackground';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground selection:bg-primary/20 relative overflow-x-hidden">
      <BotanicalBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <LabCoverPhoto />
          <About />
          <ResearchThemes />
          <StressExplorer />
          <Team />
          <Gallery />
          <Publications />
          <News />
          <JoinUs />
        </main>
        <Footer />
      </div>
    </div>
  );
}
