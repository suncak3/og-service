import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
          <h1>{t('about.hero.title')}</h1>
          <p>{t('about.hero.subtitle')}</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-accent">{t('about.hero.button')}</Link>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Company Overview */}
      <section className="about-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text animate-on-scroll">
              <span className="section-tag">{t('about.overview.tag')}</span>
              <h2>{t('about.overview.title')}</h2>
              <p className="lead-text">
                {t('about.overview.leadText')}
              </p>
              <div className="text-divider"></div>
              <p>
                {t('about.overview.description')}
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
            <span className="section-tag">{t('about.timeline.tag')}</span>
            <h2>{t('about.timeline.title')}</h2>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2012</div>
              <div className="timeline-content">
                <h3>{t('about.timeline.milestones.2012.title')}</h3>
                <p>{t('about.timeline.milestones.2012.description')}</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>{t('about.timeline.milestones.2015.title')}</h3>
                <p>{t('about.timeline.milestones.2015.description')}</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>{t('about.timeline.milestones.2020.title')}</h3>
                <p>{t('about.timeline.milestones.2020.description')}</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>{t('about.timeline.milestones.2022.title')}</h3>
                <p>{t('about.timeline.milestones.2022.description')}</p>
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-year">{t('about.timeline.today')}</div>
              <div className="timeline-content">
                <h3>{t('about.timeline.milestones.today.title')}</h3>
                <p>{t('about.timeline.milestones.today.description')}</p>
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
              <h2>{t('about.mission.title')}</h2>
              <p>
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="vision-box animate-on-scroll">
              <div className="icon-wrapper">
                <img src={vision} alt="Vision" />
              </div>
              <h2>{t('about.vision.title')}</h2>
              <p>
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Updated Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">{t('about.values.tag')}</span>
            <h2>{t('about.values.title')}</h2>
          </div>
          
          <div className="values-grid">
            <div className="value-card animate-on-scroll">
              <h3 data-number="01">{t('about.values.excellence.title')}</h3>
              <p>{t('about.values.excellence.description')}</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="02">{t('about.values.innovation.title')}</h3>
              <p>{t('about.values.innovation.description')}</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="03">{t('about.values.reliability.title')}</h3>
              <p>{t('about.values.reliability.description')}</p>
            </div>
            
            <div className="value-card animate-on-scroll">
              <h3 data-number="04">{t('about.values.comprehensive.title')}</h3>
              <p>{t('about.values.comprehensive.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">{t('about.expertise.tag')}</span>
            <h2>{t('about.expertise.title')}</h2>
            <p className="section-subtitle">
              {t('about.expertise.subtitle')}
            </p>
          </div>
          
          <div className="expertise-grid">
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Oil & Gas" />
              </div>
              <h3>{t('about.expertise.industries.oilGas')}</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Manufacturing" />
              </div>
              <h3>{t('about.expertise.industries.manufacturing')}</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Power Generation" />
              </div>
              <h3>{t('about.expertise.industries.powerGeneration')}</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Food & Beverage" />
              </div>
              <h3>{t('about.expertise.industries.foodBeverage')}</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Infrastructure" />
              </div>
              <h3>{t('about.expertise.industries.infrastructure')}</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Transportation" />
              </div>
              <h3>{t('about.expertise.industries.transportation')}</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={oil} alt="Mining & Minerals" />
              </div>
              <h3>{t('about.expertise.industries.mining')}</h3>
            </div>
            
            <div className="expertise-card animate-on-scroll">
              <div className="expertise-icon">
                <img src={manufacturing} alt="Technology Services" />
              </div>
              <h3>{t('about.expertise.industries.technology')}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-section">
        <div className="container">
          <div className="global-grid">
            <div className="global-text animate-on-scroll">
              <span className="section-tag">{t('about.global.tag')}</span>
              <h2>{t('about.global.title')}</h2>
              <p>
                {t('about.global.description1')}
              </p>
              <p>
                {t('about.global.description2')}
              </p>
              <Link to="/contact" className="btn btn-primary">{t('about.global.button')}</Link>
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
                <div className="stat-label">{t('about.stats.experience')}</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={global_2} alt="Global" />
              </div>
              <div className="stat-content">
                <div className="stat-number">3</div>
                <div className="stat-label">{t('about.stats.countries')}</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={clients} alt="Clients" />
              </div>
              <div className="stat-content">
                <div className="stat-number">30+</div>
                <div className="stat-label">{t('about.stats.clients')}</div>
              </div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item animate-on-scroll">
              <div className="stat-icon">
                <img src={products} alt="Products" />
              </div>
              <div className="stat-content">
                <div className="stat-number">200+</div>
                <div className="stat-label">{t('about.stats.solutions')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section-about">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">{t('about.brands.tag')}</span>
            <h2>{t('about.brands.title')}</h2>
            <p className="section-subtitle">
              {t('about.brands.subtitle')}
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
            <h2>{t('about.cta.title')}</h2>
            <p>{t('about.cta.description')}</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-light">{t('about.cta.exploreButton')}</Link>
              <Link to="/contact" className="btn btn-accent">{t('about.cta.contactButton')}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;