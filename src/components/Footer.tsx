import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Wang23 LLC" className="footer-logo" />
          <div className="footer-contact">
            <a href="tel:+18577990064">(857) 799-0064</a>
            <a href="mailto:wang23llc@gmail.com">wang23llc@gmail.com</a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <ul>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <a href="https://www.linkedin.com/company/wang23" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-legal">
        <span>© {year} Wang23 LLC. All rights reserved.</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Use</Link>
      </div>
    </footer>
  );
};

export default Footer;
