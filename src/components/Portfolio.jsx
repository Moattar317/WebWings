// src/components/Portfolio/Portfolio.jsx
import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "HRM System",
      category: "Software Development",
      description: "Streamline your workforce with our powerful, all-in-one HRM solution designed for businesses of all sizes. From attendance tracking to payroll processing, our system helps you manage your team with accuracy, transparency, and ease.",
      image: "/images/hrm-system.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      features: [
        "Attendance Tracking",
        "Payroll Processing", 
        "Employee Management",
        "Performance Analytics"
      ],
      link: "#"
    },
    {
      title: "Zamana Mall Ecommerce Website",
      category: "Website Development", 
      description: "At WebWings, we build modern, user-friendly websites that help your business stand out online. Whether you need a simple, professional website or a powerful e-commerce platform, our team crafts each site with your business goals and customers in mind.",
      image: "/images/zamana-mall.jpg",
      technologies: ["React", "WooCommerce", "WordPress", "MySQL"],
      features: [
        "E-commerce Platform",
        "Payment Integration",
        "Inventory Management", 
        "Mobile Responsive"
      ],
      link: "http://www.zamaana.com.pk/"
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <div className="section-header">
          <h2>Featured Work</h2>
          <p>Showcasing our latest projects and digital solutions</p>
        </div>

        <div className="portfolio-showcase">
          <div className="project-tabs">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`tab-btn ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <span className="tab-category">{project.category}</span>
                <span className="tab-title">{project.title}</span>
              </button>
            ))}
          </div>

          <div className="project-display">
            <div className="project-image">
              <img src={projects[activeProject].image} alt={projects[activeProject].title} />
              <div className="image-overlay">
                <a 
                  href={projects[activeProject].link} 
                  className="view-project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>

            <div className="project-details">
              <div className="project-category">{projects[activeProject].category}</div>
              <h3 className="project-title">{projects[activeProject].title}</h3>
              <p className="project-description">{projects[activeProject].description}</p>
              
              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {projects[activeProject].features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {projects[activeProject].technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;