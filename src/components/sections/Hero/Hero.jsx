import { useState } from 'react';
import { motion } from 'framer-motion';
import CodeIcon from '../../../assets/icons/CodeIcon';
import LayoutIcon from '../../../assets/icons/LayoutIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';

import './hero.css';

function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Framer variants
  const textVariant = {
    hidden: {
      opacity: 0,
      filter: 'blur(4px)',
      y: 30,
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut', delay: 0.4 },
    },
  };

  return (
    <section id="top" className="section-container">
      <div className="hero-grid container">
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="show"
          variants={textVariant}
        >
          <p className="hero-title">
            <span className="micro-dot" />
            Frontend Software Engineer
          </p>

          <h1 className="hero-headline" variants={textVariant}>
            Engineering Thoughtful Digital Experiences
          </h1>

          {/* <p className="hero-description" variants={textVariant}>
            I bring ideas to life by building responsive web interfaces. <br />{' '}
            I focus on using modern technologies and writing clean, maintainable
            code so that every experience feels smooth, fast, and enjoyable for
            users.
          </p> */}
          <div className="hero-description" variants={textVariant}>
            <p className='hero-paragraph'>Engineering is about solving problems with precision.</p>
            <p className='hero-paragraph'>Design is about solving them with empathy.</p>
            <p className='hero-paragraph'>
              I work where those two overlap, building web interfaces that hold
              up technically and feel right to the people using them.
            </p>
          </div>

          <div className="hero-actions">
            <motion.a
              className="btn primary"
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Get In Touch
            </motion.a>

            <a
              className="btn secondary"
              href="https://drive.google.com/file/d/1420BUUvPp1ksRlgv1rJubHyXqfhzdBhL/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-right"
          aria-hidden="false"
          initial="hidden"
          animate="show"
          variants={imageVariant}
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
    </section>
  );
}

export default Hero;
