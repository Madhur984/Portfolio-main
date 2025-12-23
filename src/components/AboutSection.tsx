import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Brain, Cpu, Database, MapPin, Briefcase } from 'lucide-react';

const stats = [
  { icon: Brain, label: 'ML Models', value: '50+' },
  { icon: Code2, label: 'Projects', value: '30+' },
  { icon: Cpu, label: 'Technologies', value: '15+' },
  { icon: Database, label: 'Datasets', value: '100+' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-4">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Passionate about transforming
              <br />
              <span className="gradient-text">data into intelligence</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Main content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3 space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm <span className="text-foreground font-medium">Madhur Garg</span>, a Data Scientist based in India 
                with a deep passion for uncovering insights from complex datasets. I specialize in building 
                end-to-end machine learning pipelines and deploying intelligent systems that solve real-world problems.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans across <span className="text-primary">Machine Learning</span>, 
                <span className="text-secondary"> Deep Learning</span>, 
                <span className="text-primary"> Natural Language Processing</span>, and 
                <span className="text-secondary"> Computer Vision</span>. I work with tools like Python, 
                TensorFlow, and PyTorch to develop predictive models and AI-powered applications.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Beyond technical skills, I believe in writing clean, maintainable code and creating 
                solutions that are not just functional but also scalable and production-ready.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">India</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-sm">Open to opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Stats sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="glass-card p-6 space-y-6">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  By the numbers
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      className="text-center p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <stat.icon className="w-5 h-5 mx-auto text-primary mb-2" />
                      <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full btn-primary text-sm"
                  >
                    <span>Let's Connect</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
