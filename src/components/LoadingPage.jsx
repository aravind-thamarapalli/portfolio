import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="spinner"></div>
      <p>Loading project...</p>
    </motion.div>
  );
};

export default LoadingPage;
