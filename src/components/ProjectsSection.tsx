import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import plantDiseaseImg from '@/assets/plant-disease-detection.jpg';
import bharatVisionImg from '@/assets/bharatvision.png';

const projects = [
  {
    id: 1,
    title: 'Plant Disease Detection',
    subtitle: 'Deep Learning / CNN',
    description: 'An AI-powered system using Convolutional Neural Networks to identify and classify plant leaf diseases with high accuracy. Features real-time inference and deployment-ready architecture.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Python'],
    link: 'https://github.com/Madhur984/Plant_Disease_Detection_System',
    image: plantDiseaseImg,
    stats: { accuracy: '95%', dataset: '50K+', models: '3' },
  },
  {
    id: 2,
    title: 'BharatVision',
    subtitle: 'Computer Vision',
    description: 'An advanced computer vision project focused on image recognition and classification tasks specific to Indian contexts. Demonstrates scalable deep learning architectures.',
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Transfer Learning'],
    link: 'https://github.com/Madhur984/BharatVision',
    image: bharatVisionImg,
    stats: { classes: '100+', accuracy: '92%', inference: '<50ms' },
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="project-card">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image section */}
          <div className="relative h-56 md:h-72 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="project-image w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent md:bg-gradient-to-r" />
            
            {/* Project number */}
            <div className="absolute top-4 left-4 font-mono text-5xl font-bold text-foreground/5">
              0{project.id}
            </div>
          </div>

          {/* Content section */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2 block">
                {project.subtitle}
              </span>
              
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Stats */}
              <div className="flex gap-5 mb-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-foreground">{value}</div>
                    <div className="text-xs text-muted-foreground uppercase">{key}</div>
                  </div>
                ))}
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tech-badge text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 w-fit text-sm"
            >
              <Github className="w-4 h-4" />
              View on GitHub
              <ArrowUpRight className="w-3 h-3" />
            </a>
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
    <section id="projects" className="py-24 relative">
      <div className="section-divider mb-24" />
      
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
            className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono uppercase tracking-wider mb-4"
          >
            Featured Work
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Projects that <span className="gradient-text">matter</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real-world applications of AI and Machine Learning, solving meaningful problems.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Madhur984"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View All Projects
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
