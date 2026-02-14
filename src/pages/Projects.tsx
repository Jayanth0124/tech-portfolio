import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'ECE', 'CSE', 'IoT', 'AI'];

  const projects = [
    {
      id: 1,
      title: 'IoT Smart Composting System',
      type: 'ECE',
      description: 'An automated composting system with real-time sensor monitoring (temperature, moisture, gas) and mobile alerts via ESP32.',
      image: 'https://picsum.photos/id/160/600/400',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['ESP32', 'Sensors', 'IoT', 'Firebase']
    },
    {
      id: 2,
      title: 'Air Quality Monitoring System',
      type: 'IoT',
      description: 'Distributed sensor network using LoRaWAN technology to monitor particulate matter and gas levels in urban environments.',
      image: 'https://picsum.photos/id/180/600/400',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['Arduino', 'LoRa', 'Sensors', 'Dashboards']
    },
    {
      id: 3,
      title: 'WhatsApp Chat Parser',
      type: 'CSE',
      description: 'A web-based tool to analyze WhatsApp chat logs, providing detailed visualizations of communication patterns and word clouds.',
      image: 'https://picsum.photos/id/1/600/400',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['React', 'Python', 'D3.js', 'Vite']
    },
    {
      id: 4,
      title: 'Object Detection App',
      type: 'AI',
      description: 'Real-time object detection mobile app using TensorFlow Lite, capable of identifying 80+ classes of objects through the camera.',
      image: 'https://picsum.photos/id/2/600/400',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['TFLite', 'React Native', 'Computer Vision']
    },
    {
      id: 5,
      title: 'Embedded RFID Security System',
      type: 'ECE',
      description: 'A smart lock mechanism using RFID technology and AVR microcontrollers with an integrated logging system.',
      image: 'https://picsum.photos/id/3/600/400',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['Atmega328P', 'RFID', 'C', 'Security']
    },
    {
      id: 6,
      title: 'Smart Energy Meter',
      type: 'IoT',
      description: 'Next-gen energy monitoring system that predicts consumption patterns using simple ML models on the edge.',
      image: 'https://picsum.photos/id/4/600/400',
      github: 'https://github.com',
      live: 'https://example.com',
      tags: ['ESP8266', 'MQTT', 'Python', 'ML']
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter || p.tags.includes(filter));

  return (
    <div className="container mx-auto px-6 py-20">
      <SectionTitle
        title="Featured Creations"
        subtitle="Portfolio"
      />

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              filter === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                : 'bg-muted text-foreground/60 hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-foreground/40 font-bold uppercase tracking-widest">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
