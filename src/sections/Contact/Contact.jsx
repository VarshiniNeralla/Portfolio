import { motion } from "framer-motion";
import "./contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="contact-subtitle">Get in Touch</span>
        <h2 className="contact-title">Let's build something intelligent.</h2>
        <p className="contact-text">
          I'm currently looking for new opportunities in AI Engineering and Full Stack Development.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="contact-links">
          <a href="mailto:varshinineralla9@gmail.com" className="contact-btn primary">
            Say Hello
          </a>
          <a href="https://linkedin.com/in/varshinineralla" target="_blank" rel="noopener noreferrer" className="contact-btn outline">
            LinkedIn
          </a>
          <a href="https://github.com/YourUsername" target="_blank" rel="noopener noreferrer" className="contact-btn outline">
            GitHub
          </a>
        </div>

        <footer className="footer-credits">
          <p>Designed & Built by Varshini Neralla</p>
        </footer>
      </motion.div>
    </section>
  );
}
