import SectionHead from '../../reusables/SectionHead';
import CapabilityGroup from './CapabilityGroup/CapabilityGroup';
import { capabilitiesData } from '../../../data/capabilitiesData';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';

import './coreCapabilities.css';

function CoreCapabilities() {
  const { ref: containerRef, isInView } = useInView({ threshold: 0.3 }, false);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50, filter: 'blur(8px)' },

    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div
      id="core-capabilities"
      className="capabilities-section container"
      initial="hidden"
      animate="visible"
    >
      <div>
        <SectionHead
          title="Core Capabilities"
          TagLevel="h2"
          subtitle="Technologies, frameworks, and tools I use to design and build."
        />

        <motion.div
          className="capabilities-card"
          ref={containerRef}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
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
