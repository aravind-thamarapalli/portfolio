import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ color }) => {
  return (
    <nav className="navbar" style={{ color: color }}>
      <h1 className="logo">Aravind Thamarapalli</h1>
      <ul className="nav-links">
        <li><Link to="/" style={{ color: color }}>Home</Link></li>
        <li><Link to="/about" style={{ color: color }}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
