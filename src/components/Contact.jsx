import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // placeholder for Service ID
        "YOUR_TEMPLATE_ID", // placeholder for Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // placeholder for Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        backgroundColor: "#0f0303ff",
        color: "#fff",
      }}
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{ color: "#c31b6cff", fontSize: "2rem", marginBottom: "2rem" }}
      >
        Contact Me
      </motion.h2>

      <div
        className="contact-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {/* Floating Info Section */}
        <motion.div
          className="contact-info"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          <p>Email: <strong>your-email@example.com</strong></p>
          <p>Location: Dehradun, India</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "300px",
            backgroundColor: "#1a0b0b",
            padding: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)",
          }}
        >
          {["from_name", "from_email"].map((name, i) => (
            <motion.input
              key={i}
              type={name === "from_email" ? "email" : "text"}
              name={name}
              placeholder={name === "from_name" ? "Your Name" : "Your Email"}
              required
              whileFocus={{ scale: 1.02, borderColor: "#c31b6cff" }}
              style={{
                padding: "0.8rem",
                border: "2px solid #333",
                borderRadius: "5px",
                outline: "none",
                transition: "0.2s all",
              }}
            />
          ))}
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            whileFocus={{ scale: 1.02, borderColor: "#c31b6cff" }}
            style={{
              padding: "0.8rem",
              border: "2px solid #333",
              borderRadius: "5px",
              outline: "none",
              transition: "0.2s all",
            }}
          ></motion.textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.8rem",
              backgroundColor: "#c31b6cff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              className="form-status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: "#c31b6cff", marginTop: "0.5rem" }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
