import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Sparkles, Github, Linkedin, Instagram, ArrowUpRight, Copy, Check } from 'lucide-react';
import MagneticButton from './MagneticButton';
import MorphingBlob from './MorphingBlob';

const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/Madhur984', 
    icon: Github,
    color: 'hover:text-foreground hover:border-foreground/30',
  },
  { 
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/in/madhur-garg-5419b4244', 
    icon: Linkedin,
    color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/30',
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/madhur_g24', 
    icon: Instagram,
    color: 'hover:text-[#E4405F] hover:border-[#E4405F]/30',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);
  const email = 'gmadhur908@gmail.com';

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <MorphingBlob className="-top-40 -left-40" color="primary" size="xl" />
      <MorphingBlob className="-bottom-40 -right-40" color="secondary" size="lg" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono uppercase tracking-wider">
                Get In Touch
              </span>
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
            >
              Let's build something{' '}
              <span className="gradient-text">extraordinary</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project idea or want to collaborate? I'm always open to discussing 
              new opportunities and innovative solutions.
            </motion.p>
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            {/* Contact info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
              {/* Email */}
              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 px-6 py-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all group w-full md:w-auto"
                data-cursor-text="Copy"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                    {email}
                  </p>
                </div>
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </motion.button>

              {/* Location */}
              <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-muted/50 border border-border w-full md:w-auto">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-mono text-foreground">India</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-10">
              <MagneticButton href={`mailto:${email}`}>
                <span className="btn-cyber text-lg px-10 py-5 inline-flex items-center gap-3" data-cursor-text="Let's talk!">
                  <Send className="w-5 h-5" />
                  <span>Send Me a Message</span>
                </span>
              </MagneticButton>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-xl border border-border bg-muted/30 text-muted-foreground transition-all ${link.color}`}
                  data-cursor-text={link.name}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center text-muted-foreground mt-12"
          >
            Currently available for freelance projects and full-time opportunities
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}