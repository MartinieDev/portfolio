import ProjectImages from '../../../reusables/ProjectImages/ProjectImages';

import './projectRow.css';

function ProjectRow({ projectObj }) {
  return (
    <div className="work-card word-card-with-preview reveal">
      <div className="project-images-wrapper">
        <ProjectImages projectImg={projectObj.images} />
      </div>

      <div className="work-body">
        <div className="work-content">
          <div className="logo-initials">{projectObj.logoInitials}</div>
        </div>

        <div className="project-details-wrpper">
          <p className="project-title">{projectObj.title}</p>

          {projectObj.subtitle ? (
            <p className="muted-subtitle">{projectObj.subtitle}</p>
          ) : null}

          <p className="muted-description">{projectObj.description}</p>

          <div className="tags-wrapper">
            {projectObj.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="stack-section">
            <div className="stack-label">Skill stack used:</div>

            <div className="stack-wrapper">
              {projectObj.stack.map((stack) => (
                <span className="stack-pill">{stack}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="project-actions">
        <button className="btn secondary len1" type="button">
          Case study
        </button>

        <a href={projectObj.links.live} target="blank" rel="morefferer">
          <button className="btn primary len1" type="button">
            Visit Project
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectRow;
