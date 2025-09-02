// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/webwings-logo.png" alt="WebWings" />
              <span>WebWings</span>
            </div>
            <p className="footer-description">
              Delivering customized digital solutions that solve real business challenges. 
              Your trusted partner in digital transformation and innovation.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">📧</a>
              <a href="#" className="social-icon">💼</a>
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">🐦</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">App Development</a></li>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Data Analytics</a></li>
              <li><a href="#services">Digital Transformation</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📧 info@webwings.com.pk</p>
              <p>📱 +92 XXX XXXXXXX</p>
              <p>🌐 www.webwings.com.pk</p>
              <p>📍 Pakistan</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} WebWings. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;