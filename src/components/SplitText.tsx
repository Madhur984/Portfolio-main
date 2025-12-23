import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  type?: 'chars' | 'words' | 'lines';
}

export default function SplitText({
  children,
  className = '',
  delay = 0,
  type = 'chars',
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const elements = type === 'chars' 
    ? children.split('') 
    : type === 'words' 
    ? children.split(' ')
    : children.split('\n');

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 50,
              rotateX: -90,
            },
            visible: { 
              opacity: 1, 
              y: 0,
              rotateX: 0,
            },
          }}
          transition={{
            duration: 0.5,
            delay: delay + index * (type === 'chars' ? 0.03 : 0.1),
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ 
            display: 'inline-block',
            transformOrigin: 'center bottom',
          }}
        >
          {element === ' ' ? '\u00A0' : element}
          {type === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}