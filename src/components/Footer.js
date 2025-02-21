import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>JamesThew is your go-to destination for recipes, cooking tips, and culinary inspiration.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 JamesThew. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 