import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'glass py-2 border-zinc-800/50 shadow-lg' : 'bg-transparent py-3.5'
      )}
    >
      <div className="w-full pl-4 pr-6 sm:px-12 lg:px-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter ml-0 md:ml-9"
        >
          <a href="#hero" className="flex items-center gap-2">
            <img
              src="/MSGQ Logo.png"
              alt="MSGQ Logo"
              className="h-12 w-auto object-contain hover:scale-105 active:scale-95 transition-transform duration-200"
            />
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.endsWith('.pdf') ? '_blank' : undefined}
              rel={link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-zinc-400 hover:text-indigo-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pl-4 border-l border-zinc-800"
          >
            <a href="https://github.com/mdsalmangousqadri13" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mdsalmangous/" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => handleMobileClick(e, link.href)}
                  className="text-sm py-2 text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-zinc-800">
                <a 
                  href="https://github.com/mdsalmangousqadri13" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mdsalmangous/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:salmanjmu13@gmail.com" 
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
