import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import EduStepper from '../components/EduStepper';
import Crosses from '../components/Crosses';
import { GoArrowUpRight } from 'react-icons/go';
import './AboutMe.css'; // Assuming you have a CSS file for styles
import {
  SiReact, SiTailwindcss, SiMongodb,
  SiExpress, SiTypescript, SiFigma,
  SiPostman, SiGithub
} from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md'; // For React Native icon

const pageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 } },
};

const techStack = [
  { name: 'React.js', icon: <SiReact />, description: 'A JavaScript library for building dynamic and reusable UI components.' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, description: 'A utility-first CSS framework for rapidly styling modern web applications.' },
  { name: 'React Native', icon: <MdPhoneIphone />, description: 'Cross-platform mobile apps using React and JavaScript.' },
  { name: 'MongoDB', icon: <SiMongodb />, description: 'A NoSQL database designed for scalability and flexibility.' },
  { name: 'Express.js', icon: <SiExpress />, description: 'A lightweight web framework for Node.js to build REST APIs.' },
  { name: 'TypeScript', icon: <SiTypescript />, description: 'A statically typed superset of JavaScript for building scalable apps.' },
  { name: 'Figma', icon: <SiFigma />, description: 'A collaborative design tool for UI/UX and prototyping.' },
  { name: 'Postman', icon: <SiPostman />, description: 'A platform for building, testing, and documenting APIs.' },
  { name: 'GitHub', icon: <SiGithub />, description: 'Version control system for code collaboration and hosting.' },
];

const AboutMe = () => {
  const [navColor, setNavColor] = useState('#FAF3E0');

  useEffect(() => {
    const handleScroll = () => {
      setNavColor(window.scrollY < window.innerHeight / 1.1 ? '#D6CFE1' : '#2e2e2e');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={pageVariants}>
      <Navbar color={navColor} />

      <motion.div className="about-me" variants={textVariants}>
        <motion.div className="about-me1">
          <motion.h1 className='about-me-h2'>A Closer Look</motion.h1>
          <motion.h1 className='about-me-h2'>At Me</motion.h1>
        </motion.div>
        <motion.div className="about-me-img">
          <img src="assets/photo2.png" alt="img" />
        </motion.div>
      </motion.div>

      <Crosses backgroundColor="#D6CFE1" color="#2E2E2E" />

      <motion.div className="about-me-des" variants={textVariants}>
        <motion.div className="about-me-des-main">
          <motion.h1 className='a-m-des1'>MY PROFILES</motion.h1>
          <motion.div className="a-m-edu">
            <EduStepper />
          </motion.div>
        </motion.div>
      </motion.div>

      <Crosses backgroundColor="#2E2E2E" color="#D6CFE1" />

      <motion.div className="tech-stack" variants={textVariants}>
        <motion.h2 className='tech-stack-h2'>What I Know</motion.h2>
        <motion.div className="tech-details">
          {techStack.map((tech, index) => (
            <motion.div className="tech-card" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <div className="tech-info">
                <h3>{tech.name}</h3>
                {/* <p>{tech.description}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <Crosses backgroundColor="#D6CFE1" color="#2E2E2E" />

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
};

export default AboutMe;
