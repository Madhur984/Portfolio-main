import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Database, BarChart3, Cloud, Zap, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Machine Learning',
    icon: Brain,
    emoji: '🧠',
    color: 'from-purple-500 to-violet-500',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
  },
  {
    title: 'Data Science',
    icon: Database,
    emoji: '📊',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL'],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    emoji: '📈',
    color: 'from-pink-500 to-rose-500',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI'],
  },
  {
    title: 'MLOps & Cloud',
    icon: Cloud,
    emoji: '☁️',
    color: 'from-amber-500 to-orange-500',
    skills: ['Docker', 'AWS', 'GCP', 'MLflow'],
  },
];

const allSkills = [
  { name: 'Python', emoji: '🐍' },
  { name: 'TensorFlow', emoji: '🧠' },
  { name: 'PyTorch', emoji: '🔥' },
  { name: 'NLP', emoji: '💬' },
  { name: 'Computer Vision', emoji: '👁️' },
  { name: 'Deep Learning', emoji: '🤖' },
  { name: 'Data Analysis', emoji: '📊' },
  { name: 'Git', emoji: '📝' },
  { name: 'OpenCV', emoji: '📷' },
  { name: 'Hugging Face', emoji: '🤗' },
  { name: 'LangChain', emoji: '🔗' },
  { name: 'Streamlit', emoji: '🎈' },
];

function SkillBox({ skill, index, isInView }: { skill: typeof allSkills[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.05 * index, type: 'spring', stiffness: 100 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-default"
    >
      <div className="glass-card p-4 flex flex-col items-center gap-2 border border-border/50 hover:border-primary/50 transition-colors duration-300">
        <motion.span 
          className="text-3xl"
          animate={isHovered ? { 
            scale: 1.3, 
            rotate: [0, -10, 10, 0],
            y: -5
          } : {}}
          transition={{ duration: 0.3 }}
        >
          {skill.emoji}
        </motion.span>
        <span className="text-sm font-medium text-foreground text-center">
          {skill.name}
        </span>
        
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
          animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
        />
      </div>
    </motion.div>
  );
}

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="skill-card p-6 group cursor-default"
    >
      <div className="flex items-center gap-3 mb-5">
        <motion.div 
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
          animate={isHovered ? { scale: 1.1, rotate: 5 } : {}}
        >
          <motion.span 
            className="text-xl"
            animate={isHovered ? { scale: 1.2 } : {}}
          >
            {category.emoji}
          </motion.span>
        </motion.div>
        <div>
          <h3 className="text-lg font-display font-semibold text-foreground">
            {category.title}
          </h3>
          <p className="text-xs text-muted-foreground">
            {category.skills.length} skills
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 + i * 0.08 }}
            whileHover={{ 
              scale: 1.1, 
              y: -3,
              transition: { duration: 0.2 }
            }}
            className="tech-badge"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-10 left-1/4 text-4xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        💻
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-1/4 text-4xl opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        🔮
      </motion.div>

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-wider mb-4"
          >
            <Zap className="w-4 h-4" />
            What I'm good at
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="gradient-text">superpowers</span>
            <motion.span 
              className="inline-block ml-2"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ⚡
            </motion.span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tools and technologies I use to turn coffee into code
            <span className="ml-1">☕ → 💻</span>
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Skills boxes section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground font-mono uppercase tracking-wider flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4" />
              Core technologies
              <span className="text-lg">🛠️</span>
            </p>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {allSkills.map((skill, i) => (
              <SkillBox key={skill.name} skill={skill} index={i} isInView={isInView} />
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
}
