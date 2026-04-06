import './projectImages.css';

function ProjectImages({ projectImg, title = 'Project preview' }) {
  return (
    <div className="project-preview">
      <div className="project-preview-scroll">
        {projectImg.map((src, i) => (
          <div className="project-preview-slide">
            <img
              className="project-preview-image"
              src={src}
              alt={``}
              style={{ borderRadius: '1.5rem 1.5rem 0 0' }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectImages;
