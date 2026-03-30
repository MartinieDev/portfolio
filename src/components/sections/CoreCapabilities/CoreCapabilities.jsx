import SectionHead from '../../reusables/SectionHead';
import CapabilityGroup from './CapabilityGroup/CapabilityGroup';
import { capabilitiesData } from '../../../data/capabilitiesData';
import { motion, useAnimation } from 'framer-motion';

import './coreCapabilities.css';
import { useEffect, useRef } from 'react';

function CoreCapabilities() {
  const control = useAnimation();
  const cardRef = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, filter: 'blur(8px)' },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  useEffect(
    function () {
      const observerCB = function (e) {
        e.forEach((entry) => {
          if (entry.isIntersecting) {
            control.start('show');
          }
        });
      };

      const observerOptions = {
        root: null,
        threshold: 0.3,
      };

      const observer = new IntersectionObserver(observerCB, observerOptions);

      if (cardRef.current) observer.observe(cardRef.current);
    },
    [control],
  );

  return (
    <div
      id="core-capabilities"
      className="capabilities-section container"
      initial="hidden"
      animate="show"
    >
      <div>
        <SectionHead
          title="Core Capabilities"
          TagLevel="h2"
          subtitle="Technologies, frameworks, and tools I use to design and build."
        />

        <motion.div
          className="capabilities-card"
          ref={cardRef}
          variants={cardVariants}
          initial="hidden"
          animate={control}
          whileHover={{ scale: 1.02 }}
        >
          <div className="open-to-work-wrapper">
            <div className="available-indicator"></div>

            <p className="otw-title">Open to work</p>
          </div>

          {capabilitiesData.map((capabilitiyObj) => (
            <CapabilityGroup
              key={capabilitiyObj.title}
              capabilitiyObj={capabilitiyObj}
            />
          ))}

          <div className="section-divider"></div>

          <div className="bottom-container">
            <div className="key-summary-container">
              {capabilitiesData.map((capabilitiyObj) => (
                <div className="key-wrapper">
                  <div
                    className="key-title-indicator"
                    style={{
                      background: capabilitiyObj.indicatorColor,
                    }}
                  ></div>

                  <div className="key-title">{capabilitiyObj.title}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CoreCapabilities;
