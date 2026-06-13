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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Lab',    href: '#about',        icon: <FlaskConical className="w-3 h-3" /> },
    { name: 'Research',   href: '#research',      icon: <Microscope className="w-3 h-3" /> },
    { name: 'The Stakes', href: '#impact',        icon: <TrendingDown className="w-3 h-3" /> },
    { name: 'Our Team',   href: '#team',          icon: <Users className="w-3 h-3" /> },
    { name: 'Publications',     href: '#publications',  icon: <BookOpen className="w-3 h-3" /> },
    { name: 'News',       href: '#news',          icon: <Newspaper className="w-3 h-3" /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar wrapper */}
      <div className={`transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-border shadow-sm shadow-primary/5 py-2'
          : 'bg-background/90 backdrop-blur-sm border-border/40 py-4'
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between gap-6">
          
          {/* Brand Identity Layout Area */}
          <Link href="/" className="flex items-center gap-4 shrink-0 group">
            {/* Main PESA Lab Logo */}
            <img
              src={pesaLogo}
              alt="PESA Lab"
              className="h-12 w-auto max-w-[180px] object-contain group-hover:opacity-85 transition-opacity"
            />
            
            {/* Elegant Minimal Divider */}
            <div className="hidden lg:block w-[1px] h-10 bg-border/80" />
            
            {/* Institutional Logo Area (Increased Size, Text Removed) */}
            <div className="flex items-center">
              <img
                src={bhuLogo}
                alt="BHU"
                className="hidden lg:block h-14 w-auto object-contain transition-opacity"
              />
            </div>
          </Link>

          {/* Desktop Navigation Link Cluster */}
          <nav className="hidden xl:flex items-center gap-1 ml-auto">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -1 }}
                className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-foreground/75 hover:text-primary hover:bg-primary/5 transition-colors uppercase tracking-widest whitespace-nowrap group rounded-sm"
              >
                <span className="text-primary/60 group-hover:text-primary transition-colors">{link.icon}</span>
                {link.name}
                <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </motion.a>
            ))}
            <div className="w-[1px] h-5 bg-border mx-2" />
            <motion.a
              href="#collaborate"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-primary-foreground bg-primary hover:bg-primary/95 transition-colors uppercase tracking-widest whitespace-nowrap shadow-sm rounded-sm"
            >
              <Phone className="w-3 h-3" />
              Work With Us
            </motion.a>
          </nav>

          {/* Mobile Display Controls Toggle */}
          <button
            className="xl:hidden text-foreground/70 hover:text-primary ml-auto p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="xl:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-2 shadow-xl"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-xs font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors py-3 px-3 border-b border-border/50 uppercase tracking-widest rounded-sm group"
              >
                <span className="text-primary/70 group-hover:text-primary transition-colors">{link.icon}</span>
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#collaborate"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 text-center px-5 py-3 text-xs font-bold text-primary-foreground bg-primary hover:bg-primary/95 transition-colors uppercase tracking-widest rounded-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-3 h-3" /> Work With Us
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
