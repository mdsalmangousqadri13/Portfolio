import { motion } from 'motion/react';
import {
  FileCode,
  Layers,
  Database,
  Wrench,
  CheckCircle2,
  Container
} from 'lucide-react';
import { cn } from '../../lib/utils';

const skillCategories = [
  {
    title: 'Frontend',
    icon: FileCode,
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 80 },
    ]
  },
  {
    title: 'Backend',
    icon: Layers,
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST API', level: 90 },
      { name: 'JWT Auth', level: 85 },
      { name: 'API Integration', level: 90 },
    ]
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'DynamoDB', level: 90 },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Container,
    skills: [
      { name: 'AWS Lambda', level: 85 },
      { name: 'AWS API Gateway', level: 90 },
    ]
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'Socket.io', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Docker', level: 70 },
      { name: 'EmailJS', level: 70 },
      { name: 'eXCEL', level: 95 },
    ]
  }
];

const categoryColors = [
  { text: "text-indigo-400", bg: "bg-indigo-500/10", bar: "bg-indigo-500", check: "text-indigo-500" }, // Frontend
  { text: "text-cyan-400", bg: "bg-cyan-500/10", bar: "bg-cyan-500", check: "text-cyan-500" },       // Backend
  { text: "text-emerald-400", bg: "bg-emerald-500/10", bar: "bg-emerald-500", check: "text-emerald-500" }, // Database
  { text: "text-amber-400", bg: "bg-amber-500/10", bar: "bg-amber-400", check: "text-amber-500" },   // Cloud & DevOps (AWS Amber)
  { text: "text-purple-400", bg: "bg-purple-500/10", bar: "bg-purple-500", check: "text-purple-500" }, // Tools & Others
];

export default function Skills() {
  return (
    <div className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto space-y-16">

        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              My core competencies across different technologies and tools that I use to bring ideas to life.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const colors = categoryColors[catIdx] || categoryColors[0];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1 }}
                className="glass p-8 rounded-3xl border-zinc-800/50 space-y-6"
              >
                <div className="flex items-center gap-4 border-b border-zinc-800 pb-4">
                  <div className={cn("p-3 rounded-2xl", colors.bg)}>
                    <category.icon size={24} className={colors.text} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-zinc-300 font-medium flex items-center gap-2">
                          <CheckCircle2 size={14} className={colors.check} />
                          {skill.name}
                        </span>
                        <span className="font-mono text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + skillIdx * 0.1 }}
                          className={cn(
                            "h-full rounded-full transition-all duration-1000",
                            colors.bar
                          )}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
