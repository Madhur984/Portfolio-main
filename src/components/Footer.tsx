import { motion } from 'framer-motion';
import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/30 relative overflow-hidden">
      {/* Subtle gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>© {currentYear}</span>
            <span className="font-display font-semibold text-foreground">Madhur Garg</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>Built with</span>
            <Heart className="w-4 h-4 text-destructive animate-pulse" />
            <span>&</span>
            <Code2 className="w-4 h-4 text-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs text-muted-foreground font-mono"
          >
            AI & ML Science Innovator
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
