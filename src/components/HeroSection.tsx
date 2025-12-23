import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
        />
        
        {/* Floating elements */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 text-primary/20"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-40 left-20 text-secondary/20"
        >
          <Zap className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main heading with glitch effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight"
          >
            <motion.span 
              className="block text-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Intelligent
            </motion.span>
            <motion.span
              className="block gradient-text text-glow"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              data-text="Data Solutions"
            >
              Data Solutions
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body"
        >
          Building innovative <span className="text-primary">AI</span> and <span className="text-secondary">Data Science</span> models 
          to solve complex problems and drive intelligent automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(var(--primary) / 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="btn-cyber group"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              Get In Touch
            </span>
          </motion.button>
          
          <motion.button
            onClick={scrollToSkills}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline-cyber"
          >
            Explore Skills
          </motion.button>
        </motion.div>

        {/* Tech stack mini preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-mono text-muted-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
