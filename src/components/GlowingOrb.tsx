import { motion } from 'framer-motion';

interface GlowingOrbProps {
  className?: string;
  size?: number;
  color?: 'primary' | 'secondary' | 'accent';
}

export default function GlowingOrb({ 
  className = '', 
  size = 300,
  color = 'primary' 
}: GlowingOrbProps) {
  const colors = {
    primary: {
      inner: 'hsl(175, 80%, 50%)',
      outer: 'hsl(200, 90%, 55%)',
    },
    secondary: {
      inner: 'hsl(280, 100%, 70%)',
      outer: 'hsl(260, 80%, 60%)',
    },
    accent: {
      inner: 'hsl(15, 90%, 60%)',
      outer: 'hsl(45, 100%, 60%)',
    },
  };

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{
          background: `radial-gradient(circle, ${colors[color].inner} 0%, ${colors[color].outer} 50%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Inner core */}
      <motion.div
        className="absolute inset-[20%] rounded-full blur-xl"
        style={{
          background: `radial-gradient(circle, ${colors[color].inner} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      
      {/* Bright center */}
      <motion.div
        className="absolute inset-[35%] rounded-full"
        style={{
          background: `radial-gradient(circle, white 0%, ${colors[color].inner} 50%, transparent 70%)`,
          filter: 'blur(10px)',
        }}
        animate={{
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}