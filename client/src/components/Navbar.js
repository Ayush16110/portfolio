import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Resume</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
      </nav>
    );
  };

export default Navbar;