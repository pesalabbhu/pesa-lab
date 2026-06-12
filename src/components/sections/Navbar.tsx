import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, FlaskConical, Users, BookOpen, Newspaper, Microscope, TrendingDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import pesaLogo from '@assets/bg_rem_ppt_logo_1778087211376.png';
import bhuLogo from '@assets/BHU_Logo_new_1778136945966.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Lab',    href: '#about',        icon: <FlaskConical className="w-3 h-3" /> },
    { name: 'Research',   href: '#research',      icon: <Microscope className="w-3 h-3" /> },
    { name: 'The Stakes', href: '#impact',        icon: <TrendingDown className="w-3 h-3" /> },
    { name: 'Our Team',   href: '#team',          icon: <Users className="w-3 h-3" /> },
    { name: 'Papers',     href: '#publications',  icon: <BookOpen className="w-3 h-3" /> },
    { name: 'News',       href: '#news',          icon: <Newspaper className="w-3 h-3" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Slim institution bar */}
      <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-7 opacity-100'} bg-primary/95 backdrop-blur-sm`}>
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={bhuLogo} alt="BHU" className="h-4 w-auto object-contain brightness-200 opacity-80" />
            <span className="text-[9px] font-mono tracking-widest text-primary-foreground/80 uppercase hidden sm:block">
              Department of Botany · Banaras Hindu University · Varanasi
            </span>
            <span className="text-[9px] font-mono tracking-widest text-primary-foreground/80 uppercase sm:hidden">
              Dept. of Botany · BHU
            </span>
          </div>
          <a href="mailto:deepakkumar@bhu.ac.in" className="text-[9px] font-mono text-primary-foreground/70 hover:text-primary-foreground transition-colors tracking-wider hidden md:block">
            deepakkumar@bhu.ac.in
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className={`transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-border shadow-sm shadow-primary/5'
          : 'bg-background/80 backdrop-blur-sm border-border/50'
      }`}>
        <div className="container mx-auto px-6 h-[60px] flex items-center justify-between gap-6">
          {/* Logos */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src={pesaLogo}
              alt="PESA Lab"
              className="h-12 w-auto max-w-[180px] object-contain group-hover:opacity-85 transition-opacity"
            />
            <div className="hidden lg:block w-[1px] h-8 bg-border/60" />
            <img
              src={bhuLogo}
              alt="BHU"
              className="hidden lg:block h-8 w-auto max-w-[80px] object-contain opacity-70 group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -1 }}
                className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/65 hover:text-primary hover:bg-primary/5 transition-colors uppercase tracking-widest whitespace-nowrap group rounded-sm"
              >
                <span className="text-primary/50 group-hover:text-primary transition-colors">{link.icon}</span>
                {link.name}
                <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </motion.a>
            ))}
            <div className="w-[1px] h-5 bg-border mx-1" />
            <motion.a
              href="#collaborate"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors uppercase tracking-widest whitespace-nowrap shadow-md shadow-primary/20 rounded-sm"
            >
              <Phone className="w-3 h-3" />
              Work With Us
            </motion.a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground/70 hover:text-primary ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border p-5 flex flex-col gap-2 shadow-lg"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors py-2.5 px-3 border-b border-border uppercase tracking-widest rounded-sm group"
              >
                <span className="text-primary/60 group-hover:text-primary transition-colors">{link.icon}</span>
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#collaborate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 font-bold text-primary-foreground bg-primary hover:bg-primary/90 transition-colors uppercase tracking-widest shadow-sm rounded-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Work With Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
