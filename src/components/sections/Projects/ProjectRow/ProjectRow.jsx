import ProjectImages from '../../../reusables/ProjectImages/ProjectImages';
import { motion } from 'framer-motion';
import useInView from '../../../hooks/useInView';

import './projectRow.css';

const ProjectVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: .8,
      ease: [0.25, 0.46, 0.45, 0.94], // cubic bezier, feels premium
    },
  },
};

function ProjectRow({ projectObj }) {
  const { ref: cardRef, isInView } = useInView({ threshold: 0.3 });
  const { ref: shadowRef, isInView: isActive } = useInView(
    {
      threshold: 0.5,
    },
    true,
  );

  const setRefs = (el) => {
    if (!el) return;

    cardRef.current = el; // update cardRef with DOM el
    shadowRef.current = el; // update shadowRef with DOM el
  };

  return (
    <motion.div
      className={`work-card word-card-with-preview ${isActive ? 'active-shadow' : ''}`}
      ref={setRefs}
      variants={ProjectVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="project-images-wrapper">
        <ProjectImages projectImg={projectObj.images} />
      </div>

      <div className="work-body">
        <div className="project-details-wrpper">
          <div className="project-header-wrapper">
            <div className="logo-initials">{projectObj.logoInitials}</div>

            <div className="header-content">
              <h3 className="project-title">{projectObj.title}</h3>

              {projectObj.subtitle ? (
                <p className="muted-subtitle">{projectObj.subtitle}</p>
              ) : null}
            </div>
          </div>

          <p className="muted-description" style={{ whiteSpace: 'pre-line' }}>
            {projectObj.description}
          </p>

          <div className="stack-section">
            <div className="stack-wrapper">
              {projectObj.stack.map((stack) => (
                <span className="stack-pill">{stack}</span>
              ))}
            </div>
          </div>

          <div className="project-actions">
            <button className="btn secondary len1" type="button">
              Case study
            </button>

            <a href={projectObj.links.live} target="blank" rel="morefferer">
              <button className="btn primary len1" type="button">
                Visit website
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectRow;
