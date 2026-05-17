import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="space-y-4 text-center md:text-left">
          <div className="text-xl font-bold tracking-tighter flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm">JS</span>
            <span>Developer Portfolio</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs uppercase tracking-widest font-mono">
            Crafting digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-indigo-400 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-zinc-500 hover:text-indigo-400 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-zinc-500 hover:text-indigo-400 transition-colors"><Twitter size={20} /></a>
          </div>
          <div className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-mono">
            Designed & Built by MD Salman Gous Qadri
            <br />
            <a href="/Salman-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors underline underline-offset-4 mt-2 inline-block">View Resume</a>
          </div>
        </div>

        <div className="text-zinc-500 text-sm font-mono text-center md:text-right space-y-2">
          <p>&copy; {currentYear} ALL RIGHTS RESERVED</p>
          <p className="flex items-center justify-center md:justify-end gap-1 text-[10px]">
            MADE WITH <Heart size={10} className="text-red-500 fill-red-500" /> IN INDIA
          </p>
        </div>

      </div>
    </footer>
  );
}
