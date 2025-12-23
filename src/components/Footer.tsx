import { motion } from 'framer-motion';
import { Heart, Code2, ArrowUp } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/30 overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-primary/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <span className="text-sm">© {currentYear}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="font-display font-semibold text-foreground">Madhur Garg</span>
          </motion.div>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.div>
            <span>and</span>
            <Code2 className="w-4 h-4 text-primary" />
          </motion.div>

          {/* Scroll to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MagneticButton onClick={scrollToTop}>
              <span 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                data-cursor-text="Top"
              >
                Back to top
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.span>
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground/60 font-mono">
            AI & ML Engineer • Building the future, one model at a time
          </p>
        </motion.div>
      </div>
    </footer>
  );
}