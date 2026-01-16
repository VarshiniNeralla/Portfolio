import { motion } from "framer-motion";
import { fadeUp } from "../../animations/fade";
import "./about.css";

export default function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am an <strong>AI Engineer and Full Stack Developer</strong> passionate about bridging the gap between complex machine learning models and practical, user-friendly applications.
          </p>
          <p>
            My approach focuses on <strong>language, voice, and real-world usability</strong>. Whether it's building an offline AI tutor for rural education or a real-time voice interview platform, I aim to create systems that are not just intelligent, but also accessible and impactful.
          </p>
          <p>
            I thrive in the intersection of <strong>research and engineering</strong>, translating theoretical advancements into scalable software solutions.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
