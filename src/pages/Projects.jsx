import React from "react";
import projectData from "../projects.json";
import { useNavigate } from "react-router-dom";
import Crosses from "../components/Crosses";

const Projects = () => {
  const projects = projectData;
  const navigate = useNavigate();

  return (
    <>
      <Crosses backgroundColor={"#2E2E2E"} color={"#F2DE9B"} />
      <div className="project-tab">
        <h2>Projects</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div
              key={index}
              className="projects-tile"
              onClick={() =>
                navigate("/project", { state: { id: project.id - 1 } })
              }
            >
              <img
                src={project.image}
                alt="project"
                className="projects-tile-img"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
