import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logos/Logo.png"
import phone from "../assets/icons/Phone.png"
import location from "../assets/icons/Location.png"
import clock from "../assets/icons/Clock.png"
import "../styles/Header.css";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Fixed function to handle mobile navigation
    const closeMenuAndNavigate = (path) => {
        setMobileMenuOpen(false); // Close the menu first
        setTimeout(() => {
          navigate(path); // Navigate after a small delay to ensure menu closes smoothly
        }, 50);
    };

    const handleGetQuote = () => {
        navigate('/contact'); // Navigate to contact page when Get Quote is clicked
        setMobileMenuOpen(false); // Close menu if open
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            {/* Top info bar - hidden on mobile */}
            <div className="header-top">
                <div className="header-contact">
                    <div>
                        <img src={phone} alt="phone icon"/> 
                        +7 777 777 77 77
                    </div>
                    <div>
                        <img src={clock} alt="clock icon"/>
                        Mon - Fri 09:00 - 17:00
                    </div>
                    <div>
                        <img src={location} alt="location icon"/> 
                        Astana, st. Konaeva 33, office 303
                    </div>
                </div>
                {/* Mail icon removed */}
            </div>
            
            {/* Main header section */}
            <div className="header-main">
                <Link to="/" className="header-logo">
                    <img src={logo} alt="OG Services logo" />
                </Link>

                {/* Desktop header info - hidden on mobile */}
                <div className="header-info">
                    <div>
                        <p className="info-label">Email us</p>
                        <p className="info-value">sales@ogservices.com</p>
                    </div>
                    <div>
                        <p className="info-label">Address</p>
                        <p className="info-value">Astana, st. Konaeva 33, office 303</p>
                    </div>
                    <div>
                        <p className="info-label">Call us</p>
                        <p className="info-value">+7 777 777 77 77</p>
                    </div>
                    <button className="header-button" onClick={handleGetQuote}>GET QUOTE</button>
                </div>

                {/* Mobile burger menu */}
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <div className={`burger ${mobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            {/* Navigation - Desktop visible, mobile in dropdown */}
            <nav className={`navbar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <div className="nav-container">
                    {/* Fixed mobile navigation links */}
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/');
                    }}>HOME</a>
                    
                    <a href="/about" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/about');
                    }}>ABOUT</a>
                    
                    <a href="/products" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/products');
                    }}>PRODUCTS</a>
                    
                    <a href="/contact" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/contact');
                    }}>CONTACT US</a>
                </div>

                {/* Mobile-only contact info shown in menu */}
                <div className="mobile-contact-info">
                    <div className="mobile-contact-item">
                        <img src="/assets/icons/phone.png" alt="phone icon"/>
                        <p>+7 777 777 77 77</p>
                    </div>
                    <div className="mobile-contact-item">
                        <img src="/assets/icons/mail.png" alt="mail icon"/>
                        <p>sales@ogservices.com</p>
                    </div>
                    <div className="mobile-contact-item">
                        <img src="/assets/icons/location.png" alt="location icon"/>
                        <p>Astana, st. Konaeva 33, office 303</p>
                    </div>
                    <button className="mobile-quote-btn" onClick={handleGetQuote}>GET QUOTE</button>
                </div>
            </nav>

            {/* Overlay for mobile menu */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
            )}
        </header>
    );
};

export default Header;