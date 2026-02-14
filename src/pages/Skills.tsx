import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { Cpu, Code, Settings, Database, Layers, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Electronics & Hardware',
      subtitle: 'Circuits & Embedded',
      icon: Cpu,
      skills: [
        { name: 'Embedded Systems', level: 90, icon: Cpu },
        { name: 'PCB Design', level: 85, icon: Layers },
        { name: 'Sensors & Actuators', level: 88, icon: Settings },
        { name: 'Arduino / ESP32', level: 95, icon: Terminal },
        { name: 'Circuit Design', level: 82, icon: Layers },
      ]
    },
    {
      title: 'Software & Programming',
      subtitle: 'Code & Logic',
      icon: Code,
      skills: [
        { name: 'C / C++', level: 92, icon: Terminal },
        { name: 'Python', level: 90, icon: Terminal },
        { name: 'JavaScript', level: 85, icon: Terminal },
        { name: 'React', level: 80, icon: Code },
        { name: 'Node.js', level: 75, icon: Database },
      ]
    },
    {
      title: 'Tools & Platforms',
      subtitle: 'Environments',
      icon: Settings,
      skills: [
        { name: 'Git & GitHub', level: 90, icon: Terminal },
        { name: 'Arduino IDE', level: 95, icon: Settings },
        { name: 'MATLAB', level: 70, icon: Terminal },
        { name: 'Keil', level: 75, icon: Settings },
        { name: 'Linux', level: 80, icon: Terminal },
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle
        title="Technical Expertise"
        subtitle="Skills"
        centered
      />

      <div className="space-y-24">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <div className="flex items-center space-x-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold">{category.title}</h3>
                <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{category.subtitle}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Visual background elements */}
      <div className="fixed top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </div>
  );
};

export default Skills;
