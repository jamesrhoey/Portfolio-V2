import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/Profile.jpg";

const heroBgGradient = "bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e]";
const accentColor = "#ff5f6d";
const accentColor2 = "#ffc371";
const accentColor3 = "#36d1c4";

export default function HeroSection() {
  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden ${heroBgGradient}`}
      style={{ borderRadius: "1.5rem", boxShadow: "0 8px 48px 0 rgba(36,36,62,0.25)" }}
    >
      {/* Background shapes remain the same */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* ... existing background shapes ... */}
      </div>

      {/* Profile image - mobile first */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative md:ml-10 lg:ml-40 mb-10 md:mb-0"
      >
        <motion.div
          animate={{
            boxShadow: [
              `0 0 0 0 ${accentColor2}66`,
              `0 0 40px 10px ${accentColor3}cc`,
              `0 0 0 0 ${accentColor2}66`,
            ],
          }}
          transition={{ repeat: Infinity, duration: 2.5, repeatType: "loop" }}
          className="absolute -inset-2 rounded-3xl z-0"
          style={{ pointerEvents: "none" }}
        />
        <img
          src={myPhoto}
          alt="Profile"
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl border-4 border-white shadow-2xl bg-[#23243e]/70 backdrop-blur-md relative z-10"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Text and CTA */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="md:ml-10 lg:ml-16 text-center md:text-left w-full max-w-2xl px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor2}, ${accentColor3})`,
          }}
        >
          James Rhoey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 tracking-wide"
          style={{ color: accentColor2 }}
        >
          Just Building Cool Stuff
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-base sm:text-lg text-gray-100 mb-8 max-w-xl mx-auto md:mx-0"
        >
          I love making things work on the web sometimes with a lot of coffee. Check out my projects or let's connect!
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08, boxShadow: `0 0 24px 0 ${accentColor3}` }}
          whileTap={{ scale: 0.97 }}
          className="inline-block w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 font-extrabold rounded-full shadow-2xl text-[#23243e] bg-gradient-to-r from-[#36d1c4] via-[#ffc371] to-[#ff5f6d] hover:from-[#ff5f6d] hover:to-[#36d1c4] transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#36d1c4]/50"
          style={{ fontSize: "1rem", letterSpacing: "0.05em" }}
        >
          Let's Work Together
        </motion.a>
      </motion.div>
    </section>
  );
}
