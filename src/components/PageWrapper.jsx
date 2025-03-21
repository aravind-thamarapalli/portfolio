import { motion } from "framer-motion";
import React from "react";

const PageWrapper = ({ children }) => {
  const pageVariants = {
    hidden: { y: "100vh", opacity: 0 }, // Start from bottom
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } // Smooth easing
    },
    exit: { 
      y: "0vh", // Slide up & fade out
      opacity: 0, 
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } 
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      animate="show"
      exit="exit"
      style={{
        position: "absolute",
        width: "100%",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
