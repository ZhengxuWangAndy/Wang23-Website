import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Wang23 LLC. All rights reserved.</p>
      
      <div className="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>

     <div className="footer-contact-wrapper">
  <div className="footer-contact-info">
    <p>📧 Email: <a href="mailto:info@wang23llc.com">info@wang23llc.com</a></p>
    <p>📞 Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
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
