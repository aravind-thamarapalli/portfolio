import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import Crosses from "../components/Crosses";
import { motion, AnimatePresence } from "framer-motion";
import DecryptedText from "../components/DecryptedText";
import "./Hero.css";

const words = ["A Mern Stack", "A ServiceNow", "An Enthusiastic"];

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
};

const textContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const Hero = () => {
  const [navColor, setNavColor] = useState("#111");
  const [index, setIndex] = useState(0);

  // Navbar color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavColor(
        window.scrollY < window.innerHeight / 1.1 ? "#2e2e2e" : "#F2DE9B"
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Word cycling every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
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
          {/* Vertical Sliding Text */}
          <div className="hero-name">
            <DecryptedText
              key={index} // re-triggers animation when word changes
              text={words[index]}
              speed={100}
              maxIterations={10}
              characters="ABCD1234!?"
              animateOn="view" // 🔑 animate only when visible
              revealDirection="center" // 🔑 reveal effect from center
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
            />

            {/* Keep Developer static */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="visible"
            >
              <span className="hero-word">Developer</span>
            </motion.div>
          </div>

          <motion.img src="\assets\main.png" className="hero-img" />

          {/* Hero Description */}
          <motion.div
            className="hero-des"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              Nice to meet u
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
              ].map((item, idx) => (
                <motion.div key={idx} className="hero-data-t">
                  <p className="hero-data-td">{item.title}</p>
                  <p>{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Crosses and About Me */}
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
            <strong>CSA & CAD</strong>, with hands-on experience in creating
            efficient workflows and automation solutions. Apart from coding, I
            love <strong>organizing tech events and hackathons</strong> to share
            knowledge and connect with like-minded people.
          </p>

          <div className="lit-abt-tabs">
            <p className="lit-abt-tab">
              <img src="/assets/gvp-logo.svg" alt="logo" />
              B.Tech at GVP College of Engineering (A).
            </p>
            <p className="lit-abt-tab">
              <img src="/assets/asci-logo.png" alt="logo" />
              Working as Vice President at AsCI GVPCE.
            </p>
            <p className="lit-abt-tab">
              <img src="/assets/sn-logo.png" alt="logo" />
              Certified in ServiceNow CSA & CAD.
            </p>
          </div>
        </motion.div>
      </div>

      <Projects />
    </motion.div>
  );
};

export default Hero;
