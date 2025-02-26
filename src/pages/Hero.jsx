import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Projects from './Projects';


const Hero = () => {
    const [navColor, setNavColor] = useState("#111"); // Default navbar text color
  const [prevScroll, setPrevScroll] = useState(0); // Store previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Smoothly update navbar color based on scroll
      if (scrollPosition < window.innerHeight / 1.1) {
        setNavColor("#111"); // Dark text at top
      } else {
        setNavColor("#3A5A40"); // Change when scrolling
      }

      setPrevScroll(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <Navbar color={navColor} />
      <div className="home">
        <div className="hero">
          <h1>A Mern Stack</h1>
          <h1>Developer</h1>
        </div>
      </div>
      <Projects />
    </>
  );
};

export default Hero;
