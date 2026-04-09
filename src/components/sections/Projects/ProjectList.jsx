import SectionHead from '../../reusables/SectionHead';
import { projects } from '../../../data/projects';

import './projectList.css';
import ProjectRow from './ProjectRow/ProjectRow';

function ProjectList() {
  return (
    <section id="projects" className="project-list-section">
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
    </section>
  );
}

export default ProjectList;
