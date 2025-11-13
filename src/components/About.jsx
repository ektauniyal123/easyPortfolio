import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <motion.section
      id="about"
      className="section"
      style={{ backgroundColor: "#0f0303ff", padding: "3rem 2rem" }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Title Animation */}
      <motion.h2
        className="section-title"
        style={{ color: "#c31b6cff", textAlign: "center", marginBottom: "2rem", fontSize: "2.5rem" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        {/* About Text */}
        <motion.div
          style={{ flex: "1 1 300px", maxWidth: "600px", lineHeight: "1.8" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={{ maxWidth: "600px", color: "#e7e1e5ff", textAlign: "left", lineHeight: "1.6" }}>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#c31b6cff" }}>
          Hi, I'm Ekta Uniyal
          </p>
          <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
           I specialize in React, JavaScript, and front-end design. My goal is to blend logic and creativity to
           craft seamless user experiences that look beautiful and work flawlessly.
           </p>
           </div>

          {/* Animated Social Links */}
          <motion.div
            style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem", justifyContent: "center" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/ekta-uniyal-694053282"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ color: "#0A66C2" }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </motion.a>

            <motion.a
              href="https://github.com/ektauniyal123"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ color: "#e6e6e6" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/ekta____uniyal?igsh=eHh3MzJ5bWw2dWs1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ color: "#E1306C" }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          style={{ flex: "0 0 220px" }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="/ekta-cartoon.jpg"
            alt="Ekta Cartoon"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0 4px 15px rgba(255, 255, 255, 0.15)",
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
