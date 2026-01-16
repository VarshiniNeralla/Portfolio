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
        <span className="contact-subtitle">What's Next?</span>
        <h2 className="contact-title">Let's work together.</h2>
        <p className="contact-text">
          I'm currently looking for new opportunities in AI Engineering and Full Stack Development.
          My inbox is always open!
        </p>

        <a href="mailto:varshinineralla9@gmail.com" className="contact-email-btn">
          Say Hello 👋
        </a>

        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/varshinineralla" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="separator">•</span>
          <a href="https://github.com/VarshiniNeralla" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <footer className="footer-credits">
          <p>&copy; {new Date().getFullYear()} Varshini Neralla. Built with code & chaos.</p>
        </footer>
      </motion.div>
    </section>
  );
}
