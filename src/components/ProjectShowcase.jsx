import React from "react";
import { motion } from "framer-motion";

const accentColor = "#ff5f6d";
const accentColor2 = "#ffc371";
const accentColor3 = "#36d1c4";
import downloadImg from "../assets/download.jpg";

const projects = [
  {
    title: "Local Project 1",
    image: "/vite.svg",
    description: "A local project with advanced features. [Replace with your description]",
    tech: ["Python", "Django", "PostgreSQL"],
    link: null,
    featured: true,
  },
  {
    title: "Online Project",
    image: "/vite.svg",
    description: "A live project hosted online. [Replace with your description]",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/your-repo",
    featured: false,
  },
  {
    title: "Simple Serve",
    image: downloadImg,
    description: "A full-stack web application designed for efficient order, product, and transaction management. The system features secure user authentication, an admin dashboard, product and order tracking, transaction history, and a profile management section with password change functionality. Built with Node.js, Express, MongoDB, and a modern Bootstrap frontend, this project showcases practical CRUD operations, responsive UI, and real-world business logic for small to medium enterprises.",
    tech: ["Node.js", "Express", "MongoDB", "Bootstrap"],
    link: "https://glistening-cannoli-3f7d6b.netlify.app",
    featured: false,
  },
  {
    title: "Local Project 2",
    image: "/vite.svg",
    description: "Another local project. [Replace with your description]",
    tech: ["C#", ".NET", "SQL Server"],
    link: null,
    featured: false,
  },
];

export default function ProjectShowcase() {
  return (
    <motion.section
      id="projects"
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
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`group relative rounded-3xl shadow-2xl overflow-hidden border-2 border-white/10 hover:border-[${accentColor}] transition-all duration-300 ${project.featured ? 'ring-4 ring-[${accentColor2}]' : ''} h-[500px] flex flex-col`}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.18 + i * 0.15 }}
            whileHover={{ scale: 1.03, boxShadow: `0 8px 48px 0 ${accentColor}33` }}
          >
            <div className="h-52 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                style={{ filter: 'brightness(0.93) saturate(1.1)' }}
              />
              {project.featured && (
                <span className="absolute top-3 right-3 bg-gradient-to-r from-[#36d1c4] to-[#ff5f6d] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wider">FEATURED</span>
              )}
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-black mb-2 text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(90deg, ${accentColor}, ${accentColor3})` }}>{project.title}</h3>
              <p className="text-gray-100 mb-4 flex-1 overflow-auto max-h-24">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span key={j} className="rounded-full px-4 py-1 font-semibold text-xs shadow" style={{ background: `linear-gradient(90deg, ${accentColor3}33, ${accentColor2}33)`, color: accentColor3, border: `1.5px solid ${accentColor2}` }}>{t}</span>
                ))}
              </div>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, boxShadow: `0 0 24px 0 ${accentColor3}` }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block mt-2 px-7 py-3 rounded-full font-extrabold text-[#23243e] bg-gradient-to-r from-[#36d1c4] via-[#ffc371] to-[#ff5f6d] hover:from-[#ff5f6d] hover:to-[#36d1c4] transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#36d1c4]/50 text-base tracking-wide shadow-lg"
                >
                  View Project
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
