import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const LoadingPage = () => {
  return (
    <PageWrapper direction={-1}>
      <motion.div
        className="loading-container"
        initial={{ y: "-100vh", opacity: 0 }} // Start from top
        animate={{ y: 0, opacity: 1 }} // Slide in
        exit={{ y: "100vh", opacity: 0 }} // Slide out to bottom
        transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }} // Longer & smoother
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          ARAVIND THAMARAPALLI
        </motion.p>
      </motion.div>
    </PageWrapper>
  );
};

export default LoadingPage;
