import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
          {subtitle}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
          {title.split(' ').map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? 'fusion-text-gradient' : ''}>
              {word}{' '}
            </span>
          ))}
        </h2>
        <div className={`mt-4 h-1 w-20 bg-primary/30 rounded-full ${centered ? 'mx-auto' : ''}`}></div>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
