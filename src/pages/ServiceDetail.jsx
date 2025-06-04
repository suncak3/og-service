import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../styles/ServiceDetail.css";

import biImage from "../assets/icons/success.png";
import sapImage from "../assets/icons/success.png";
import digitalOilfieldImage from "../assets/icons/success.png";
import outsourcingImage from "../assets/icons/success.png";
import processOptimizationImage from "../assets/icons/success.png";
import technicalSupportImage from "../assets/icons/success.png";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { t } = useTranslation();
  
  // Service mapping
  const serviceMapping = {
    "business-intelligence": "businessIntelligence",
    "sap-implementation": "sapImplementation", 
    "digital-oilfield": "digitalOilfield",
    "outsourcing-staffing": "outsourcingStaffing",
    "process-optimization": "processOptimization",
    "technical-support": "technicalSupport"
  };

  const serviceImages = {
    "business-intelligence": biImage,
    "sap-implementation": sapImage,
    "digital-oilfield": digitalOilfieldImage,
    "outsourcing-staffing": outsourcingImage,
    "process-optimization": processOptimizationImage,
    "technical-support": technicalSupportImage
  };

  const translationKey = serviceMapping[serviceId];
  
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
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  if (!translationKey) {
    return (
      <div className="service-not-found">
        <h2>{t('serviceDetail.notFound.title')}</h2>
        <p>{t('serviceDetail.notFound.description')}</p>
        <Link to="/services" className="btn btn-primary">
          {t('serviceDetail.notFound.button')}
        </Link>
      </div>
    );
  }

  // Get service data from translations
  const serviceData = t(`serviceDetail.services.${translationKey}`, { returnObjects: true });
  const serviceImage = serviceImages[serviceId];

  return (
    <main className="service-detail-page">
      {/* Hero Section */}
      <section className="service-detail-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.85), rgba(0, 51, 102, 0.85)), url(${serviceImage})` }}>
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumbs">
              <Link to="/">{t('serviceDetail.breadcrumbs.home')}</Link> / <Link to="/services">{t('serviceDetail.breadcrumbs.services')}</Link> / <span>{serviceData.title}</span>
            </div>
            <h1>{serviceData.title}</h1>
            <p className="hero-description">{serviceData.shortDescription}</p>
            <Link to="/contact" className="btn btn-accent">
              {t('serviceDetail.requestConsultation')}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Overview */}
      <section className="service-overview">
        <div className="container">
          <div className="service-detail-overview-content animate-on-scroll">
            <h2>{t('serviceDetail.overview')}</h2>
            <div className="service-detail-divider"></div>
            <p>{serviceData.fullDescription}</p>
          </div>
        </div>
      </section>
      
      {/* Features and Benefits */}
      <section className="service-detail-features-benefits">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-features-column animate-on-scroll">
              <h2>{t('serviceDetail.keyFeatures')}</h2>
              <div className="service-detail-divider"></div>
              <ul className="service-detail-feature-list">
                {serviceData.features.map((feature, index) => (
                  <li key={index}>
                    <span className="service-detail-feature-icon">✓</span>
                    <span className="service-detail-feature-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="service-detail-benefits-column animate-on-scroll">
              <h2>{t('serviceDetail.benefits')}</h2>
              <div className="service-detail-divider"></div>
              <ul className="service-detail-benefit-list">
                {serviceData.benefits.map((benefit, index) => (
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
            <h2>{t('serviceDetail.ourApproach')}</h2>
            <div className="service-detail-divider"></div>
            <p>{serviceData.approach}</p>
          </div>
        </div>
      </section>
      
      {/* Other Services */}
      <section className="service-detail-other-services">
        <div className="container">
          <div className="service-detail-section-header animate-on-scroll">
            <h2>{t('serviceDetail.otherServices.title')}</h2>
            <p>{t('serviceDetail.otherServices.subtitle')}</p>
          </div>
          
          <div className="service-detail-other-services-grid">
            {Object.entries(serviceMapping)
              .filter(([id]) => id !== serviceId)
              .slice(0, 3)
              .map(([id, translationKey]) => {
                const otherServiceData = t(`serviceDetail.services.${translationKey}`, { returnObjects: true });
                return (
                  <div className="service-detail-other-service-card animate-on-scroll" key={id}>
                    <h3>{otherServiceData.title}</h3>
                    <p>{otherServiceData.shortDescription}</p>
                    <Link to={`/services/${id}`} className="service-detail-link">
                      <span className="service-detail-link-text">{t('serviceDetail.otherServices.learnMore')}</span>
                      <span className="service-detail-link-icon">→</span>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="service-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
          <h2>{t('serviceDetail.cta.title').replace('{serviceTitle}', serviceData.title)}</h2>
            <p>{t('serviceDetail.cta.description')}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">
                {t('serviceDetail.cta.contactButton')}
              </Link>
              <Link to="/services" className="btn btn-light">
                {t('serviceDetail.cta.servicesButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;