// src/components/About/About.jsx
import React, { useRef, useEffect, useState } from 'react';
import './About.css';


// Import your icon images
import missionIcon from '../assets/ou.png'; // Replace with your actual path
import visionIcon from '../assets/ou.png';   // Replace with your actual path
import whyUsIcon from '../assets/ou.png';     // Replace with your actual path
import aboutGif from '../assets/g5.gif';   // Replace with your actual GIF path

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
      icon: missionIcon,
      title: "OUR MISSION",
      description: "Our mission is to deliver customized digital solutions that solve real business challenges. We focus on building intuitive, reliable, and scalable systems tailored to fit each client's unique goals and operations."
    },
    {
      icon: visionIcon, 
      title: "OUR VISION",
      description: "At WebWings, our vision is to become a leading force in digital innovation by empowering businesses of all sizes with smart, adaptable, and future-ready solutions."
    },
    {
      icon: whyUsIcon,
      title: "WHY WEBWINGS",
      description: "We don't believe in one-size-fits-all packages. We work closely with our clients to understand their needs and deliver exactly what works for them with quality and transparency."
    }
  ];

  return (
    <section id="about" className="about" ref={sectionRef}>
      {/* Background Elements */}
      <div className="about-background light-grid-lines">
        <div className="floatingg-shapes">
          <div className="shappe shappe-1"></div>
          <div className="shappe shappe-2"></div>
          <div className="shappe shappe-3"></div>
          <div className="shappe shappe-4"></div>
        </div>
        <div className="gradient-overlay"></div>
      </div>

      <div className="about-container">
        {/* Header */}
        <div className={`sectioon-header ${isVisible ? 'animate-in' : ''}`}>
          <div className="headder-decoration">
            <div className="decorration-line"></div>
            <div className="decorration-dot"></div>
            <div className="decorration-line"></div>
          </div>
          <h2>About WebWings</h2>
          <p>Transforming businesses through innovative digital solutions</p>
        </div>

        {/* Main Content Grid */}
        <div className="about-content-grid">
          {/* Left Column - Cards */}
          <div className="about-cardds">
            {aboutItems.map((item, index) => (
              <div 
                key={index} 
                className={`about-cardd ${isVisible ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="cardd-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="cardd-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="cardd-hover-effect"></div>
              </div>
            ))}
          </div>

          {/* Right Column - GIF Visual Element */}
          <div className={`about-visual ${isVisible ? 'animate-in' : ''}`}>
            <div className="giif-container">
              <img src={aboutGif} alt="About WebWings Animation" className="about-giif" />
              <div className="giif-overlay">
                <div className="giif-text">
                  <h4>WebWings</h4>
                  <p>Innovation in Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;