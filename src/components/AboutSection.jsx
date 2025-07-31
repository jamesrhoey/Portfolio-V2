import React from "react";
import { motion } from "framer-motion";

const accentColor = "#ff5f6d";
const accentColor2 = "#ffc371";
const accentColor3 = "#36d1c4";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="max-w-3xl mx-auto px-6 py-20 md:py-28"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h2
        className="text-5xl font-black mb-10 text-transparent bg-clip-text drop-shadow-lg"
        style={{ backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor2}, ${accentColor3})` }}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="bg-[#23243e]/80 rounded-3xl shadow-2xl p-10 text-xl text-gray-100 leading-relaxed backdrop-blur-md border border-white/10 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full" style={{ background: `radial-gradient(circle, ${accentColor2}33, transparent 70%)`, filter: "blur(32px)" }} />
        <p>
          I am a <span style={{ color: accentColor }}>creative</span> and <span style={{ color: accentColor3 }}>client-focused</span> full stack developer who loves blending <span style={{ color: accentColor2 }}>design</span> and <span style={{ color: accentColor3 }}>technology</span> to craft unforgettable digital experiences.<br /><br />
          My mission is to help your business stand out online with beautiful, high-performance web apps. Let’s collaborate to turn your ideas into reality!
        </p>
      </motion.div>
    </motion.section>
  );
}
