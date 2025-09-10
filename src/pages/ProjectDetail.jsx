import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import m1 from '../assets/MCC Rider/Screenshot_20250503-153004.jpg'
import m2 from '../assets/MCC Rider/Screenshot_20250503-153136.jpg'
import m3 from '../assets/MCC Admin/Screenshot_20250503-152931.jpg'
import m4 from '../assets/MCC/Screenshot_20250503-152814.jpg'
import m5 from '../assets/MCC/Screenshot_20250503-152834.jpg'
import m6 from '../assets/MCC/Screenshot_20250503-152823.jpg'
import a1 from '../assets/Attendance_App/1.jpeg'
import a2 from '../assets/Attendance_App/Admin_Dashboard.jpeg'
import a3 from '../assets/Attendance_App/Attendance_Request.jpeg'
import a4 from '../assets/Attendance_App/Dashboard_2.jpeg'
import a5 from '../assets/Attendance_App/Month_Attendance.jpeg'
import a6 from '../assets/Attendance_App/Salary_total.jpeg' 
import o1 from '../assets/Order_Taker/Login.png'
import o2 from '../assets/Order_Taker/Item_Selection.png'
import o3 from '../assets/Order_Taker/Order_Form.png'
import o4 from '../assets/Order_Taker/Table.png'
import o6 from '../assets/Order_Requisition/Order_Form.png'
import r1 from '../assets/Retail Admin/Screenshot_20250503-153348.jpg'
import r2 from '../assets/Retail Admin/Screenshot_20250503-153354.jpg'
import r3 from '../assets/Retail Admin/Screenshot_20250503-153408.jpg'
import r4 from '../assets/Retail Admin/Screenshot_20250503-153415.jpg'
import r5 from '../assets/Retail Admin/Screenshot_20250503-153422.jpg'
import r6 from '../assets/Retail Admin/Screenshot_20250503-153425.jpg'
import z1 from '../assets/Zamana_Mall/1.png'
import z2 from '../assets/Zamana_Mall/category.png'
import z3 from '../assets/Zamana_Mall/Mobile.png'
import z4 from '../assets/Zamana_Mall/Add_to_Cart.png'
import z5 from '../assets/Zamana_Mall/Cart&Product.png'
import z6 from '../assets/Zamana_Mall/Cart.png'
import e1 from '../assets/E-IBS/Screenshot_20250503-150859.jpg'
import e2 from '../assets/E-IBS/Screenshot_20250503-150926.jpg'
import e3 from '../assets/E-IBS/Screenshot_20250503-150941.jpg'
import e4 from '../assets/E-IBS/Screenshot_20250503-150952.jpg'
import  e5 from '../assets/E-IBS/Screenshot_20250503-151110.jpg'
import e6 from '../assets/E-IBS/Screenshot_20250503-151134.jpg'

