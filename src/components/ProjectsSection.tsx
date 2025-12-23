import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import plantDiseaseImg from '@/assets/plant-disease-detection.jpg';
import bharatVisionImg from '@/assets/bharatvision.png';

const projects = [
  {
    title: 'Plant Disease Detection',
    description: 'A CNN-based deep learning model to identify and classify plant leaf diseases. Features data preprocessing, augmentation, model training, and deployment-ready inference pipeline.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
    link: 'https://github.com/Madhur984/Plant_Disease_Detection_System',
    image: plantDiseaseImg,
    color: 'from-emerald-500/20 to-green-600/20',
    borderColor: 'hover:border-emerald-500/30',
  },
  {
    title: 'BharatVision',
    description: 'An advanced computer vision project focused on image recognition and classification tasks, demonstrating proficiency in scalable deep learning architecture.',
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Python'],
    link: 'https://github.com/Madhur984/BharatVision',
    image: bharatVisionImg,
    color: 'from-orange-500/20 to-amber-600/20',
    borderColor: 'hover:border-orange-500/30',
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group block"
    >
      <div className={`glass-card overflow-hidden h-full border border-border/30 transition-all duration-300 ${project.borderColor}`}>
        {/* Project image */}
        <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.color}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-foreground font-medium">
              <ExternalLink className="w-5 h-5" />
              View Project
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-badge text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Projects
          </span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          
          <p className="text-muted-foreground max-w-lg mx-auto">
            Real-world applications of AI and Machine Learning technologies.
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
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Madhur984"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
