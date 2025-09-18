import React, { useState, useEffect , useCallback} from 'react';
import h1 from "../assets/h5.jpg"
import './Portfolio.css';
import m7 from '../assets/7.jpg'
import m1 from '../assets/MCC Rider/Screenshot_20250503-153136.jpg'
import m2 from '../assets/MCC Rider/Screenshot_20250503-153140.jpg'
import m3 from '../assets/MCC Admin/Screenshot_20250503-152931.jpg'
import m4 from '../assets/MCC/Screenshot_20250503-152758.jpg'
import m5 from '../assets/MCC/Screenshot_20250503-152834.jpg'
import m6 from '../assets/MCC/Screenshot_20250503-152823.jpg'
import a1 from '../assets/Attendance_App/1.jpeg'
import a2 from '../assets/Attendance_App/Admin_Dashboard.jpeg'
import a3 from '../assets/Attendance_App/Attendance_Request.jpeg'
import a4 from '../assets/Attendance_App/Dashboard_2.jpeg'
import a5 from '../assets/Attendance_App/Month_Attendance.jpeg'
import a6 from '../assets/Attendance_App/Salary_total.jpeg' 
import a8 from '../assets/Attendance_App/Absent_Employees.jpeg'
import a7 from '../assets/1.jpg'
import o1 from '../assets/Order_Taker/Login.png'
import o2 from '../assets/Order_Taker/Item_Selection.png'
import o3 from '../assets/Order_Taker/Order_Form.png'
import o4 from '../assets/Order_Taker/Table.png'

