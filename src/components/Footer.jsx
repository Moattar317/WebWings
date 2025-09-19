import "./Footer.css";
import logo from '../assets/webwings_logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Helper for scrolling or navigating to a section
  const goToSection = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

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
              <li><a href="#services" onClick={e => goToSection(e, 'services')}>Website Development</a></li>
              <li><a href="#services" onClick={e => goToSection(e, 'services')}>App Development</a></li>
              <li><a href="#services" onClick={e => goToSection(e, 'services')}>Software Development</a></li>
              <li><a href="#services" onClick={e => goToSection(e, 'services')}>Digital Marketing</a></li>
              <li><a href="#services" onClick={e => goToSection(e, 'services')}>Data Analytics</a></li>
              <li><a href="#services" onClick={e => goToSection(e, 'services')}>Digital Transformation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#about" onClick={e => goToSection(e, 'about')}>About Us</a></li>
              <li><a href="/portfolio">Our Work</a></li>
              <li><a href="#process" onClick={e => goToSection(e, 'process')}>Process</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📧 info@webwings.com</p>
              <p>📱 +92 317 4030303</p>
              <p>🌐 webwings.com.pk</p>
              <p>📍 F-11 Markaz Islamabad</p>
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