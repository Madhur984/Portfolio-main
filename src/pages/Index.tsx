import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CustomCursor from '@/components/CustomCursor';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Particle Background */}
      <ParticleBackground />

      {/* Scanline overlay effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            hsl(var(--primary) / 0.03) 2px,
            hsl(var(--primary) / 0.03) 4px
          )`
        }} />
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </motion.main>

      {/* Footer */}
      <Footer />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
};

export default Index;
