import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/Profile.jpg";

export default function HeroSection() {
  return (
    <section 
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--color-primary)] opacity-20 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-[var(--color-secondary)] opacity-20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            James Rhoey
          </motion.h1>
          
          <motion.h2
            className="text-xl md:text-2xl font-medium mb-8 text-[var(--color-light)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Full Stack Developer & Problem Solver
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg mb-10 max-w-lg mx-auto md:mx-0 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I build exceptional digital experiences with modern technologies and clean code.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] font-medium shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(58, 134, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-[var(--color-primary)] font-medium"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(58, 134, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Profile image */}
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl opacity-20 blur-xl animate-pulse" />
            <img
              src={myPhoto}
              alt="James Rhoey"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
