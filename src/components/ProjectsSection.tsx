import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
    color: 'from-emerald-500/20 to-green-500/20',
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
    color: 'from-violet-500/20 to-purple-500/20',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

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
          className="text-center mb-16"
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
            Swipe or use arrows to explore my work
          </p>
        </motion.div>

        {/* Flashcard Carousel */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card Container */}
          <div className="relative h-[500px] md:h-[450px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  rotateY: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className={`flashcard h-full rounded-2xl overflow-hidden bg-gradient-to-br ${currentProject.color} border border-border/50 shadow-2xl`}>
                  <div className="h-full grid md:grid-cols-2">
                    {/* Image Side */}
                    <div className="relative h-48 md:h-full overflow-hidden">
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/90 via-card/40 to-transparent" />
                      
                      {/* Project Number Badge */}
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {currentProject.id}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-6 md:p-8 flex flex-col justify-between bg-card/80 backdrop-blur-sm">
                      <div>
                        <span className="text-xs font-mono text-primary uppercase tracking-wider mb-2 block">
                          {currentProject.subtitle}
                        </span>
                        
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                          {currentProject.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {currentProject.description}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6 mb-4">
                          {Object.entries(currentProject.stats).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-xl font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground uppercase">{key}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {currentProject.tags.map((tag) => (
                            <span key={tag} className="tech-badge text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 w-fit text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
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
            className="btn-outline inline-flex items-center gap-2"
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
