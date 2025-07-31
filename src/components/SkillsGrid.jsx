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
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
  { name: "Vue", logo: "/logos/vue.svg" }
];

export default function SkillsGrid() {
  return (
    <motion.section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-20 md:py-28"
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
        Technologies
      </motion.h2>
      <div className="flex flex-wrap gap-5 justify-center md:justify-start">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="px-8 py-4 rounded-full font-bold text-lg shadow-xl tracking-wide flex items-center gap-3"
            style={{
              background: `linear-gradient(90deg, ${accentColor3}33, ${accentColor2}33, ${accentColor}33)`,
              color: accentColor3,
              border: `2px solid ${accentColor2}`,
              boxShadow: `0 2px 24px 0 ${accentColor2}33`,
            }}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 + i * 0.08 }}
          >
            <img src={skill.logo} alt={skill.name + ' logo'} className="w-7 h-7 mr-2" />
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
