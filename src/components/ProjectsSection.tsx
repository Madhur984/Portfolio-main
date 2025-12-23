import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Plant Disease Detection ML Model',
    description: 'A CNN-based model to identify leaf diseases. Includes preprocessing, augmentation, training and demo deployment. Built with TensorFlow & Keras.',
    tags: ['TensorFlow', 'Keras', 'Computer Vision', 'CNN'],
    link: 'https://github.com/Madhur984/Plant_Disease_Detection_System',
    gradient: 'from-green-500 to-emerald-600',
    icon: '🌿',
  },
  {
    title: 'BharatVision: Image Recognition',
    description: 'A computer vision project focused on advanced image recognition and classification tasks, demonstrating proficiency in scalable deep learning architecture.',
    tags: ['Deep Learning', 'Python', 'Computer Vision', 'PyTorch'],
    link: 'https://github.com/Madhur984/BharatVision',
    gradient: 'from-purple-500 to-pink-600',
    icon: '👁️',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group block"
    >
      <div className="cyber-card overflow-hidden relative h-full">
        {/* Project visual header */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }} />
          </div>
          
          {/* Floating icon */}
          <motion.div
            animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-6xl filter drop-shadow-lg"
          >
            {project.icon}
          </motion.div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-foreground font-semibold"
            >
              <ExternalLink className="w-5 h-5" />
              View Project
            </motion.div>
          </div>
          
          {/* Corner sparkle */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 right-4 text-white/50"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-xs font-mono text-muted-foreground group-hover:border-primary/30 group-hover:text-primary/80 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
      </div>
    </motion.a>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      
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
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-mono uppercase tracking-wider mb-4"
          >
            Projects
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications of AI and Machine Learning technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Madhur984"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline-cyber inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
