import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen); // Menu toggle remains; note that the ingredient page link has been added in the navbar links below.
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">
          JamesThew.com
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dinners">Dinners</Link></li>
        <li><Link to="/meals">Meals</Link></li>
        <li><Link to="/Ingredients">Ingredients</Link></li>
        <li><Link to="/occasions">Occasions</Link></li>
        <li><Link to="/Cuisines">Cuisines</Link></li>
        <li><Link to="/KitchenTips">Kitchen Tips</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/features">Features</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/signin" className="signin">Sign In</Link>
        <Link to="/register" className="register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar; 