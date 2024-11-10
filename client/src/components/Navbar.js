import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="home">
          <p>AYUSH NARAYAN GUPTA</p>
        </div>
          <ul className="nav-links">
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
    );
  };

export default Navbar;