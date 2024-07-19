import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="main">
      <div className="navbar">
            <div className="logo">Portfolio <span>.</span></div>
            <div className="tabs">
                <Link to='/hero' className="tab">HOME</Link>
                <Link to='/about' className="tab-main">ABOUT</Link>
                <Link to='/projects' className="tab">PROJECTS</Link>
                <Link to='/contact' className="tab">CONTACT</Link>
            </div>
        </div>
        <div className="main-body">
          <h1>ABOUT</h1>
          <div className="main-body-a">
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
