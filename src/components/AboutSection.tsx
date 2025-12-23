import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code2, Cpu, Database, MapPin, Briefcase, Heart, Sparkles } from 'lucide-react';

const stats = [
  { icon: Brain, label: 'ML Models', value: 50, suffix: '+', color: 'text-purple-500' },
  { icon: Code2, label: 'Projects', value: 30, suffix: '+', color: 'text-blue-500' },
  { icon: Cpu, label: 'Technologies', value: 15, suffix: '+', color: 'text-pink-500' },
  { icon: Database, label: 'Datasets', value: 100, suffix: '+', color: 'text-amber-500' },
];

const funFacts = [
  { emoji: '☕', text: "Coffee consumed: ∞ cups" },
  { emoji: '🐛', text: "Bugs fixed: too many to count" },
  { emoji: '🎯', text: "Models trained: still counting..." },
];

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-bold text-2xl text-foreground">
      {displayValue}{suffix}
    </span>
  );
}

import React from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 text-6xl opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        ⚙️
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-5xl opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        🧬
      </motion.div>

      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header with personality */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              A bit about me
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              The person behind
              <br />
              <span className="gradient-text">the algorithms</span>
              <motion.span 
                className="inline-block ml-2"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤓
              </motion.span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Main content with character */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hey there! I'm <motion.span 
                  className="text-foreground font-semibold inline-block"
                  whileHover={{ scale: 1.05, color: 'hsl(var(--primary))' }}
                >
                  Madhur Garg
                </motion.span>, a curious soul from India who fell in love with 
                <motion.span 
                  className="text-primary font-medium"
                  whileHover={{ scale: 1.05 }}
                > artificial intelligence
                </motion.span> the moment I realized you could teach computers to 
                <span className="italic"> think</span>. 🤯
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My journey? It's been a wild ride through 
                <motion.span className="text-primary font-medium" whileHover={{ scale: 1.02 }}> neural networks</motion.span>, 
                <motion.span className="text-secondary font-medium" whileHover={{ scale: 1.02 }}> transformer architectures</motion.span>, and 
                countless late nights debugging why my model thinks every image is a 
                <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded mx-1">cat</span>. 
                (Spoiler: it was the data augmentation. It's always the data augmentation. 😅)
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I genuinely believe AI can make the world better — from 
                <span className="text-primary font-medium"> detecting plant diseases</span> to 
                <span className="text-secondary font-medium"> understanding human language</span>. 
                That's what gets me out of bed every morning (well, that and coffee ☕).
              </p>

              {/* Fun facts ticker */}
              <motion.div 
                className="flex flex-wrap gap-3 pt-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                {funFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 text-sm text-muted-foreground"
                    whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.1)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <span>{fact.emoji}</span>
                    <span>{fact.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.div 
                  className="flex items-center gap-2 text-muted-foreground"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">India 🇮🇳</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 text-muted-foreground"
                  whileHover={{ x: 5 }}
                >
                  <Briefcase className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Ready for new adventures!</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats sidebar with animations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-5 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
                
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span>By the numbers</span>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    📊
                  </motion.span>
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      onHoverStart={() => setHoveredStat(index)}
                      onHoverEnd={() => setHoveredStat(null)}
                      className="relative text-center p-4 rounded-xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all cursor-default group"
                    >
                      <motion.div
                        animate={hoveredStat === index ? { rotate: 360, scale: 1.2 } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                      </motion.div>
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                      <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="pt-4 mt-4 border-t border-border/50"
                  whileHover={{ scale: 1.02 }}
                >
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full btn-primary text-sm flex items-center justify-center gap-2 group"
                  >
                    <span>Let's build something cool</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
