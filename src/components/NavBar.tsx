import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo.png';

const Navbar: React.FC = (props) => {

  const { language, setLanguage } = props;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className="navbar">
  <div className="navbar-left">
  <Link to="/" className="navbar-logo">
    <img src={logo} alt="Wang23 LLC" className="company-logo" />
  </Link>
</div>

  <div className="navbar-center">
    <ul className="navbar-links">
      <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
      <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
      <li><NavLink to="/careers" className={({ isActive }) => isActive ? "active" : ""}>Careers</NavLink></li>
      <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>Testimonials</NavLink></li>
      <li><NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>FAQ</NavLink></li>
    </ul>
  </div>

  <div className="navbar-right">
    <NavLink to="/schedule" className="schedule-button">Schedule</NavLink>
    <select
      className="language-dropdown"
      value={language}
      onChange={handleLanguageChange}
    >
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="zh">中文</option>
    </select>
  </div>
</nav>
  );
};

export default Navbar;
