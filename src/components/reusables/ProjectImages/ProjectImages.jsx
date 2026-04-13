import './projectImages.css';

function ProjectImages({ projectImg }) {
  return (
    <div className="project-preview">
      <div className="project-preview-scroll">
        {projectImg.map((src) => (
          <div className="project-preview-slide">
            <img
              className="project-preview-image"
              src={src}
              alt={``}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectImages;
