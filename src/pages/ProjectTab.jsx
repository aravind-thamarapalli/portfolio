import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import projectData from "../projects.json";

const ProjectTab = () => {
  const data = useLocation();
  const id = data.state.id;
  const item = projectData[id];
    const navigate = useNavigate();
  return (
    <div>
      <nav className="p-nav">
        <p onClick={() => {navigate("/")}}>Aravind Thamarapalli</p>
        <p onClick={() => {navigate(-1)}} className="close">close</p>
      </nav>
      <div className="p-t">
        <h2 className="p-t-name">{item.name}</h2>
        <div className="p-d">
          <div className="p-d1">
          <div className="p-t-l">
            <p className="p-t-des">{item.description}</p>
            <div className="p-t-l1">
              <h3>Techstack Used</h3>
              <ul>
                {item.technologies.map((tech, index) => (
                  <li key={index} className="p-t-tech"><IoIosArrowForward /><p>{tech}</p></li>
                ))}
              </ul>
            </div>
          </div>
            <div className="p-t-links">
            <a href={item.github} target="_blank" className="p-t-l">
                <p>GitHub</p><GoArrowUpRight />
            </a>
            <a href={item.demo} target="_blank" className="p-t-l">
                <p>Live Demo</p><GoArrowUpRight />
            </a>
        </div>
          </div>
          <div className="p-t-r">
            <div className="p-navigator">
                <p onClick={() => navigate("/project", { state: { item: project } })}>Previous</p>
                <p onClick={() => navigate("/project", { state: { item: project } })}>Next</p>
            </div>
            <img src={item.image} alt="project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
