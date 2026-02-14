import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-3">
            <Link to="/" className="flex items-center space-x-2 group">
              <Cpu className="w-6 h-6 text-primary" />
              <span className="text-xl font-display font-bold tracking-tight">
                Fusion<span className="fusion-text-gradient">Edge</span>
              </span>
            </Link>
            <p className="text-foreground/60 text-sm font-medium">
              ECE + CSE Engineer Bridging Hardware & Software
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-foreground/40 font-medium">
          <p>© {currentYear} FusionEdge Portfolio. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
