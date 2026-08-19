import { useState } from "react";
import "./Projects.css";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projects.json";
import { Link } from "react-router-dom";
import "../index.css";

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
            <div className="projects" id="projects">
                <div className="margin-top-4 flex-row space-between" data-reveal style={{ "--reveal-delay": "120ms" }}>
                    <h1>Projects</h1>
                    <Link className="button" to="/projects">
                        All Projects
                    </Link>
                </div>

                <div className="project-showcase">
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
