import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono uppercase tracking-wider">
              Get In Touch
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            Let's build something{' '}
            <span className="gradient-text">impactful</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            If you have a project idea or want to collaborate, reach out — I focus on ML solutions 
            that create measurable impact.
          </motion.p>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="cyber-card p-8 relative overflow-hidden"
          >
            {/* Animated border glow */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 blur-xl"
            />
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-mono">gmadhur908@gmail.com</span>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-mono">India</span>
                </motion.div>
              </div>

              <motion.a
                href="mailto:gmadhur908@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(var(--primary) / 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-cyber inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 flex justify-center gap-6"
          >
            {[
              { href: 'https://github.com/Madhur984', label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/madhur-garg-5419b4244', label: 'LinkedIn' },
              { href: 'https://www.instagram.com/madhur_g24', label: 'Instagram' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: 'hsl(var(--primary))' }}
                className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
