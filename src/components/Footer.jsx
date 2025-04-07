import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logos/Logo_white.png";
import phone from "../assets/icons/Phone_white.png"
import location from "../assets/icons/Location_white.png";
import email from "../assets/icons/Mail_white.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
                Global leader in industrial filtration solutions, providing high-quality 
                filters and belts to enhance operational efficiency and reliability.
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <img src={phone} alt="Phone" />
                  <span>+7 707 466 1423</span>
                </div>
                <div className="contact-item">
                  <img src={email} alt="Email" />
                  <span> info@ogservices.kz</span>
                </div>
                <div className="contact-item">
                  <img src={location} alt="Address" />
                  <span>Astana, st. Konaeva 33, Office 303</span>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Filters</h3>
              <ul className="footer-links">
                <li>PALL</li>
                <li>Camfil</li>
                <li>HIGGINS AND HEWINS</li>
                <li>AF Pro</li>
                <li>Hochiki</li>
                <li>Purafil</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Belts</h3>
              <ul className="footer-links">
                <li>Gates</li>
                <li>Continental (Contitech)</li>
                <li>Optibelt </li>
                <li>Dunham Bush</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {currentYear} OG Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;