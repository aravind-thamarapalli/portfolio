import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import { GoArrowUpRight } from "react-icons/go";


const AboutMe = () => {
  const [navColor, setNavColor] = useState("#FAF3E0"); // Default navbar text color
  const [prevScroll, setPrevScroll] = useState(0); // Store previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Smoothly update navbar color based on scroll
      if (scrollPosition < window.innerHeight / 1.1) {
        setNavColor("#FAF3E0"); // Dark text at top
      } else {
        setNavColor("#111"); // Change when scrolling
      }

      setPrevScroll(scrollPosition);
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
    { name: "Next.js", description: "A React framework with built-in support for server-side rendering and static site generation." },
    { name: "Framer Motion", description: "A React animation library for creating smooth and interactive motion effects." },
    { name: "Firebase", description: "A backend-as-a-service providing authentication, database, and cloud functions." }
  ];

  return (
    <div>
      <Navbar color={navColor} />
      <div className="about-me">
        <div className="about-me1">
        <h1 className='about-me-h2'>A Closer Look</h1>
        <h1 className='about-me-h2'>At Me</h1>
        </div>
        <div className="hero-img">
          <img src="src\assets\main.png" alt="img" />
        </div>
      </div>
      <div className="about-me-des">
        <p className='a-m-des1'>I’m a front-end developer and UX/UI enthusiast who crafts seamless, interactive web experiences. With expertise in MERN stack, I build intuitive apps like form builders, chat platforms, and grocery delivery systems. Passionate about clarity, performance, and emerging tech, I blend design, motion, and functionality to create impactful digital solutions.</p>
        <p className='a-m-des2'>I am Aravind, a creative front-end and full-stack developer with experience in MERN stack, UX/UI design, and interactive web applications. I’ve built custom solutions like form builders, chat platforms, and AI-powered projects. Passionate about innovation and performance, I actively organize tech events and collaborate on projects that push the boundaries of design and functionality.</p>
      </div>
      <div className="tech-stack">
        <h2 className='tech-stack-h2'>What I Know</h2>
        <div className="tech-details">
          {techStack.map((tech, index) => (
            <div key={index} className='tech-tile'>
              <p className='tech-h'>{tech.name}</p>
              <p className='tech-d'>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="get-conn">
        <div className="get-conn-1">
        <h2 className='get-conn-h2'>Get In Touch</h2>
        <p className='get-conn-p'>I’m currently open to new opportunities and collaborations. Whether you’re looking for a developer, designer, or tech enthusiast, I’d love to chat. Feel free to reach out via email or LinkedIn.</p>
        </div>
        <div className="get-conn-links">
          <a href="mailto:tjsaravind77@gmail.com" className='get-conn-link'><p>Email Me</p> <GoArrowUpRight className='get-conn-i' /></a>
          <a href="https://www.linkedin.com/in/aravind-tham/" className='get-conn-link'><p>LinkedIn</p> <GoArrowUpRight className='get-conn-i' /></a>
          <a href="https://github.com/aravind-thamarapalli" className='get-conn-link'><p>GitHub</p> <GoArrowUpRight className='get-conn-i' /></a>
          <a href="https://www.instagram.com/aravind_thamarapalli/" className='get-conn-link'><p>Instagram</p> <GoArrowUpRight className='get-conn-i' /></a>
          </div>
      </div>
    </div>
  );
}

export default AboutMe
