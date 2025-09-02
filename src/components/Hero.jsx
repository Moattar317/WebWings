import React, { useState, useEffect } from 'react';
import './Hero.css';
import gif1 from "../assets/g2.gif"
import gif2 from "../assets/g1.gif"
import gif3 from "../assets/g3.gif"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "We reimagine tomorrow",
      subtitle: "Empowering Business with Custom tech Solutions",
      description: "Custom digital solutions that solve real business challenges",
      gif: gif1,
      cta: "GET IN TOUCH",
      theme: {
        primary: "#3681a3ff",
        secondary: "#1d89b4ff",
        accent: "#194252ff",
        overlay: "rgba(102, 197, 234, 0.7)"
      },
    },
    {
      title: "AI that dares to disrupt", 
      subtitle: "Hyper-personalization at the pace of your thoughts",
      description: "Leveraging cutting-edge technology for innovative solutions",
      gif: gif2,
      cta: "LEARN MORE",
      theme: {
        primary: "#052f4bff",
        secondary: "#24586dff",
        accent: "#a7a4a4ff",
        overlay: "rgba(35, 80, 105, 0.7)"
      },
    },
    {
      title: "Code that transforms",
      subtitle: "Building the digital infrastructure of tomorrow",
      description: "From concept to deployment, we craft exceptional experiences",
      gif: gif3,
      cta: "VIEW PROJECTS",
      theme: {
        primary: "#1e8bca56",
        secondary: "#043c5cff",
        accent: "#f5f9fdff",
        overlay: "rgba(5, 85, 122, 0.7)"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentTheme = slides[currentSlide].theme;

  return (
    <section 
      className="hero"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`
      }}
    >
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="hero-overlay"
              style={{
                background: `linear-gradient(135deg, 
                  ${slide.theme.overlay} 0%, 
                  ${slide.theme.overlay.replace('0.7', '0.5')} 50%,
                  rgba(255, 255, 255, 0.1) 100%
                )`
              }}
            ></div>

            <div className="hero-content">
              <div className="hero-container">
                <div className="tech-anim" aria-hidden="true">
                  <span className="data-flow df1" />
                  <span className="data-flow df2" />
                  <span className="data-flow df3" />
                  <span className="orb o1" />
                  <span className="orb o2" />
                </div>

                <div className="hero-text">
                  <h1 className="hero-title">
                    <span 
                      className="title-line"
                      style={{
                        background: `linear-gradient(135deg, #ffffff, ${slide.theme.accent}, ${slide.theme.primary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {slide.title}
                    </span>
                  </h1>
                  <h2 className="hero-subtitle">{slide.subtitle}</h2>
                  <p className="hero-description">{slide.description}</p>
                  <button 
                    className="hero-cta"
                    style={{
                      background: `linear-gradient(135deg, ${slide.theme.accent}, ${slide.theme.primary})`,
                      boxShadow: `0 10px 25px ${slide.theme.accent}40`
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${slide.theme.primary}, ${slide.theme.secondary})`;
                      e.target.style.boxShadow = `0 15px 35px ${slide.theme.accent}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = `linear-gradient(135deg, ${slide.theme.accent}, ${slide.theme.primary})`;
                      e.target.style.boxShadow = `0 10px 25px ${slide.theme.accent}40`;
                    }}
                  >
                    {slide.cta}
                  </button>
                </div>

                <div className="hero-visual">
                  <div className="gif-container">
                    <div className="gif-backdrop"></div>
                    <div 
                      className="gif-glow"
                      style={{
                        background: `radial-gradient(circle, ${slide.theme.accent}30, transparent 70%)`
                      }}
                    ></div>
                    <div className="gif-border">
                      <div 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: `conic-gradient(from 0deg, ${slide.theme.accent}60, transparent, ${slide.theme.primary}60, transparent, ${slide.theme.accent}60)`,
                          borderRadius: '18px'
                        }}
                      ></div>
                    </div>
                    <img 
                      src={slide.gif} 
                      alt="Animation" 
                      className="hero-gif"
                      style={{
                        filter: `drop-shadow(0 20px 40px ${slide.theme.accent}30) hue-rotate(${index * 20}deg) saturate(1.1)`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-navigation">
        <div className="slide-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{
                borderColor: index === currentSlide ? slide.theme.accent : 'rgba(255, 255, 255, 0.3)',
                background: index === currentSlide ? `${slide.theme.accent}30` : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="indicator-text">{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to Explore</div>
        <div className="scroll-arrow" style={{ color: currentTheme.accent }}>↓</div>
      </div>
    </section>
  );
};

export default Hero;