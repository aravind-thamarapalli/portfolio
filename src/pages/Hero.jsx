import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import LoadingPage from "../components/LoadingPage";
import { motion } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setNavColor(window.scrollY < window.innerHeight / 1.1 ? "#2e2e2e" : "#F2DE9B");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <motion.div 
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar color={navColor} />
      <div className="home">
        <motion.div className="hero" initial={{ opacity: 0, y: 80 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
          <motion.div className="hero-name" variants={textContainer} initial="hidden" animate="visible">
            {"A MERN Stack".split("").map((char, index) => (
              <motion.span key={index} variants={letterAnimation} className="hero-letter">
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="hero-name" variants={textContainer} initial="hidden" animate="visible">
            {"Developer".split("").map((char, index) => (
              <motion.span key={index} variants={letterAnimation} className="hero-letter">
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div className="hero-des" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <motion.h2 variants={textContainer} initial="hidden" animate="visible">
              {"PortFolio:01".split("").map((char, index) => (
                <motion.span key={index} variants={letterAnimation} className="hero-letter">
                  {char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div className="hero-data" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
              {[
                { title: "Availability", value: "Full Time" },
                { title: "Contact", value: "tjsaravind77@gmail.com" },
                { title: "Location", value: "17.6800N, 83.2016E" },
              ].map((item, index) => (
                <motion.div key={index} className="hero-data-t" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 + index * 0.1 }}>
                  <motion.p className="hero-data-td" variants={textContainer} initial="hidden" animate="visible">
                    {item.title.split("").map((char, i) => (
                      <motion.span key={i} variants={letterAnimation} className="hero-letter">
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                  <motion.p variants={textContainer} initial="hidden" animate="visible">
                    {item.value.split("").map((char, i) => (
                      <motion.span key={i} variants={letterAnimation} className="hero-letter">
                        {char}
                      </motion.span>
                    ))}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Projects />
    </motion.div>
  );
};

export default Hero;
