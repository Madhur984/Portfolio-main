import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import MagneticButton from './MagneticButton';
import SplitText from './SplitText';
import GlowingOrb from './GlowingOrb';

const techStack = [
  { name: 'Python', color: 'from-yellow-400 to-blue-500' },
  { name: 'TensorFlow', color: 'from-orange-500 to-orange-600' },
  { name: 'PyTorch', color: 'from-red-500 to-orange-500' },
  { name: 'NLP', color: 'from-blue-400 to-purple-500' },
  { name: 'Computer Vision', color: 'from-green-400 to-teal-500' },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <GlowingOrb className="absolute -top-20 -left-20" size={400} color="primary" />
        <GlowingOrb className="absolute -bottom-40 -right-20" size={500} color="secondary" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-8"
            >
              <span className="status-badge">
                <Sparkles className="w-4 h-4" />
                AI & Machine Learning Engineer
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="gradient-text">Madhur</span>
                <br />
                <span className="text-foreground">I craft </span>
                <span className="relative inline-block">
                  <span className="text-primary">intelligent</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
                  />
                </span>
                <br />
                <span className="text-foreground">solutions</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
            >
              Data Scientist from India transforming complex data into actionable insights 
              through cutting-edge machine learning and AI systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <MagneticButton onClick={scrollToContact}>
                <span className="btn-cyber flex items-center gap-2" data-cursor-text="Let's talk">
                  <span>Get in Touch</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </MagneticButton>
              
              <MagneticButton onClick={scrollToProjects}>
                <span className="btn-outline-cyber" data-cursor-text="See work">
                  <span>View Projects</span>
                </span>
              </MagneticButton>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-sm text-muted-foreground mb-4 font-mono uppercase tracking-wider">Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="tech-badge group"
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color} group-hover:animate-pulse`} />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, hsl(175 80% 50% / 0.2), transparent, hsl(280 100% 70% / 0.2), transparent)',
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-12 rounded-full border border-dashed border-primary/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-20 rounded-full border border-dotted border-secondary/10"
              />
              
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-3xl scale-110" />
              
              {/* Profile image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden"
                data-cursor-text="That's me!"
              >
                {/* Gradient border */}
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-tech-blue to-secondary">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={profilePhoto}
                      alt="Madhur Garg - AI & ML Engineer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-full" />
              </motion.div>

              {/* Floating status badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass-card px-4 py-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-foreground">Open to work</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -top-4 -left-4 md:top-8 md:-left-8"
              >
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="glass-card px-4 py-3"
                >
                  <div className="text-center">
                    <span className="text-2xl font-bold gradient-text">2+</span>
                    <p className="text-xs text-muted-foreground">Years Exp</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}