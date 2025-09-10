// src/components/Testimonials/Testimonials.jsx
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  }, [testimonials.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials py-5">
      <div className="floating-shapes d-none d-md-block">
        <div className="light-shape light-shape-1"></div>
        <div className="light-shape light-shape-2"></div>
        <div className="light-shape light-shape-3"></div>
        <div className="light-shape light-shape-4"></div>
      </div>

      <div className="testimonials-container container">
        {/* Section Header */}
        <div className="sectionn-header text-center mb-4">
          <h2>What Our Clients Say</h2>
          <p className="text-muted">Real feedback from our valued partners</p>
        </div>

        {/* Carousel */}
        <div className="testimonials-carousel d-flex align-items-center justify-content-center">
          <button className="carousel-btn prev btn btn-sm d-none d-md-block" onClick={prevSlide}>
            ←
          </button>
          
          <div className="testimonials-wrapper overflow-hidden w-100">
            <div 
              className="testimonials-track d-flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="testimonial-slide col-12 col-md-10 col-lg-6 mx-auto"
                >
                  <div className="testimonial-card h-100">
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

          <button className="carousel-btn next btn btn-sm d-none d-md-block" onClick={nextSlide}>
            →
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials-dots mt-3 d-flex justify-content-center flex-wrap">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''} mx-1`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
