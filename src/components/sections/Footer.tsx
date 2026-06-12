import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import pesaLogo from '@assets/bg_rem_ppt_logo_1778087211376.png';
import bhuLogo from '@assets/BHU_Logo_new_1778136945966.png';
import circularLogo from '@assets/circular_logo_1778132799196.png';

export function Footer() {
  return (
    <footer className="bg-foreground/[0.03] border-t border-border pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 md:col-span-2">
            {/* Logo group */}
            <div className="flex items-center gap-4 mb-6">
              <img src={circularLogo} alt="PESA Lab Circular Logo" className="h-12 w-auto object-contain" />
              <div className="w-[1px] h-10 bg-border/60" />
              <img src={pesaLogo} alt="PESA Lab" className="h-12 w-auto object-contain" />
              <div className="w-[1px] h-10 bg-border/60" />
              <img src={bhuLogo} alt="BHU" className="h-10 w-auto object-contain opacity-70" />
            </div>
            <p className="text-muted-foreground max-w-sm mb-2 leading-relaxed text-sm">
              Plant Engineering and Stress Adaptomics Lab<br />
              Department of Botany, Banaras Hindu University.
            </p>
            <p className="text-xs font-mono text-primary/70 italic mb-6">"Decoding Stress. Designing Resilience."</p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://scholar.google.com/citations?user=Fttx__kAAAAJ&hl=en" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all border border-border hover:border-primary/30">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-foreground mb-6 uppercase tracking-wider text-sm font-bold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">The Lab</a></li>
              <li><a href="#research" className="text-muted-foreground hover:text-primary transition-colors text-sm">Research</a></li>
              <li><a href="#team" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Team</a></li>
              <li><a href="#publications" className="text-muted-foreground hover:text-primary transition-colors text-sm">Publications</a></li>
              <li><a href="#news" className="text-muted-foreground hover:text-primary transition-colors text-sm">News &amp; Events</a></li>
              <li><a href="#collaborate" className="text-muted-foreground hover:text-primary transition-colors text-sm">Work With Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-foreground mb-6 uppercase tracking-wider text-sm font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  Department of Botany,<br />
                  Institute of Science, BHU,<br />
                  Varanasi, UP 221005, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:deepakkumar@bhu.ac.in" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  deepakkumar@bhu.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} PESA Lab, Banaras Hindu University. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-mono text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> plantadaptomicslab.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
