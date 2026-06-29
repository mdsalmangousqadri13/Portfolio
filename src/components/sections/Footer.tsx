import { Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="space-y-4 text-center md:text-left">
          <a href="#hero" className="flex items-center justify-center md:justify-start gap-2">
            <img
              src="/MSGQ Logo.png"
              alt="MSGQ Logo"
              className="h-14 w-auto object-contain hover:scale-105 active:scale-95 transition-transform duration-200"
            />
          </a>
          <p className="text-zinc-500 text-sm max-w-xs uppercase tracking-widest font-mono">
            Turning ideas into scalable digital experiences.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/mdsalmangousqadri13"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Github size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/mdsalmangous/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin size={25} />
            </a>
          </div>
          <div className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-mono">
            Designed & Developed by MD Salman Gous Qadri
            <br />
            <a href="/Salman-Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors underline underline-offset-4 mt-2 inline-block">View Resume</a>
          </div>
        </div>

        <div className="text-zinc-500 text-sm font-mono text-center md:text-right space-y-2">
          <p>&copy; {currentYear} Salman Gous. All rights reserved.</p>
          <p className="flex items-center justify-center md:justify-end gap-1 text-[10px]">
            MADE WITH <Heart size={10} className="text-red-500 fill-red-500" /> IN INDIA
          </p>
        </div>

      </div>
    </footer>
  );
}
