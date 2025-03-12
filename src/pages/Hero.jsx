import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Projects from './Projects';
import PageWrapper from "../components/PageWrapper";


const Hero = () => {
    const [navColor, setNavColor] = useState("#111"); // Default navbar text color
  const [prevScroll, setPrevScroll] = useState(0); // Store previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Smoothly update navbar color based on scroll
      if (scrollPosition < window.innerHeight / 1.1) {
        setNavColor("#2e2e2e"); // Dark text at top
      } else {
        setNavColor("#F2DE9B"); // Change when scrolling
      }

      setPrevScroll(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <PageWrapper>
      <>
      <Navbar color={navColor} />
      <div className="home">
        <div className="hero">
          <div className="hero-name">
          <h1>A Mern Stack</h1>
          <h1>Developer</h1>
          </div>
          <div className="hero-des">
            <h2>PortFolio:01</h2>
            <div className="hero-data">
              <div className="hero-data-t">
                <p className='hero-data-td'>Availability</p>
                <p>Full Time</p>
              </div>
              <div className="hero-data-t">
                <p className='hero-data-td'>Contact</p>
                <p>tjsaravind77@gmail.com</p>
              </div>
              <div className="hero-data-t">
                <p className='hero-data-td'>Location</p>
                <p>17.6800N, 83.2016E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </>
    </PageWrapper>
  );
};

export default Hero;
