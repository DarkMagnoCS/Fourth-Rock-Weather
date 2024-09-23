import React from 'react';
import './Footer.css'; // CSS file for styling
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Mars Weather App. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/alejandro-contreras-sanguino" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <span>Made by Alejandro Contreras</span>
      </div>
    </footer>
  );
};

export default Footer;
