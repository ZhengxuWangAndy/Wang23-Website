import React, { useState } from "react";
import "../styles/HeaderFooter.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Wang23 LLC</div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="cta"><a href="#quote">Get a Quote</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
