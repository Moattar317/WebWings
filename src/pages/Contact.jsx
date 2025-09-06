// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from 'react';
import './Contact.css';
import c1gif from "../assets/c1.gif"; // Replace with your actual GIF path

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

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

  // Floating particles animation
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

  return (
    <div className="contact-page">
   
      {/* Enhanced Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="animated-gif-overlay"></div>
          <div className="floating-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="particle" style={{
                '--delay': `${i * 0.5}s`,
                '--size': `${Math.random() * 10 + 5}px`,
                '--distance': `${Math.random() * 30 + 20}vw`,
                '--duration': `${Math.random() * 5 + 10}s`,
                '--opacity': Math.random() * 0.5 + 0.3
              }}></div>
            ))}
          </div>
          
          {/* Four Floating Cubes */}
          <div className="floating-cubes-container">
            <div className="floating-cube cube-1">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
            </div>
            <div className="floating-cube cube-2">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
            </div>
            <div className="floating-cube cube-3">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
            </div>
            <div className="floating-cube cube-4">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
              <div className="cube-face left"></div>
              <div className="cube-face right"></div>
            </div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="hero-title">
              LET'S CREATE SOMETHING
              <span className="title-accent"> TOGETHER</span>
            </h1>
            <p className="hero-subtitle">
              Transform your ideas into digital reality. We're here to make it happen.
            </p>
            <div className="hero-cta">
              <button className="cta-button" onClick={() => document.querySelector('.contact-form-panel')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Your Project
                <svg className="cta-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="cta-subtext">
                <div className="pulse-dot"></div>
                AVAILABLE FOR NEW PROJECTS
              </div>
            </div>
          </div>
          
            <div className="gif-container">
              <img 
                src={c1gif} 
                alt="Contact form animation" 
                className="contact-gif"
              />
           </div>
          <div className="hero-visual">

            <div className="main-3d-element" >
              <div className="element-face front"></div>
              <div className="element-face back"></div>
              <div className="element-face top"></div>
              <div className="element-face bottom"></div>
              <div className="element-face left"></div>
              <div className="element-face right"></div>
              <div className="inner-glow"></div>
            </div>

            
            <div className="orbiting-dots">
              <div className="dot dot-1"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-3"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <div className="scroll-dot"></div>
        </div>
        
      </section>


      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Contact Info Side */}
            <div className="contact-info-panel">
              <div className="panel-content">
                <h2 className="panel-title">Get in Touch</h2>
                <p className="panel-description">
                  Ready to start your next project? Let's discuss how we can help bring your vision to life.
                </p>

                <div className="contact-methods">
                  <div className="contact-method" data-aos="fade-right" data-aos-delay="100">
                    <div className="method-icon email-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Email Us</h3>
                      <p>info@webwings.com.pk</p>
                      <a href="mailto:info@webwings.com.pk" className="method-link">
                        Send Message →
                      </a>
                    </div>
                  </div>

                  <div className="contact-method" data-aos="fade-right" data-aos-delay="200">
                    <div className="method-icon phone-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Call Us</h3>
                      <p>+92 XXX XXXXXXX</p>
                      <a href="tel:+92XXXXXXXXX" className="method-link">
                        Call Now →
                      </a>
                    </div>
                  </div>

                  <div className="contact-method" data-aos="fade-right" data-aos-delay="300">
                    <div className="method-icon location-icon">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Visit Us</h3>
                      <p>Rawalpindi, Punjab<br />Pakistan</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="social-section">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/company/webwing25/" className="social-link linkedin" data-tooltip="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com/profile.php?id=61579635791849" className="social-link facebook" data-tooltip="Facebook">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="contact-form-panel">
              <form className="modern-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>Start Your Project</h2>
                  <p>Fill out the form and we'll get back to you within 24 hours</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                      className={formData.name ? 'has-value' : ''}
                    />
                    <label htmlFor="name" className={focusedField === 'name' || formData.name ? 'focused' : ''}>
                      Full Name *
                    </label>
                    <div className="input-line"></div>
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                      className={formData.email ? 'has-value' : ''}
                    />
                    <label htmlFor="email" className={focusedField === 'email' || formData.email ? 'focused' : ''}>
                      Email Address *
                    </label>
                    <div className="input-line"></div>
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => handleFocus('company')}
                    onBlur={handleBlur}
                    className={formData.company ? 'has-value' : ''}
                  />
                  <label htmlFor="company" className={focusedField === 'company' || formData.company ? 'focused' : ''}>
                    Company (Optional)
                  </label>
                  <div className="input-line"></div>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows="5"
                    className={formData.message ? 'has-value' : ''}
                  ></textarea>
                  <label htmlFor="message" className={focusedField === 'message' || formData.message ? 'focused' : ''}>
                    Project Details *
                  </label>
                  <div className="input-line"></div>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${!validateForm() ? 'disabled' : ''} ${isSubmitting ? 'loading' : ''}`}
                  disabled={!validateForm() || isSubmitting}
                >
                  <span className="button-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="button-bg"></div>
                  {isSubmitting && <div className="loading-dots"><span></span><span></span><span></span></div>}
                </button>

                {submitStatus === 'success' && (
                  <div className="status-message success">
                    <div className="status-icon">✨</div>
                    <div>
                      <h4>Message Sent Successfully!</h4>
                      <p>We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="status-message error">
                    <div className="status-icon">⚠️</div>
                    <div>
                      <h4>Something went wrong</h4>
                      <p>Please try again or contact us directly.</p>
                    </div>
                  </div>
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