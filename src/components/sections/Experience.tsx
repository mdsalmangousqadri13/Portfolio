import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'IPage UM Service',
    duration: 'Oct 2025 - Jan 2026',
    location: 'Hyderabad, Telangana',
    description: [
      'Developed Tapaal, a full-stack MERN application using MongoDB, Express.js, React.js, and Node.js.',
      'Implemented AWS Lambda (serverless computing) to handle backend functionalities and optimize performance.',
      'Built secure authentication and API integration for seamless user management and data flow',
      'Designed a responsive and user-friendly interface with focus on scalability and better user experience.'
    ],
  },
];

export default function Experience() {
  return (
    <div className="section-padding bg-zinc-950">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Work Experience</h2>
            <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-4" />
          </motion.div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-zinc-800 space-y-6"
            >
              {/* Timeline Marker */}
              <div className="absolute top-0 left-[-8px] w-4 h-4 bg-indigo-500 rounded-full border-4 border-zinc-950 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <span className="flex items-center gap-2 text-indigo-400 text-sm font-mono">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Briefcase size={14} />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-3 text-zinc-400 leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
