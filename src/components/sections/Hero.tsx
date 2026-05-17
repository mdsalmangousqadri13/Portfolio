import { motion } from 'motion/react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = ["MERN Stack Developer", "Full Stack Developer", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div className="relative min-h-screen flex items-center section-padding pt-32 lg:pt-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-400 font-mono tracking-widest text-sm uppercase"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-gradient">MD Salman Gous Qadri</span>
            </h1>
            <div className="h-12 flex items-center">
              <span className="text-2xl sm:text-3xl font-medium text-zinc-400">
                {displayText}
                <span className="inline-block w-[2px] h-[30px] bg-indigo-500 ml-1 animate-pulse" />
              </span>
            </div>
          </div>

          <p className="max-w-lg text-zinc-400 text-lg leading-relaxed">
            Recent B.Tech Computer Science graduate and MERN Stack Developer with practical experience in developing full-stack web applications. Strong foundation in frontend and backend technologies with hands-on experience in authentication, REST APIs, real-time applications, and database management. Passionate about continuous learning and creating impactful digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-white rounded-full font-medium transition-all flex items-center gap-2"
            >
              Hire Me
            </a>
            <a
              href="/Salman-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Animated Sphere Core */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-[80px]" />
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-indigo-500/30 rounded-full"
            />
            
            {/* User Picture behind Terminal */}
            <div className="absolute inset-10 rounded-full overflow-hidden opacity-40 blur-[2px] grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
              <img src="/Salman.png" alt="" className="w-full h-full object-cover" />
            </div>

            {/* Terminal Window Mockup */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="w-full glass rounded-xl border border-zinc-700/50 shadow-2xl overflow-hidden">
                <div className="bg-zinc-900/80 px-4 py-2 border-b border-zinc-800 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="ml-4 text-[10px] text-zinc-500 font-mono">portfolio.js</div>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <p><span className="text-zinc-500">1</span> <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                  <p><span className="text-zinc-500">2</span>   name: <span className="text-green-400">'Salman'</span>,</p>
                  <p><span className="text-zinc-500">3</span>   location: <span className="text-green-400">'India'</span>,</p>
                  <p><span className="text-zinc-500">4</span>   skills: [<span className="text-yellow-400">'React'</span>, <span className="text-yellow-400">'Node'</span>, <span className="text-yellow-400">'MongoDB'</span>],</p>
                  <p><span className="text-zinc-500">5</span>   passion: <span className="text-green-400">'Building Awesome Apps'</span></p>
                  <p><span className="text-zinc-500">6</span> &#125;;</p>
                  <p><span className="text-zinc-500">7</span> </p>
                  <motion.p
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  ><span className="text-zinc-500">8</span> <span className="text-indigo-400">|</span></motion.p>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 p-4 glass rounded-2xl border border-indigo-500/20"
            >
              <div className="w-8 h-8 text-indigo-400">
                <Terminal />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
