import { motion } from 'motion/react';
import { User, Code2, Rocket, Brain } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 'Fresh', icon: Rocket },
  { label: 'Projects Completed', value: '10+', icon: Code2 },
  { label: 'Tech Stacks', value: '3+', icon: Brain },
];

export default function About() {
  return (
    <div className="section-padding bg-zinc-950/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image/Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative aspect-square max-w-md mx-auto z-10">
            <div className="absolute inset-0 bg-indigo-600/20 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500" />
            <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
              {/* Placeholder for real image */}
              <div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/Salman.png"
                  alt="MD Salman Gous Qadri"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
        </motion.div>

        {/* Content Side */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Passionate about Building <span className="text-indigo-400">Digital Solutions</span>
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded-full" />

            <p className="text-zinc-400 leading-relaxed text-lg">
              I am a B.Tech CSE Graduate with a strong passion for Full Stack Development. My journey into coding began with a curiosity for how the web works, leading me to master the MERN stack.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              I specialize in building responsive, high-performance applications using React.js, Node.js, and MongoDB. I thrive on solving complex problems and turning ideas into functional, beautiful digital realities. Whether it's crafting intuitive UI or architecting robust backends, I bring a detail-oriented approach to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl border-zinc-800/50 flex flex-col items-center text-center space-y-2 group hover:border-indigo-500/50 transition-colors"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                  <stat.icon size={20} className="text-indigo-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
