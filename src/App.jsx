// App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './components/Project.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Project from "./components/Project"; 
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed (1 second)
      once: true,      // animate only once per scroll
    });
  }, []);

  return (
    <div>
      

      <Navbar data-aos="fade-down" />
      <Hero data-aos="fade-up" />
      <About data-aos="fade-right" />
      <Resume data-aos="fade-left" />
      <Project data-aos="fade-up" />
      <Contact data-aos="fade-in" />
    </div>
  );
}

export default App;
