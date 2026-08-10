import "./ProjectCard.css";

function ProjectCard({ project, onClick, spotlight }) {
    return (
        <div
            className={spotlight ? "project-card project-card-spotlight" : "project-card"}
            onClick={() => onClick(project)}
        >
            <img src={project.thumbnail} alt={project.title} className="project-thumbnail" />
            <h3 className="project-card-title">{project.title}</h3>
        </div>
    );
}

export default ProjectCard;