import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import plantDiseaseImg from '@/assets/plant-disease-detection.jpg';
import bharatVisionImg from '@/assets/bharatvision.png';

const projects = [
  {
    id: 1,
    title: 'Plant Disease Detection',
    subtitle: 'Deep Learning / CNN',
    description: "Teaching computers to be plant doctors! 🌱 This AI can spot sick leaves faster than you can say 'photosynthesis'. Built with love (and a lot of GPU hours).",
    tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision', 'Python'],
    link: 'https://github.com/Madhur984/Plant_Disease_Detection_System',
    image: plantDiseaseImg,
    stats: { accuracy: '95%', dataset: '50K+', models: '3' },
    emoji: '🌿',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
  {
    id: 2,
    title: 'BharatVision',
    subtitle: 'Computer Vision',
    description: "Making AI understand India! 🇮🇳 A computer vision project that recognizes and classifies images with an Indian context. Because representation matters!",
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Transfer Learning'],
    link: 'https://github.com/Madhur984/BharatVision',
    image: bharatVisionImg,
    stats: { classes: '100+', accuracy: '92%', inference: '<50ms' },
    emoji: '👁️',
    color: 'from-violet-500/20 to-purple-500/20',
    borderColor: 'border-violet-500/30',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 20 : -20,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 400 : -400,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 20 : -20,
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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 text-5xl opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        ⚙️
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-10 text-4xl opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        🚀
      </motion.div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-mono uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Things I've built
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Projects that make me <span className="gradient-text">proud</span>
            <motion.span 
              className="inline-block ml-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✨
            </motion.span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Swipe through my work! Each project taught me something new 
            <span className="text-xs ml-1">(and cost me some sleep 😴)</span>
          </p>
        </motion.div>

        {/* Flashcard Carousel */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          {/* Navigation Buttons */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 z-10 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 z-10 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          {/* Card Container */}
          <div className="relative h-[550px] md:h-[480px] overflow-hidden">
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
                  opacity: { duration: 0.3 },
                  rotateY: { duration: 0.4 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, { offset, velocity }) => {
                  setIsDragging(false);
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className={`h-full rounded-3xl overflow-hidden bg-gradient-to-br ${currentProject.color} border-2 ${currentProject.borderColor} shadow-2xl`}>
                  <div className="h-full grid md:grid-cols-2">
                    {/* Image Side */}
                    <div className="relative h-48 md:h-full overflow-hidden group">
                      <motion.img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-card/95 via-card/50 to-transparent" />
                      
                      {/* Project emoji badge */}
                      <motion.div 
                        className="absolute top-4 left-4 w-14 h-14 rounded-2xl bg-card/90 backdrop-blur flex items-center justify-center text-2xl shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        {currentProject.emoji}
                      </motion.div>

                      {/* Project number */}
                      <div className="absolute bottom-4 left-4 font-mono text-6xl font-bold text-foreground/10">
                        0{currentProject.id}
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-6 md:p-8 flex flex-col justify-between bg-card/90 backdrop-blur-sm">
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
                            <motion.div 
                              key={key}
                              whileHover={{ y: -3 }}
                              className="text-center"
                            >
                              <div className="text-xl font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground uppercase">{key}</div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {currentProject.tags.map((tag, i) => (
                            <motion.span 
                              key={tag} 
                              className="tech-badge text-xs"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 * i }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <motion.a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 w-fit text-sm group"
                        onClick={(e) => {
                          if (isDragging) e.preventDefault();
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github className="w-4 h-4" />
                        Check it out
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <ArrowUpRight className="w-3 h-3" />
                        </motion.span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-10'
                    : 'bg-muted-foreground/30 w-3 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-xs text-muted-foreground mt-4"
          >
            👆 Drag to explore • Click arrows to navigate
          </motion.p>
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Madhur984"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            See all my experiments
            <span className="text-xs opacity-60">(there are more!)</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
