import { motion } from 'framer-motion';

function ProcessStep({ step, isLast }) {
  const { number, tag, title, description, align } = step;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={`process-step-container process-${align}`}
      variants={itemVariants}
    >
      <div className="step-inner">
        <div className="process-number">{number}</div>

        <div className="process-content">
          <span className="process-tag">{tag}</span>
          <h3 className="process-title">{title}</h3>
          <p className="process-description">{description}</p>
        </div>
      </div>

      {/* Line connecting to next step, hidden for last step */}
      {!isLast && <div className="process-line-segment"></div>}
    </motion.div>
  );
}

export default ProcessStep;
