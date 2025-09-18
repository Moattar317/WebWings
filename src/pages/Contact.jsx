// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from 'react';
import './Contact.css';
import c1gif from "../assets/c1.gif"; // Replace with your actual GIF path
import c2gif from "../assets/c3.webp"; // Replace with your actual GIF path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    return formData.name.trim() && 
           formData.email.trim() && 
           formData.message.trim() &&
           /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  };

  // Enhanced floating particles animation
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      document.querySelector('.contact-hero')?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  // Create morphing blob paths
 

  return (
    <div className="contact-page">
      {/* Enhanced Hero Section with image background */}
      <section
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(5,14,24,0.55), rgba(5,14,24,0.55)), url(${c2gif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >

        <div className="hero-background">
          <div className="animated-gif-overlay"></div>
          
          {/* Decorative overlays removed for a cleaner image hero */}
        </div>
        
        <div className="contactt-content">
          <div className="contactt-text" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="contactt-title">
              <span className="title-word">LET'S</span>
              <span className="title-word">CREATE</span>
              <span className="title-word">SOMETHING</span>
              <span className="tittle-accent title-word">TOGETHER</span>
            </h1>
            <p className="contactt-subtitle">
              Transform your ideas into digital reality. We're here to make it happen.
            </p>
            <div className="contactt-cta">
              <button className="contactt-button" onClick={() => document.querySelector('.contact-form-panel')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="button-text">Start Your Project</span>
                <div className="button-particles"></div>
                <svg className="ctta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="ccta-subtext">
                <div className="pulse-dot"></div>
                <span className="availability-text">AVAILABLE FOR NEW PROJECTS</span>
              </div>
            </div>
          </div>
          
          <div className="gif-containner">
            <div className="gif-glow"></div>
            <img 
              src={c1gif} 
              alt="Contact form animation" 
              className="contact-gif"
            />
          </div>

          <div className="contactt-visual">
           
            <div className="gif-containerr">
            <div className="gif-glow"></div>
            <img 
              src={c2gif} 
              alt="Contact form animation" 
              className="contactt-gif"
            />
          </div>
           

            {/* Energy Rings */}
            <div className="energy-rings">
              <div className="energy-ring ring-1"></div>
              <div className="energy-ring ring-2"></div>
              
            </div>
          </div>
        </div>
        
        <div className="scrroll-indicator">
          <div className="scrroll-line"></div>
          <div className="scrroll-dot"></div>
        </div>
      </section>

      {/* Enhanced Main Contact Section */}
     <section>
     <div className="contact-wrapper">
      <div className="contact-container">
        {/* Contact Info Panel - Dark Blue */}
        <div className="contact-info-panel">
          <h2 className="panel-title">Contact Us</h2>
          
          <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                </div>
                <div className="contact-details">
                  <a
                    href="https://www.google.com/maps/place/Web+Wings/@33.6846297,72.9838026,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfbd3ffd9b8ead:0x1c300673110622c0!8m2!3d33.6846253!4d72.9863775!16s%2Fg%2F11xm_xx4jg?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="location-link"
                  >
                    <span className="contact-label">Our Address</span>
                    <div className="contact-value">
                      F-11 Markaz, Islamabad, Pakistan
                      <span className="map-link-extra">
                        
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="contact-details">
              <p className="contact-label">Email Address</p>
              <p className="contact-value">info@webwings.com.pk</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="contact-details">
              <p className="contact-label">Phone Number</p>
              <p className="contact-value">+92 317 4030303</p>
            </div>
          </div>

          {/* Social Icons */}

         <div className="social-icons d-flex gap-3 mt-4">
  <a href="https://www.linkedin.com/company/webwing25/"
     target="_blank" rel="noopener noreferrer"
     className="social-box linkedin">
    <FontAwesomeIcon icon={faLinkedin} size="lg" />
    <span className="social-label">LinkedIn</span>
  </a>

  <a href="https://facebook.com/profile.php?id=61579635791849"
     target="_blank" rel="noopener noreferrer"
     className="social-box facebook">
    <FontAwesomeIcon icon={faFacebook} size="lg" />
    <span className="social-label">Facebook</span>
  </a>

  <a href="https://instagram.com/webwings4630?igsh=a2k5ZmEzazVvdmto"
     target="_blank" rel="noopener noreferrer"
     className="social-box instagram">
    <FontAwesomeIcon icon={faInstagram} size="lg" />
    <span className="social-label">Instagram</span>
  </a>
</div>


        </div>

        {/* Contact Form Panel - White */}
        <div className="contact-form-panel">
          <h2 className="form-title">Get in Touch</h2>
          <p className="form-subtitle">Send me a message and I'll respond as soon as possible</p>
          
         <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  </div>
                {/* Services Dropdown */}
                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="serviice-dropdoown"
                  >
                    <option value="" defaultChecked>Select a Service</option>
                    <option value="Website Development">Website Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Project Details"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  </div>
                <button
                  type="submit"
                  className="send-button"
                  disabled={isSubmitting || !validateForm()}
                >
                  {isSubmitting ? "Sending..." : "SEND"}
                </button>
                {submitStatus === 'success' && (
                  <div className="form-success">Thank you! Your message has been sent.</div>
                )}
                {submitStatus === 'error' && (
                  <div className="form-error">Oops! Something went wrong. Please try again.</div>
                )}
              </form>
        </div>
      </div>
      </div>
     </section>
    </div>
  );
};

export default Contact;