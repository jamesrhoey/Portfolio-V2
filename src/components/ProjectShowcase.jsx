import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import downloadImg from "../assets/download.jpg";
import skConnectImage from "../assets/FB_IMG_1754390134164.jpg";

const projects = [
  {
    title: "Simple Serve",
    description: "Full-stack order management system with admin dashboard and secure authentication.",
    tags: ["Node.js", "Express", "MongoDB", "React"],
    link: "https://dulcet-medovik-ce5d3f.netlify.app",
    github: "https://github.com",
    featured: true,
    image: downloadImg
  },
  {
    title: "SK Connect V2",
    description: "Modern social media platform with real-time interactions and user engagement features.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://sk-connect-v3.vercel.app/",
    github: "https://github.com",
    featured: true,
    image: skConnectImage
  },
  // Add more projects...
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Here are some of my recent works that I'm particularly proud of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="glass-card overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-white text-[var(--color-dark)] px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1 bg-white/5 text-sm rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
