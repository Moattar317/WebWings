import React, { useState, useEffect} from 'react';
import './Hero.css';
import gif1 from "../assets/g21.gif";
import gif2 from "../assets/g19.gif";
import gif3 from "../assets/g3.gif";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const slides = [
    {
      title: "We reimagine tomorrow",
      subtitle: "Empowering Business with Custom tech Solutions",
      description: "Custom digital solutions that solve real business challenges",
      media: gif1,
      mediaType: "gif",
      cta: "GET IN TOUCH",
      theme: {
        primary: "#163a4bff",
        secondary: "#18343fff",
        accent: "#a2cce0ff",
        overlay: "rgba(10, 69, 92, 0.7)"
      },
    },
    {
      title: "AI that dares to disrupt", 
      subtitle: "Hyper-personalization at the pace of your thoughts",
      description: "Leveraging cutting-edge technology for innovative solutions",
      media: gif2,
      mediaType: "gif",
      cta: "LEARN MORE",
      theme: {
        primary: "#085ea3ff",
        secondary: "#052f61ff",
        accent: "#d5dadaff",
        overlay: "rgba(22, 67, 92, 0.7)"
      },
    },
    {
      title: "Code that transforms",
      subtitle: "Building the digital infrastructure of tomorrow",
      description: "From concept to deployment, we craft exceptional experiences",
      media: gif3,
      mediaType: "gif",
      cta: "VIEW PROJECTS",
      theme: {
        primary: "#1e8bca56",
        secondary: "#043c5cff",
        accent: "#f5f9fdff",
        overlay: "rgba(5, 85, 122, 0.7)"
      }
    }
  ];

 // Split text into spans for animation
const splitText = (text, type, gradient) => {
  return text.split(' ').map((word, i) => (
    <span 
      key={i} 
      className={`${type}-word`}
      style={{ 
        display: "inline-block",
        background: gradient,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDelay: `${i * 0.1}s` 
      }}
    >
      {word}&nbsp;
    </span>
  ));
};


  // Typewriter effect component
  const TypewriterText = ({ text,  className = "" }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(100);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (!isDeleting && currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
          setSpeed(100);
        } else if (isDeleting && currentIndex > 0) {
          setDisplayText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
          setSpeed(50);
        }

        if (currentIndex === text.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (currentIndex === 0 && isDeleting) {
          setIsDeleting(false);
        }
      }, speed);

      return () => clearTimeout(timer);
    }, [text, currentIndex, isDeleting, speed]);

    return (
      <span className={`typewriter-text ${className}`}>
        {displayText}
        <span className="typewriter-cursor">|</span>
      </span>
    );
  };

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
                </div>

                <div className="hero-text">
                  <h1 className="hero-title">
                   {splitText(
    slide.title,
    "title",
    `linear-gradient(135deg, #ffffff, ${slide.theme.accent}, ${slide.theme.primary})`
  )}
                  </h1>
                  <h2 className="hero-subtitle">
                    <TypewriterText 
                      text={slide.subtitle} 
                      className="typewriter-subtitle"
                    />
                  </h2>
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
                  <div className="media-container">
                    <div 
                      className="media-glow"
                      style={{
                        background: `radial-gradient(circle, ${slide.theme.accent}30, transparent 70%)`
                      }}
                    ></div>
                    <div className="media-border">
                      <div 
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: `conic-gradient(from 0deg, ${slide.theme.accent}60, transparent, ${slide.theme.primary}60, transparent, ${slide.theme.accent}60)`,
                          borderRadius: '18px'
                        }}
                      ></div>
                    </div>
                    {slide.mediaType === "video" ? (
                      <video 
                        src={slide.media} 
                        className="hero-media"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img 
                        src={slide.media} 
                        alt="Animation" 
                        className="hero-media"
                      />
                    )}
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