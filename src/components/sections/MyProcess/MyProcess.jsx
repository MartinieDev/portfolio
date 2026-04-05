import SectionHead from '../../reusables/SectionHead';
import { processSteps } from '../../../data/processSteps';
import { motion } from 'framer-motion';

import './myProcess.css';
import ProcessStep from './ProcessStep/ProcessStep';

function MyProcess() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="my-process"
      className="my-process-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
    >
      <SectionHead
        TagLevel="h2"
        title="My Process"
        subtitle="From first conversation to final commit"
      />

      <div className="process-container">
        {processSteps.map((step, curIndex) => (
          <ProcessStep
            key={step.number}
            step={step}
            isLast={curIndex === processSteps.length - 1}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default MyProcess;
