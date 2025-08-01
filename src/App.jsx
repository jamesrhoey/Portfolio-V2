import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import ProjectShowcase from "./components/ProjectShowcase";
import SkillsGrid from "./components/SkillsGrid";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c2f] to-[#232946] text-gray-100 font-sans">
      {/* Responsive Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-[#1a1b2e]/80 backdrop-blur-lg shadow-xl sticky top-0 z-40 rounded-b-3xl border-b border-[#3e497a]/40">
        <span className="text-2xl font-extrabold tracking-widest text-yellow-400 drop-shadow-lg mb-3 md:mb-0">JamesRhoey.dev</span>
        <ul className="flex flex-wrap justify-center gap-3 md:gap-8 text-base md:text-lg font-semibold">
          <li><a href="#projects" className="hover:text-yellow-400 transition px-2 py-1">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition px-2 py-1">Skills</a></li>
          <li><a href="#about" className="hover:text-yellow-400 transition px-2 py-1">About</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition px-2 py-1">Contact</a></li>
          <li><a href="/resume.pdf" className="hover:text-yellow-400 transition px-2 py-1" download>Resume</a></li>
        </ul>
      </nav>

      <HeroSection />
      <ProjectShowcase />
      <SkillsGrid />
      <AboutSection />
      <ContactForm />

      {/* Footer */}
      <footer className="text-center py-8 px-4 text-gray-400 text-sm md:text-base bg-gradient-to-r from-[#232946]/80 via-[#181c2f]/80 to-[#232946]/80 mt-16 rounded-t-3xl shadow-inner animate-pulse">
        &copy; {new Date().getFullYear()} James Rhoey. Crafted with passion and precision.
      </footer>
    </div>
  );
}
