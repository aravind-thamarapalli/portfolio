import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ color }) => {
  const location = useLocation();

  const getLinkStyle = (path) => {
    return {
      color: color,
      fontWeight: location.pathname === path ? 'bold' : 'normal',
      textDecoration: 'none'
    };
  };

  return (
    <nav className="navbar" style={{ color: color }}>
      <Link to="/" style={getLinkStyle('/')}><h1 className="logo">Aravind Thamarapalli</h1></Link>
      <ul className="nav-links">
        <li><Link to="/" style={getLinkStyle('/')}>Home</Link></li>
        <li><Link to="/about" style={getLinkStyle('/about')}>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
