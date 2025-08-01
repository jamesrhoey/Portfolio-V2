import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl" />
      <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-[var(--color-secondary)] opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="text-white/80 text-lg leading-relaxed">
              <p>
                Hi! I'm James Rhoey, a passionate 4th-year college student who loves coding and creating projects that solve real-world problems. I enjoy building tools and applications that make life easier for others, and I'm always exploring new ways to improve my skills in programming and development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
