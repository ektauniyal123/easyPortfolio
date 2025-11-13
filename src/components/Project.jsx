import React from "react";
import { motion } from "framer-motion";
import './Project.css'; // make sure this CSS has the updated rules

const projects = [
  {
    name: "Quiz Application",
    description:
      "An interactive and fully responsive web-based quiz application designed to test users’ knowledge across multiple topics. It dynamically fetches questions, tracks scores in real time, and provides instant feedback after submission. Built using HTML, CSS, and JavaScript, the app features smooth transitions, intuitive UI, and a progress tracker for better user engagement.",
    github: "https://github.com/ektauniyal123/Quiz-application.git",
    live: "https://core-fundamentalsquiz-application.netlify.app/",
  },
  {
    name: "E-Commerce Website",
    description:
      "A front-end e-commerce website built to simulate a real-world online shopping experience. It includes product listings, category filters, responsive layouts, and a shopping cart interface. Developed using HTML, CSS, and JavaScript, the site emphasizes clean UI/UX design, mobile responsiveness, and performance optimization for seamless navigation.",
    github: "https://github.com/ektauniyal123/ecommercewebsite.git",
    live: "https://ektauniyal123.github.io/ecommercewebsite/",
  },
  {
    name: "To-Do App",
    description:
      "A simple yet effective to-do list web application that helps users manage daily tasks efficiently. It allows users to add, edit, delete, and mark tasks as completed. Designed with a minimalist interface using HTML, CSS, and JavaScript, this app focuses on local storage integration to retain user data even after browser refresh.",
    github: "https://github.com/ektauniyal123/to-do-app.git",
    live: "https://ektauniyal123.github.io/to-do-app/",
  },
  {
    name: "Bookstore App",
    description:
      "A responsive bookstore management web app that allows users to browse, add, and manage books efficiently. It provides an organized view of book details like author, genre, and price, along with smooth navigation and sorting functionality. Developed using React.js and CSS, the app ensures scalability and modern UI components for a real-world e-commerce-like experience.",
    github: "https://github.com/ektauniyal123/bookstoreapp.git",
    live: "#",
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
