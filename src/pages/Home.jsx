import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import belts from "../assets/images/drive-belts.png"
import back from '../assets/images/background.jpg'
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
import parts from "../assets/images/Parts.jpg"
import fittings from "../assets/images/fittings.jpg"
import tools from "../assets/images/tools.png"
import electrical from "../assets/images/electrical.jpg"
import equipment from "../assets/images/equipment.webp"
import valves from "../assets/images/valves.png"


const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  
  const changeSlide = (index) => {
    setActiveSlide(index);
  };
  
  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? 1 : 0);
  };
  
  const nextSlide = () => {
    setActiveSlide(activeSlide === 0 ? 1 : 0);
  };
  
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
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  return (
    <main className="home-page">
      {/* Hero Section with Slider */}
      <section className="hero-section">
        <img loading="lazy" src={back} alt="Background img" className="hexagon-pattern"></img>
        
        {/* Slide 1 - Products */}
        <div className={`hero-slide ${activeSlide === 0 ? 'active' : ''}`}>
          <div className="hero-content animate-on-scroll">
            <h1>OG Services LLP supplies industrial materials and partners with major companies in Kazakhstan, Russia, and Uzbekistan.</h1>
            <div className="hero-divider"></div>
            <Link to="/products" className="btn btn-hero">Explore Our Products</Link>
          </div>
          <div className="hero-image animate-on-scroll">
            <img loading="lazy" src={belts} alt="Industrial belts" />
          </div>
        </div>
        
        {/* Slide 2 - Services */}
        <div className={`hero-slide ${activeSlide === 1 ? 'active' : ''}`}>
          <div className="hero-content animate-on-scroll">
            <h1>Comprehensive IT and transportation solutions for your industrial needs.</h1>
            <div className="hero-divider"></div>
            <Link to="/services" className="btn btn-hero">Discover Our Services</Link>
          </div>
          <div className="hero-image-services animate-on-scroll">
            <img loading="lazy" src={filters} alt="Services" />
          </div>
        </div>
        
        {/* Slider Navigation - Arrows for all screens */}
        <div className="slider-navigation">
          <div className="slider-arrows">
            <button className="slider-arrow prev-arrow" onClick={prevSlide}>
              &lt;
            </button>
            <button className="slider-arrow next-arrow" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="product-overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text animate-on-scroll">
              <h2>Comprehensive Industrial Solutions</h2>
              <p>We proudly supply a wide range of high-quality industrial products across Kazakhstan, Russia, and Uzbekistan, ensuring reliability and performance for every industrial application.</p>
              
              <p>From filtration systems and drive belts to specialized equipment and components, our extensive product range powers industries across diverse sectors, delivering unmatched reliability and operational efficiency.</p>
              
              <h3>Our Vision</h3>
              <p>To become the leading industrial supplier in Central Asia by providing innovative solutions, maintaining superior quality standards, and helping our clients achieve operational excellence.</p>
              
              <Link to="/products" className="btn btn-primary">View All Products</Link>
            </div>

            <div className="product-categories-grid">

              <Link to="/products?category=spare-parts" className="category-card animate-on-scroll">
                <div className="category-image">
                  <img src={parts} alt="Spare Parts and Components" />
                </div>
                <div className="category-overlay">
                  <h3>SPARE PARTS</h3>
                </div>
              </Link>

              <Link to="/products?category=piping" className="category-card animate-on-scroll">
                <div className="category-image">
                  <img src={fittings} alt="Piping, Flanges, and Fittings" />
                </div>
                <div className="category-overlay">
                  <h3>PIPING & FITTINGS</h3>
                </div>
              </Link>

              <Link to="/products?category=tools" className="category-card animate-on-scroll">
                <div className="category-image">
                  <img src={tools} alt="Hand Tools and Specialized Tools" />
                </div>
                <div className="category-overlay">
                  <h3>TOOLS</h3>
                </div>
              </Link>

              <Link to="/products?category=electrical" className="category-card animate-on-scroll">
                <div className="category-image">
                  <img src={electrical} alt="Electrical Equipment" />
                </div>
                <div className="category-overlay">
                  <h3>ELECTRICAL</h3>
                </div>
              </Link>

              <Link to="/products?category=equipment" className="category-card animate-on-scroll">
                <div className="category-image">
                  <img src={equipment} alt="Standalone Processing Equipment" />
                </div>
                <div className="category-overlay">
                  <h3>PROCESSING EQUIPMENT</h3>
                </div>
              </Link>

              <Link to="/products?category=valves" className="category-card animate-on-scroll">
                <div className="category-image">
                  <img src={valves} alt="Valves" />
                </div>
                <div className="category-overlay">
                  <h3>VALVES</h3>
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

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-wrapper">
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={experience_2} alt="Experience" />
              </div>
              <div className="stat-content">
                <div className="stat-number">13</div>
                <div className="stat-label">YEARS OF EXPERIENCE</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={global_2} alt="Global" />
              </div>
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-label">COUNTRIES</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={clients} alt="Clients" />
              </div>
              <div className="stat-content">
                <div className="stat-number">30+</div>
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
          <h2 className="animate-on-scroll">Ready to Enhance Your Industrial Operations?</h2>
          <p className="animate-on-scroll">Contact our team today for expert advice and comprehensive product information.</p>
          <Link to="/contact" className="btn btn-accent animate-on-scroll">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;