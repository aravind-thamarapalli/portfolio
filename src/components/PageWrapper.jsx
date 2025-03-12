import { motion } from "framer-motion";
import React from "react";

const pageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }, // Stagger effect
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default PageWrapper; // ✅ Correct Export
