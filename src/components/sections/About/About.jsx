import SectionHead from '../../reusables/SectionHead';
import { motion } from 'framer-motion';

import './about.css';
import DownloadIcon from '../../../assets/icons/DownloadIcon';

const containerVariant = {
  hidden: {
    opacity: 0,
    y: 90,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

function scrollToContact() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

function About() {
  return (
    <motion.section
      id="about"
      className="about-section"
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <SectionHead
        title="About"
        subtitle="Engineer by Training. Developer by Choice"
        TagLevel="h2"
      />

      <div className="about-body">
        {/* Text + buttons */}
        <div className="about-left">
          <div className="about-text">
            <p>
              I'm Martins, a frontend developer who came into tech through
              Electrical Engineering. That path taught me to see systems,
              patterns, and connections before writing a single line of code.
            </p>
            <p>
              I’m drawn to the details that shape an experience, from thoughtful
              spacing to purposeful animations and components designed to be
              easy to work with. Every decision is intentional, and every
              interaction earns its place.
            </p>
            <p>
              Beyond coding, I explore interfaces and work toward experiences
              that feel seamless, refined, and easy to use.
            </p>
          </div>

          <div className="hero-actions" style={{ margin: '1rem 0' }}>
            <button className="btn primary" onClick={scrollToContact}>
              <span>Get In Touch</span>
            </button>

            <button className="btn secondary">
              <a href="https://drive.google.com/file/d/1vAHn8bCuyYqAQX-kxI6qSyzTLBY_jipr/view?usp=drivesdk">
                My Resume
              </a>

              <div className="icon-wrapper">
                <DownloadIcon size={19} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
