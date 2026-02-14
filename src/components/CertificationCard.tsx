import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 group"
    >
      <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center relative overflow-hidden shrink-0">
        <Award className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="flex-1 text-center md:text-left">
        <h4 className="font-display font-bold text-xl mb-1 group-hover:text-primary transition-colors">
          {certification.name}
        </h4>
        <p className="text-foreground/60 font-medium mb-3">{certification.issuer} • {certification.date}</p>
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-primary flex items-center hover:underline"
          >
            Verify Certificate <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
      
      <div className="hidden md:block">
        <div className="px-4 py-2 rounded-lg bg-muted text-[10px] font-bold uppercase tracking-widest text-foreground/40">
          Credential ID: {certification.id}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
