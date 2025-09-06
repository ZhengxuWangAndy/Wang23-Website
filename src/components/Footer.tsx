import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLock, FaFileContract } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Wang23 LLC. All rights reserved.</p>
      
      <div className="footer-links">
        <Link to="/privacy-policy"><FaLock className="footer-icon" /> Privacy Policy</Link>  
        <Link to="/terms-of-service"><FaFileContract className="footer-icon" /> Terms of Service</Link>
      </div>

      <div className="footer-contact-wrapper">
        <div className="footer-contact-info">
          <p>📧 Email: <a href="mailto:wang23llc@gmail.com">wang23llc@gmail.com</a></p>
          <p>📞 Phone: <a href="tel:+18577990064">+1 (857)-799-0064</a></p>
        </div>
        <div className="footer-contact-address">
          <p>📍 Address: 123 Wang St, Suite 100, Cityville</p>
        </div>
      </div>

      <div className="social-icons-vertical">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
