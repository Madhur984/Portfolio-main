import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Rocket, Users, Award, GitBranch, Coffee } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  {
    icon: Code2,
    value: 15,
    suffix: '+',
    label: 'Projects Completed',
    color: 'from-primary to-secondary',
  },
  {
    icon: GitBranch,
    value: 500,
    suffix: '+',
    label: 'GitHub Commits',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Rocket,
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Users,
    value: 10,
    suffix: '+',
    label: 'Happy Clients',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    value: 5,
    suffix: '+',
    label: 'Certifications',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Coffee,
    value: 1000,
    suffix: '+',
    label: 'Cups of Coffee',
    color: 'from-amber-600 to-yellow-500',
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
        }}
      />
      
      <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center overflow-hidden">
        {/* Glowing background effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Animated ring */}
        <motion.div
          className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${stat.color} rounded-full opacity-10 blur-2xl`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        />

        {/* Icon */}
        <motion.div
          className={`relative mx-auto w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white" />
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              delay: index * 0.3,
            }}
          />
        </motion.div>

        {/* Counter */}
        <AnimatedCounter
          value={stat.value}
          suffix={stat.suffix}
          className={`text-4xl font-display font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
        />

        {/* Label */}
        <p className="mt-2 text-muted-foreground text-sm font-medium">
          {stat.label}
        </p>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r ${stat.color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: '50%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            📊 By The Numbers
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            My Journey in{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick snapshot of my professional journey and achievements in the world of AI/ML
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
          <span className="text-muted-foreground text-sm">& counting...</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
        </motion.div>
      </div>
    </section>
  );
}