const ProjectDetail = () => {
  const { id, slug } = useParams();
  const navigate = useNavigate();

  // Project data (in real app, this would come from an API or context)
const projects = {
  1: {
    title: "E-Commerce Complete Solution For MCC",
    slug: "e-commerce",
    technologies: "React Native, Node.js, MongoDB",
    image: m1,
    country: "Pakistan",
    description: "A comprehensive e-commerce solution featuring mobile app and admin panel with inventory management, order processing, payment integration, and analytics. Designed specifically for MCC's retail operations with multi-vendor support.",
    features: [
      "Multi-vendor marketplace platform",
      "Inventory management system",
      "Secure payment gateway integration",
      "Real-time order tracking",
      "Customer review and rating system",
      "Advanced analytics dashboard"
    ],
    gallery: [m2, m3, m4, m5, m6],
    challenges: "Integrating multiple payment gateways while maintaining PCI compliance and ensuring smooth inventory synchronization across multiple vendor accounts.",
    solution: "We developed a microservices architecture with dedicated services for payments, inventory, and orders, ensuring scalability and data consistency.",
    timeline: "6 months",
    team: "5 developers, 2 designers, 1 project manager"
  },
  2: {
    title: "Attendance Management System",
    slug: "attendance-management-system",
    technologies: "Vue.js, Laravel, MySQL",
    image: a1,
    country: "UAE",
    description: "A digital attendance tracking system with biometric integration, leave management, and reporting features. Supports facial recognition, fingerprint scanning, and GPS location verification for remote employees.",
    features: [
      "Biometric and RFID integration",
      "Leave and overtime management",
      "Automated payroll calculation",
      "Real-time attendance tracking",
      "Customizable reporting",
      "Mobile app for remote clock-in"
    ],
    gallery: [a2, a3, a4, a5, a6],
    challenges: "Ensuring accurate attendance tracking across multiple locations with different connectivity conditions while maintaining data security.",
    solution: "Implemented offline-first architecture with secure data synchronization and multi-factor authentication for verification.",
    timeline: "5 months",
    team: "4 developers, 1 designer, 1 project manager"
  },
  3: {
    title: "Ajwa Order Management System",
    slug: "ajwa-order-system",
    technologies: "React.js, Express.js, PostgreSQL",
    image: o1,
    country: "USA",
    description: "A comprehensive order management system for Ajwa Foods to track orders, manage inventory, process payments, and generate invoices. The system streamlines the entire order fulfillment process from placement to delivery.",
    features: [
      "Order processing and tracking",
      "Inventory management with low stock alerts",
      "Invoice generation and payment processing",
      "Customer management system",
      "Sales reporting and analytics",
      "Multi-channel order integration"
    ],
    gallery: [o2, o3, o4, o1, o6],
    challenges: "Handling high order volumes during peak seasons while maintaining system performance and ensuring accurate inventory updates.",
    solution: "Implemented a queue-based processing system with real-time inventory caching and automated scaling during high traffic periods.",
    timeline: "7 months",
    team: "6 developers, 2 designers, 1 project manager"
  },
  4: {
    title: "Retail Admin for Mart7",
    slug: "retail-admin",
    technologies: "Next.js, Django, Redis",
    image: r1,
    country: "Canada",
    description: "An administrative dashboard for Mart7 retail management with inventory control, sales tracking, employee management, and business analytics. Provides real-time insights into store operations and performance metrics.",
    features: [
      "Inventory management and stock alerts",
      "Sales performance tracking",
      "Employee shift scheduling",
      "Customer relationship management",
      "Financial reporting and analytics",
      "Multi-store management capabilities"
    ],
    gallery: [r2, r3, r4, r5, r6],
    challenges: "Creating a unified view of inventory and sales data across multiple store locations with different operational procedures.",
    solution: "Developed a customizable data aggregation system with role-based access controls and configurable reporting templates.",
    timeline: "6 months",
    team: "5 developers, 1 UX designer, 1 project manager"
  },
  5: {
    title: "Zamana Mall Website",
    slug: "zamana-mall",
    technologies: "Flutter, Firebase, Stripe API",
    image: z1,
    country: "UK",
    description: "An e-commerce platform for Zamana Mall featuring store directories, product listings, promotional offers, and event information. The website provides a digital presence for the physical shopping mall with online shopping capabilities.",
    features: [
      "Store and brand directory with navigation",
      "Product catalog browsing and search",
      "Promotional offers and discount management",
      "Mall events calendar and booking system",
      "Customer feedback and rating system",
      "Location and parking information"
    ],
    gallery: [z2, z3, z4, z5, z6],
    challenges: "Creating an intuitive interface that represents the physical mall experience while providing robust e-commerce functionality.",
    solution: "Designed a visually rich interface with interactive mall maps, virtual store tours, and seamless integration with physical store inventory systems.",
    timeline: "5 months",
    team: "4 developers, 2 designers, 1 content manager"
  },
  6: {
    title: "Aina Enterprises App",
    slug: "aina-enterprises",
    technologies: "Angular, Spring Boot, AWS",
    image: e1,
    country: "Australia",
    description: "A business management application for Aina Enterprises with features for order processing, client management, inventory tracking, and business analytics tailored to their specific industry needs.",
    features: [
      "Client and supplier management system",
      "Order and shipment tracking",
      "Inventory control with batch tracking",
      "Financial management and accounting tools",
      "Custom reporting dashboard",
      "Document management system"
    ],
    gallery: [e2, e3, e4, e5, e6],
    challenges: "Meeting industry-specific compliance requirements while maintaining an intuitive user experience for non-technical staff.",
    solution: "Conducted extensive user research to create industry-specific workflows with contextual help and training materials integrated directly into the application.",
    timeline: "8 months",
    team: "7 developers, 2 UX designers, 1 project manager, 1 domain expert"
  }
};

  const project = projects[id];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/portfolio')} className="back-button">
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <button onClick={() => navigate('/portfolio')} className="back-button">
        ← Back to Portfolio
      </button>
      
      <div className="project-header">
        <img src={project.image} alt={project.title} className="project-main-image" />
        <div className="project-info">
          <h1>{project.title}</h1>
          <p className="project-technologies">{project.technologies}</p>
          <div className="project-meta">
            <span className="meta-item">Country: {project.country}</span>
            <span className="meta-item">Timeline: {project.timeline}</span>
            <span className="meta-item">Team: {project.team}</span>
          </div>
        </div>
      </div>

      <div className="project-content">
        <section className="project-description">
          <h2>Project Description</h2>
          <p>{project.description}</p>
        </section>

        <section className="project-features">
          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="project-challenges">
          <h2>Challenges</h2>
          <p>{project.challenges}</p>
        </section>

        <section className="project-solution">
          <h2>Our Solution</h2>
          <p>{project.solution}</p>
        </section>

        {project.gallery && (
          <section className="project-gallery">
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              {project.gallery.map((image, index) => (
                <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="project-navigation">
        <button onClick={() => navigate('/portfolio')} className="portfolio-link">
          ← View All Projects
        </button>
        <button className="contact-link">
          Start Your Project →
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;


