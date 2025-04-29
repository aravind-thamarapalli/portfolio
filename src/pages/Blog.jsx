import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { nav } from "framer-motion/client";
import "./Blog.css"; // Assuming you have a CSS file for styles

// JSON Data (can also be imported from a separate file if needed)
const blogData = [
  {
    title: "Why Application Monitoring is the Real Superpower Developers Overlook",
    description:
      "Building apps is just half the game. Keeping them alive, fast, and delightful? That’s the real championship.",
    link: "/blogpage1",
    date: "28-04-2025",
  },
  // {
  //   title: "The Evolution of Front-End Development: A Journey Through Time",
  //   description:
  //     "From static pages to dynamic user experiences, learn how front-end development has evolved over the years.",
  //   link: "/blogpage",
  //   date: "15-05-2025",
  // },
  // {
  //   title: "Understanding Microservices Architecture",
  //   description:
  //     "Discover the power of microservices and how they can enhance scalability and flexibility in software development.",
  //   link: "/blogpage",
  //   date: "10-06-2025",
  // },
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
                className="blog-card"
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              >
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
                  <Link to={blog.link} className="blog-card-link">
                    Read more
                  </Link>
                  <p>
                    <span className="blog-card-date">{blog.date}</span>
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;
