import "./ProjectCard.css";

function ProjectCard({ project, onClick, spotlight }) {
  return (
    <div
      className={
        spotlight ? "project-card project-card-spotlight" : "project-card"
      }
      onClick={() => onClick(project)}
    >
      <div className="project-thumbnail-wrapper">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="project-thumbnail"
        />
      </div>
      <div className="project-card-info">
        <h3 className="project-card-title">
          {project.title}
          <svg
            className="project-card-arrow"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </h3>
        <p className="project-card-summary">{project.shortDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
