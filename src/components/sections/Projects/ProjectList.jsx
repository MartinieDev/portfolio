import SectionHead from '../../reusables/SectionHead';
import { projects } from '../../../data/projects';

import './projectList.css';
import ProjectRow from './ProjectRow/ProjectRow';

function ProjectList() {
  return (
    <div id='projects' className="section-container">
      <div className="project-list-wrap container">
        <SectionHead
          TagLevel="h2"
          title="Projects"
          subtitle="Explore my projects, view highlights, and read case studies."
        />

        <div className="work-list">
          {projects.map((projectObj) => (
            <ProjectRow key={projectObj.id} projectObj={projectObj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
