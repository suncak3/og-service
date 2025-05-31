import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";
import driveBelts from "../assets/images/Drive-Belts-3.jpg"
import mission from "../assets/icons/mission.png"
import vision from "../assets/icons/vision.png"
import oil from "../assets/icons/oil-and-gas.png"
import manufacturing from "../assets/icons/manufacturing.png"
import map from "../assets/images/Map.png"
import experience_2 from "../assets/icons/experience-2.png"
import global_2 from "../assets/icons/global-2.png"
import clients from "../assets/icons/clients.png"
import products from "../assets/icons/products.png"
import pall from "../assets/logos/pall.png"
import norbar from "../assets/logos/norbar.png"
import camfil from "../assets/logos/camfil.png"
import parker from "../assets/logos/parker.png"
import gates from "../assets/logos/gates.png"




const About = () => {
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
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About OG Services</h1>
          <p>Industrial Supply & Advanced Technology Services Since 2012</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-accent">Talk to an Expert</Link>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Company Overview */}
      <section className="about-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text animate-on-scroll">
              <span className="section-tag">WHO WE ARE</span>
              <h2>Leading Industrial Supply & Technology Solutions Provider</h2>
              <p className="lead-text">
                From our establishment in Kazakhstan to becoming a regional leader in industrial supply and advanced 
                technology services, OG Services has consistently delivered comprehensive solutions that drive 
                operational excellence across multiple industries.
              </p>
              <div className="text-divider"></div>
              <p>
                Founded in 2012, OG Services has evolved from a specialized supplier to a comprehensive solutions 
                provider offering both premium industrial materials and cutting-edge technology services. With 
                headquarters in Astana, Kazakhstan, we serve customers across multiple countries, delivering 
                industrial supplies, IT solutions, and transportation services from globally recognized manufacturers and partners.
              </p>
            </div>
            <div className="overview-image animate-on-scroll">
              <div className="image-wrapper">
                <img src={driveBelts} alt="OG Services Headquarters" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">OUR JOURNEY</span>
            <h2>Milestones That Shaped Our Legacy</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>OG Services was established in Astana with a team of 5 dedicated professionals focusing on industrial supply solutions.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Regional Expansion</h3>
                <p>Regional expansion within the whole Kazakhstan, extending our industrial supply capabilities nationwide.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Global Partnerships</h3>
                <p>Formed strategic alliances with leading manufacturers including PALL, Parker, Gates, Camfil, and Norbar.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Service Diversification & Digital Transformation</h3>
                <p>Expanded into IT and transportation services while launching our digital platform for enhanced customer experience.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">Today</div>
              <div className="timeline-content">
                <h3>Comprehensive Solutions Provider</h3>
                <p>Trusted partner for industrial supplies and technology services across oil & gas, manufacturing, and other industries in Kazakhstan, Russia and Uzbekistan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box animate-on-scroll">
              <div className="icon-wrapper">
                <img src={mission} alt="Mission" />
              </div>
              <h2>Our Mission</h2>
              <p>
                At OG Services, our mission is to deliver exceptional value through comprehensive industrial 
                supply solutions and advanced technology services that enhance operational efficiency, drive 
                innovation, and support sustainable growth for our clients across diverse industries.
              </p>
            </div>
            
            <div className="vision-box animate-on-scroll">
              <div className="icon-wrapper">
                <img src={vision} alt="Vision" />
              </div>
              <h2>Our Vision</h2>
              <p>
                To be the leading provider of integrated industrial supply and technology solutions in Central Asia, 
                setting new standards for quality, innovation, and service excellence while driving our clients' 
                success through comprehensive, future-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Updated Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">OUR PRINCIPLES</span>
            <h2>Core Values That Drive Us</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card animate-on-scroll">
              <h3 data-number="01">Excellence</h3>
              <p>We are committed to excellence in everything we do, from product quality and service delivery to technology implementation, constantly striving to exceed expectations. Our dedication to superior standards ensures that every solution we provide represents the pinnacle of industry capabilities.</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="02">Innovation</h3>
              <p>We embrace innovation and continuously seek better solutions for our clients' challenges, staying at the forefront of industry developments. By investing in advanced technologies and progressive methodologies, we push the boundaries of what's possible in both industrial supply and technology services.</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="03">Reliability</h3>
              <p>We build trust through consistency, dependability, and transparent business practices, becoming a partner our clients can count on. Our commitment to reliability extends throughout our operations, from product performance to service delivery timelines and technical support excellence.</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="04">Comprehensive Solutions</h3>
              <p>We provide integrated solutions that combine premium industrial supplies with advanced technology services, creating synergies that deliver greater value. Our holistic approach ensures clients receive end-to-end support for all their operational and technological needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">OUR SPECIALTIES</span>
            <h2>Industry Expertise</h2>
            <p className="section-subtitle">
              Our team possesses deep technical knowledge across various industries, providing comprehensive 
              industrial supply and technology solutions tailored to each sector's unique requirements.
            </p>
          </div>
          
          <div className="expertise-grid">
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Oil & Gas" />
              </div>
              <h3>Oil & Gas</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Manufacturing" />
              </div>
              <h3>Manufacturing</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Power Generation" />
              </div>
              <h3>Power Generation</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Food & Beverage" />
              </div>
              <h3>Food & Beverage</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Infrastructure" />
              </div>
              <h3>Infrastructure</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Transportation" />
              </div>
              <h3>Transportation</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Mining & Minerals" />
              </div>
              <h3>Mining & Minerals</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Technology Services" />
              </div>
              <h3>Technology Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-section">
        <div className="container">
          <div className="global-grid">
            <div className="global-text animate-on-scroll">
              <span className="section-tag">OUR REACH</span>
              <h2>Regional Leadership with Global Standards</h2>
              <p>
                While we maintain strong regional presence and deep understanding of local markets, we operate 
                according to international standards and best practices. Our local representatives provide 
                personalized service with technical expertise, product guidance, and technology support to 
                address your operational challenges promptly and effectively.
              </p>
              <p>
                Through strategic partnerships with world-leading manufacturers and technology providers,
                we ensure reliable supply chains, competitive pricing, and access to cutting-edge solutions 
                for our customers throughout Kazakhstan, Russia, and Uzbekistan.
              </p>
              <Link to="/contact" className="btn btn-primary">Contact Your Local Office</Link>
            </div>
            <div className="global-map animate-on-scroll">
              <img src={map} alt="Global Presence Map" />
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
                <div className="stat-label">COUNTRIES SERVED</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={clients} alt="Clients" />
              </div>
              <div className="stat-content">
                <div className="stat-number">30+</div>
                <div className="stat-label">SATISFIED CLIENTS</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={products} alt="Products" />
              </div>
              <div className="stat-content">
                <div className="stat-number">200+</div>
                <div className="stat-label">SOLUTIONS AVAILABLE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section-about">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">OUR PARTNERS</span>
            <h2>Trusted Brands We Represent</h2>
            <p className="section-subtitle">
              We are proud to partner with the most prestigious names in industrial supply and technology solutions, 
              ensuring our clients receive only the highest quality products and services.
            </p>
          </div>
          <div className="brands-container animate-on-scroll">
          <div className="brands-slider">
            <div className="brand-logo">
              <img src={pall} alt="PALL" />
            </div>
            <div className="brand-logo">
              <img src={camfil} alt="Camfil" />
            </div>
            <div className="brand-logo">
              <img src={parker} alt="Parker" />
            </div>
            <div className="brand-logo">
              <img src={gates} alt="Gates" />
            </div>
            <div className="brand-logo">
              <img src={norbar} alt="Norbar" />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Enhance Your Operations?</h2>
            <p>Let our experts help you find the perfect industrial supply and technology solutions for your specific needs.</p>
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

export default About;