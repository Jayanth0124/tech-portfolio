import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Code, Globe, Zap, Database, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  // React Spring for Heading
  const headingSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
  });

  // Floating icons animation
  const FloatingIcon = ({ icon: Icon, delay = 0, className = "" }) => {
    const spring = useSpring({
      loop: true,
      from: { y: 0 },
      to: { y: -20 },
      config: { duration: 2000 + delay * 100, tension: 120, friction: 14 },
      delay: delay * 100,
    });

    return (
      <animated.div style={spring} className={`absolute ${className}`}>
        <div className="p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 shadow-xl">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </animated.div>
    );
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        {/* Background circuit lines simulation */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Icons */}
        <FloatingIcon icon={Cpu} delay={0} className="top-[20%] left-[10%]" />
        <FloatingIcon icon={Code} delay={2} className="top-[60%] left-[15%]" />
        <FloatingIcon icon={Zap} delay={4} className="top-[25%] right-[12%]" />
        <FloatingIcon icon={Globe} delay={6} className="bottom-[25%] right-[18%]" />
        <FloatingIcon icon={Database} delay={8} className="top-[15%] left-[45%]" />

        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span>Available for New Projects</span>
          </motion.div>

          <animated.h1
            style={headingSpring}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight tracking-tight"
          >
            Fusion of <span className="fusion-text-gradient">Hardware</span> & <span className="text-accent">Software</span>
          </animated.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-foreground/60 font-medium mb-12 max-w-3xl mx-auto"
          >
            Bridging Hardware Intelligence with Software Innovation.
            I build systems where circuits meet code and embedded logic powers AI.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-xl shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all flex items-center justify-center group"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-foreground border-2 border-muted font-bold text-lg hover:bg-muted transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Scroll Down</span>
          <div className="w-1 h-12 rounded-full bg-muted overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-full h-1/3 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Quick Summary Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">ECE Specialist</h3>
              <p className="text-foreground/60 leading-relaxed">
                Expertise in Embedded Systems, Circuit Design, and IoT hardware integration.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">CSE Developer</h3>
              <p className="text-foreground/60 leading-relaxed">
                Full-stack development, AI/ML integration, and robust software architecture.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Innovation Fusion</h3>
              <p className="text-foreground/60 leading-relaxed">
                Bridging the gap between physical sensors and digital intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
