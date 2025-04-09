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
import afpro from "../assets/logos/afpro.png"
import camfil from "../assets/logos/camfil.png"
import jasun from "../assets/logos/jasun.png"
import fleetguard from "../assets/logos/fleetguard.png"




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
          <p>Pioneering Filtration Excellence Since 2012</p>
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
              <h2>Leading the Filtration Industry with Innovation & Expertise</h2>
              <p className="lead-text">
                From our humble beginnings in Kazakhstan to becoming a regional leader in industrial filtration solutions, 
                OG Services has consistently pushed the boundaries of what's possible in filtration technology.
              </p>
              <div className="text-divider"></div>
              <p>
                Founded in 2012, OG Services has grown from a small local supplier to a regional
                leader in industrial filtration solutions. With headquarters in Astana, Kazakhstan,
                we now serve customers in several countries across the region, offering an extensive range
                of filtration products from the most respected brands in the industry.
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
                <p>OG Services was established in Astana with a team of 5 dedicated professionals.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Regional Expansion</h3>
                <p>Regional expansion within the whole Kazakhstan.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Global Partnerships</h3>
                <p>Formed strategic alliances with leading manufacturers including PALL and Camfil.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Rebranding and Digital Transformation</h3>
                <p>Launched our digital platform, making product selection and ordering more efficient.</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">Today</div>
              <div className="timeline-content">
                <h3>Trusted partner</h3>
                <p>For several high profile oil & gas operating companies and other industries in Kazakhstan, Russia and Uzbekistan.</p>
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
                At OG Services, our mission is to deliver exceptional value through innovative
                filtration solutions that enhance operational efficiency, reduce environmental impact,
                and drive sustainable growth for our clients worldwide.
              </p>
            </div>
            
            <div className="vision-box animate-on-scroll">
              <div className="icon-wrapper">
                <img src={vision} alt="Vision" />
              </div>
              <h2>Our Vision</h2>
              <p>
                To set the global standard in filtration and power transmission solutions, driving innovation, 
                sustainability, and superior quality to keep the world moving forward into a cleaner, more 
                efficient future.
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
              <p>We are committed to excellence in everything we do, from product quality to customer service, constantly striving to exceed expectations. Our dedication to superior standards ensures that every filtration solution we provide represents the pinnacle of industry capabilities.</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="02">Innovation</h3>
              <p>We embrace innovation and continuously seek better solutions for our clients' challenges, staying at the forefront of industry developments. By investing in research and advanced technologies, we push the boundaries of what's possible in filtration systems.</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="03">Reliability</h3>
              <p>We build trust through consistency, dependability, and transparent business practices, becoming a partner our clients can count on. Our commitment to reliability extends throughout our operations, from product performance to delivery timelines and service excellence.</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="04">Sustainability</h3>
              <p>We prioritize environmentally responsible products and practices across our operations, contributing to a healthier planet. By developing energy-efficient filtration solutions and implementing eco-friendly business processes, we help our clients meet their sustainability goals.</p>
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
              Our team of filtration experts possesses deep technical knowledge across various industries, 
              ensuring tailored solutions for every client.
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
                <img src={oil} alt="Pharmaceuticals" />
              </div>
              <h3>Pharmaceuticals</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Water Treatment" />
              </div>
              <h3>Water Treatment</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Mining & Minerals" />
              </div>
              <h3>Mining & Minerals</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Chemical Processing" />
              </div>
              <h3>Chemical Processing</h3>
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
              <h2>International presence</h2>
              <p>
                While we operate on a global scale, we maintain a commitment to providing personalized,
                responsive service to each client. Our local representatives are always available to
                offer technical support, product guidance, and prompt solutions to your filtration challenges.
              </p>
              <p>
                Through strategic partnerships with the world's leading filter and belt manufacturers,
                we ensure a reliable supply chain and competitive pricing for our customers, no matter
                where they are located.
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
                <div className="stat-label">PRODUCTS AVAILABLE</div>
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
              We are proud to partner with the most prestigious names in industrial filtration and power
              transmission, ensuring our clients receive only the highest quality products.
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
              <img src={jasun} alt="JASUN" />
            </div>
            <div className="brand-logo">
              <img src={fleetguard} alt="Fleetguard" />
            </div>
            <div className="brand-logo">
              <img src={afpro} alt="AFPRO" />
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Enhance Your Filtration Systems?</h2>
            <p>Let our experts help you find the perfect solution for your specific needs.</p>
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