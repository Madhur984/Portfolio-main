import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Database, BarChart3, Cloud, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Machine Learning',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'],
  },
  {
    title: 'Data Science',
    icon: Database,
    skills: ['Python', 'Pandas', 'NumPy', 'SQL'],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Power BI'],
  },
  {
    title: 'MLOps & Cloud',
    icon: Cloud,
    skills: ['Docker', 'AWS', 'GCP', 'MLflow'],
  },
];

const allSkills = [
  'Python', 'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn',
  'Pandas', 'NumPy', 'SQL', 'NLP', 'Computer Vision',
  'Deep Learning', 'Machine Learning', 'Data Analysis',
  'Docker', 'AWS', 'GCP', 'Git', 'Linux',
];

function SkillCategory({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="skill-card p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <category.icon className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-display font-semibold text-foreground">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 + i * 0.05 }}
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
    <section id="skills" className="py-24 relative">
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
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Technical Expertise
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A comprehensive toolkit for building intelligent systems and extracting insights from data.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* All skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4 font-mono uppercase tracking-wider">
            Full Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {allSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="tech-badge cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
}
