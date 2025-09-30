import React, { useState, useRef, useEffect } from 'react';
import './Services.css';
import i1 from "../assets/s1.webp";
import i2 from "../assets/s3.webp";
import i3 from "../assets/s2.webp";
import i4 from "../assets/s4.webp";
import i5 from "../assets/s6.webp";
import i6 from "../assets/s7.webp";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);
  const [mobileSelectedService, setMobileSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const itemsRef = useRef([]);

  const services = [
    {
      icon: i1,
      title: "Website Development",
      subtitle: "Custom Website Design",
      description: "We specialize in crafting professional, custom-designed websites tailored to your brand. Each layout is built for responsiveness, user experience, and strong digital impact.",
      features: ["E-Commerce Solutions", "CMS Integration", "Responsive Design"],
      color: "#b1c5e4ff"
    },
    {
      icon: i2,
      title: "App Development", 
      subtitle: "Custom App Development",
      description: "We develop mobile apps tailored to your business scalable, functional, and built to deliver seamless experiences across Android and iOS platforms.",
      features: ["User-Friendly Interfaces", "Maintenance & Updates", "Cross-Platform"],
      color: "#93c0d4ff"
    },
    {
      icon: i3,
      title: "Software Development",
      subtitle: "Custom Software Solutions", 
      description: "We build tailored software that fits your business model whether it's internal tools, automation, or specialized platforms that streamline your workflow.",
      features: ["API & System Integration", "Scalable Architecture", "Custom Solutions"],
      color: "#beb2dbff"
    },
    {
      icon: i4,
      title: "Digital Marketing",
      subtitle: "Social Media Strategy",
      description: "We plan and execute platform-specific strategies to boost your brand presence, grow engagement, and convert followers into loyal customers.",
      features: ["Paid Advertising Campaigns", "SEO Content Marketing", "Brand Strategy"],
      color: "#b19058ff"
    },
    {
      icon: i5,
      title: "Data Analytics",
      subtitle: "Data Collection & Cleansing",
      description: "We gather raw data from multiple sources and clean it to remove duplicates, errors, and inconsistencies laying the foundation for reliable analysis.",
      features: ["ETL Processes", "Dashboard & Reporting", "Business Intelligence"],
      color: "#976464ff"
    },
    {
      icon: i6,
      title: "Digital Transformation",
      subtitle: "Predictive Analytics",
      description: "Leverage machine learning and statistical models to forecast trends, customer behavior, and business outcomes with greater accuracy.",
      features: ["Business Intelligence (BI)", "Data Warehousing", "AI Solutions"],
      color: "#06B6D4"
    }
  ];

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Check if device is mobile OR tablet
  useEffect(() => {
    const checkMobile = () => {
      // Consider everything below 1024px as mobile/tablet view
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop auto-rotation
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [services.length, isMobile]);

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.5 }
    );
    if (headerRef.current) headerObserver.observe(headerRef.current);

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, idx])]);
          }
        });
      },
      { threshold: 0.4 }
    );

    itemsRef.current.forEach((el) => {
      if (el) itemObserver.observe(el);
    });

    return () => {
      headerObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  const handleServiceClick = (index) => {
    if (isMobile) {
      // Toggle mobile service detail for both mobile AND tablet
      setMobileSelectedService(mobileSelectedService === index ? null : index);
    } else {
      // Desktop behavior - only for screens larger than 1024px
      setActiveService(index);
    }
  };

  const renderMobileServiceDetail = (service, index) => {
    return (
      <div 
        className="mobile-service-detail"
        style={{ '--service-color': service.color }}
      >
        <div className="mobile-detail-header">
          <div className="mobile-service-icon">
            <img src={service.icon} alt={service.title} />
          </div>
          <div className="mobile-service-titles">
            <h3>{service.title}</h3>
            <h4>{service.subtitle}</h4>
          </div>
        </div>
        
        <p className="mobile-service-description">{service.description}</p>
        
        <div className="mobile-features-grid">
          {service.features.map((feature, idx) => (
            <div key={idx} className="mobile-feature-item">
              <div className="mobile-feature-check">
                <svg width="12" height="8" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="services"
      className="services"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <div className="services-background">
        <div className="light-gradient-mesh"></div>
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--delay': `${i * 0.5}s`,
              '--size': `${Math.random() * 6 + 4}px`,
              '--opacity': `${Math.random() * 0.2 + 0.05}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `-${Math.random() * 20}s`,
              backgroundColor: `rgba(59, 130, 246, 0.2)`
            }}></div>
          ))}
        </div>
        <div className="light-grid-lines"></div>
        
        <div className="floating-shapes">
          <div className="light-shape light-shape-1"></div>
          <div className="light-shape light-shape-2"></div>
          <div className="light-shape light-shape-3"></div>
          <div className="light-shape light-shape-4"></div>
        </div>
      </div>

      <div 
        className="mouse-follower" 
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          backgroundColor: services[activeService].color,
          opacity: 0.1
        }}
      ></div>
      
      <div className="services-container">
        <div
          className={`section-header ${headerVisible ? 'visible' : ''}`}
          ref={headerRef}
        >
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div
              className="decoration-dot"
              style={{ backgroundColor: services[activeService].color }}
            ></div>
          </div>
          <h2 className='section-title'>Our Services</h2>
          <p className='section-subtitle'>Redefining innovation possibilities impact across the globe</p>
        </div>

        <div className="services-display">
         <div className="service-selector">
  {services.map((service, index) => (
    <div key={index} className="service-item-wrapper">
      <div
        data-index={index}
        data-description={service.description}
        ref={(el) => (itemsRef.current[index] = el)}
        className={`selector-item ${
          !isMobile && index === activeService ? 'active' : ''
        } ${
          isMobile && index === mobileSelectedService ? 'mobile-active' : ''
        } ${visibleItems.includes(index) ? 'visible' : ''}`}
        onClick={() => handleServiceClick(index)}
        style={{ '--service-color': service.color }}
      >
        <div className="selector-icon">
          <img src={service.icon} alt={service.title} />
        </div>
        <span>{service.title}</span>
        <div className="selector-highlight"></div>
        
        {/* Arrow indicator */}
        {isMobile && (
          <div className="mobile-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
      
      {/* Mobile service detail appears below each clicked service - works for both mobile AND tablet */}
      {isMobile && mobileSelectedService === index && (
        <div className="mobile-service-detail-container">
          {renderMobileServiceDetail(service, index)}
        </div>
      )}
    </div>
  ))}
</div>

          {/* Desktop service showcase - hidden on mobile AND tablet */}
          {!isMobile && (
            <div 
              className="service-showcase"
              style={{ 
                '--active-color': services[activeService].color,
                borderColor: services[activeService].color 
              }}
            >
              <div className="showcase-content">
                <div className="showcase-header">
                  <div className="service-icon-large">
                    <div className="icon-backdrop"></div>
                    <img src={services[activeService].icon} alt={services[activeService].title} />
                  </div>
                  <div className="service-titles">
                    <h3>{services[activeService].title}</h3>
                    <h4>{services[activeService].subtitle}</h4>
                  </div>
                </div>
                
                <p className="service-description">{services[activeService].description}</p>
                
                <div className="service-features-grid">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-check">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="showcase-visual">
                <div className="visual-container">
                  <div 
                    className="visual-element" 
                    style={{ backgroundColor: services[activeService].color }}
                  >
                    <div className="visual-inner">
                      <img src={services[activeService].icon} alt={services[activeService].title} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;