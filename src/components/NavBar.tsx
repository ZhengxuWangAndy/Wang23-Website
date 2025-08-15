import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = (props) => {

  const { language, setLanguage } = props;

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // TODO: trigger actual language change logic here
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Wang23 LLC</Link>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
        <li><NavLink to="/careers" className={({ isActive }) => isActive ? "active" : ""}>Careers</NavLink></li>
        
        <li><NavLink to="/testimonials" className={({ isActive }) => isActive ? "active" : ""}>Testimonials</NavLink></li>
        <li><NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>FAQ</NavLink></li>
        {/* Add 'schedule-button' class here */}
        <li>
          <NavLink
            to="/schedule"
            className={({ isActive }) =>
              isActive ? "schedule-button active" : "schedule-button"
            }
          >
            Schedule
          </NavLink>
        </li>
        <li>
          <select
            className="language-dropdown"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="zh">中文</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
