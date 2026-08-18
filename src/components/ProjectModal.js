import "./ProjectModal.css";
import { useEffect, useRef } from "react";

function ProjectModal({ project, onClose }) {
    const onCloseRef = useRef(onClose);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!project) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onCloseRef.current?.();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        document.addEventListener("keydown", handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [project]);

    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-box"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title} project details`}
            >
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="modal-thumbnail"
                    loading="lazy"
                    decoding="async"
                />

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-heading-link">
                    <h2 className="modal-heading">
                        {project.title}
                        <svg
                            className="modal-heading-arrow"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M7 17L17 7M17 7H8M17 7V16"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </h2>
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

                <button ref={closeButtonRef} className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ProjectModal;
