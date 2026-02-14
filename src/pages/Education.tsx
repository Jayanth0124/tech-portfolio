import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in ECE / CSE',
      institution: 'Global Institute of Technology',
      period: '2021 - 2025',
      grade: '8.5 CGPA',
      description: 'Specializing in the intersection of electronics and high-performance computing. Focused on embedded AI and IoT architecture.',
      icon: GraduationCap
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'St. Mary\'s Junior College',
      period: '2019 - 2021',
      grade: '95%',
      description: 'Major in Mathematics, Physics, and Chemistry. Developed a strong foundation in analytical thinking and core sciences.',
      icon: Award
    },
    {
      degree: 'Secondary School (SSC)',
      institution: 'Public Model School',
      period: '2018 - 2019',
      grade: '9.8 GPA',
      description: 'Completed basic schooling with honors, excelling in Mathematics and Information Technology.',
      icon: Award
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle
        title="Academic Path"
        subtitle="Education"
      />

      <div className="max-w-4xl mx-auto space-y-12">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group"
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <item.icon className="w-32 h-32" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-lg font-medium text-foreground/80">{item.institution}</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 rounded-xl bg-muted flex items-center space-x-2 shrink-0">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{item.period}</span>
                </div>
              </div>

              <div className="mb-6 inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                Grade: {item.grade}
              </div>

              <p className="text-foreground/60 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
