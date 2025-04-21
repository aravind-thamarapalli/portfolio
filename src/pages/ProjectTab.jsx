import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "../projects.json";
import Crosses from "../components/Crosses";

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } },
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
};

const ProjectTab = () => {
  const data = useLocation();
  const navigate = useNavigate();
  const id = data.state?.id ?? 0;
  const item = projectData[id];

  if (!item) return <div>Project not found</div>;
  const buttonHover = { backgroundColor: item.color , color: item.bgColor, transition: { duration: 0.3 } };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        className="project-t"
        style={{
          backgroundColor: item.bgColor,
          color: item.color || "#000",
          borderColor: item.color || "#ccc",
        }}
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.nav className="p-nav" variants={textVariants} initial="hidden" animate="visible">
          <p onClick={() => navigate("/")}>Aravind Thamarapalli</p>
          <p onClick={() => navigate("/")} className="close">Close</p>
        </motion.nav>

        <motion.div className="p-t" variants={textVariants} initial="hidden" animate="visible">
          <motion.h2 className="p-t-name" variants={textVariants}>
            {item.name}
          </motion.h2>

          <motion.div className="p-d">
            <motion.div className="p-d1">
              <motion.div className="p-t-l" variants={textVariants}>
                <p className="p-t-des">{item.description}</p>

                <motion.div className="p-t-l1" variants={textVariants}>
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

              <motion.div className="p-t-links">
                <a
                  href={item.repository || "#"}
                  target={item.repository ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-t-l ${!item.repository ? "disabled-link" : ""}`}
                >
                  <p style={{ color: item.color || "#ccc" }}>GitHub</p>
                  <GoArrowUpRight style={{ color: item.color || "#ccc" }} />
                </a>
                <a
                  href={item.liveDemo || "#"}
                  target={item.liveDemo ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-t-l ${!item.liveDemo ? "disabled-link" : ""}`}
                >
                  <p style={{ color: item.color || "#ccc" }}>Live Demo</p>
                  <GoArrowUpRight style={{ color: item.color || "#ccc" }} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div className="p-t-r">
              <motion.div className="p-navigator">
                {id > 0 && (
                  <motion.p
                    onClick={() => navigate("/project", { state: { id: id - 1 } })}
                    style={{ borderColor: item.color || "#ccc" }}
                    whileHover={buttonHover}
                  >
                    Previous
                  </motion.p>
                )}
                {id < projectData.length - 1 && (
                  <motion.p
                    onClick={() => navigate("/project", { state: { id: id + 1 } })}
                    style={{ borderColor: item.color || "#ccc" }}
                    whileHover={buttonHover}
                  >
                    Next
                  </motion.p>
                )}
              </motion.div>

              {item.image && (
                <motion.img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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
