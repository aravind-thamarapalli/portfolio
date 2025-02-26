import React from "react";
import projectData from "../projects.json";

const Projects = () => {
    const projects = projectData;

    return (
        <>
            <div className="project-tab">
                <h2>Projects</h2>
                <div className="projects">
                    {projects.map((project, index) => (
                        <div key={index} className="projects-tile">
                            <img src={project.image} alt="project" className="projects-tile-img" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
