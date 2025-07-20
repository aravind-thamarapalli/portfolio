import React from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import projectData from "../projects.json";
import "./ProjectTab.css"; // Assuming you have a CSS file for styles
import Crosses from "../components/Crosses";

const fadeVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  exit: { opacity: 0, y: 14, transition: { duration: 0.6, ease: "easeInOut" } },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -22 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.58, ease: "easeOut" } },
};

const techVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.11, duration: 0.33, type: "spring", bounce: 0.3 },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.08, x: 42 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.85, ease: "easeOut" } },
};

const ProjectTab = () => {
  const data = useLocation();
  const navigate = useNavigate();
  const id = data.state?.id ?? 0;
  const item = projectData[id];

  if (!item) return <div>Project not found</div>;

  const buttonHover = {
    backgroundColor: item.color,
    color: item.bgColor,
    scale: 1.06,
    transition: { duration: 0.22 },
  };

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
          <motion.p whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} onClick={() => navigate("/")}>Aravind Thamarapalli</motion.p>
          <motion.p
            className="close"
            whileHover={{ opacity: 1, scale: 1.09, color: item.color }}
            transition={{ duration: 0.2 }}
            onClick={() => navigate("/")}
          >
            Close
          </motion.p>
        </motion.nav>

        <motion.div className="p-t" variants={staggerChildren}
          initial="hidden" animate="visible">
          <motion.h2 className="p-t-name" variants={fadeVariants}>
            {item.name}
          </motion.h2>

          <motion.div className="p-d">
            {/* Left Column */}
            <motion.div className="p-d1" variants={staggerChildren}>
              <motion.div className="p-t-l" variants={fadeVariants}>
                <motion.p className="p-t-des" variants={textVariants}>
                  {item.description}
                </motion.p>
                <motion.div className="p-t-l1" variants={fadeVariants}>
                  <motion.h3 variants={textVariants}>Techstack Used</motion.h3>
                  <ul>
                    {item.technologies.map((tech, i) => (
                      <motion.li
                        key={i}
                        className="p-t-tech"
                        variants={techVariants}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                      >
                        <IoIosArrowForward />
                        <p>{tech}</p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
              <motion.div className="p-t-links" variants={fadeVariants}>
                <motion.a
                  href={item.repository || "#"}
                  target={item.repository ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-t-l ${!item.repository ? "disabled-link" : ""}`}
                  whileHover={item.repository ? buttonHover : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  <p style={{ color: item.color || "#ccc" }}>GitHub</p>
                  <GoArrowUpRight style={{ color: item.color || "#ccc" }} />
                </motion.a>
                <motion.a
                  href={item.liveDemo || "#"}
                  target={item.liveDemo ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`p-t-l ${!item.liveDemo ? "disabled-link" : ""}`}
                  whileHover={item.liveDemo ? buttonHover : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  <p style={{ color: item.color || "#ccc" }}>Live Demo</p>
                  <GoArrowUpRight style={{ color: item.color || "#ccc" }} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column (Image & Navigation) */}
            <motion.div className="p-t-r" variants={fadeVariants}>
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
