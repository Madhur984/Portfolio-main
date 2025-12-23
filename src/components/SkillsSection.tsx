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
  Workflow
} from 'lucide-react';

const skills = [
  {
    name: 'Python',
    description: 'Core language for data analysis, ML, and scripting.',
    icon: Code2,
    color: 'from-yellow-500 to-blue-500',
  },
  {
    name: 'TensorFlow',
    description: 'End-to-end platform for building and deploying ML models.',
    icon: Brain,
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'PyTorch',
    description: 'Open source framework for deep learning and research.',
    icon: Layers,
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Scikit-learn',
    description: 'Classic machine learning algorithms and tools.',
    icon: Cpu,
    color: 'from-blue-400 to-orange-400',
  },
  {
    name: 'Pandas & NumPy',
    description: 'Essential libraries for data manipulation and analysis.',
    icon: Database,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    name: 'Keras',
    description: 'High-level neural networks API, written in Python.',
    icon: Brain,
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'SQL',
    description: 'Querying and managing relational databases.',
    icon: Server,
    color: 'from-orange-400 to-yellow-500',
  },
  {
    name: 'Data Visualization',
    description: 'Using Matplotlib & Seaborn to create insightful plots.',
    icon: BarChart3,
    color: 'from-blue-500 to-green-500',
  },
  {
    name: 'NLP',
    description: 'Analyzing and understanding human language with NLTK & spaCy.',
    icon: MessageSquare,
    color: 'from-blue-500 to-yellow-500',
  },
  {
    name: 'Cloud (AWS/GCP)',
    description: 'Deploying models and managing data on cloud platforms.',
    icon: Cloud,
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Docker',
    description: 'Containerizing applications for reproducible environments.',
    icon: Container,
    color: 'from-blue-400 to-blue-500',
  },
  {
    name: 'MLOps',
    description: 'Practices for deploying and maintaining ML models in production.',
    icon: Workflow,
    color: 'from-purple-500 to-indigo-500',
  },
];

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="cyber-card skill-card-cyber p-6 group relative overflow-hidden"
    >
      {/* Animated background gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      />
      
      {/* Icon container with glow */}
      <div className="relative mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-0.5`}>
          <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
            <skill.icon className="w-7 h-7 text-foreground group-hover:text-foreground transition-colors" />
          </div>
        </div>
        
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
        />
      </div>

      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {skill.name}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {skill.description}
      </p>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className={`absolute -top-8 -right-8 w-16 h-16 rotate-45 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono uppercase tracking-wider mb-4"
          >
            My Expertise
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Technical Skills in{' '}
            <span className="gradient-text">AI & Data Science</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent systems and extracting insights from data.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Animated connecting lines */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </div>
    </section>
  );
}
