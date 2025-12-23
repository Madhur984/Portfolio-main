import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Rocket, Calendar } from 'lucide-react';

const timelineData = [
  {
    year: '2025',
    title: 'Smart India Hackathon Winner',
    subtitle: 'BharatVision - Automated Compliance Checker',
    description: 'Won national-level SIH 2025 with an automated compliance checker using OCR, NLP, and ML for Legal Metrology verification on E-Commerce platforms.',
    icon: Award,
    type: 'achievement',
    emoji: '🏆',
  },
  {
    year: '2024',
    title: 'GDG Noida Member',
    subtitle: 'Google Developer Groups',
    description: 'Active member of GDG Noida community, participating in tech talks, workshops, and hackathons focused on Google technologies and AI/ML.',
    icon: Rocket,
    type: 'community',
    emoji: '🌐',
  },
  {
    year: '2024',
    title: 'AI/ML Projects & Research',
    subtitle: 'Deep Learning & Computer Vision',
    description: 'Developed multiple ML projects including plant disease detection, NLP applications, and computer vision systems using TensorFlow and PyTorch.',
    icon: Rocket,
    type: 'project',
    emoji: '🚀',
  },
  {
    year: '2024',
    title: 'Data Science Internship',
    subtitle: 'Machine Learning Engineer Intern',
    description: 'Worked on real-world ML pipelines, data preprocessing, model training, and deployment using Python, Pandas, and cloud services.',
    icon: Briefcase,
    type: 'work',
    emoji: '💼',
  },
  {
    year: '2023',
    title: 'Started B.Tech in Computer Science',
    subtitle: 'Specialization in AI & Machine Learning',
    description: 'Began my journey in Computer Science with a focus on Artificial Intelligence and Machine Learning at a top engineering college.',
    icon: GraduationCap,
    type: 'education',
    emoji: '🎓',
  },
  {
    year: '2023',
    title: 'First ML Project',
    subtitle: 'Image Classification with CNNs',
    description: 'Built my first deep learning project - an image classifier using Convolutional Neural Networks, sparking my passion for AI.',
    icon: Rocket,
    type: 'project',
    emoji: '✨',
  },
];

const typeColors = {
  achievement: 'from-amber-500 to-orange-500',
  project: 'from-purple-500 to-violet-500',
  work: 'from-blue-500 to-cyan-500',
  education: 'from-green-500 to-emerald-500',
  community: 'from-red-500 to-pink-500',
};

function TimelineItem({ item, index }: { item: typeof timelineData[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center gap-4 md:gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Content card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className={`flex-1 glass-card p-5 md:p-6 group cursor-default ${
          isEven ? 'md:text-right' : 'md:text-left'
        }`}
      >
        {/* Year badge */}
        <div className={`flex items-center gap-2 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 border border-primary/20 text-primary">
            <Calendar className="w-3 h-3" />
            {item.year}
          </span>
          <motion.span 
            className="text-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {item.emoji}
          </motion.span>
        </div>

        <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        
        <p className="text-sm font-medium text-primary/80 mb-2">
          {item.subtitle}
        </p>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </motion.div>

      {/* Timeline node */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${typeColors[item.type as keyof typeof typeColors]} flex items-center justify-center shadow-lg`}
        >
          <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-10 text-4xl opacity-20"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        📅
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-4xl opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        🎯
      </motion.div>

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-wider mb-4"
          >
            <Rocket className="w-4 h-4" />
            My Journey
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Milestones & <span className="gradient-text">Achievements</span>
            <motion.span 
              className="inline-block ml-2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🚀
            </motion.span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A timeline of my learning, projects, and wins
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 transform md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground">
              <span>More to come...</span>
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="section-divider mt-16" />
      </div>
    </section>
  );
}