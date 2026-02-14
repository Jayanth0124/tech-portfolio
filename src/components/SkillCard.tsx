import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group"
    >
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4 transition-all duration-500 group-hover:bg-primary/10 group-hover:rotate-6">
        <skill.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
      </div>
      
      <h4 className="font-display font-bold text-lg mb-2">{skill.name}</h4>
      <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest">
        {skill.level}% Proficiency
      </p>
      
      <div className="w-full mt-4 h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-primary"
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
