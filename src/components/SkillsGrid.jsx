import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaBootstrap 
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="w-10 h-10 text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-10 h-10 text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="w-10 h-10 text-[#000000]" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-10 h-10 text-[#47A248]" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="w-10 h-10 text-[#7952B3]" /> },
  { name: "HTML", icon: <FaHtml5 className="w-10 h-10 text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="w-10 h-10 text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJs className="w-10 h-10 text-[#F7DF1E]" /> },
];

export default function SkillsGrid() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[var(--color-dark)] to-[#0a1120]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="glass-card p-6 rounded-xl h-full flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-lg">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
