import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Instagram, Download, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://www.instagram.com/madhur_g24', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.linkedin.com/in/madhur-garg-5419b4244', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Madhur984', icon: Github, label: 'GitHub' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-border/50'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <MagneticButton onClick={() => scrollToSection('#home')}>
              <div className="flex items-center gap-3 cursor-pointer" data-cursor-text="Home">
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-tech-blue to-secondary p-[2px] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-tech-blue to-secondary animate-gradient-x" />
                  <div className="relative w-full h-full rounded-[10px] bg-background flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-display font-bold text-foreground text-lg leading-none">
                    Madhur Garg
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    AI & ML Engineer
                  </div>
                </div>
              </div>
            </MagneticButton>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <MagneticButton key={link.href} onClick={() => scrollToSection(link.href)}>
                  <span
                    className={`nav-link-cyber px-4 py-2 rounded-lg font-medium text-sm transition-all cursor-pointer ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </span>
                </MagneticButton>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {socialLinks.map((link) => (
                <MagneticButton
                  key={link.label}
                  href={link.href}
                  target="_blank"
                >
                  <span className="btn-icon" data-cursor-text={link.label}>
                    <link.icon className="w-4 h-4" />
                  </span>
                </MagneticButton>
              ))}
              
              <div className="w-px h-6 bg-border mx-2" />
              
              <MagneticButton>
                <span className="btn-cyber py-2.5 px-5 text-sm" data-cursor-text="Download">
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Resume
                  </span>
                </span>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 border border-border"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-card border-l border-border p-6 pt-24"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left py-3 px-4 rounded-xl font-medium text-lg transition-all ${
                      activeSection === link.href.slice(1)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-border"
              >
                <p className="text-sm text-muted-foreground mb-4 font-mono">Connect</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <button className="btn-cyber w-full py-3">
                  <span className="flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}