import './App.css'
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function App() {
  const [handleHam, setHandleHam] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          Portfolio <span>.</span>
        </div>
        <div className={`tabs ${handleHam === true && "active"}`}>
          <Link to="/hero" className="tab tab1">
            HOME
          </Link>
          <Link to="/about" className="tab tab2">
            ABOUT
          </Link>
          <Link to="/projects" className="tab tab3">
            PROJECTS
          </Link>
          <Link to="/contact" className="tab tab4">
            CONTACT
          </Link>
        </div>
        <button className="open-menu" onClick={() => setHandleHam(!handleHam)}>
          <RxHamburgerMenu />
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
