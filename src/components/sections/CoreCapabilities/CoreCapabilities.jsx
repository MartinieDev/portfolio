import SectionHead from '../../reusables/SectionHead';
import CapabilityGroup from './CapabilityGroup/CapabilityGroup';
import { capabilitiesData } from '../../../data/capabilitiesData';
import { motion } from 'framer-motion';
import useInView from '../../hooks/useInView';

import './coreCapabilities.css';
import PlusIcon from '../../../assets/icons/PlusIcon.jsx';

const whatsNextStacks = [
  { title: 'Next.js', color: '#e78013' },
  { title: 'Node.js', color: '#1c4ed5' },
  { title: 'Express', color: '#b21fc2' },
  { title: 'MongoDB', color: '#4db33d' },
];

/* Container staggers the children (steps + arrows) */
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const paraVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Each step slides up + fades in */
const stepVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Arrow draws in after the step before it */
const arrowVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

/* Label slides in from left */
const labelVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: 'easeOut' },
  },
};

function CoreCapabilities() {
  const { ref: containerRef, isInView } = useInView({ threshold: 0.3 }, false);
  const { ref: whatsNextRef, isInView: whatsNextInView } = useInView(
    { threshold: 0.5 },
    false,
  );

  return (
    <section id="core-capabilities" className="capabilities-section">
      <SectionHead
        title="Core Capabilities"
        TagLevel="h2"
        subtitle="Technologies, frameworks, and tools I use to design and build."
      />
      <div className="section-inner">
        <div className="left-capabilities-container">
          <motion.div
            className="capabilities-aside"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={paraVariants}
          >
            <p className="capability-left-text">No strangers on this list.</p>
          </motion.div>

          {/* Main capabilities card */}
          <motion.div
            className="capabilities-card"
            ref={containerRef}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            whileHover={{ scale: 1.01 }}
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
                  <div className="key-wrapper" key={capabilitiyObj.title}>
                    <div
                      className="key-title-indicator"
                      style={{ background: capabilitiyObj.indicatorColor }}
                    />
                    <div className="key-title">{capabilitiyObj.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── What's next── */}
        <div className="whatsNext-wrapper" ref={whatsNextRef}>
          <motion.p
            className="whatsNext-label"
            variants={labelVariants}
            initial="hidden"
            animate={whatsNextInView ? 'visible' : 'hidden'}
          >
            <PlusIcon size={22} />

            <h4>What's next</h4>
          </motion.p>

          <motion.div
            className="whatsNext-track"
            variants={containerVariant}
            initial="hidden"
            animate={whatsNextInView ? 'visible' : 'hidden'}
          >
            {whatsNextStacks.map((stack, index) => (
              <div className="whatsNext-step-group" key={stack.title}>
                {/* Step pill */}
                <motion.div className="whatsNext-step" variants={stepVariants}>
                  <span
                    className="whatsNext-dot"
                    style={{ background: stack.color }}
                  />
                  <span className="whatsNext-step-name">{stack.title}</span>
                </motion.div>

                {/* Arrow count control */}
                {index < whatsNextStacks.length - 1 && (
                  <>
                    <motion.div
                      className="whatsNext-arrow"
                      variants={arrowVariants}
                    >
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 5H16M16 5L12 1M16 5L12 9"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>

                    <motion.div
                      className="whatsNext-bottom-arrow"
                      variants={arrowVariants}
                    >
                      <svg
                        width="10"
                        height="18"
                        viewBox="0 0 10 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 1V16M5 16L1 12M5 16L9 12"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CoreCapabilities;
