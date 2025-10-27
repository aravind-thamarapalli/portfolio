import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ color }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkStyle = (path) => {
    return {
      color: color,
      fontWeight: location.pathname === path ? 'bold' : 'normal',
      textDecoration: 'none'
    };
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="navbar" style={{ color: color }}>
      <Link to="/" style={getLinkStyle('/')}>
        <h1 className="logo">Aravind Thamarapalli</h1>
      </Link>

      {/* Hamburger */}
      <button 
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span style={{ backgroundColor: color }}></span>
        <span style={{ backgroundColor: color }}></span>
        <span style={{ backgroundColor: color }}></span>
      </button>

      {/* Menu */}
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" style={getLinkStyle('/')}>Home</Link>
        <Link to="/blog" style={getLinkStyle('/blog')}>Blogs</Link>
        <Link to="/about" style={getLinkStyle('/about')}>Profile</Link>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
