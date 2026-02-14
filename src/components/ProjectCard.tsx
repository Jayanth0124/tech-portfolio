import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Code } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 transform -translate-y-4 group-hover:translate-y-0"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          {project.type === 'ECE' ? (
            <Cpu className="w-4 h-4 text-primary" />
          ) : (
            <Code className="w-4 h-4 text-accent" />
          )}
          <span className="text-xs font-bold uppercase tracking-widest text-foreground/40">
            {project.type} Project
          </span>
        </div>

        <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground/60 text-sm mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md bg-muted text-[10px] font-bold text-foreground/60 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
