import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillsGrid from "./components/SkillsGrid";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function App() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-dark)] to-[#0f172a)]">
      {/* Dynamic Navbar */}
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-[var(--color-dark)]/90 shadow-lg' : 'py-4 bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            JR.dev
          </motion.a>
          
          <ul className="hidden md:flex items-center gap-8">
            {['Projects', 'Skills', 'About', 'Contact'].map((item, i) => (
              <motion.li key={i} whileHover={{ y: -2 }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="font-medium hover:text-[var(--color-primary)] transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.05 }}>
              <a 
                href="/resume.pdf" 
                download
                className="px-4 py-2 rounded-md bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] font-medium shadow-lg"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </div>
      </motion.nav>

      <main className="pt-24">
        <HeroSection />
        <ProjectShowcase />
        <SkillsGrid />
        <AboutSection />
        <ContactForm />
      </main>

      <footer className="py-12 bg-gradient-to-r from-[var(--color-dark)] to-[#0f172a)] border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-2xl font-bold">JR</span>
          </motion.div>
          <p className="text-sm text-white/70">
            &copy; {new Date().getFullYear()} James Rhoey. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {['Github', 'LinkedIn', 'Twitter'].map((social, i) => (
              <motion.a 
                key={i}
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
