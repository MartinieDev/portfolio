import SectionHead from '../../reusables/SectionHead';
import { motion } from 'framer-motion';

import './CTA.css';

const stats = [
  { value: '3', sign: '+', label: 'Years building' },
  { value: '5', sign: '+', label: 'Projects shipped' },
  { value: '6', sign: '+', label: 'Tech stacks' },
  { value: '100', sign: '%', label: 'Remote ready' },
];

const leftStats = stats.filter((_, i) => i % 2 === 0);
const rightStats = stats.filter((_, i) => i % 2 !== 0);

const groupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.7,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const rightVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="section-inner">
        <div className="cta-title">
          <SectionHead TagLevel="h2" title="Built to ship." />
          <h2 className="color-text">
            Ready to <br /> <span>collaborate.</span>
          </h2>
        </div>

        <div className="cta-content-wrapper">
          <div className="cta-body">
            <p>
              Good collaboration is not just about delivering results. It is
              about working with someone who is invested in what you are
              building, not just assigned to it.
            </p>
            <p>
              If that is the standard you expect, you are in the right place.
            </p>
          </div>

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='stat-wrapper'
          >
            <div className="about-stats">
              {/* LEFT GROUP */}
              <motion.div
                variants={groupVariants}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {leftStats.map((statData, i) => (
                  <motion.div
                    key={i}
                    variants={leftVariants}
                    className="stat-card"
                  >
                    <div className="stat-value">
                      {statData.value}
                      {statData.sign && (
                        <span className="sign">{statData.sign}</span>
                      )}
                    </div>

                    <div className="stat-label">{statData.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* RIGHT GROUP */}
              <motion.div
                variants={groupVariants}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {rightStats.map((statData, i) => (
                  <motion.div
                    key={i}
                    variants={rightVariants}
                    className="stat-card"
                  >
                    <div className="stat-value">
                      {statData.value}
                      {statData.sign && (
                        <span className="sign">{statData.sign}</span>
                      )}
                    </div>

                    <div className="stat-label">{statData.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}

export default CTA;
