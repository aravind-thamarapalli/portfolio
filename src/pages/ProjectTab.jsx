import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import projectData from "../projects.json";
import LoadingPage from "../components/LoadingPage";

const ProjectTab = () => {
  const data = useLocation();
  const navigate = useNavigate();
  const id = data.state?.id ?? 0;
  const item = projectData[id];

  const [isLoading, setIsLoading] = useState(true); // Manage loading state

  useEffect(() => {
    setIsLoading(true);  // Start loading
    const timeout = setTimeout(() => {
      setIsLoading(false); // Stop loading after delay
    }, 100); // Show loading screen for 1.5 seconds

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, [id]); // Run when the project ID changes

  if (!item) return <div>Project not found</div>;

  return isLoading ? (
    <LoadingPage /> // Show your custom loading page
  ) : (
    <motion.div
      className="project-t"
      style={{
        backgroundColor: item.bgColor,
        color: item.color || "#000",
        borderColor: item.color || "#ccc"
      }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <nav className="p-nav">
        <p onClick={() => navigate("/")}>Aravind Thamarapalli</p>
        <p onClick={() => navigate("/")} className="close">Close</p>
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
                    <li key={index} className="p-t-tech">
                      <IoIosArrowForward />
                      <p>{tech}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-t-links">
              <a
                href={item.github || "#"}
                target={item.github ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`p-t-l ${!item.github ? "disabled-link" : ""}`}
              >
                <p style={{color: item.color || "#ccc"}}>GitHub</p><GoArrowUpRight style={{color: item.color || "#ccc"}} />
              </a>
              <a
                href={item.demo || "#"}
                target={item.demo ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className={`p-t-l ${!item.demo ? "disabled-link" : ""}`}
              >
                <p style={{color: item.color || "#ccc"}}>Live Demo</p><GoArrowUpRight style={{color: item.color || "#ccc"}} />
              </a>
            </div>
          </div>
          <div className="p-t-r">
            <div className="p-navigator">
              {id > 0 && (
                <p onClick={() => navigate("/project", { state: { id: id - 1 } })} style={{borderColor: item.color || "#ccc"}}>
                  Previous
                </p>
              )}
              {id < projectData.length - 1 && (
                <p onClick={() => navigate("/project", { state: { id: id + 1 } })} style={{borderColor: item.color || "#ccc"}}>
                  Next
                </p>
              )}
            </div>
            {item.image && <img src={item.image} alt={item.name} loading="lazy" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectTab.propTypes = {
  data: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number
    })
  }),
  navigate: PropTypes.func
};

export default ProjectTab;
