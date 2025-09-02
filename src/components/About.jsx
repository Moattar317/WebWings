// src/components/About/About.jsx
import React, { useRef, useEffect, useState } from 'react';
import './About.css';
import { FiTarget, FiEye, FiStar, FiArrowRight, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aboutItems = [
    {
      icon: <FiTarget />,
      title: "OUR MISSION",
      description: "Our mission is to deliver customized digital solutions that solve real business challenges. We focus on building intuitive, reliable, and scalable systems tailored to fit each client's unique goals and operations."
    },
    {
      icon: <FiEye />, 
      title: "OUR VISION",
      description: "At WebWings, our vision is to become a leading force in digital innovation by empowering businesses of all sizes with smart, adaptable, and future-ready solutions."
    },
    {
      icon: <FiStar />,
      title: "WHY WEBWINGS",
      description: "We don't believe in one-size-fits-all packages. We work closely with our clients to understand their needs and deliver exactly what works for them with quality and transparency."
    }
  ];

 

  return (
    <section id="about" className="about " ref={sectionRef}>
      {/* Background Elements */}
      <div className="about-background light-grid-lines">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="about-container">
        {/* Header */}
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <h2>About WebWings</h2>
          <p>Transforming businesses through innovative digital solutions</p>
        </div>

        {/* Main Content Grid */}
        <div className="about-content-grid">
          {/* Left Column - Cards */}
          <div className="about-cards">
            {aboutItems.map((item, index) => (
              <div 
                key={index} 
                className={`about-card ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-icon">
                  {item.icon}
                </div>
                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>

          {/* Right Column - Visual Element */}
          <div className={`about-visual ${isVisible ? 'animate-in' : ''}`}>
            <div className="visual-container">
              <div className="main-circle">
                <div className="circle-inner">
                  <span>WebWings</span>
                </div>
              </div>
              <div className="orbiting-element orbit-1">
                <FiTarget />
              </div>
              <div className="orbiting-element orbit-2">
                <FiEye />
              </div>
              <div className="orbiting-element orbit-3">
                <FiStar />
              </div>
            </div>
          </div>
        </div>

    

        {/* Statement Section */}
        <div className={`about-statement ${isVisible ? 'animate-in' : ''}`}>
          <div className="statement-content">
            <h3>Translating technology into positive impact</h3>
            <p>Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders. Let's rise to new heights with the power of digital transformation.</p>
            <a href="#contact" className="cta-button">
              <span>Let's Work Together</span>
              <FiArrowRight className="button-icon" />
              <div className="button-hover-effect"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;