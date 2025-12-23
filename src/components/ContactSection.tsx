import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Copy, Check } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Madhur984', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/madhur-garg-5419b4244', icon: Linkedin },
  { name: 'Instagram', href: 'https://www.instagram.com/madhur_g24', icon: Instagram },
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
    <section id="contact" className="py-24 relative">
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
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono uppercase tracking-wider mb-4"
            >
              Get In Touch
            </motion.span>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Let's build something <span className="gradient-text">together</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Have a project idea or want to collaborate? I'm always open to discussing new opportunities.
            </p>
          </div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-card p-6 md:p-8"
          >
            {/* Email */}
            <button
              onClick={copyEmail}
              className="w-full flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border hover:border-primary/30 transition-all group mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="font-mono text-foreground group-hover:text-primary transition-colors">
                  {email}
                </p>
              </div>
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 border border-border mb-6">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="font-mono text-foreground">India</p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={`mailto:${email}`}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-6"
            >
              <Send className="w-4 h-4" />
              Send Me a Message
            </a>

            {/* Social links */}
            <div className="flex justify-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all text-sm"
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center text-muted-foreground text-sm mt-8"
          >
            Currently available for freelance projects and full-time opportunities
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
