import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { GoArrowUpRight } from "react-icons/go";
import EduStepper from '../components/EduStepper';
import Crosses from '../components/Crosses';

const pageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 } },
};

const AboutMe = () => {
  const [navColor, setNavColor] = useState("#FAF3E0");


  useEffect(() => {
    const handleScroll = () => {
      setNavColor(window.scrollY < window.innerHeight / 1.1 ? "#D6CFE1" : "#2e2e2e");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techStack = [
    { name: "React.js", description: "A JavaScript library for building dynamic and reusable UI components." },
    { name: "Tailwind CSS", description: "A utility-first CSS framework for rapidly styling modern web applications." },
    { name: "React Native", description: "A framework for building cross-platform mobile apps using React and JavaScript." },
    { name: "MongoDB", description: "A NoSQL database designed for scalability and flexibility." },
    { name: "Express.js", description: "A lightweight web framework for Node.js to build REST APIs." },
    { name: "TypeScript", description: "A statically typed superset of JavaScript for building scalable applications." },
    { name: "Figma", description: "A web-based design tool for creating user interfaces, prototypes, and collaborative design workflows." },
    { name: "PostMan", description: "A collaboration platform for API development to design, test, and document APIs." },
    { name: "GitHub", description: "A version control system for tracking changes in source code during software development." },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      <Navbar color={navColor} />

      <motion.div className="about-me" variants={textVariants}>
        <motion.div className="about-me1">
          <motion.h1 className='about-me-h2'>A Closer Look</motion.h1>
          <motion.h1 className='about-me-h2'>At Me</motion.h1>
        </motion.div>
        <motion.div className="about-me-img">
          <img src="assets/main.png" alt="img" />
        </motion.div>
      </motion.div>

      <Crosses backgroundColor={"#D6CFE1"} color={"2E2E2E"} />

      <motion.div className="about-me-des" variants={textVariants}>
        <motion.div className="about-me-des-main">
          <motion.h1 className='a-m-des1'>MY PROFILES</motion.h1>
          <motion.div className="a-m-edu">
            <EduStepper />
          </motion.div>
        </motion.div>
      </motion.div>

      <Crosses backgroundColor={"#2E2E2E"} color={"#D6CFE1"} />

      <motion.div className="tech-stack" variants={textVariants}>
        <motion.h2 className='tech-stack-h2'>What I Know</motion.h2>
        <motion.div className="tech-details">
          {techStack.map((tech, index) => (
            <motion.div key={index} className='tech-tile' variants={textVariants}>
              <motion.p className='tech-h'>{tech.name}</motion.p>
              <motion.p className='tech-d'>{tech.description}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Crosses backgroundColor={"#D6CFE1"} color={"2E2E2E"} />

      <motion.div className="get-conn" variants={textVariants}>
        <motion.div className="get-conn-1">
          <motion.h2 className='get-conn-h2'>Get In Touch</motion.h2>
          <motion.p className='get-conn-p'>
            I’m currently open to new opportunities and collaborations. Whether you’re looking for a developer, designer, or tech enthusiast, I’d love to chat. Feel free to reach out via email or LinkedIn.
          </motion.p>
        </motion.div>

        <motion.div className="get-conn-links">
          <motion.a href="mailto:tjsaravind77@gmail.com" className='get-conn-link'>
            <p>Email Me</p> <GoArrowUpRight className='get-conn-i' />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/aravind-tham/" className='get-conn-link'>
            <p>LinkedIn</p> <GoArrowUpRight className='get-conn-i' />
          </motion.a>
          <motion.a href="https://github.com/aravind-thamarapalli" className='get-conn-link'>
            <p>GitHub</p> <GoArrowUpRight className='get-conn-i' />
          </motion.a>
          <motion.a href="/resume.pdf" download="resume.pdf" className='get-conn-link'>
            <p>Resume</p> <GoArrowUpRight className='get-conn-i' />
          </motion.a>
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
