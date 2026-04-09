import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '../../../assets/icons/CodeIcon';
import LayoutIcon from '../../../assets/icons/LayoutIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';

import './hero.css';
import ArrowRightIcon from '../../../assets/icons/techIcons/ArrowRight';

function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <motion.section
      id="top"
      className="hero-grid container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.p className="hero-title" variants={itemVariants}>
          <span className="micro-dot" />
          Frontend Software Engineer
        </motion.p>

        <motion.h1 className="hero-headline" variants={itemVariants}>
          Engineering Thoughtful Digital Experiences
        </motion.h1>

        <div className="hero-description">
          <motion.p className="hero-paragraph" variants={itemVariants}>
            Engineering is about solving problems with precision.
          </motion.p>
          <motion.p className="hero-paragraph" variants={itemVariants}>
            Design is about solving them with empathy.
          </motion.p>
          <motion.p className="hero-sub-extra" variants={itemVariants}>
            I work where those two overlap, building web interfaces that hold up
            technically and feel right to the people using them.
          </motion.p>
        </div>

        <motion.div className="hero-actions" variants={itemVariants}>
          <button className="btn primary" onClick={scrollToProjects}>
            See My Works
          </button>

          <button className="btn secondary" onClick={scrollToContact}>
            <span>Get In Touch</span>
            <div className="icon-wrapper">
              <ArrowRightIcon size={17} />
            </div>
          </button>
        </motion.div>
      </div>

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
    </motion.section>
  );
}

export default Hero;
