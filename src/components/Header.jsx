// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../assets/webwings_logo.png';
import { 
  FiLayers, 
  FiBriefcase, 
  FiUser, 
  FiMail,
  FiChevronDown,
  FiGlobe,
  FiSmartphone,
  FiCode,
  FiTrendingUp,
  FiPieChart,
  FiRefreshCw,
  FiCheckSquare
} from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Services dropdown data with icons
  const services = [
    { name: "Website Development", link: "#web-dev", icon: <FiGlobe /> },
    { name: "App Development", link: "#app-dev", icon: <FiSmartphone /> },
    { name: "Software Development", link: "#software-dev", icon: <FiCode /> },
    { name: "Digital Marketing", link: "#digital-marketing", icon: <FiTrendingUp /> },
    { name: "Data Analytics", link: "#data-analytics", icon: <FiPieChart /> },
    { name: "Digital Transformation", link: "#digital-transformation", icon: <FiRefreshCw /> },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  // Close mobile menu when a link is clicked
  const handleNavClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="WebWings" />
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <div 
            className="nav-item dropdown-container"
            ref={dropdownRef}
            onMouseEnter={() => !isMobileMenuOpen && toggleDropdown('services')}
            onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
          >
            <a 
              href="#services" 
              className="dropdown-trigger"
              onClick={(e) => {
                if (isMobileMenuOpen) {
                  e.preventDefault();
                  toggleDropdown('services');
                }
                handleNavClick();
              }}
            >
              <FiCheckSquare className="nav-icon" />
              Services
              <FiChevronDown className="dropdown-arrow" />
            </a>
            
            <div className={`dropdown-menu ${activeDropdown === 'services' ? 'active' : ''}`}>
              {services.map((service, index) => (
                <a 
                  key={index} 
                  href={service.link}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={handleNavClick}
                >
                  <span className="dropdown-icon">{service.icon}</span>
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <a href="#process" onClick={handleNavClick}>
            <FiLayers className="nav-icon" />
            Process
          </a>
          
          <a href="#portfolio" onClick={handleNavClick}>
            <FiBriefcase className="nav-icon" />
            Portfolio
          </a>
          
          <a href="#about" onClick={handleNavClick}>
            <FiUser className="nav-icon" />
            About
          </a>
          
          <a href="#contact" onClick={handleNavClick}>
            <FiMail className="nav-icon" />
            Contact
          </a>
        </nav>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;