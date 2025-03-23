import { useState, useEffect } from "react";
import "../styles/Contact.css";
import pall from "../assets/logos/pall.png"
import afpro from "../assets/logos/afpro.png"
import camfil from "../assets/logos/camfil.png"
import jasun from "../assets/logos/jasun.png"
import fleetguard from "../assets/logos/fleetguard.png"
import phone from "../assets/icons/Phone.png"
import location from "../assets/icons/Location.png"
import mail from "../assets/icons/Mail.png"

import linkedin from "../assets/logos/linkedin.png"

const Contact = () => {
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
          <h1>Get In Touch</h1>
          <p>We're here to help with all your filtration needs</p>
        </div>
        <div className="hero-pattern"></div>
      </section>

      <div className="container">
        {/* Contact Details & Form Section */}
        <section className="contact-main-section">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info animate-on-scroll">
              <span className="section-tag">CONTACT US</span>
              <h2>Reach Out to Our Team</h2>
              <p className="info-text">
                We're dedicated to providing exceptional service and support. 
                Contact us today and discover how our filtration solutions can enhance your operations.
              </p>
              
              <div className="contact-card">
                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <img src={location} alt="Address" />
                    </div>
                    <div className="contact-text">
                      <h3>Visit Us</h3>
                      <p>Astana, st. Konaeva 33</p>
                      <p>Office 303</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <img src={phone} alt="Phone" />
                    </div>
                    <div className="contact-text">
                      <h3>Call Us</h3>
                      <p>+7 777 777 77 77</p>
                      <p>Mon - Fri, 9:00 - 17:00</p>
                    </div>
                  </div>
                  
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <img src={mail} alt="Email" />
                    </div>
                    <div className="contact-text">
                      <h3>Email Us</h3>
                      <p>info@og.kz</p>
                      <p>sales@ogservices.com</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-container animate-on-scroll">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>We'll get back to you as soon as possible</p>
              </div>
              
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <img src="/assets/icons/check-circle.svg" alt="Success" />
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been successfully sent. We will contact you very soon!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name*</label>
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
                      <label htmlFor="email">Your Email*</label>
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
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="country">Country</label>
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
                    <label htmlFor="subject">Subject*</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Your Message*</label>
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
                    Send Message
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
            <span className="section-tag">OUR LOCATION</span>
            <h2>Find Us Here</h2>
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
            <span className="section-tag">FREQUENTLY ASKED</span>
            <h2>Questions & Answers</h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What industries do you serve?</h3>
              <p>We provide filtration solutions for a wide range of industries including oil & gas, manufacturing, power generation, food & beverage, pharmaceuticals, water treatment, mining, and chemical processing.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer international shipping?</h3>
              <p>Yes, we ship our products to 99 countries worldwide. Our global distribution network ensures timely delivery regardless of your location.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your typical response time?</h3>
              <p>Our customer service team typically responds to inquiries within 24 hours during business days. For urgent matters, we recommend calling our office directly.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you provide technical support?</h3>
              <p>Absolutely. Our team of filtration experts is available to provide technical assistance, product recommendations, and troubleshooting support for all our products.</p>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="brands-section animate-on-scroll">
          <div className="section-header">
            <span className="section-tag">OUR PARTNERS</span>
            <h2>Trusted Brands We Represent</h2>
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
            <h2>Ready to Enhance Your Filtration Systems?</h2>
            <p>Let our experts help you find the perfect solution for your specific needs.</p>
            <button className="cta-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Contact Us Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;