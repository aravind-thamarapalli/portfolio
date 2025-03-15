import { motion } from "framer-motion";
import React from "react";

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeInOut" } }, // Smooth exit
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="exit" // Now pages smoothly exit
      style={{ position: "absolute", width: "100%" }} // Prevent flickering
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
