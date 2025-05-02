import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ServiceDetail.css";

// Import service images (you'll need to add these)
import biImage from "../assets/icons/success.png";
import sapImage from "../assets/icons/success.png";
import digitalOilfieldImage from "../assets/icons/success.png";
import outsourcingImage from "../assets/icons/success.png";
import processOptimizationImage from "../assets/icons/success.png";
import technicalSupportImage from "../assets/icons/success.png";

// Service data
const servicesData = {
  "business-intelligence": {
    title: "Business Intelligence",
    image: biImage,
    shortDescription: "Transform your business data into actionable insights with our advanced BI solutions.",
    fullDescription: `Our Business Intelligence services provide your organization with the tools and 
    expertise needed to convert raw data into valuable business insights. We implement customized BI 
    solutions that help you make informed decisions, identify market trends, and gain a competitive edge.`,
    features: [
      "Data warehouse implementation and optimization",
      "Interactive dashboard development",
      "Predictive analytics solutions",
      "Real-time reporting systems",
      "ETL (Extract, Transform, Load) process design",
      "Data visualization and storytelling"
    ],
    benefits: [
      "Make data-driven decisions faster",
      "Identify new business opportunities",
      "Optimize operational efficiency",
      "Improve customer experience",
      "Increase profitability through actionable insights"
    ],
    approach: `We follow a systematic approach to implementing BI solutions, starting with a comprehensive 
    assessment of your current data environment and business needs. Our team of data analysts and BI 
    specialists then design and deploy a tailored solution that integrates seamlessly with your existing 
    systems. We provide ongoing support and training to ensure your team can effectively utilize the 
    BI tools and continue deriving value from your data assets.`
  },
  "sap-implementation": {
    title: "SAP Implementation and Support",
    image: sapImage,
    shortDescription: "Leverage the full potential of SAP solutions with our expert implementation and ongoing technical support.",
    fullDescription: `Our SAP implementation and support services help businesses efficiently deploy, 
    customize, and maintain SAP solutions to streamline operations and improve business outcomes. With 
    our expertise, you can harness the full power of SAP's extensive suite of enterprise solutions.`,
    features: [
      "End-to-end SAP implementation services",
      "SAP module customization",
      "Integration with existing systems",
      "Data migration and quality assurance",
      "Performance optimization",
      "Post-implementation support and maintenance"
    ],
    benefits: [
      "Streamline business processes",
      "Enhance operational visibility",
      "Improve data consistency across departments",
      "Reduce IT maintenance costs",
      "Scale your ERP solution as your business grows"
    ],
    approach: `Our approach to SAP implementation begins with understanding your business requirements 
    and process workflows. We then develop a detailed implementation roadmap, configure and customize 
    SAP modules to match your specific needs, and ensure smooth data migration. Our team provides 
    comprehensive training to your staff and offers ongoing support to maximize your SAP investment.`
  },
  "digital-oilfield": {
    title: "Digital Oilfield Solutions",
    image: digitalOilfieldImage,
    shortDescription: "Revolutionize your oil and gas operations with our comprehensive digital ecosystem solutions.",
    fullDescription: `Our Digital Oilfield Solutions transform traditional oil and gas operations into 
    intelligent, data-driven systems that optimize production, reduce downtime, and improve safety. By 
    integrating cutting-edge technologies like IoT, AI, and cloud computing, we help you achieve higher 
    operational efficiency and profitability.`,
    features: [
      "Real-time production monitoring systems",
      "IoT sensor integration and data collection",
      "Predictive maintenance solutions",
      "Production optimization algorithms",
      "Remote monitoring and control systems",
      "Advanced data analytics for reservoir management"
    ],
    benefits: [
      "Reduce operational expenses",
      "Minimize unplanned downtime",
      "Optimize production rates",
      "Improve worker safety",
      "Enhance environmental compliance",
      "Extend equipment lifespan"
    ],
    approach: `We implement digital oilfield solutions through a phased approach, beginning with a 
    thorough assessment of your existing infrastructure and operational challenges. Our specialists 
    then design an integrated digital ecosystem that addresses your specific needs, deploying IoT 
    sensors, establishing secure data transmission networks, and creating customized analytics dashboards. 
    We provide ongoing support to ensure continuous improvement of your digital oilfield operations.`
  },
  "outsourcing-staffing": {
    title: "Production Outsourcing & Staff Augmentation",
    image: outsourcingImage,
    shortDescription: "Optimize workforce efficiency with our specialized outsourcing and staff augmentation services.",
    fullDescription: `Our Production Outsourcing and Staff Augmentation services provide you with 
    flexible access to highly skilled technical personnel and specialized production capabilities. 
    We help you scale your workforce efficiently, manage project peaks, and access specialized expertise 
    without the overhead of permanent recruitment.`,
    features: [
      "Technical personnel outsourcing",
      "Project-based engineering teams",
      "Specialized production function outsourcing",
      "Skill gap analysis and fulfillment",
      "Knowledge transfer programs",
      "Compliance and quality assurance"
    ],
    benefits: [
      "Reduce fixed personnel costs",
      "Access specialized skills on demand",
      "Scale workforce according to project needs",
      "Focus internal resources on core activities",
      "Accelerate project completion timelines",
      "Maintain consistent quality standards"
    ],
    approach: `Our approach to outsourcing and staffing begins with understanding your specific 
    technical and operational requirements. We then identify the optimal resource mix to meet your 
    needs, carefully selecting personnel with the right skills and experience. We manage the integration 
    of our team members into your operations and maintain continuous communication to ensure alignment 
    with your objectives and quality standards.`
  },
  "process-optimization": {
    title: "Process Optimization & Loss Reduction",
    image: processOptimizationImage,
    shortDescription: "Enhance operational efficiency and minimize losses with our comprehensive process improvement services.",
    fullDescription: `Our Process Optimization and Loss Reduction services help businesses identify 
    inefficiencies, eliminate waste, and streamline operations. Through systematic analysis and targeted 
    improvements, we help you achieve higher productivity, better quality, and increased profitability.`,
    features: [
      "Comprehensive process mapping and analysis",
      "Waste identification and elimination",
      "Lean manufacturing implementation",
      "Six Sigma methodology application",
      "Quality management system enhancement",
      "Continuous improvement programs"
    ],
    benefits: [
      "Reduce operational costs",
      "Minimize material and energy waste",
      "Improve product quality and consistency",
      "Increase production throughput",
      "Enhance workplace safety",
      "Build a culture of continuous improvement"
    ],
    approach: `We approach process optimization through a structured methodology that begins with 
    thorough data collection and analysis to identify improvement opportunities. Our experienced 
    industrial engineers and operational experts then work with your team to design and implement 
    targeted improvements, using proven methodologies like Lean and Six Sigma. We establish metrics 
    and monitoring systems to track progress and ensure sustainable results.`
  },
  "technical-support": {
    title: "Technical Support",
    image: technicalSupportImage,
    shortDescription: "Ensure the continuous operation of your critical systems with our responsive technical support services.",
    fullDescription: `Our Technical Support services provide reliable, responsive assistance for your 
    IT infrastructure, applications, and systems. We offer multi-tiered support options to address 
    everything from routine help desk queries to complex technical issues, ensuring your business 
    operations continue without disruption.`,
    features: [
      "24/7 help desk services",
      "Multi-tiered support model",
      "Remote troubleshooting",
      "On-site technical assistance",
      "Preventive maintenance",
      "System updates and patch management",
      "Performance monitoring and optimization"
    ],
    benefits: [
      "Minimize system downtime",
      "Resolve technical issues quickly",
      "Reduce internal IT support burden",
      "Prevent small issues from escalating",
      "Keep systems secure and up-to-date",
      "Access specialized technical expertise"
    ],
    approach: `Our technical support approach is based on establishing clear communication channels 
    and response protocols tailored to your business needs. We implement ticket management systems 
    to track and prioritize issues, provide multiple support channels including phone, email, and 
    live chat, and maintain detailed documentation of your systems to enable faster problem resolution. 
    We continuously monitor system performance to proactively address potential issues before they 
    impact your operations.`
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);
  
  // Add animation on scroll effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on initial load
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service not found</h2>
        <p>The service you're looking for doesn't exist or has been moved.</p>
        <Link to="/services" className="btn btn-primary">Return to Services</Link>
      </div>
    );
  }

  return (
    <main className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${service.image})` }}>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumbs">
              <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{service.title}</span>
            </div>
            <h1>{service.title}</h1>
            <p className="hero-description">{service.shortDescription}</p>
            <Link to="/contact" className="btn btn-accent">Request a Consultation</Link>
          </div>
        </div>
      </section>
      
      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="service-detail-overview-content animate-on-scroll">
            <h2>Overview</h2>
            <div className="service-detail-divider"></div>
            <p>{service.fullDescription}</p>
          </div>
        </div>
      </section>
      
      {/* Features and Benefits */}
      <section className="service-detail-features-benefits">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-features-column animate-on-scroll">
              <h2>Key Features</h2>
              <div className="service-detail-divider"></div>
              <ul className="service-detail-feature-list">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <span className="service-detail-feature-icon">✓</span>
                    <span className="service-detail-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="service-detail-benefits-column animate-on-scroll">
              <h2>Benefits</h2>
              <div className="service-detail-divider"></div>
              <ul className="service-detail-benefit-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <div className="service-detail-benefit-item">
                      <div className="service-detail-benefit-icon-wrapper">
                        <span className="service-detail-benefit-icon">✓</span>
                      </div>
                      <span className="service-detail-benefit-text">{benefit}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="service-approach">
        <div className="container">
          <div className="service-detail-approach-content animate-on-scroll">
            <h2>Our Approach</h2>
            <div className="service-detail-divider"></div>
            <p>{service.approach}</p>
          </div>
        </div>
      </section>
      
      {/* Other Services */}
      <section className="service-detail-other-services">
        <div className="container">
          <div className="service-detail-section-header animate-on-scroll">
            <h2>Explore Our Other Services</h2>
            <p>Discover how our comprehensive range of services can help your business thrive.</p>
          </div>
          
          <div className="service-detail-other-services-grid">
            {Object.entries(servicesData)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, serviceData]) => (
                <div className="service-detail-other-service-card animate-on-scroll" key={id}>
                  <h3>{serviceData.title}</h3>
                  <p>{serviceData.shortDescription}</p>
                  <Link to={`/services/${id}`} className="service-detail-link">
                    <span className="service-detail-link-text">Learn More</span>
                    <span className="service-detail-link-icon">→</span>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Implement {service.title}?</h2>
            <p>Contact our experts today to discuss how we can tailor our solutions to your specific needs.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">Contact Us</Link>
              <Link to="/services" className="btn btn-light">View All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;