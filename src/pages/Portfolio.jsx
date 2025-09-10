import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';
import m1 from '../assets/MCC Rider/Screenshot_20250503-153004.jpg'
import a1 from '../assets/Attendance_App/1.jpeg'
import o1 from '../assets/Order_Taker/Login.png'
import r1 from '../assets/Retail Admin/1.png'
import z1 from '../assets/Zamana_Mall/1.png'
import e1 from '../assets/E-IBS/Screenshot_20250503-150859.jpg'

const Portfolio = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const projects = [
    {
      id: 1,
      slug: 'e-commerce-mobile-app',
      title: "E-Commerce Complete Solution For MCC",
      technologies: "React Native, Node.js, MongoDB",
      image: m1,
      description: "A comprehensive e-commerce mobile application with advanced features including product catalog, shopping cart, payment integration, and real-time order tracking. The app provides seamless user experience with personalized recommendations and secure transactions.",
      features: [
        "Product catalog with advanced filtering",
        "Secure payment gateway integration",
        "Real-time order tracking",
        "User reviews and ratings",
        "Push notifications for offers",
        "Wishlist and favorites"
      ],
      country: "Pakistan"
    },
    {
      id: 2,
      slug: 'attendance-management-system',
      title: "Attendance Management System",
      technologies: "Vue.js, Laravel, MySQL",
      image: a1,
      description: "A digital solution for tracking and managing employee attendance with features like biometric integration, leave management, and reporting. The system provides real-time insights and automated payroll integration.",
      features: [
        "Biometric and RFID integration",
        "Leave and overtime management",
        "Automated payroll calculation",
        "Real-time attendance tracking",
        "Customizable reporting",
        "Mobile app for remote clock-in"
      ],
      country: "UAE"
    },
    {
      id: 3,
      slug: 'ajwa-order-system',
      title: "Ajwa Order Management System",
      technologies: "React.js, Express.js, PostgreSQL",
      image: o1,
      description: "A comprehensive order management system for businesses to track orders, manage inventory, process payments, and generate invoices. The system streamlines the entire order fulfillment process.",
      features: [
        "Order processing and tracking",
        "Inventory management",
        "Invoice generation",
        "Customer management",
        "Sales reporting and analytics",
        "Multi-channel order integration"
      ],
      country: "USA"
    },
    {
      id: 4,
      slug: 'retail-admin',
      title: "Retail Admin for Mart7",
      technologies: "Next.js, Django, Redis",
      image: r1,
      description: "An administrative dashboard for retail management with inventory control, sales tracking, employee management, and business analytics. Designed specifically for Mart7 retail stores.",
      features: [
        "Inventory management and stock alerts",
        "Sales performance tracking",
        "Employee shift scheduling",
        "Customer relationship management",
        "Financial reporting",
        "Multi-store management capabilities"
      ],
      country: "Canada"
    },
    {
      id: 5,
      slug: 'zamana-mall',
      title: "Zamana Mall Website",
      technologies: "Flutter, Firebase, Stripe API",
      image: z1,
      description: "An e-commerce platform for Zamana Mall featuring store directories, product listings, promotional offers, and event information. The website provides a digital presence for the physical shopping mall.",
      features: [
        "Store and brand directory",
        "Product catalog browsing",
        "Promotional offers and discounts",
        "Mall events calendar",
        "Customer feedback system",
        "Location and parking information"
      ],
      country: "UK"
    },
    {
      id: 6,
      slug: 'aina-enterprises',
      title: "Aina Enterprises App",
      technologies: "Angular, Spring Boot, AWS",
      image: e1,
      description: "A business management application for Aina Enterprises with features for order processing, client management, inventory tracking, and business analytics tailored to their specific industry needs.",
      features: [
        "Client and supplier management",
        "Order and shipment tracking",
        "Inventory control system",
        "Financial management tools",
        "Custom reporting dashboard",
        "Document management system"
      ],
      country: "Australia"
    }
];

  const handleProjectClick = (project) => {
    // Navigate to detailed project page
    navigate(`/project/${project.id}/${project.slug}`);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleViewDetails = (project) => {
    closeModal();
    navigate(`/project/${project.id}/${project.slug}`);
  };

  return (
   <div className="portfolio-container">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>

     

      {/* Hero Section */}
      <section className="heroo-section">
        <div className="heroo-content">
          <div className="heroo-text">
            <h1 className="heroo-title">
              <span className="title-line">Crafting Digital</span>
              <span className="title-line accent">Experiences</span>
              <span className="title-line">That Soar</span>
            </h1>
            <p className="heroo-description">
              We transform ideas into powerful digital solutions that drive business growth and create exceptional user experiences.
            </p>
            <button className="ctaa-button" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Work
              <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="heroo-visual">
            <div className="floating-card card-1">
              <div className="card-content">
                <div className="card-icon">💻</div>
                <h4>Web Development</h4>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-content">
                <div className="card-icon">📱</div>
                <h4>Mobile Apps</h4>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-content">
                <div className="card-icon">🚀</div>
                <h4>Digital Solutions</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="secction-header">
          <h2>Our Portfolio</h2>
          <p>Discover our innovative solutions that have helped businesses worldwide achieve their digital goals</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.technologies}</p>
                    <div className="project-actions">
                      <button 
                        className="view-details-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
                <div className="project-badge">{project.country}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stat-section">
        <div className="stat-container">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-item">
            <h3>6+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>12</h3>
            <p>Countries Served</p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-header-info">
                <h2>{selectedProject.title}</h2>
                <p className="technologies">{selectedProject.technologies}</p>
                <p className="country">Country: {selectedProject.country}</p>
              </div>
            </div>
            <div className="modal-body">
              <h3>Project Description</h3>
              <p>{selectedProject.description}</p>
              <h3>Key Features:</h3>
              <ul>
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="modal-actions">
                <button 
                  className="view-full-details-btn"
                  onClick={() => handleViewDetails(selectedProject)}
                >
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how WebWings can help bring your vision to life with cutting-edge technology solutions.</p>
          <button className="contact-button">Get In Touch</button>
        </div>
      </section>
      </div>
  );
};

export default Portfolio;