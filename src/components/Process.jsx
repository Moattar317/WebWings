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
      <div className="process-container">
        <div className="section-header">
          <h2>Our Process</h2>
          <p>A systematic approach to delivering exceptional digital solutions</p>
        </div>

        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step" data-step={index + 1}>
              <div className="step-icon">
                <span>{step.icon}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;