import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/Profile.jpg";

const heroBgGradient = "bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#24243e]";
const accentColor = "#ff5f6d"; // Vibrant coral pink
const accentColor2 = "#ffc371"; // Warm yellow
const accentColor3 = "#36d1c4"; // Aqua

export default function HeroSection() {
  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-between px-6 py-24 md:py-36 max-w-7xl mx-auto overflow-hidden ${heroBgGradient}`}
      style={{ borderRadius: "2.5rem", boxShadow: "0 8px 48px 0 rgba(36,36,62,0.25)" }}
    >
      {/* Animated, layered background shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute w-[650px] h-[650px] left-[-18%] top-[-30%] rounded-full"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${accentColor}, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute w-[350px] h-[350px] right-[-10%] bottom-[-15%] rounded-full"
          style={{
            background: `radial-gradient(circle at 60% 60%, ${accentColor2}, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 0.4, x: 0 }}
          transition={{ duration: 1.7, delay: 0.5 }}
          className="absolute w-[250px] h-[250px] left-[30%] top-[60%] rounded-full"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${accentColor3}, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      </div>
      {/* Animated profile image with glowing border */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative md:ml-40"
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
          className="w-48 h-48 rounded-3xl border-4 border-white shadow-2xl bg-[#23243e]/70 backdrop-blur-md relative z-10"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      {/* Text and CTA */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="md:ml-16 text-center md:text-left mt-10 md:mt-0"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="text-5xl md:text-7xl font-black mb-4 leading-tight text-transparent bg-clip-text"
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
          className="text-2xl md:text-3xl font-semibold mb-4 tracking-wide"
          style={{ color: accentColor2 }}
        >
          Just Building Cool Stuff
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-lg text-gray-100 mb-8 max-w-xl"
        >
          I love making things work on the web sometimes with a lot of coffee. Check out my projects or let’s connect!
        </motion.p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08, boxShadow: `0 0 24px 0 ${accentColor3}` }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-12 py-4 font-extrabold rounded-full shadow-2xl text-[#23243e] bg-gradient-to-r from-[#36d1c4] via-[#ffc371] to-[#ff5f6d] hover:from-[#ff5f6d] hover:to-[#36d1c4] transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#36d1c4]/50"
          style={{ fontSize: "1.25rem", letterSpacing: "0.05em" }}
        >
          Let’s Work Together
        </motion.a>
      </motion.div>
    </section>
  );
}
