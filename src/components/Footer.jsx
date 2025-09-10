// src/components/Footer/Footer.jsx
import "./Footer.css";
import logo from '../assets/webwings_logo.png'; // Replace with your actual logo path
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo + Description */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="WebWings" />
              
            </div>
            <p className="footer-description">
              Delivering customized digital solutions that solve real business challenges.
              Your trusted partner in digital transformation and innovation.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com/profile.php?id=61579635791849" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/webwings4630?igsh=a2k5ZmEzazVvdmto" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/webwing25/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/923174030303" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Services */}
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

          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📧 info@webwings.com</p>
              <p>📱 +92 317 4030303</p>
              <p>🌐 www.webwings.com.pk</p>
              <p>📍 Pakistan</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} WebWings. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
