import { useNavigate } from "react-router-dom";
import "./AllProjects.css";
import "../index.css";
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
            <div className="all-projects">
                <button className="back-button margin-bottom-1" onClick={() => navigate(-1)}>
                    Back To Home
                </button>

                <div className="all-projects-grid">
                    {projectsData.map((project) => (
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

export default AllProjects;