import o6 from '../assets/2.jpg'
import r1 from '../assets/Retail Admin/Screenshot_20250503-153348.jpg'
import r2 from '../assets/Retail Admin/Screenshot_20250503-153354.jpg'
import r3 from '../assets/Retail Admin/Screenshot_20250503-153408.jpg'
import r4 from '../assets/Retail Admin/Screenshot_20250503-153415.jpg'
import r5 from '../assets/Retail Admin/Screenshot_20250503-153422.jpg'
import r6 from '../assets/Retail Admin/Screenshot_20250503-153425.jpg'
import r7 from '../assets/3.jpg'
import z1 from '../assets/Zamana_Mall/Category_page.png'
import z2 from '../assets/Zamana_Mall/category.png'
import z3 from '../assets/Zamana_Mall/Mobile.png'
import z4 from '../assets/Zamana_Mall/Add_to_Cart.png'
import z5 from '../assets/Zamana_Mall/Cart&Product.png'
import z6 from '../assets/Zamana_Mall/Cart.png'
import z7 from '../assets/4.jpg'
import e1 from '../assets/E-IBS/Screenshot_20250503-150859.jpg'
import e2 from '../assets/E-IBS/Screenshot_20250503-150926.jpg'
import e3 from '../assets/E-IBS/Screenshot_20250503-150941.jpg'
import e4 from '../assets/E-IBS/Screenshot_20250503-150952.jpg'
import  e5 from '../assets/E-IBS/Screenshot_20250503-151110.jpg'
import e6 from '../assets/E-IBS/Screenshot_20250503-151134.jpg'
import e7 from '../assets/6.jpg'
import c1 from '../assets/Central/Screenshot_20250503-150515.jpg'
import c2 from '../assets/Central/Screenshot_20250503-150522.jpg'
import c3 from '../assets/Central/Screenshot_20250503-150526.jpg'
import c4 from '../assets/Central/Screenshot_20250503-150602.jpg'
import c5 from '../assets/Central/Screenshot_20250503-150652.jpg'
import c6 from '../assets/Central/Screenshot_20250503-150659.jpg'
import c7 from '../assets/5.jpg'
import t1 from '../assets/Attendance_Desktop/Add_things.png'
import t2 from '../assets/Attendance_Desktop/Adv_loan.png'
import t3 from '../assets/Attendance_Desktop/Dashboard.png'
import t4 from '../assets/Attendance_Desktop/Finger.png'
import t5 from '../assets/Attendance_Desktop/Login.png'
import t6 from '../assets/Attendance_Desktop/Pay_salary_form.png'
import t7 from '../assets/1.jpg'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Updated project data with 3-line descriptions
  const projects = [
    {
      id: 1,
      title: "E-Commerce Complete Solution",
      subtitle: "React Native • Node.js • MongoDB",
      description: [
        "Full-featured e-commerce platform with multi-vendor support and real-time inventory management system.",
        "Integrated payment gateways, order tracking, and comprehensive admin dashboard for seamless operations."
      ],
      images: [m7, m1, m2, m3, m4, m5, m6]
    },
    {
      id: 2,
      title: "Attendance Management System",
      subtitle: "Vue.js • Laravel • MySQL",
      description: [
        "Advanced biometric attendance system with facial recognition and fingerprint integration capabilities.",
        "Real-time employee tracking, automated payroll calculation, and comprehensive reporting dashboard."
      ],
      images: [a7, a1, a2, a3, a4, a5, a6,a8]
    },
    {
      id: 3,
      title: "Order Management System",
      subtitle: "React.js • Express.js • PostgreSQL",
      description: [
        "Streamlined order processing system with automated workflow management and inventory synchronization.",
        "Real-time order tracking, customer notifications, and integrated logistics management for efficient delivery."
      ],
      images: [o6, o1, o2, o3, o4]
    },
    {
      id: 4,
      title: "Retail Admin Dashboard",
      subtitle: "Next.js • Django • Redis",
      description: [
        "Comprehensive retail management dashboard with real-time sales analytics and inventory control systems.",
        "Multi-store management capabilities with centralized reporting and automated stock replenishment alerts."
      ],
      images: [r7, r1, r2, r3, r4, r5, r6]
    },
    {
      id: 5,
      title: "Zamana Mall Website Platform",
      subtitle: "Flutter • Firebase • Stripe",
      description: [
        "Modern e-commerce marketplace connecting multiple vendors with customers through intuitive shopping experience.",
        "Integrated payment processing, order management, and customer support system with live chat functionality."
      ],
      images: [z7, z1, z2, z3, z4, z5, z6]
    },
    {
      id: 6,
      title: "Enterprise Business App",
      subtitle: "Angular • Spring Boot • AWS",
      description: [
        "Enterprise-grade business application with comprehensive workflow management and document processing capabilities.",
        "Multi-tenant architecture supporting various business domains with role-based access control and security."
      ],
      images: [e7, e1, e2, e3, e4, e5, e6]
    },
    {
      id: 7,
      title: "Central Management System",
      subtitle: "Angular • Spring Boot • AWS",
      description: [
        "Centralized management platform for multi-location businesses with unified reporting and control systems.",
        "Real-time monitoring, automated alerts, and comprehensive audit trails for enhanced operational visibility."
      ],
      images: [c7, c1, c2, c3, c4, c5, c6]
    },
    {
      id: 8,
      title: "Attendance Management System - Desktop",
      subtitle: "Electron • MySQL • Node.js",
      description: [
        "Desktop application for offline attendance management with synchronization capabilities when online.",
        "Hardware integration support for various biometric devices and card readers with seamless data processing."
      ],
      images: [t7, t1, t2, t3, t4, t5, t6]
    }
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openGallery = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

 const handleKeyPress = useCallback((e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'Escape') closeGallery();
  }, [nextImage, prevImage, closeGallery, selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedProject, handleKeyPress]);

  return (
    <div 
      className="portfolio-container"
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`
      }}
    >
      {/* Animated Background Shapes */}
      <div className="floaating-shapes">
        <div className="shaape shaape-1"></div>
        <div className="shaape shaape-2"></div>
        <div className="shaape shaape-3"></div>
        <div className="shaape shaape-4"></div>
      </div>

      {/* Hero Section */}
      <section className="portfolio-work-section">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-100 g-0">
            <div className="col-xl-6 col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="portfolio-work-content px-3 px-md-4 px-lg-5">
                <div className="portfolio-work-badge">
                  <span className="badge-icon">⚡</span>
                  <span>Premium Software Development</span>
                </div>
                <h1 className="portfolio-work-title">
                  <span className="title-word">Crafting</span>
                  <span className="title-word">Digital</span>
                  <span className="title-word ">Excellence</span>
                </h1>
                <p className="portfolio-work-subtitle">
                  <span className="typing-text">Transforming Ideas Into Reality</span>
                </p>
                <p className="portfolio-work-description">
                  We transform innovative ideas into powerful digital solutions that drive business growth 
                  and create exceptional user experiences across web and mobile platforms.
                </p>
                <div className="portfolio-work-buttons">
                  <a href="#projects" className="cta-button primary">
                    <span>Explore Our Work</span>
                    <svg className="button-icon" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <button className="cta-button secondary">
                    <span>Get Quote</span>
                  </button>
                </div>
                <div className="portfoliio-workk-staats">
                  <div className="staat-iteem">
                    <span className="staat-nummber">50+</span>
                    <span className="staat-labbel">Projects</span>
                  </div>
                  <div className="staat-iteem">
                    <span className="staat-nummber">15+</span>
                    <span className="staat-labbel">Clients</span>
                  </div>
                  <div className="staat-iteem">
                    <span className="staat-nummber">6+</span>
                    <span className="staat-labbel">Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="col-xl-6 col-lg-6 col-md-12 order-1 order-lg-2">
              <div className="portfolio-work-visual d-flex justify-content-center align-items-center">
                <div className="tech-mockup position-relative">
                  <img src={h1} alt="Software Development" className="tech-image" />
                </div>
                
                {/* Floating Tech Cards */}
                <div className="tech-cards">
                  <div className="tech-card card-1">
                    <div className="tech-icon">💻</div>
                    <span>Web Dev</span>
                  </div>
                  <div className="tech-card card-2">
                    <div className="tech-icon">📱</div>
                    <span>Mobile</span>
                  </div>
                  <div className="tech-card card-3">
                    <div className="tech-icon">☁️</div>
                    <span>Cloud</span>
                  </div>
                  <div className="tech-card card-4">
                    <div className="tech-icon">🚀</div>
                    <span>DevOps</span>
                  </div>
                </div>
                
                <div className="tech-overlay">
                  <div className="code-editor">
                    <div className="editor-header">
                      <div className="editor-dots">
                        <span></span><span></span><span></span>
                      </div>
                      <span className="editor-title">app.js</span>
                    </div>
                    <div className="editor-content">
                      <div className="code-line">
                        <span className="line-number">1</span>
                        <span className="code-keyword">import</span>
                        <span className="code-text"> React </span>
                        <span className="code-keyword">from</span>
                        <span className="code-string"> 'react'</span>
                      </div>
                      <div className="code-line">
                        <span className="line-number">2</span>
                        <span className="code-keyword">const</span>
                        <span className="code-variable"> App</span>
                        <span className="code-operator"> = </span>
                        <span className="code-bracket">()</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title">Our Portfolio</h2>
              <p className="section-subtitle">
                Discover our innovative solutions that have helped businesses worldwide achieve their digital goals
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div 
                  className="project-card h-100"
                  onClick={() => openGallery(project)}
                >
                  <div className="project-image">
                    <img src={project.images[0]} alt={project.title} />
                    <div className="project-overlay">
                      
                      <span className="view-gallery-text">Click to view gallery</span>
                    </div>
                    <div className="image-count">
                      {project.images.length} images
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-description">
                        {project.description.map((desc, index) => (
                          <p key={index} className="description-line">{desc}</p>
                        ))}
                      </div>
                    
                    

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={closeGallery}>
              ×
            </button>
            
            <button className="gallery-nav prev" onClick={prevImage}>
              ‹
            </button>
            
            <img 
              src={selectedProject.images[currentImageIndex]} 
              alt={selectedProject.title}
              className="gallery-image"
            />
            
            <button className="gallery-nav next" onClick={nextImage}>
              ›
            </button>
            
            <div className="gallery-info">
              <div className="gallery-counter">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
              <div className="gallery-title">
                {selectedProject.title}
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;