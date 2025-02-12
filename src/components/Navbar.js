import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">JamesThew.com</div>
      <ul className="navbar-links">
        <li><a href="#">Dinners</a></li>
        <li><a href="#">Meals</a></li>
        <li><a href="#">Ingredients</a></li>
        <li><a href="#">Occasions</a></li>
        <li><a href="#">Cuisines</a></li>
        <li><a href="#">Kitchen Tips</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 