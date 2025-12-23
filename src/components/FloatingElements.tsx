import { motion } from 'framer-motion';

export default function FloatingElements() {
  const elements = [
    { size: 'w-2 h-2', color: 'bg-primary', delay: 0, duration: 8, x: '10%', y: '20%' },
    { size: 'w-3 h-3', color: 'bg-secondary', delay: 1, duration: 10, x: '80%', y: '15%' },
    { size: 'w-1 h-1', color: 'bg-tech-teal', delay: 2, duration: 7, x: '70%', y: '60%' },
    { size: 'w-2 h-2', color: 'bg-accent', delay: 0.5, duration: 9, x: '20%', y: '70%' },
    { size: 'w-1 h-1', color: 'bg-primary', delay: 1.5, duration: 11, x: '90%', y: '40%' },
    { size: 'w-2 h-2', color: 'bg-tech-purple', delay: 2.5, duration: 8, x: '5%', y: '50%' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${el.size} ${el.color} opacity-40`}
          style={{ left: el.x, top: el.y }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute w-20 h-20 border border-primary/20 rotate-45"
        style={{ right: '15%', top: '25%' }}
        animate={{ rotate: [45, 135, 45], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-16 h-16 border border-secondary/20 rounded-full"
        style={{ left: '12%', bottom: '30%' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-accent/20"
        style={{ right: '25%', bottom: '20%' }}
        animate={{ rotate: [0, 360], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}