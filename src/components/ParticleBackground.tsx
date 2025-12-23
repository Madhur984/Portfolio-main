import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
}

interface GlowPoint {
  x: number;
  y: number;
  radius: number;
  hue: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let glowPoints: GlowPoint[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({ width: canvas.width, height: canvas.height });
      initParticles();
      initGlowPoints();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
          hue: Math.random() > 0.5 ? 175 : 280, // primary or secondary
        });
      }
    };

    const initGlowPoints = () => {
      glowPoints = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 300, hue: 175, opacity: 0.08 },
        { x: canvas.width * 0.8, y: canvas.height * 0.2, radius: 250, hue: 280, opacity: 0.06 },
        { x: canvas.width * 0.6, y: canvas.height * 0.8, radius: 350, hue: 200, opacity: 0.05 },
      ];
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const drawGlowPoints = () => {
      glowPoints.forEach((point, i) => {
        // Animate glow points
        const offsetX = Math.sin(time * 0.0005 + i) * 50;
        const offsetY = Math.cos(time * 0.0003 + i * 2) * 50;
        
        const gradient = ctx.createRadialGradient(
          point.x + offsetX, point.y + offsetY, 0,
          point.x + offsetX, point.y + offsetY, point.radius
        );
        gradient.addColorStop(0, `hsla(${point.hue}, 80%, 50%, ${point.opacity})`);
        gradient.addColorStop(0.5, `hsla(${point.hue}, 80%, 50%, ${point.opacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });
    };

    const drawGrid = () => {
      const gridSize = 80;
      ctx.strokeStyle = 'rgba(74, 158, 199, 0.03)';
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const drawConnections = (p1: Particle, p2: Particle, distance: number) => {
      const opacity = (1 - distance / 180) * 0.2;
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      gradient.addColorStop(0, `hsla(${p1.hue}, 80%, 50%, ${opacity})`);
      gradient.addColorStop(1, `hsla(${p2.hue}, 80%, 50%, ${opacity})`);
      
      ctx.beginPath();
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 0.5;
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    };

    const animate = () => {
      time++;
      
      // Clear with fade effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      drawGrid();

      // Draw glow points
      drawGlowPoints();

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 200 && dist > 0) {
          const force = (200 - dist) / 200;
          particle.vx += (dx / dist) * force * 0.02;
          particle.vy += (dy / dist) * force * 0.02;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle with glow
        const glowSize = particle.size * 3;
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 80%, 50%, ${particle.opacity * 0.3})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core of particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${particle.opacity * 1.5})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - p2.x, 2) + Math.pow(particle.y - p2.y, 2)
          );
          if (distance < 180) {
            drawConnections(particle, p2, distance);
          }
        }
      });

      // Mouse glow effect
      if (mouseX > 0 && mouseY > 0) {
        const mouseGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 150);
        mouseGradient.addColorStop(0, 'rgba(45, 212, 191, 0.08)');
        mouseGradient.addColorStop(0.5, 'rgba(45, 212, 191, 0.02)');
        mouseGradient.addColorStop(1, 'transparent');
        ctx.fillStyle = mouseGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)' }}
      />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Noise overlay */}
      <div className="noise-overlay" />
    </div>
  );
}