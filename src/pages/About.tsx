import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { BookOpen, MapPin, Heart, Code, Cpu, Brain, Rocket, Smartphone } from 'lucide-react';

const About = () => {
  const interests = [
    { name: 'Embedded Systems', icon: Cpu },
    { name: 'IoT', icon: Globe },
    { name: 'AI & ML', icon: Brain },
    { name: 'Web Development', icon: Code },
    { name: 'Robotics', icon: Rocket },
    { name: 'Mobile Apps', icon: Smartphone },
  ];

  const journey = [
    {
      year: '2022',
      title: 'The Spark',
      description: 'Discovered the fascinating world of microcontrollers and basic circuits.',
      icon: Cpu
    },
    {
      year: '2023',
      title: 'Coding Odyssey',
      description: 'Mastered C++ and Python while building my first IoT projects.',
      icon: Code
    },
    {
      year: '2024',
      title: 'Deep Learning',
      description: 'Integrated AI models into embedded hardware for real-time edge computing.',
      icon: Brain
    },
    {
      year: '2025',
      title: 'Present',
      description: 'Building production-ready hardware-software fusion projects.',
      icon: Rocket
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle
        title="Who I Am"
        subtitle="About Me"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
            <img
              src="https://picsum.photos/id/64/800/800"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary/10 rounded-3xl -z-10 translate-x-2 translate-y-2"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-20"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-display font-bold">
            Hi, I'm <span className="text-primary">FusionEdge</span>, a multidisciplinary engineer.
          </h3>
          <p className="text-lg text-foreground/70 leading-relaxed">
            I am a student specializing in both Electronics & Communication Engineering and Computer Science Engineering.
            My passion lies in creating seamless integrations between hardware and software.
          </p>
          <p className="text-lg text-foreground/70 leading-relaxed">
            I believe that the future of technology resides in the synergy of physical systems and intelligent algorithms.
            Whether it's optimizing a PCB layout or training a neural network, I approach every challenge with precision and creativity.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center space-x-3 p-4 rounded-2xl bg-muted/50">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm">Full-time Learner</span>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-2xl bg-muted/50">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-bold text-sm">Based in India</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interests */}
      <div className="mb-32">
        <SectionTitle
          title="What Drives Me"
          subtitle="Interests"
          centered
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 transition-colors group-hover:bg-primary group-hover:text-white">
                <interest.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">{interest.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Journey Timeline */}
      <div>
        <SectionTitle
          title="The Evolution"
          subtitle="My Journey"
          centered
        />
        <div className="relative max-w-4xl mx-auto mt-20">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-muted -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                  <div className={`p-8 rounded-3xl glass-card relative ${
                    index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                  }`}>
                    <span className="text-xs font-bold text-primary mb-2 block tracking-widest uppercase">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-display font-bold mb-3">{item.title}</h4>
                    <p className="text-foreground/60 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-4 border-primary shadow-xl flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
