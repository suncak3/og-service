import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../styles/Footer.css";
import logo from "../assets/logos/Logo_white.png";
import phone from "../assets/icons/Phone_white.png"
import location from "../assets/icons/Location_white.png";
import email from "../assets/icons/Mail_white.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <div className="footer-logo">
                <img src={logo} alt="OG Services Logo" />
              </div>
              <p className="footer-about">
                {t('footer.about')}
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <img src={phone} alt="Phone" />
                  <span>{t('footer.phone')}</span>
                </div>
                <div className="contact-item">
                  <img src={email} alt="Email" />
                  <span>{t('footer.email')}</span>
                </div>
                <div className="contact-item">
                  <img src={location} alt="Address" />
                  <span>{t('footer.address')}</span>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">{t('footer.quickLinks')}</h3>
              <ul className="footer-links">
                <li><Link to="/">{t('footer.nav.home')}</Link></li>
                <li><Link to="/about">{t('footer.nav.about')}</Link></li>
                <li><Link to="/products">{t('footer.nav.products')}</Link></li>
                <li><Link to="/services">{t('footer.nav.services')}</Link></li>
                <li><Link to="/contact">{t('footer.nav.contact')}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">{t('footer.products')}</h3>
              <ul className="footer-links">
                <li><Link to="/products?category=spare-parts">{t('footer.productCategories.spareParts')}</Link></li>
                <li><Link to="/products?category=piping">{t('footer.productCategories.piping')}</Link></li>
                <li><Link to="/products?category=tools">{t('footer.productCategories.tools')}</Link></li>
                <li><Link to="/products?category=electrical">{t('footer.productCategories.electrical')}</Link></li>
                <li><Link to="/products?category=equipment">{t('footer.productCategories.equipment')}</Link></li>
                <li><Link to="/products?category=valves">{t('footer.productCategories.valves')}</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">{t('footer.services')}</h3>
              <ul className="footer-links">
                <li><Link to="/services">{t('footer.serviceTypes.it')}</Link></li>
                <li><Link to="/services">{t('footer.serviceTypes.transportation')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {currentYear} OG Services. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;