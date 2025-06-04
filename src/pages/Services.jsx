import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../styles/Services.css";
import itServices from "../assets/images/it-services.png"; // You'll need to add this image
import transportServices from "../assets/images/transport-services.png"; // You'll need to add this image

const Services = () => {
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
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>{t('services.hero.title')}</h1>
          <p>{t('services.hero.subtitle')}</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-accent">{t('services.hero.button')}</Link>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* IT Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text animate-on-scroll">
              <span className="section-tag">{t('services.itServices.tag')}</span>
              <h2>{t('services.itServices.title')}</h2>
              <p className="lead-text">
                {t('services.itServices.leadText')}
              </p>
              <div className="text-divider"></div>
              <p>
                {t('services.itServices.description')}
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
            <span className="section-tag">{t('services.itServices.offerings.tag')}</span>
            <h2>{t('services.itServices.offerings.title')}</h2>
            <p className="section-subtitle">
              {t('services.itServices.offerings.subtitle')}
            </p>
          </div>
          
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <span className="service-number">01</span>
              <h3>{t('services.itServices.offerings.services.businessIntelligence.title')}</h3>
              <p className="service-brief">{t('services.itServices.offerings.services.businessIntelligence.description')}</p>
              <Link to="/services/business-intelligence" className="service-link">
                <span className="link-text">{t('services.itServices.offerings.learnMore')}</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">02</span>
              <h3>{t('services.itServices.offerings.services.sapImplementation.title')}</h3>
              <p className="service-brief">{t('services.itServices.offerings.services.sapImplementation.description')}</p>
              <Link to="/services/sap-implementation" className="service-link">
                <span className="link-text">{t('services.itServices.offerings.learnMore')}</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">03</span>
              <h3>{t('services.itServices.offerings.services.digitalOilfield.title')}</h3>
              <p className="service-brief">{t('services.itServices.offerings.services.digitalOilfield.description')}</p>
              <Link to="/services/digital-oilfield" className="service-link">
                <span className="link-text">{t('services.itServices.offerings.learnMore')}</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">04</span>
              <h3>{t('services.itServices.offerings.services.outsourcing.title')}</h3>
              <p className="service-brief">{t('services.itServices.offerings.services.outsourcing.description')}</p>
              <Link to="/services/outsourcing-staffing" className="service-link">
                <span className="link-text">{t('services.itServices.offerings.learnMore')}</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">05</span>
              <h3>{t('services.itServices.offerings.services.processOptimization.title')}</h3>
              <p className="service-brief">{t('services.itServices.offerings.services.processOptimization.description')}</p>
              <Link to="/services/process-optimization" className="service-link">
                <span className="link-text">{t('services.itServices.offerings.learnMore')}</span>
                <span className="link-icon">→</span>
              </Link>
            </div>
            
            <div className="service-card animate-on-scroll">
              <span className="service-number">06</span>
              <h3>{t('services.itServices.offerings.services.technicalSupport.title')}</h3>
              <p className="service-brief">{t('services.itServices.offerings.services.technicalSupport.description')}</p>
              <Link to="/services/technical-support" className="service-link">
                <span className="link-text">{t('services.itServices.offerings.learnMore')}</span>
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
              <span className="section-tag">{t('services.transportServices.tag')}</span>
              <h2>{t('services.transportServices.title')}</h2>
              <p className="lead-text">
                {t('services.transportServices.leadText')}
              </p>
              <div className="text-divider"></div>
              <p>
                {t('services.transportServices.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Services Section - Simplified */}
      <section className="services-details-section transport-services-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">{t('services.transportServices.offerings.tag')}</span>
            <h2>{t('services.transportServices.offerings.title')}</h2>
            <p className="section-subtitle">
              {t('services.transportServices.offerings.subtitle')}
            </p>
          </div>
          
          <div className="transport-content animate-on-scroll">
            <div className="transport-info-wrapper">
              <div className="transport-info-column">
                <h3>{t('services.transportServices.offerings.fleetManagement.title')}</h3>
                <p>
                  {t('services.transportServices.offerings.fleetManagement.description')}
                </p>
              </div>
              
              <div className="transport-info-column">
                <h3>{t('services.transportServices.offerings.supplyChain.title')}</h3>
                <p>
                  {t('services.transportServices.offerings.supplyChain.description')}
                </p>
              </div>
            </div>
            
            <div className="transport-features">
              <div className="feature-list">
                {t('services.transportServices.offerings.features', { returnObjects: true }).slice(0, 5).map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-marker">•</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="feature-list">
                {t('services.transportServices.offerings.features', { returnObjects: true }).slice(5, 10).map((feature, index) => (
                  <div key={index + 5} className="feature-item">
                    <span className="feature-marker">•</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="transport-cta">
              <p>{t('services.transportServices.offerings.ctaText')}</p>
              <Link to="/contact" className="btn btn-primary transport-btn">
                {t('services.transportServices.offerings.ctaButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">{t('services.process.tag')}</span>
            <h2>{t('services.process.title')}</h2>
            <p className="section-subtitle">
              {t('services.process.subtitle')}
            </p>
          </div>
          
          <div className="process-steps">
            <div className="process-step animate-on-scroll">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>{t('services.process.steps.discovery.title')}</h3>
                <p>{t('services.process.steps.discovery.description')}</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>{t('services.process.steps.planning.title')}</h3>
                <p>{t('services.process.steps.planning.description')}</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>{t('services.process.steps.implementation.title')}</h3>
                <p>{t('services.process.steps.implementation.description')}</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>{t('services.process.steps.training.title')}</h3>
                <p>{t('services.process.steps.training.description')}</p>
              </div>
            </div>
            
            <div className="process-step animate-on-scroll">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>{t('services.process.steps.support.title')}</h3>
                <p>{t('services.process.steps.support.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>{t('services.cta.title')}</h2>
            <p>{t('services.cta.description')}</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-light">{t('services.cta.exploreButton')}</Link>
              <Link to="/contact" className="btn btn-accent">{t('services.cta.contactButton')}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;