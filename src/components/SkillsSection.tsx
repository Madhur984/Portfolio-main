import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Brain, 
  Database, 
  Cloud, 
  Container, 
  BarChart3, 
  MessageSquare,
  Cpu,
  Layers,
  GitBranch,
  Server,
  Workflow,
  Sparkles
} from 'lucide-react';
import Marquee from './Marquee';

const skillCategories = [
  {
    title: 'Machine Learning',
    icon: Brain,
    color: 'from-primary to-tech-blue',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'Keras', level: 90 },
    ],
  },
  {
    title: 'Data Science',
    icon: Database,
    color: 'from-secondary to-tech-purple',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    color: 'from-accent to-tech-coral',
    skills: [
      { name: 'Matplotlib', level: 90 },
      { name: 'Seaborn', level: 85 },
      { name: 'Plotly', level: 80 },
      { name: 'Power BI', level: 75 },
    ],
  },
  {
    title: 'MLOps & Cloud',
    icon: Cloud,
    color: 'from-tech-teal to-primary',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'GCP', level: 70 },
      { name: 'MLflow', level: 75 },
    ],
  },
];

const allSkills = [
  'Python', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn',
  'Pandas', 'NumPy', 'SQL', 'NLP', 'Computer Vision',
  'Deep Learning', 'Machine Learning', 'Data Analysis',
  'Docker', 'AWS', 'GCP', 'Git', 'Linux',
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
        >
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="cyber-card p-6 group"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
          <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
            <category.icon className="w-6 h-6 text-foreground" />
          </div>
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground group-hover:gradient-text transition-all">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <SkillBar 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            delay={0.3 + i * 0.1} 
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Technical Expertise
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and extracting insights from data.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Skills marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <Marquee speed={40} className="py-8">
            {allSkills.map((skill, i) => (
              <motion.span
                key={`${skill}-${i}`}
                whileHover={{ scale: 1.1, y: -4 }}
                className="tech-badge mx-2 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </Marquee>
          
          <Marquee speed={35} direction="right" className="py-8">
            {[...allSkills].reverse().map((skill, i) => (
              <motion.span
                key={`${skill}-rev-${i}`}
                whileHover={{ scale: 1.1, y: -4 }}
                className="tech-badge mx-2 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </Marquee>
        </motion.div>

        {/* Animated connecting line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 1, duration: 1, ease: 'easeOut' }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </section>
  );
}