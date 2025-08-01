import React from "react";
import { motion } from "framer-motion";

const accentColor = "#ff5f6d";
const accentColor2 = "#ffc371";
const accentColor3 = "#36d1c4";

const skills = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Flutter", logo: "/logos/flutter.svg" },
  { name: "Express.js", logo: "/logos/express.svg" },
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" }
];

export default function SkillsGrid() {
  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 md:mb-10 text-transparent bg-clip-text drop-shadow-lg"
        style={{ backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor2}, ${accentColor3})` }}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.2 }}
      >
        Technologies
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="px-4 py-3 sm:px-5 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow-lg tracking-wide flex items-center gap-2 justify-center"
            style={{
              background: `linear-gradient(90deg, ${accentColor3}33, ${accentColor2}33, ${accentColor}33)`,
              color: accentColor3,
              border: `2px solid ${accentColor2}`,
              boxShadow: `0 2px 16px 0 ${accentColor2}33`,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 + i * 0.08 }}
          >
            <img src={skill.logo} alt={skill.name + ' logo'} className="w-5 h-5 sm:w-6 sm:h-6" />
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
