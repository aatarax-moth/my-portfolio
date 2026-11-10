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
        <div className="fixed inset-0 z-[1000] flex animate-modal-overlay-in items-center justify-center bg-black/50 p-4 backdrop-blur" onClick={onClose}>
            <div
                className="max-h-[85vh] w-[90%] max-w-[600px] animate-modal-box-in overflow-y-auto rounded-2xl bg-black p-8 text-bg shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title} project details`}
            >
                <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="mb-4 w-full rounded-lg"
                    loading="lazy"
                    decoding="async"
                />

                <a href={project.link} target="_blank" rel="noopener noreferrer" className="group text-inherit no-underline hover:underline">
                    <h2 className="mb-2 inline-flex items-center gap-1.5">
                        {project.title}
                        <svg
                            className="h-[18px] w-[18px] shrink-0 transition duration-220 ease-portfolio group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

                <p className="mb-4 text-bg">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                    {project.software.map((item, i) => (
                        <span className="rounded-full border border-bg px-3.5 py-1.5 text-[0.85rem] text-bg transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-bg/8" key={`software-${i}`}>{item}</span>
                    ))}
                    {project.topics.map((item, i) => (
                        <span className="rounded-full border border-bg px-3.5 py-1.5 text-[0.85rem] text-bg transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-bg/8" key={`topic-${i}`}>{item}</span>
                    ))}
                    {project.languages.map((item, i) => (
                        <span className="rounded-full border border-bg px-3.5 py-1.5 text-[0.85rem] text-bg transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-bg/8" key={`language-${i}`}>{item}</span>
                    ))}
                </div>

                <button ref={closeButtonRef} className="cursor-pointer rounded-full border-0 bg-bg px-6 py-2.5 font-bold text-black transition duration-220 ease-portfolio hover:-translate-y-px hover:shadow-[0_10px_26px_rgba(251,251,251,0.12)]" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default ProjectModal;
