import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import belts from "../assets/images/drive-belts.png"
import belts_2 from "../assets/images/drive-belts-2.png"
import filters from "../assets/images/filters.png"
import experience from "../assets/icons/experience.png"
import quality from "../assets/icons/quality.png"
import global from "../assets/icons/global.png"
import support from "../assets/icons/support.png"
import experience_2 from "../assets/icons/experience-2.png"
import global_2 from "../assets/icons/global-2.png"
import clients from "../assets/icons/clients.png"
import pall from "../assets/logos/pall.png"
import afpro from "../assets/logos/afpro.png"
import camfil from "../assets/logos/camfil.png"
import jasun from "../assets/logos/jasun.png"
import fleetguard from "../assets/logos/fleetguard.png"

const Home = () => {
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
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hexagon-pattern"></div>
        <div className="hero-content animate-on-scroll">
          <h1>Filters refine your choices, helping you find exactly what you need with ease and precision.</h1>
          <div className="hero-divider"></div>
          <Link to="/products" className="btn btn-hero">Explore Our Products</Link>
        </div>
        <div className="hero-image animate-on-scroll">
          <img src={belts} alt="Industrial belts" />
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="product-overview-section">
        <div className="container">
          <div className="overview-flex">
            <div className="overview-text animate-on-scroll">
              <h2>High-Quality Products for Industrial Excellence</h2>
              <p>We proudly supply high-quality filters and belts across the globe, ensuring reliability and performance wherever you are!</p>
              
              <p>Our premium filters and belts power industries worldwide, delivering unmatched reliability, peak performance, and unstoppable efficiency—because excellence knows no borders!</p>
              
              <h3>Our Vision</h3>
              <p>To set the global standard in filtration and power transmission solutions, driving innovation, sustainability, and superior quality to keep the world moving forward.</p>
              
              <Link to="/products" className="btn btn-primary">View All Products</Link>
            </div>

            <div className="overview-categories">
              <Link to="/products?category=filters" className="category-card">
                <div className="category-image">
                  <img src={filters} alt="Filters" />
                </div>
                <div className="category-overlay">
                  <h3>FILTERS</h3>
                </div>
              </Link>
  
              <Link to="/products?category=belts" className="category-card">
                <div className="category-image">
                  <img src={belts_2} alt="Belts" />
                </div>
                <div className="category-overlay">
                  <h3>BELTS</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <h4 className="pre-title animate-on-scroll">WHY CHOOSE OG SERVICES</h4>
          <h2 className="section-title animate-on-scroll">Our Benefits</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <img src={experience} alt="Experience" />
              </div>
              <h3>Industry Expertise</h3>
              <p>With decades of experience, our team provides knowledgeable solutions tailored to your specific needs.</p>
            </div>
            
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <img src={quality} alt="Quality" />
              </div>
              <h3>Premium Quality</h3>
              <p>We partner with only the most trusted manufacturers to ensure superior product performance.</p>
            </div>
            
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <img src={global} alt="Global" />
              </div>
              <h3>Global Reach</h3>
              <p>Our extensive distribution network ensures timely deliveries to customers worldwide.</p>
            </div>
            
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <img src={support} alt="Support" />
              </div>
              <h3>Dedicated Support</h3>
              <p>Our customer service team is available to assist you with product selection and technical questions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - UPDATED */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-wrapper">
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={experience_2} alt="Experience" />
              </div>
              <div className="stat-content">
                <div className="stat-number">99</div>
                <div className="stat-label">YEARS OF EXPERIENCE</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={global_2} alt="Global" />
              </div>
              <div className="stat-content">
                <div className="stat-number">99</div>
                <div className="stat-label">COUNTRIES</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={clients} alt="Clients" />
              </div>
              <div className="stat-content">
                <div className="stat-number">9999</div>
                <div className="stat-label">HAPPY CLIENTS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Our Trusted Brands</h2>
          <div className="brands-slider animate-on-scroll">
            <div className="brand-logo">
              <img src={pall} alt="PALL" />
            </div>
            <div className="brand-logo">
              <img src={camfil} alt="Camfil" />
            </div>
            <div className="brand-logo">
              <img src={jasun} alt="JASUN" />
            </div>
            <div className="brand-logo">
              <img src={fleetguard} alt="Fleetguard" />
            </div>
            <div className="brand-logo">
              <img src={afpro} alt="Gates" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="animate-on-scroll">Ready to Enhance Your Filtration Solutions?</h2>
          <p className="animate-on-scroll">Contact our team today for expert advice and product information.</p>
          <Link to="/contact" className="btn btn-accent animate-on-scroll">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;