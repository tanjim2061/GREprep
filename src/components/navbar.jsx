import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>GRE Prep</h1>
      <ul>
        <li>Home</li>
        <li>Practice</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
