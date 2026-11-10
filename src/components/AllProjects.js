import { useNavigate } from "react-router-dom";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projects.json";
import { useState } from "react";

function AllProjects() {
    const navigate = useNavigate();
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <Container>
            <div className="py-16" data-reveal style={{ "--reveal-delay": "120ms" }}>
                <button className="mb-4 inline-block cursor-pointer rounded-full border-0 bg-orange px-8 py-4 text-bg transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-orange-hover hover:shadow-[0_10px_26px_rgba(254,119,67,0.18)]" onClick={() => navigate(-1)}>
                    Back To Home
                </button>

                <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[767px]:grid-cols-1">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                            spotlight={false}
                            revealDelayMs={160 + index * 50}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Container>
    );
}

export default AllProjects;
