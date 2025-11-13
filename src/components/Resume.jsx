import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        backgroundColor: "#0f0303ff",
        padding: "3rem 1rem",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          color: "#cc0c8cff",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        My Resume
      </motion.h2>

      {/* Floating subtle animation for button */}
      <motion.a
        href="resume link"
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#c31b6cff",
          color: "#fff",
        }}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "#030304ff",
          textDecoration: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          boxShadow: "0px 0px 12px rgba(195, 27, 108, 0.3)",
        }}
      >
        Download Resume
      </motion.a>
    </motion.section>
  );
}

export default Resume;
