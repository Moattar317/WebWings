// src/components/Contact/Contact.jsx
import React, { useState, useEffect } from 'react';
import './Contact.css';
import c1gif from "../assets/c1.gif"; // Replace with your actual GIF path
import c2gif from "../assets/p2.png"; // Replace with your actual GIF path

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


  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

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
  const generateBlobPath = (index) => {
    const paths = [
      "M60,-70.7C75.4,-59.3,84.4,-37.9,87.7,-15.2C91,-7.6,88.6,1.2,82.8,8.7C77,16.2,67.8,22.4,58.1,30.8C48.4,39.2,38.2,49.8,26.1,54.9C14,60,0,59.6,-13.6,55.4C-27.2,51.2,-40.4,43.2,-49.8,32.1C-59.2,21,-64.8,6.8,-65.6,-8.1C-66.4,-23,-62.4,-38.6,-52.8,-50.8C-43.2,-63,-28,-72.8,-11.7,-76.3C4.6,-79.8,41.6,-82,60,-70.7Z",
      "M54.8,-63.6C69.8,-50.7,79.6,-32.2,82.1,-12.6C84.6,7,79.8,27.7,69.3,42.8C58.8,57.9,42.6,67.4,24.7,72.4C6.8,77.4,-12.8,77.9,-30.9,72.1C-49,66.3,-65.6,54.2,-74.4,37.8C-83.2,21.4,-84.2,0.7,-80.7,-17.9C-77.2,-36.5,-69.2,-53,-56.4,-65.8C-43.6,-78.6,-26,-87.7,-7.1,-89.2C11.8,-90.7,39.8,-76.5,54.8,-63.6Z",
      "M47.4,-52.9C61.7,-42.1,73.4,-25.7,76.9,-7.4C80.4,10.9,75.7,31.1,65.4,46.8C55.1,62.5,39.2,73.7,21.8,78.2C4.4,82.7,-14.5,80.5,-30.7,73.1C-46.9,65.7,-60.4,53.1,-67.6,37.2C-74.8,21.3,-75.7,2.1,-72.7,-15.8C-69.7,-33.7,-62.8,-50.3,-50.5,-61.4C-38.2,-72.5,-21.5,-78.1,-3.5,-74.2C14.5,-70.3,33.1,-63.7,47.4,-52.9Z"
    ];
    return paths[index % paths.length];
  };

  return (
    <div className="contact-page">
      {/* Enhanced Hero Section with Liquid Ether Background */}
      <section className="contact-hero">
        {/* Liquid Ether Background */}
        <div className="liquid-ether-background">
          <div className="ether-blob blob-1">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d={generateBlobPath(0)} transform="translate(100 100)" />
            </svg>
          </div>
          <div className="ether-blob blob-2">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d={generateBlobPath(1)} transform="translate(100 100)" />
            </svg>
          </div>
          <div className="ether-blob blob-3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d={generateBlobPath(2)} transform="translate(100 100)" />
            </svg>
          </div>
          
          {/* Floating Gradient Orbs */}
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            <div className="orb orb-4"></div>
            <div className="orb orb-5"></div>
          </div>
        </div>

        <div className="hero-background">
          <div className="animated-gif-overlay"></div>
          
          {/* Enhanced Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle enhanced-particle" style={{
                '--delay': `${i * 0.3}s`,
                '--size': `${Math.random() * 8 + 3}px`,
                '--distance': `${Math.random() * 40 + 30}vw`,
                '--duration': `${Math.random() * 8 + 15}s`,
                '--opacity': Math.random() * 0.6 + 0.2,
                '--color': `hsl(${190 + Math.random() * 60}, 80%, 70%)`
              }}></div>
            ))}
          </div>
          
          {/* Enhanced Floating Cubes */}
          <div className="floating-cubes-container">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`floating-cube cube-${i + 1}`}>
                <div className="cube-face front"></div>
                <div className="cube-face back"></div>
                <div className="cube-face top"></div>
                <div className="cube-face bottom"></div>
                <div className="cube-face left"></div>
                <div className="cube-face right"></div>
                <div className="cube-inner-glow"></div>
              </div>
            ))}
          </div>
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
            </div>
          {/* Holographic Grid */}
          <div className="holographic-grid">
            <div className="grid-lines horizontal"></div>
            <div className="grid-lines vertical"></div>
          </div>
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
            <div className="orbiting-dots">
              <div className="dot dot-1"></div>
              <div className="dot dot-2"></div>
              <div className="dot dot-3"></div>
            </div>

            {/* Energy Rings */}
            <div className="energy-rings">
              <div className="energy-ring ring-1"></div>
              <div className="energy-ring ring-2"></div>
              <div className="energy-ring ring-3"></div>
            </div>
          </div>
        </div>
        
        <div className="scrroll-indicator">
          <div className="scrroll-line"></div>
          <div className="scrroll-dot"></div>
        </div>
      </section>

      {/* Enhanced Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            
            {/* Enhanced Contact Info Panel */}
            <div className="contact-info-panel">
              <div className="panel-content">
                <div className="panel-decoration">
                  <div className="decoration-line"></div>
                  <div className="decoration-dot"></div>
                </div>
                
                <h2 className="panel-title">Get in Touch</h2>
                <p className="panel-description">
                  Ready to start your next project? Let's discuss how we can help bring your vision to life.
                </p>

                <div className="contact-methods">
                  <div className="contact-method" data-aos="fade-right" data-aos-delay="100">
                    <div className="method-icon email-icon">
                      <div className="icon-glow"></div>
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
                      <div className="icon-glow"></div>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Call Us</h3>
                      <p>+92 317 4030303</p>
                      <a href="tel:+923174030303" className="method-link">
                        Call Now →
                      </a>
                    </div>
                  </div>

                  <div className="contact-method" data-aos="fade-right" data-aos-delay="300">
                    <div className="method-icon location-icon">
                      <div className="icon-glow"></div>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="method-content">
                      <h3>Visit Us</h3>
                      <p>Islamabad<br />Pakistan</p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="social-section">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/company/webwing25/" className="social-link linkedin" data-tooltip="LinkedIn">
                      <div className="social-glow"></div>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com/profile.php?id=61579635791849" className="social-link facebook" data-tooltip="Facebook">
                      <div className="social-glow"></div>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>

                     <a href="https://instagram.com/webwings4630?igsh=a2k5ZmEzazVvdmto" className="social-link instagram" data-tooltip="Instagram">
                      <div className="social-glow"></div>
                      <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" viewBox="0 0 660 660" style={{ width: '80%', height: '100%' }}><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form Side */}
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
                    <div className="input-glow"></div>
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
                    <div className="input-glow"></div>
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
                  <div className="input-glow"></div>
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
                  <div className="input-glow"></div>
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
                  <div className="button-shine"></div>
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