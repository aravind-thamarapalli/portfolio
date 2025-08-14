import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import Crosses from "../components/Crosses";
import { motion } from "framer-motion";
import "./Hero.css"; // Assuming you have a CSS file for styles

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

const Hero = () => {
  const [navColor, setNavColor] = useState("#111");

  useEffect(() => {
    const handleScroll = () => {
      setNavColor(
        window.scrollY < window.innerHeight / 1.1 ? "#2e2e2e" : "#F2DE9B"
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar color={navColor} />
      <div className="home">
        <motion.div
          className="hero"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            className="hero-name"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            {"A MERN Stack".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className="hero-letter"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="hero-name"
            variants={textContainer}
            initial="hidden"
            animate="visible"
          >
            {"Developer".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className="hero-letter"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.img src="\assets\main.png" className="hero-img" />

          <motion.div
            className="hero-des"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h2
              variants={textContainer}
              initial="hidden"
              animate="visible"
            >
              {"nice to meet u".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="hero-letter"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              className="hero-data"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              {[
                { title: "Availability", value: "Remote/Onsite" },
                { title: "Contact", value: "tjsaravind77@gmail.com" },
                {
                  title: "Get my resume",
                  value: (
                    <a
                      href="/resume.pdf"
                      download="resume.pdf"
                      className="resume-link"
                    >
                      Download Here
                    </a>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="hero-data-t"
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.5 + index * 0.1,
                  }}
                >
                  <motion.p
                    className="hero-data-td"
                    variants={textContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {item.title.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        variants={letterAnimation}
                        className="hero-letter"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                  <motion.p
                    variants={textContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {typeof item.value === "string"
                      ? item.value.split("").map((char, i) => (
                          <motion.span
                            key={i}
                            variants={letterAnimation}
                            className="hero-letter"
                          >
                            {char}
                          </motion.span>
                        ))
                      : item.value}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Crosses backgroundColor={"#2E2E2E"} color={"#F2DE9B"} />
      <div className="little-abt-me">
        <motion.div
          className="abt-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="lit-abt-title">Little About Me</h2>
          <p className="lit-abt-text">
            Hey there! <strong>I'm Aravind</strong>, a passionate{" "}
            <strong>MERN Stack Developer</strong> who loves building web apps
            with clean and efficient code. I enjoy exploring{" "}
            <strong>AI, Cloud Computing, and Data Analytics</strong>, constantly
            learning and working on new projects. I’m also a certified{" "}
            <strong>CSA & CAD</strong>, with hands-on
            experience in creating efficient workflows and automation solutions.
            Apart from coding, I love{" "}
            <strong>organizing tech events and hackathons</strong> to share
            knowledge and connect with like-minded people.
          </p>

          <div className="lit-abt-tabs">
            <p className="lit-abt-tab">
              <img src="/assets/gvp-logo.svg" alt="logo" />
              B.Tech at GVP College of Engineering (A).
            </p>
            <p className="lit-abt-tab">
              <img src="/assets/asci-logo.png" alt="logo" />
              Working as Vice President as AsCI GVPCE.
            </p>
          </div>
        </motion.div>
      </div>

      <Projects />
    </motion.div>
  );
};

export default Hero;
