import React from 'react';
import './Footer.css'; // Import the CSS for the Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
      <div className="footer-social">
        <p>Follow Us:</p>
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://www.twitter.com">Twitter</a></li>
          <li><a href="https://www.instagram.com">Instagram</a></li>
        </ul>
      </div>
      <p>&copy; 2023 Recipe Hub. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 