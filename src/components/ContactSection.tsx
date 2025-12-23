import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Copy, Check, Coffee, MessageCircle } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Madhur984', icon: Github, emoji: '🐙' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/madhur-garg-5419b4244', icon: Linkedin, emoji: '💼' },
  { name: 'Instagram', href: 'https://www.instagram.com/madhur_g24', icon: Instagram, emoji: '📸' },
];

const conversationStarters = [
  "Have an AI project idea? Let's chat! 🤖",
  "Want to collaborate? I'm all ears! 👂",
  "Just want to say hi? That works too! 👋",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);
  const [currentStarter, setCurrentStarter] = useState(0);
  const email = 'gmadhur908@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Rotate conversation starters
  useState(() => {
    const interval = setInterval(() => {
      setCurrentStarter((prev) => (prev + 1) % conversationStarters.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-5xl opacity-20"
        animate={{ rotate: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✉️
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-4xl opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        🤝
      </motion.div>

      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-wider mb-4"
            >
              <MessageCircle className="w-4 h-4" />
              Let's connect
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Got a project? <span className="gradient-text">Let's talk!</span>
              <motion.span 
                className="inline-block ml-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💬
              </motion.span>
            </h2>

            {/* Rotating conversation starters */}
            <motion.p
              key={currentStarter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg text-muted-foreground"
            >
              {conversationStarters[currentStarter]}
            </motion.p>
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-card p-6 md:p-8 relative overflow-hidden"
          >
            {/* Decorative corner gradient */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            
            {/* Email - clickable to copy */}
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-muted/30 border-2 border-border hover:border-primary/30 transition-all group mb-4"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                whileHover={{ rotate: 10 }}
              >
                <Mail className="w-5 h-5 text-primary" />
              </motion.div>
              <div className="text-left flex-1">
                <p className="text-xs text-muted-foreground mb-0.5">Email (click to copy!)</p>
                <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                  {email}
                </p>
              </div>
              <motion.div
                animate={copied ? { scale: [1, 1.2, 1] } : {}}
              >
                {copied ? (
                  <div className="flex items-center gap-1 text-green-500">
                    <Check className="w-5 h-5" />
                    <span className="text-xs">Copied!</span>
                  </div>
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </motion.div>
            </motion.button>

            {/* Location */}
            <motion.div 
              className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border-2 border-border mb-6"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-0.5">Based in</p>
                <p className="font-mono text-foreground">India 🇮🇳</p>
              </div>
              <div className="ml-auto text-xs text-muted-foreground">
                <span className="font-mono">{new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                <span className="ml-1">IST</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href={`mailto:${email}`}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-6 group"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Send className="w-4 h-4" />
              <span>Drop me a message</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </motion.a>

            {/* Buy me a coffee note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
            >
              <Coffee className="w-4 h-4" />
              <span>Coffee meetings are always welcome</span>
              <span>☕</span>
            </motion.div>

            {/* Social links */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 border-border bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all text-sm group"
                >
                  <span className="group-hover:scale-110 transition-transform">{link.emoji}</span>
                  <link.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm">
              Currently open for <span className="text-primary font-medium">freelance projects</span> and 
              <span className="text-secondary font-medium"> full-time opportunities</span>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
              Response time: Usually within 24 hours ⚡
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
