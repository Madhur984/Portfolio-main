import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Coffee, Zap } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import { useState } from 'react';

const techStack = [
  { name: 'Python', emoji: '🐍' },
  { name: 'TensorFlow', emoji: '🧠' },
  { name: 'PyTorch', emoji: '🔥' },
  { name: 'NLP', emoji: '💬' },
  { name: 'Computer Vision', emoji: '👁️' },
  { name: 'Deep Learning', emoji: '🤖' },
];

const greetings = ["Hi, I'm", "Hey, I'm", "Hello, I'm", "Namaste, I'm"];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);
  
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isWaving, setIsWaving] = useState(false);

  const handleWave = () => {
    setIsWaving(true);
    setGreetingIndex((prev) => (prev + 1) % greetings.length);
    setTimeout(() => setIsWaving(false), 1000);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-32 left-10 w-20 h-20 rounded-full border-2 border-dashed border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-16 h-16 rounded-lg border-2 border-dashed border-secondary/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 text-4xl"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✨
      </motion.div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Playful status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 flex items-center gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl"
              >
                <Coffee className="w-5 h-5 text-amber-600" />
              </motion.div>
              <span className="text-sm text-muted-foreground italic">
                Currently caffeinated & coding
              </span>
            </motion.div>

            {/* Main heading with wave interaction */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">{greetings[greetingIndex]} </span>
                <motion.span
                  onClick={handleWave}
                  className="gradient-text cursor-pointer inline-block"
                  whileHover={{ scale: 1.05 }}
                  animate={isWaving ? { rotate: [0, 14, -8, 14, -4, 10, 0] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  Madhur
                </motion.span>
                <motion.span
                  className="inline-block ml-2 cursor-pointer"
                  onClick={handleWave}
                  animate={isWaving ? { rotate: [0, 14, -8, 14, -4, 10, 0] } : {}}
                  whileHover={{ rotate: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  👋
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl md:text-2xl font-display text-muted-foreground mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I make machines <motion.span 
                  className="text-primary font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  think
                </motion.span>, 
                <motion.span 
                  className="text-secondary font-semibold"
                  whileHover={{ scale: 1.1 }}
                > learn
                </motion.span>, and sometimes 
                <motion.span 
                  className="text-accent font-semibold"
                  whileHover={{ scale: 1.1 }}
                > dream
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Fun description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                A curious mind obsessed with turning 
                <span className="font-mono text-primary"> data</span> into 
                <span className="font-mono text-secondary"> magic</span>. 
                When I'm not training models, I'm probably debugging why they won't train. 🤷‍♂️
              </p>
            </motion.div>

            {/* CTA Buttons with personality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button 
                onClick={scrollToContact} 
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Chat
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
              
              <motion.button 
                onClick={scrollToProjects} 
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="w-4 h-4" />
                See My Work
              </motion.button>
            </motion.div>

            {/* Tech stack with emojis */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-xs text-muted-foreground mb-3 font-mono uppercase tracking-wider flex items-center gap-2">
                <span>My Toolkit</span>
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  ⚙️
                </motion.span>
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.08, duration: 0.4 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="tech-badge cursor-default flex items-center gap-1.5"
                  >
                    <span>{tech.emoji}</span>
                    <span>{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image with playful elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative scribbles */}
              <motion.svg
                className="absolute -top-8 -left-8 w-16 h-16 text-primary/30"
                viewBox="0 0 100 100"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                <motion.path
                  d="M20,50 Q50,20 80,50 Q50,80 20,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>

              {/* Floating emojis around image */}
              <motion.div
                className="absolute -top-4 -right-4 text-2xl"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                🚀
              </motion.div>
              <motion.div
                className="absolute top-1/2 -left-8 text-2xl"
                animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                💡
              </motion.div>
              <motion.div
                className="absolute -bottom-4 right-1/4 text-2xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                ⚡
              </motion.div>

              {/* Gradient blob behind */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 blur-3xl scale-110"
                animate={{ 
                  scale: [1.1, 1.2, 1.1],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              
              {/* Profile image container - slightly rotated for personality */}
              <motion.div 
                style={{ rotate }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-card shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                <img
                  src={profilePhoto}
                  alt="Madhur Garg - AI & ML Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Status card - tilted */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="absolute -bottom-4 -right-4 md:right-0"
              >
                <div className="glass-card px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Available for hire!
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Experience badge - opposite side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -3 }}
                transition={{ delay: 1, duration: 0.4 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="absolute -top-4 -left-4 md:left-0"
              >
                <div className="glass-card px-3 py-2 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">AI/ML</div>
                    <div className="text-xs text-muted-foreground">Enthusiast</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Playful scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-mono text-muted-foreground">psst... scroll down</span>
          <motion.span 
            className="text-2xl"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            👇
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
