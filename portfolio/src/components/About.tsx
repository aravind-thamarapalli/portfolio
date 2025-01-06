import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const About: React.FC = () => {
  const [handleHam, setHandleHam] = useState(false);
  return (
    <>
      <div className="main">
        
        <div className="main-body-a">
          <h2 className="title">ABOUT ME</h2>
        </div>
      </div>
    </>
  );
};

export default About;
