import "./ProjectModal.css";

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <img src={project.thumbnail} alt={project.title} className="modal-thumbnail" />

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-heading-link">
                    <h2 className="modal-heading">{project.title}</h2>
                </a>

                <p className="modal-paragraph">{project.description}</p>

                <div className="modal-pills">
                    {project.software.map((item, i) => (
                        <span className="pill-tag" key={`software-${i}`}>{item}</span>
                    ))}
                    {project.topics.map((item, i) => (
                        <span className="pill-tag" key={`topic-${i}`}>{item}</span>
                    ))}
                    {project.languages.map((item, i) => (
                        <span className="pill-tag" key={`language-${i}`}>{item}</span>
                    ))}
                </div>

                <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ProjectModal;