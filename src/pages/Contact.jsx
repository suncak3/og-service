import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import "../styles/Contact.css";
import pall from "../assets/logos/pall.png"
import afpro from "../assets/logos/afpro.png"
import camfil from "../assets/logos/camfil.png"
import jasun from "../assets/logos/jasun.png"
import fleetguard from "../assets/logos/fleetguard.png"
import phone from "../assets/icons/Phone.png"
import location from "../assets/icons/Location.png"
import mail from "../assets/icons/Mail.png"
import success from "../assets/icons/success.png"


const Contact = () => {
  const { t } = useTranslation();

  // Animation on scroll
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
    subject: "General Inquiry"
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
        subject: "General Inquiry"
      });
    }, 5000);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>{t('contact.hero.title')}</h1>
          <p>{t('contact.hero.subtitle')}</p>
        </div>
        <div className="hero-pattern"></div>
      </section>

      <div className="container">
        {/* Contact Details & Form Section */}
        <section className="contact-main-section">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info animate-on-scroll">
              <span className="section-tag">{t('contact.info.tag')}</span>
              <h2>{t('contact.info.title')}</h2>
              <p className="info-text">
                {t('contact.info.description')}
              </p>
              
              <div className="contact-card">
                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <img src={location} alt="Address" />
                    </div>
                    <div className="contact-text">
                      <h3>{t('contact.info.visit.title')}</h3>
                      <p>{t('contact.info.visit.address1')}</p>
                      <p>{t('contact.info.visit.address2')}</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <img src={phone} alt="Phone" />
                    </div>
                    <div className="contact-text">
                      <h3>{t('contact.info.call.title')}</h3>
                      <p>{t('contact.info.call.phone')}</p>
                      <p>{t('contact.info.call.hours')}</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <img src={mail} alt="Email" />
                    </div>
                    <div className="contact-text">
                      <h3>{t('contact.info.email.title')}</h3>
                      <p>{t('contact.info.email.address')}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-container animate-on-scroll">
              <div className="form-header">
                <h2>{t('contact.form.title')}</h2>
                <p>{t('contact.form.subtitle')}</p>
              </div>
              
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <img src={success} alt="Success" />
                  </div>
                  <h3>{t('contact.form.success.title')}</h3>
                  <p>{t('contact.form.success.message')}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{t('contact.form.fields.name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">{t('contact.form.fields.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">{t('contact.form.fields.phone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="country">{t('contact.form.fields.country')}</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">{t('contact.form.fields.subject')}</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="General Inquiry">{t('contact.form.subjects.general')}</option>
                      <option value="Product Information">{t('contact.form.subjects.product')}</option>
                      <option value="Technical Support">{t('contact.form.subjects.technical')}</option>
                      <option value="Quote Request">{t('contact.form.subjects.quote')}</option>
                      <option value="Other">{t('contact.form.subjects.other')}</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">{t('contact.form.fields.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    {t('contact.form.submit')}
                    <span className="button-icon">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="map-section animate-on-scroll">
          <div className="section-header">
            <span className="section-tag">{t('contact.map.tag')}</span>
            <h2>{t('contact.map.title')}</h2>
          </div>
          
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.995610840456!2d71.4219!3d51.1311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzUyLjAiTiA3McKwMjUnMTkuOCJF!5e0!3m2!1sen!2skz!4v1616569702000!5m2!1sen!2skz"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="OG Services Location"
            ></iframe>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section animate-on-scroll">
          <div className="section-header">
            <span className="section-tag">{t('contact.faq.tag')}</span>
            <h2>{t('contact.faq.title')}</h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>{t('contact.faq.items.industries.question')}</h3>
              <p>{t('contact.faq.items.industries.answer')}</p>
            </div>
            
            <div className="faq-item">
              <h3>{t('contact.faq.items.shipping.question')}</h3>
              <p>{t('contact.faq.items.shipping.answer')}</p>
            </div>
            
            <div className="faq-item">
              <h3>{t('contact.faq.items.response.question')}</h3>
              <p>{t('contact.faq.items.response.answer')}</p>
            </div>
            
            <div className="faq-item">
              <h3>{t('contact.faq.items.support.question')}</h3>
              <p>{t('contact.faq.items.support.answer')}</p>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="brands-section animate-on-scroll">
          <div className="section-header">
            <span className="section-tag">{t('contact.brands.tag')}</span>
            <h2>{t('contact.brands.title')}</h2>
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
        </section>
      </div>
      
      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>{t('contact.cta.title')}</h2>
            <p>{t('contact.cta.description')}</p>
            <button className="cta-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {t('contact.cta.button')}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;