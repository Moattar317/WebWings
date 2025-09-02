// src/components/Testimonials/Testimonials.jsx
import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "MCC SUPERMARKET",
      text: "Working with WebWings has transformed our digital presence. From the very first consultation to the final launch, the team was proactive, professional, and detail-oriented. Highly recommended!",
      company: "MCC SUPERMARKET",
      role: "Retail Chain"
    },
    {
      name: "UMART", 
      text: "Their ability to understand our business and create a solution tailored to our needs was impressive. We've seen measurable growth in both reach and customer engagement since partnering with WebWings.",
      company: "UMART",
      role: "E-commerce Platform"
    },
    {
      name: "GMART",
      text: "I've worked with several agencies, but WebWings truly stood out. Their team handled everything from design to deployment flawlessly. I finally feel confident in our online strategy. Highly recommended!",
      company: "GMART",
      role: "Grocery Chain"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Real feedback from our valued partners</p>
        </div>

        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            ←
          </button>
          
          <div className="testimonials-wrapper">
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="quote-icon">"</div>
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <div className="author-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            →
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;