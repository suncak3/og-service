import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";
import itServices from "../assets/images/it-services.png"; // You'll need to add this image
import transportServices from "../assets/images/transport-services.png"; // You'll need to add this image

const Services = () => {
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

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive Solutions for IT and Transportation Needs</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-accent">Request a Service</Link>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* IT Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text animate-on-scroll">
              <span className="section-tag">IT SERVICES</span>
              <h2>Advanced Technology Solutions for Modern Businesses</h2>
              <p className="lead-text">
                We deliver comprehensive IT services that empower businesses with cutting-edge 
                technologies, from data analytics to AI-driven solutions, ensuring you stay ahead in today's digital landscape.
              </p>
              <div className="text-divider"></div>
              <p>
                Our team of IT experts specializes in implementing and supporting a wide range of 
                technological solutions designed to optimize your business processes, enhance security,
                and drive innovation. We understand that every business has unique challenges,
                which is why we create customized IT strategies that align with your specific goals and requirements.
              </p>
            </div>
            <div className="overview-image animate-on-scroll">
              <div className="image-wrapper">
                <img src={itServices} alt="IT Services" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Details */}
      <section className="services-details-section it-services-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">CAPABILITIES</span>
            <h2>Our IT Service Offerings</h2>
            <p className="section-subtitle">
              Explore our comprehensive range of IT services designed to optimize your business operations
              and drive digital transformation.
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <span className="service-number">01</span>
              <h3>Business Intelligence</h3>
              <p className="service-brief">Transform your business data into actionable insights with our advanced BI solutions.</p>
              <Link to="/services/business-intelligence" className="service-link">
                <span className="link-text">Learn More</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">02</span>
              <h3>SAP Implementation and Support</h3>
              <p className="service-brief">Leverage the full potential of SAP solutions with our expert implementation and ongoing technical support.</p>
              <Link to="/services/sap-implementation" className="service-link">
                <span className="link-text">Learn More</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">03</span>
              <h3>Digital Oilfield Solutions</h3>
              <p className="service-brief">Revolutionize your oil and gas operations with our comprehensive digital ecosystem solutions.</p>
              <Link to="/services/digital-oilfield" className="service-link">
                <span className="link-text">Learn More</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">04</span>
              <h3>Production Outsourcing & Staff Augmentation</h3>
              <p className="service-brief">Optimize workforce efficiency with our specialized outsourcing and staff augmentation services.</p>
              <Link to="/services/outsourcing-staffing" className="service-link">
                <span className="link-text">Learn More</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">05</span>
              <h3>Process Optimization & Loss Reduction</h3>
              <p className="service-brief">Enhance operational efficiency and minimize losses with our comprehensive process improvement services.</p>
              <Link to="/services/process-optimization" className="service-link">
                <span className="link-text">Learn More</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">06</span>
              <h3>Technical Support</h3>
              <p className="service-brief">Ensure the continuous operation of your critical systems with our responsive technical support services.</p>
              <Link to="/services/technical-support" className="service-link">
                <span className="link-text">Learn More</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Transportation Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="overview-grid reverse">
            <div className="overview-image animate-on-scroll">
              <div className="image-wrapper">
                <img src={transportServices} alt="Transportation Services" />
              </div>
            </div>
            <div className="overview-text animate-on-scroll">
              <span className="section-tag">TRANSPORTATION SERVICES</span>
              <h2>Efficient Logistics and Transportation Solutions</h2>
              <p className="lead-text">
                Our comprehensive transportation services ensure efficient movement of goods across the supply chain,
                from warehouse to final destination, with reliability and precision.
              </p>
              <div className="text-divider"></div>
              <p>
                With decades of combined experience in the transportation and logistics industry, our team
                provides end-to-end solutions that optimize your supply chain operations. We leverage advanced
                technologies and industry best practices to deliver cost-effective transportation services
                that meet your unique requirements and timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Services Section - Simplified */}
      <section className="services-details-section transport-services-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">SOLUTIONS</span>
            <h2>Our Transportation Service Offerings</h2>
            <p className="section-subtitle">
              Discover our comprehensive transportation and logistics services designed to optimize
              your supply chain and deliver your goods efficiently.
            </p>
          </div>
          
          <div className="transport-content animate-on-scroll">
            <div className="transport-info-wrapper">
              <div className="transport-info-column">
                <h3>Fleet Management & Logistics</h3>
                <p>
                  Our transportation services encompass comprehensive fleet management and logistics solutions
                  that optimize your entire supply chain. We provide expert management of vehicle fleets,
                  including maintenance scheduling, driver coordination, and route optimization to increase
                  operational efficiency while reducing costs. Our integrated logistics management services
                  ensure seamless coordination between transportation, warehousing, and distribution activities.
                </p>
              </div>
              
              <div className="transport-info-column">
                <h3>Supply Chain Optimization</h3>
                <p>
                  We excel in creating end-to-end supply chain solutions that enhance visibility and control
                  across your operations. Our experts analyze your existing supply chain and implement
                  targeted improvements to optimize inventory levels, transportation routes, and distribution
                  networks. This holistic approach ensures maximum efficiency and minimal costs throughout
                  the entire logistics process, from sourcing to final delivery.
                </p>
              </div>
            </div>
            
            <div className="transport-features">
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Fleet Management</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Logistics Management</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Freight Forwarding</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Supply Chain Solutions</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Inventory Management</span>
                </div>
              </div>
              
              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Customs Brokerage</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Cargo Tracking</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Last-Mile Delivery</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Intermodal Transportation</span>
                </div>
                <div className="feature-item">
                  <span className="feature-marker">•</span>
                  <span className="feature-text">Warehouse Management</span>
                </div>
              </div>
            </div>
            
            <div className="transport-cta">
              <p>Contact our transportation experts to discuss your specific logistics needs and discover how our solutions can optimize your supply chain.</p>
              <Link to="/contact" className="btn btn-primary transport-btn">Contact Transportation Experts</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">OUR APPROACH</span>
            <h2>How We Work With You</h2>
            <p className="section-subtitle">
              Our structured approach ensures transparent communication and successful outcomes for every project.
            </p>
          </div>
          
          <div className="process-steps">
            <div className="process-step animate-on-scroll">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery & Assessment</h3>
                <p>We begin by thoroughly understanding your business needs, challenges, and objectives through 
                comprehensive consultations and assessments.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Strategic Planning</h3>
                <p>Based on our assessment, we develop a detailed plan that outlines solutions, timelines, 
                resources, and expected outcomes.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Our expert team executes the plan with precision, keeping you informed throughout the process 
                and making adjustments as needed.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Training & Knowledge Transfer</h3>
                <p>We ensure your team is fully equipped to leverage new systems and processes through 
                comprehensive training and documentation.</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Ongoing Support & Optimization</h3>
                <p>We provide continuous monitoring, maintenance, and optimization to ensure your solutions 
                evolve with your business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let our experts help you implement the right IT and transportation solutions for your specific needs.</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-light">Explore Products</Link>
              <Link to="/contact" className="btn btn-accent">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;