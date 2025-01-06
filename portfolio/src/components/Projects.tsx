import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Projects = () => {
  const [handleHam, setHandleHam] = useState(false);

  const ProjectData = {
    projects: [
      {
        image: "../assets/netflix-clone.png",
        name: "Netflix-clone",
        desc: "Cloned the Netflix using React",
        link: "",
        sourcecode: "",
        category: "react",
      },
      {
        image: "",
        name: "Tic-Tac-Toi",
        desc: "A fully functioned tic-tac-toi game build using React",
        link: "",
        sourcecode: "",
        category: "react",
      },
      {
        image: "",
        name: "Music Player",
        desc: "A functional music player build using React",
        link: "",
        sourcecode: "",
        category: "react",
      },
      {
        image: "../assets/todo.png",
        name: "To-Do List App",
        desc: "A functional to-do list app build using React",
        link: "",
        sourcecode: "",
        category: "react",
      },
      {
        image: "../assets/todo.png",
        name: "To-Do List App",
        desc: "A functional to-do list app build using React",
        link: "",
        sourcecode: "",
        category: "react",
      },
      {
        image: "../assets/todo.png",
        name: "To-Do List App",
        desc: "A functional to-do list app build using React",
        link: "",
        sourcecode: "",
        category: "react",
      },
    ],
  };

  return (
    <div>
      <div className="main-p main">
        <div className="main-body-p">
          <h2 className="title">MY PROJECTS</h2>
          <div className="project-tabs">
            {ProjectData.projects.map((proj) => {
              return (
                <div className="project-tab">
                  <img src={proj.image} alt="image" />
                  <div className="tab-details">
                    <p className="tab-name">{proj.name}</p>
                    <p className="tab-desc">{proj.desc}</p>
                    <div className="tab-btns">
                      <button onClick={proj.link}>View</button>
                      <button onClick={proj.sourcecode}>Source</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
