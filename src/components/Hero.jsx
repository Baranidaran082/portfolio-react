import { motion } from "framer-motion";
import Barani from "../assets/Barani.jpeg";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>

      <div className="container">
        <div className="hero-content">

          {/* Text Section */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="greeting">Hi there, I'm</p>

            <h1>Baranidaran S</h1>

            <h2>MERN Stack Developer</h2>

            <p className="hero-description">
              I create responsive and modern web applications using the MERN stack.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>

              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={Barani} alt="Baranidaran" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;