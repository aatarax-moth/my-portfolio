import { useState } from "react";
import "./Projects.css";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../data/projects.json";
import "../index.css";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const spotlightProject = projectsData.find((p) => p.spotlight);
    const regularProjects = projectsData.filter((p) => !p.spotlight);

    return (
        <Container>
            <div className="projects">
                <div className="margin-top-4 flex-row space-between">
                    <h1>Projects</h1>
                    <a className="button" href="">
                        All Projects
                    </a>
                </div>

                <div className="project-showcase">
                    {spotlightProject && (
                        <ProjectCard
                            project={spotlightProject}
                            onClick={setSelectedProject}
                            spotlight={true}
                        />
                    )}
                    {regularProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                            spotlight={false}
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