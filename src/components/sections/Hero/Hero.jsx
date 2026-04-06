import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '../../../assets/icons/CodeIcon';
import LayoutIcon from '../../../assets/icons/LayoutIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';

import './hero.css';

function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Framer variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between each child
        delayChildren: 0.3, // delay before first child
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      id="top"
      className="section-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-grid container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <motion.p className="hero-title" variants={itemVariants}>
            <span className="micro-dot" />
            Frontend Software Engineer
          </motion.p>

          <motion.h1 className="hero-headline" variants={itemVariants}>
            Engineering Thoughtful Digital Experiences
          </motion.h1>

          <div className="hero-description" variants={itemVariants}>
            <motion.p className="hero-paragraph" variants={itemVariants}>
              Engineering is about solving problems with precision.
            </motion.p>
            <motion.p className="hero-paragraph" variants={itemVariants}>
              Design is about solving them with empathy.
            </motion.p>
            <motion.p className="hero-sub-extra" variants={itemVariants}>
              I work where those two overlap, building web interfaces that hold
              up technically and feel right to the people using them.
            </motion.p>
          </div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a
              className="btn primary"
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              See My Works
            </a>

            <a
              className="btn secondary"
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-right"
          aria-hidden="false"
          variants={itemVariants}
        >
          <div className="my-hero-card">
            <img
              className={`hero-image ${imgLoaded ? 'loaded' : ''}`}
              src="/project_images/my-image.png"
              alt="My professional headshot reference"
              onLoad={() => setImgLoaded(true)}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              fetchPriority="high"
            />

            <div className="my-info-data">
              <p className="card-name">Martins Nnaukwu</p>

              <div className="role-list">
                <span className="role-item">
                  <CodeIcon size={18} />
                  Frontend Developer
                </span>

                <span className="role-item">
                  <ReactIcon size={18} />
                  React
                </span>

                <span className="role-item">
                  <LayoutIcon size={18} />
                  UI Engineering
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
