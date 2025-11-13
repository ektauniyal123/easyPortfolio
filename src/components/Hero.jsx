// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
// Correct import
import { ReactTyped } from "react-typed";
 // ✅ correct import

function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#0f0303ff",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Text content animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          maxWidth: "600px",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            color: "#c31b6cff",
            fontWeight: "bold",
          }}
        >
          Hi, I'm Ekta
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#e7e1e5ff",
            marginBottom: "2rem",
          }}
        >
          Welcome to my portfolio
        </p>

        {/* Typing animation */}
        <h2 style={{ fontSize: "1.5rem", color: "#ffffff" }}>
          <ReactTyped
            strings={[
              "Web Developer ",
              "Creative Problem Solver ",
            ]}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </h2>
      </motion.div>

      {/* Floating Cartoon Animation */}
      <motion.img
        src="/ekta-cartoon.jpg" // make sure this image is in your public folder
        alt="Ekta Cartoon"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          borderRadius: "50%",
          border: "4px solid #c31b6cff",
          position: "absolute",
          top: "20%",
          left: "70%",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </section>
  );
}

export default Hero;
