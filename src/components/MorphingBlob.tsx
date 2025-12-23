import { motion } from 'framer-motion';

interface MorphingBlobProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function MorphingBlob({ 
  className = '', 
  color = 'primary',
  size = 'lg' 
}: MorphingBlobProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[500px] h-[500px]',
  };

  const colorClasses = {
    primary: 'from-primary/30 via-tech-blue/20 to-primary/10',
    secondary: 'from-secondary/30 via-tech-purple/20 to-secondary/10',
    accent: 'from-accent/30 via-tech-coral/20 to-accent/10',
  };

  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-to-br ${colorClasses[color]} ${sizeClasses[size]} blur-3xl animate-morph ${className}`}
      animate={{
        scale: [1, 1.1, 0.9, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}