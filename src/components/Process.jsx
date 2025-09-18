// src/components/Process/Process.jsx
import React, { useEffect, useRef } from 'react';
import './Process.css';

const Process = () => {
  const processRef = useRef(null);

  const processSteps = [
    {
      icon: "💡",
      title: "Define",
      description: "We begin by understanding your goals, user needs, and pain points. This phase includes stakeholder interviews, competitive analysis, and feasibility checks to set a strong foundation for the project."
    },
    {
      icon: "🎨",
      title: "Design", 
      description: "Our design process focuses on creating intuitive and visually appealing interfaces for every user. We use wireframes and high-fidelity mockups to align aesthetics with user functionality and your brand identity."
    },
    {
      icon: "⚙️",
      title: "Develop",
      description: "Once designs are finalized, our team builds the system using scalable, secure, and modern technologies. Agile methodology ensures transparency, flexibility, collaboration and timely delivery of development milestone."
    },
    {
      icon: "🧪",
      title: "Test & Refine",
      description: "Every system undergoes through client side and development testing, including functionality, security, and performance checks. Feedback loops are used to refine and make the product perfect before launch."
    },
    {
      icon: "🚀",
      title: "Deployment",
      description: "After final approval, the system is deployed in the production environment. We continue to provide monitoring, updates, improvement and support to ensure long-term stability and performance."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = processRef.current?.querySelectorAll('.process-step');
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  return (    
    <section id="process" className="process" ref={processRef}>
      <div className="process-container overflow-hidden position-relative">
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
          <div className="light-shape light-shape-4"></div>
        </div>
        
        <div className="section-header position-relative z-3 text-center mb-5">
          <h2 className='heading display-4 fw-bold mb-3'>Our Process</h2>
          <p className="fs-5 text-muted mx-auto" style={{maxWidth: '600px'}}>
            A systematic approach to delivering exceptional digital solutions
          </p>
        </div>

        <div className="process-timeline position-relative">
          {processSteps.map((step, index) => (
            <div key={index} className={`process-step d-flex ${index % 2 === 1 ? 'flex-row-reverse' : ''} align-items-start mb-5 position-relative`} data-step={index + 1}>
              <div className="step-icon d-flex align-items-center justify-content-center mx-auto mx-md-0">
                <span className="fs-1">{step.icon}</span>
              </div>
              
              <div className="step-content ms-md-4 me-md-4 mt-md-0 text-center text-md-start">
                <h3 className="fw-bold mb-3">{step.title}</h3>
                <p className="mb-0">{step.description}</p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="step-connector d-none d-md-block position-absolute start-50 translate-middle-x"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;