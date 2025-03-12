import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import projectData from "../projects.json";
import LoadingPage from "../components/LoadingPage";
import  PageWrapper from "../components/PageWrapper";

const ProjectTab = () => {
  const data = useLocation();
  const navigate = useNavigate();
  const id = data.state?.id ?? 0;
  const item = projectData[id];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, [id]);

  if (!item) return <div>Project not found</div>;

  return isLoading ? (
    <LoadingPage />
  ) : (
    <PageWrapper>
      <motion.div
        className="project-t"
        style={{
          backgroundColor: item.bgColor,
          color: item.color || "#000",
          borderColor: item.color || "#ccc",
        }}
      >
        {/* Navbar */}
        <motion.nav className="p-nav">
          <p onClick={() => navigate("/")}>Aravind Thamarapalli</p>
          <p onClick={() => navigate("/")} className="close">Close</p>
        </motion.nav>

        {/* Project Content */}
        <motion.div className="p-t">
          <motion.h2 className="p-t-name">
            {item.name}
          </motion.h2>

          <motion.div className="p-d">
            <motion.div className="p-d1">
              {/* Description */}
              <motion.div className="p-t-l">
                <p className="p-t-des">{item.description}</p>

                {/* Techstack Used */}
                <motion.div className="p-t-l1">
                  <h3>Techstack Used</h3>
                  <ul>
                    {item.technologies.map((tech, index) => (
                      <motion.li key={index} className="p-t-tech">
                        <IoIosArrowForward />
                        <p>{tech}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>

              {/* Links */}
              <motion.div className="p-t-links">
                <a
                  href={item.github || "#"}
                  target={item.github ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-t-l ${!item.github ? "disabled-link" : ""}`}
                >
                  <p style={{ color: item.color || "#ccc" }}>GitHub</p>
                  <GoArrowUpRight style={{ color: item.color || "#ccc" }} />
                </a>
                <a
                  href={item.demo || "#"}
                  target={item.demo ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-t-l ${!item.demo ? "disabled-link" : ""}`}
                >
                  <p style={{ color: item.color || "#ccc" }}>Live Demo</p>
                  <GoArrowUpRight style={{ color: item.color || "#ccc" }} />
                </a>
              </motion.div>
            </motion.div>

            {/* Image & Navigation */}
            <motion.div className="p-t-r">
              <motion.div className="p-navigator">
                {id > 0 && (
                  <motion.p
                    onClick={() => navigate("/project", { state: { id: id - 1 } })}
                    style={{ borderColor: item.color || "#ccc" }}
                   
                  >
                    Previous
                  </motion.p>
                )}
                {id < projectData.length - 1 && (
                  <motion.p
                    onClick={() => navigate("/project", { state: { id: id + 1 } })}
                    style={{ borderColor: item.color || "#ccc" }}
                   
                  >
                    Next
                  </motion.p>
                )}
              </motion.div>

              {item.image && (
                <motion.img src={item.image} alt={item.name} loading="lazy" />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};

ProjectTab.propTypes = {
  data: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
  navigate: PropTypes.func,
};

export default ProjectTab;
