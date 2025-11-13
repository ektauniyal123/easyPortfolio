import React from "react";
import { motion } from "framer-motion";
import './Project.css'; // make sure this CSS has the updated rules

const projects = [
  {
    name: "Quiz Application",
    description:"#",
    github: "#YOUR_GITHUB_LINK", // placeholder
    live: "#YOUR_LIVE_LINK",     // placeholder
  },
  {
    name: "E-Commerce Website",
    description:"#" ,
    github: "#YOUR_GITHUB_LINK", // placeholder
    live: "#YOUR_LIVE_LINK",     // placeholder
  },
  {
    name: "To-Do App",
    description:"#",
    github: "#YOUR_GITHUB_LINK", // placeholder
    live: "#YOUR_LIVE_LINK",     // placeholder
  },
  {
    name: "Bookstore App",
    description:"#",
    github: "#YOUR_GITHUB_LINK", // placeholder
    live: "#YOUR_LIVE_LINK",     // placeholder
  },
];

function Project() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="project-heading"
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{proj.name}</h3>
            <p className="project-description">{proj.description}</p>
            <div className="project-buttons">
              <a href={proj.live} target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={proj.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Project;
