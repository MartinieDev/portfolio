import { useState } from 'react';
import { easeIn, easeOut, motion } from 'framer-motion';
// import { filter } from 'framer-motion/client';

import CodeIcon from '../../../assets/icons/CodeIcon';
import LayoutIcon from '../../../assets/icons/LayoutIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';

import './hero.css';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const bluredFadeUp = {
  hidden: {
    opacity: 0,
    filter: 'blur(6px)',
    y: 60,
  },
  show: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeIn,
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.section
      id="top"
      className="section-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="hero-grid container">
        <motion.div className="hero-content" variants={bluredFadeUp}>
          <p className="hero-title">
            <span className="micro-dot" />
            Frontend Software Engineer
          </p>

          <p className="hero-stack">JavaScript • React • Tailwind CSS</p>
        </motion.div>

        <motion.div variants={bluredFadeUp}>
          <h1 className="hero-headline">
            Engineering Thoughtful Digital Experiences
          </h1>

          <p className="hero-description">
            I bring ideas to life by building responsive web interfaces. <br />{' '}
            I focus on using modern technologies and writing clean, maintainable
            code so that every experience feels smooth, fast, and enjoyable for
            users.
          </p>

          <div className="hero-actions">
            <motion.a
              className="btn primary"
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 500 }}
            >
              Get In Touch
            </motion.a>

            <a
              className="btn secondary"
              href="https://drive.google.com/file/d/1420BUUvPp1ksRlgv1rJubHyXqfhzdBhL/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          variants={imageVariant}
          aria-hidden="false"
        >
          <div className="my-hero-card">
            <img
              className={`hero-image ${imgLoaded ? 'loaded' : ''}`}
              src="/project_images/my-image.png"
              alt="My professional headshot reference"
              onLoad={() => setImgLoaded(true)}
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
