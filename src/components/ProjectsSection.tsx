import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Eye } from 'lucide-react';
import plantDiseaseImg from '@/assets/plant-disease-detection.jpg';
import bharatVisionImg from '@/assets/bharatvision.png';
import MagneticButton from './MagneticButton';

const projects = [
  {
    id: 1,
    title: 'Plant Disease Detection',
    subtitle: 'Deep Learning / CNN',
    description: 'An AI-powered system using Convolutional Neural Networks to identify and classify plant leaf diseases with high accuracy. Features real-time inference, data augmentation pipelines, and a deployment-ready architecture.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Python'],
    link: 'https://github.com/Madhur984/Plant_Disease_Detection_System',
    image: plantDiseaseImg,
    color: 'primary',
    stats: { accuracy: '95%', dataset: '50K+', models: '3' },
  },
  {
    id: 2,
    title: 'BharatVision',
    subtitle: 'Computer Vision',
    description: 'An advanced computer vision project focused on image recognition and classification tasks specific to Indian contexts. Demonstrates proficiency in building scalable deep learning architectures for visual understanding.',
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Transfer Learning'],
    link: 'https://github.com/Madhur984/BharatVision',
    image: bharatVisionImg,
    color: 'secondary',
    stats: { classes: '100+', accuracy: '92%', inference: '<50ms' },
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    primary: {
      gradient: 'from-primary/20 via-tech-blue/10 to-transparent',
      border: 'group-hover:border-primary/40',
      glow: 'group-hover:shadow-glow-primary',
      tag: 'bg-primary/10 text-primary border-primary/30',
    },
    secondary: {
      gradient: 'from-secondary/20 via-tech-purple/10 to-transparent',
      border: 'group-hover:border-secondary/40',
      glow: 'group-hover:shadow-glow-secondary',
      tag: 'bg-secondary/10 text-secondary border-secondary/30',
    },
  };

  const colors = colorClasses[project.color as keyof typeof colorClasses];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className={`relative rounded-2xl overflow-hidden border border-border/50 ${colors.border} ${colors.glow} transition-all duration-500`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image section */}
          <div className="relative h-64 md:h-auto overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r" />
            
            {/* View project overlay */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-foreground font-medium"
                  >
                    <Eye className="w-5 h-5" />
                    View Project
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Project number */}
            <div className="absolute top-4 left-4 font-mono text-6xl font-bold text-foreground/5">
              0{project.id}
            </div>
          </div>

          {/* Content section */}
          <div className="relative p-8 flex flex-col justify-between">
            <div>
              {/* Subtitle */}
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                {project.subtitle}
              </span>
              
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stats */}
              <div className="flex gap-6 mb-6">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-foreground">{value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{key}</div>
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`px-3 py-1 rounded-lg text-xs font-mono border ${colors.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <MagneticButton
              href={project.link}
              target="_blank"
            >
              <span className="btn-outline-cyber inline-flex items-center gap-2" data-cursor-text="Open">
                <Github className="w-4 h-4" />
                View on GitHub
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative">
      {/* Section divider */}
      <div className="animated-line mb-32" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-mono uppercase tracking-wider mb-6"
          >
            Featured Work
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Projects that{' '}
            <span className="gradient-text">matter</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of AI and Machine Learning, solving meaningful problems.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <MagneticButton
            href="https://github.com/Madhur984"
            target="_blank"
          >
            <span className="btn-cyber inline-flex items-center gap-2" data-cursor-text="Explore">
              <Github className="w-5 h-5" />
              Explore All Projects
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}