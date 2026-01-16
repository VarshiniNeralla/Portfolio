import "./hero.css";
import profileImg from "../../assets/images/my_img.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            AI Engineer & Full Stack Developer
          </div>
          <h1 className="hero-title">
            Building intelligent systems
            <br />
            that <span className="highlight">listen</span>, <span className="highlight">speak</span>, and <span className="highlight">solve</span>.
          </h1>

          <p className="hero-subtitle">
            I build scalable, agent-driven AI applications that solve real-world problems.
            Focused on multilingual access, voice interfaces, and human-centered design.
          </p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="image-glow"></div>
          <img src={profileImg} alt="Varshini Neralla" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
}
