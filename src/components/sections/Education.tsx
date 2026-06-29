import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  grade?: string;
  percentage?: string;
};

const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    institution: 'I.K. Guzral Punjab Technical University',
    duration: '2022 - 2026',
    // grade: 'GPA: 8.5/10',
    description: 'Specialized in Full Stack Development and Software Engineering principles. Core coursework included Data Structures, Algorithms, DBMS, and OS.',
  },
  {
    degree: 'Intermediate',
    institution: 'K.K.M College, Jamui',
    duration: '2019 - 2021',
    // percentage: '68.8%',
    description: 'Completed Intermediate (Science with Mathematics), building a strong foundation in analytical thinking and problem-solving while exploring technology and software development.',
  },
];

export default function Education() {
  return (
    <div className="section-padding bg-zinc-950/50">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Education</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 lg:p-12 rounded-[2.5rem] border-zinc-800/50 flex flex-col md:flex-row gap-8 items-start hover:border-indigo-500/30 transition-colors"
            >
              <div className="p-4 bg-indigo-500/10 rounded-2xl">
                <GraduationCap size={40} className="text-indigo-400" />
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <span className="px-4 py-1 bg-zinc-900 rounded-full text-xs text-zinc-400 border border-zinc-800 font-mono">
                      <Calendar size={12} className="inline mr-2" />
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-indigo-400 font-medium">{edu.institution}</p>
                </div>

                {(edu.grade || edu.percentage) && (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold font-mono bg-emerald-500/5 border border-emerald-500/10 px-3.5 py-1 rounded-xl w-fit">
                    <BookOpen size={14} />
                    <span>{edu.grade || `Percentage: ${edu.percentage}`}</span>
                  </div>
                )}

                <p className="text-zinc-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
