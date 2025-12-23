import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, Cpu, Database } from 'lucide-react';

const typewriterLines = [
  { text: "Hey, I'm Madhur!", className: 'text-foreground' },
  { text: "AI & ML Scientist", className: 'gradient-text' },
  { text: "Self Made Programmer", className: 'text-foreground' },
];

function TypewriterText() {
  const [displayedLines, setDisplayedLines] = useState<string[]>(['', '', '']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  useEffect(() => {
    if (!isInView) {
      setDisplayedLines(['', '', '']);
      setCurrentLine(0);
      setCurrentChar(0);
      setIsDeleting(false);
      setIsPaused(false);
      return;
    }

    const typeSpeed = 50;
    const deleteSpeed = 30;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (!isDeleting) {
        // Typing
        if (currentChar < typewriterLines[currentLine].text.length) {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            newLines[currentLine] = typewriterLines[currentLine].text.slice(0, currentChar + 1);
            return newLines;
          });
          setCurrentChar(currentChar + 1);
        } else if (currentLine < typewriterLines.length - 1) {
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentLine >= 0) {
          if (displayedLines[currentLine].length > 0) {
            setDisplayedLines(prev => {
              const newLines = [...prev];
              newLines[currentLine] = newLines[currentLine].slice(0, -1);
              return newLines;
            });
          } else if (currentLine > 0) {
            setCurrentLine(currentLine - 1);
          } else {
            setIsDeleting(false);
            setCurrentLine(0);
            setCurrentChar(0);
          }
        }
      }
    }, isPaused ? pauseDuration : (isDeleting ? deleteSpeed : typeSpeed));

    return () => clearTimeout(timeout);
  }, [currentChar, currentLine, isDeleting, isPaused, isInView, displayedLines]);

  return (
    <div ref={ref} className="space-y-2">
      {typewriterLines.map((line, index) => (
        <h2 key={index} className={`text-4xl md:text-5xl font-display font-bold ${line.className}`}>
          {displayedLines[index]}
          {currentLine === index && !isPaused && (
            <span className="inline-block w-1 h-10 bg-primary ml-1 animate-pulse" />
          )}
        </h2>
      ))}
    </div>
  );
}

const stats = [
  { icon: Brain, label: 'ML Models', value: '50+' },
  { icon: Code2, label: 'Projects', value: '30+' },
  { icon: Cpu, label: 'Technologies', value: '15+' },
  { icon: Database, label: 'Datasets', value: '100+' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <TypewriterText />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-muted-foreground text-lg leading-relaxed"
            >
              I am a <span className="text-primary font-semibold">Data Scientist</span> from India with a passion for 
              uncovering insights from data. I specialize in{' '}
              <span className="text-secondary font-semibold">Machine Learning</span>,{' '}
              <span className="text-accent font-semibold">Deep Learning</span>, and{' '}
              <span className="text-primary font-semibold">Natural Language Processing</span>, using tools like 
              Python, TensorFlow, and PyTorch to build predictive models and intelligent systems.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 text-muted-foreground text-lg leading-relaxed"
            >
              My goal is to transform data into actionable solutions that drive business value.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="cyber-card p-4 text-center group"
                >
                  <stat.icon className="w-6 h-6 mx-auto text-primary mb-2 group-hover:text-secondary transition-colors" />
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cyber mt-8"
            >
              <span>Explore My Skills</span>
            </motion.button>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            {/* Decorative code block */}
            <div className="cyber-card p-6 font-mono text-sm overflow-hidden relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl opacity-50" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-muted-foreground text-xs">madhur_profile.py</span>
                </div>
                
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-secondary">class</span>{' '}
                    <span className="text-primary">DataScientist</span>:
                    {'\n'}    <span className="text-secondary">def</span>{' '}
                    <span className="text-accent">__init__</span>(<span className="text-foreground">self</span>):
                    {'\n'}        self.<span className="text-foreground">name</span> = <span className="text-green-400">"Madhur Garg"</span>
                    {'\n'}        self.<span className="text-foreground">role</span> = <span className="text-green-400">"AI/ML Scientist"</span>
                    {'\n'}        self.<span className="text-foreground">location</span> = <span className="text-green-400">"India"</span>
                    {'\n'}        
                    {'\n'}    <span className="text-secondary">@property</span>
                    {'\n'}    <span className="text-secondary">def</span>{' '}
                    <span className="text-accent">skills</span>(<span className="text-foreground">self</span>):
                    {'\n'}        <span className="text-secondary">return</span> [
                    {'\n'}            <span className="text-green-400">"Machine Learning"</span>,
                    {'\n'}            <span className="text-green-400">"Deep Learning"</span>,
                    {'\n'}            <span className="text-green-400">"NLP"</span>,
                    {'\n'}            <span className="text-green-400">"Computer Vision"</span>
                    {'\n'}        ]
                    {'\n'}
                    {'\n'}    <span className="text-secondary">def</span>{' '}
                    <span className="text-accent">passion</span>(<span className="text-foreground">self</span>):
                    {'\n'}        <span className="text-secondary">return</span> <span className="text-green-400">"Building AI solutions"</span>
                  </code>
                </pre>
              </div>
              
              {/* Animated cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-primary ml-1"
              />
            </div>
            
            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12"
            />
            <motion.div
              animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-10 -left-10 w-24 h-24 border border-secondary/20 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
