import { useState } from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const MAIN_PROJECTS_MAX = 6;

    const mainProjects = projectsData.filter((p) => p.showMain === true);
    const spotlightProject = mainProjects.find((p) => p.spotlight);
    const regularProjects = mainProjects.filter((p) => !p.spotlight);

    const remainingSlots = Math.max(
        0,
        MAIN_PROJECTS_MAX - (spotlightProject ? 1 : 0)
    );
    const visibleRegularProjects = regularProjects.slice(0, remainingSlots);

    return (
        <Container>
            <div id="projects">
                <div className="mt-16 flex flex-row items-center justify-between gap-4" data-reveal style={{ "--reveal-delay": "120ms" }}>
                    <h1 className="m-0 text-orange">Projects</h1>
                    <Link className="inline-block w-fit rounded-full bg-orange px-8 py-4 text-bg no-underline transition duration-220 ease-portfolio hover:-translate-y-px hover:bg-orange-hover hover:shadow-[0_10px_30px_rgba(254,119,67,0.2)]" to="/projects">
                        All Projects
                    </Link>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[767px]:grid-cols-1">
                    {spotlightProject && (
                        <ProjectCard
                            project={spotlightProject}
                            onClick={setSelectedProject}
                            spotlight={true}
                            revealDelayMs={160}
                        />
                    )}
                    {visibleRegularProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                            spotlight={false}
                            revealDelayMs={220 + index * 70}
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

export default Projects;
