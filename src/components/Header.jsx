// src/components/Header/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/webwings_logo.png';
import { 
  FiLayers, 
  FiBriefcase, 
  FiUser, 
  FiHome,
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
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Services data
  const services = [
    { name: "Website Development", id: "services", icon: <FiGlobe /> },
    { name: "App Development", id: "services", icon: <FiSmartphone /> },
    { name: "Software Development", id: "services", icon: <FiCode /> },
    { name: "Digital Marketing", id: "services", icon: <FiTrendingUp /> },
    { name: "Data Analytics", id: "services", icon: <FiPieChart /> },
    { name: "Digital Transformation", id: "services", icon: <FiRefreshCw /> },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section when coming from other pages
  useEffect(() => {
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        window.history.replaceState({}, document.title);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigate to section
  const navigateToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    closeMobileMenu();
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setShowDropdown(false);
  };

  // Handle services click
  const handleServicesClick = (e) => {
    e.preventDefault();
    if (isMobileMenuOpen) {
      setShowDropdown(!showDropdown);
    } else {
      navigateToSection('services');
    }
  };

  // Desktop hover handlers
  const handleMouseEnter = () => {
    if (!isMobileMenuOpen) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileMenuOpen) {
      timeoutRef.current = setTimeout(() => {
        setShowDropdown(false);
      }, 150);
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={closeMobileMenu}>
          <div className="logo">
            <img src={logo} alt="WebWings" />
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          {/* Services Dropdown */}

          <Link 
  to="/" 
  className={`nav-Link ${isActive('/') ? 'active' : ''}`}
  onClick={closeMobileMenu}
>
  <FiHome className="nav-icon" />
  Home
</Link>
          <div 
            className="dropdown-container"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button 
              className="dropdown-trigger"
              onClick={handleServicesClick}
            >
              <FiCheckSquare className="nav-icon" />
              Services
              <FiChevronDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
            </button>
            
            <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
  {services.map((service, index) => (
    <a
      key={index}
      href={location.pathname === '/' ? `#${service.id}` : '/'}
      className="dropdown-item"
      onClick={e => {
        e.preventDefault();
        if (location.pathname === '/') {
          // On homepage, scroll to section
          const el = document.getElementById(service.id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          // On other pages, navigate to home and scroll after navigation
          navigate('/', { state: { scrollTo: service.id } });
        }
        closeMobileMenu();
        setShowDropdown(false);
      }}
    >
      <span className="dropdown-icon">{service.icon}</span>
      {service.name}
    </a>
  ))}
</div>
          </div>

         
          {/* Other Nav Items */}
          <button 
            className="nav-button"
            onClick={() => navigateToSection('process')}
          >
            <FiLayers className="nav-icon" />
            Process
          </button>

          
          <Link 
            to="/portfolio" 
            className={`nav-Link ${isActive('/portfolio') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FiBriefcase className="nav-icon" />
            Portfolio
          </Link>

          <button 
            className="nav-button"
            onClick={() => navigateToSection('about')}
          >
            <FiUser className="nav-icon" />
            About
          </button>
          
          <Link 
            to="/contact" 
            className={`nav-Link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <FiMail className="nav-icon" />
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
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