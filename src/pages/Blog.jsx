import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { nav } from "framer-motion/client";
import "./Blog.css"; // Assuming you have a CSS file for styles

// JSON Data (can also be imported from a separate file if needed)
const blogData = [
  {
    title:
      "Why Application Monitoring is the Real Superpower Developers Overlook",
    description:
      "Building apps is just half the game. Keeping them alive, fast, and delightful? That’s the real championship.",
    link: "/blogpage1",
    date: "28-04-2025",
  },
  {
    title: "Why AI Agents Are the Future of Smart Software",
    description:
      "Dive into the world of intelligent agents from reactive responders to learning machines and discover how they’re reshaping software as we know it.",
    link: "/blogpage2",
    date: "24-05-2025",
  },
  {
    title: "Agentic Backends: No-Code? More Like No-Human!",
    description:
      "Say goodbye to REST APIs you manually stitch together. Say hello to backend agents that build routes, connect databases, and deploy your app just by understanding your intent.",
    link: "/blogpage3",
    date: "20-07-2025",
  },
  {
    title: "MCP in Gen AI: The New Language Between Models and Tools",
    description:
      "Forget one off hacks and brittle wrappers. MCP gives AI models a common dictionary to talk with tools, APIs, and data making integrations smoother, smarter, and future-proof.",
    link: "/blogpage4",
    date: "09-09-2025",
  },
];

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
};

const textContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const Blog = () => {
  const [navColor, setNavColor] = useState("#008080");

  useEffect(() => {
    const handleScroll = () => {
      setNavColor(
        window.scrollY < window.innerHeight / 1.1 ? "#008080" : "#F2DE9B"
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar color={navColor} />
      <div className="blogs-page">
        <div className="blogs-title-div">
          <motion.h1
            className="blogs-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            BLOGS
          </motion.h1>
        </div>
        <div className="blogs-content-div">
          <motion.div
            className="blog-cards"
            initial="hidden"
            animate="visible"
            variants={textContainer}
          >
            {blogData.map((blog, index) => (
              <motion.div
                key={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <Link to={blog.link} className="blog-card-link-wrapper">
                  <div className="blog-card">
                    <motion.h3
                      className="blog-card-title"
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                    >
                      {blog.title}
                    </motion.h3>
                    <motion.p
                      className="blog-card-description"
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                    >
                      {blog.description}
                    </motion.p>
                    <motion.div
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span className="blog-card-read">Read more</span>
                      <p>
                        <span className="blog-card-date">{blog.date}</span>
                      </p>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;
