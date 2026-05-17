import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, MessageSquare, Ship, BrainCircuit, Loader2, Send } from 'lucide-react';
import { useState } from 'react';
import { reviewCode } from '../../services/geminiService';
import { cn } from '../../lib/utils';

const projects = [
  {
    title: 'Real-Time Chat Application',
    description: 'Built a real-time chat application using MERN Stack and Socket.io with authentication, instant messaging, and responsive UI.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/mdsalmangousqadri13/Chat-App-Client',
    live: 'https://chat-app-client-5fw7.vercel.app/login',
    icon: MessageSquare,
  },
  {
    title: 'Live Tracker',
    description: 'A real-time live location tracker built using Node.js, Express.js, Socket.io, and EJS. This project allows users to share their live location, which updates dynamically on a map without page refresh.',
    image: 'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/3:2/w_2560%2Cc_limit/GoogleMapTA.jpg',
    tech: ['React.js', 'Node.js', 'Express.js'],
    github: 'https://github.com/mdsalmangousqadri13/Live-Tracker',
    live: 'https://live-tracker-ebon.vercel.app/',
    icon: Ship,
  },
  {
    title: 'AI Code Review Platform',
    description: 'An AI-powered code review platform where users can paste code and get intelligent feedback using Gemini API.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tech: ['React.js', 'Node.js', 'Gemini API', 'Express.js'],
    github: 'https://github.com/mdsalmangousqadri13/Code-Review-Frontend',
    live: 'https://code-review-frontend-rho.vercel.app/',
    icon: BrainCircuit,
    isFeature: true,
  },
];

export default function Projects() {
  const [code, setCode] = useState('// Paste code here to see AI magic...\nfunction hello() {\n  console.log("Hello World");\n}');
  const [review, setReview] = useState<string | null>(null);
  const [isReviewing, setIsReviewing] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) return;
    setIsReviewing(true);
    try {
      const result = await reviewCode(code);
      setReview(result || "No review returned.");
    } catch (err) {
      setReview("Failed to get review. Please check your API key.");
    } finally {
      setIsReviewing(false);
    }
  };

  return (
    <div className="section-padding bg-zinc-950/50">
      <div className="max-w-7xl mx-auto space-y-16">

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl">
              A selection of my best work, including full-stack applications and AI-driven platforms.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative flex flex-col bg-zinc-900/50 rounded-3xl border border-zinc-800/50 overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60" />
                <div className="absolute top-4 right-4 p-2 bg-zinc-950/80 backdrop-blur-md rounded-full border border-zinc-700">
                  <project.icon className="w-5 h-5 text-indigo-400" />
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex-grow flex flex-col space-y-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-zinc-800 text-zinc-300 rounded-md font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 mt-auto">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors ml-4">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive AI Code Review Feature Mockup/Demo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 lg:p-px rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-zinc-800 to-cyan-500/20"
        >
          <div className="bg-zinc-950 rounded-[2rem] p-8 lg:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <BrainCircuit size={300} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-400 font-mono">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  AI POWERED
                </div>
                <h3 className="text-4xl font-bold text-white tracking-tight">Try the AI Code Reviewer</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  This is a live demo of my AI Code Review platform. Paste any snippet below and let Gemini analyze it for you in real-time.
                </p>
                <div className="pt-4 flex flex-col gap-4">
                  <div className="p-1 rounded-2xl bg-zinc-900 border border-zinc-800 focus-within:border-indigo-500/50 transition-colors">
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-48 bg-transparent p-4 font-mono text-xs text-zinc-300 resize-none outline-none"
                      placeholder="Enter your code snippet here..."
                    />
                  </div>
                  <button
                    onClick={handleReview}
                    disabled={isReviewing}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-2xl font-bold transition-all shadow-xl shadow-indigo-600/20 group"
                  >
                    {isReviewing ? <Loader2 className="animate-spin" /> : <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    {isReviewing ? 'Analyzing Code...' : 'Execute AI Review'}
                  </button>
                </div>
              </div>

              <div className="h-full min-h-[300px]">
                <div className="h-full p-px rounded-3xl bg-zinc-800/50">
                  <div className="h-full bg-zinc-900/30 backdrop-blur-sm rounded-3xl p-6 font-mono text-sm overflow-y-auto max-h-[500px]">
                    {review ? (
                      <div className="prose prose-invert prose-sm max-w-none">
                        <pre className="whitespace-pre-wrap text-zinc-300">{review}</pre>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                        <Code2 size={40} className="text-zinc-600" />
                        <p>Waiting for analysis output...</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
