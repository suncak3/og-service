import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from "../assets/logos/Logo.png"
import phone from "../assets/icons/Phone.png"
import location from "../assets/icons/Location.png"
import clock from "../assets/icons/Clock.png"
import "../styles/Header.css";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

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

    const closeMenuAndNavigate = (path) => {
        setMobileMenuOpen(false); 
        setTimeout(() => {
          navigate(path); 
        }, 50);
    };

    const handleGetQuote = () => {
        navigate('/contact'); 
        setMobileMenuOpen(false); 
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setMobileMenuOpen(false); 
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            {/* Top info bar - hidden on mobile */}
            <div className="header-top">
                <div className="header-contact">
                    <div>
                        <img src={phone} alt="phone icon"/> 
                        {t('header.phone')}
                    </div>
                    <div>
                        <img src={clock} alt="clock icon"/>
                        {t('header.hours')}
                    </div>  
                </div>
                
                {/* Language switcher for desktop */}
                <div className="language-switcher">
                    <button 
                        className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                        onClick={() => changeLanguage('en')}
                    >
                        EN
                    </button>
                    <span className="lang-separator">|</span>
                    <button 
                        className={`lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
                        onClick={() => changeLanguage('ru')}
                    >
                        RU
                    </button>
                </div>
            </div>
            
            {/* Main header section */}
            <div className="header-main">
                <Link to="/" className="header-logo">
                    <img src={logo} alt="OG Services logo" />
                </Link>

                {/* Desktop header info - hidden on mobile */}
                <div className="header-info">
                    <div>
                        <p className="info-label">{t('header.emailLabel')}</p>
                        <p className="info-value">{t('header.email')}</p>
                    </div>
                    <div>
                        <p className="info-label">{t('header.callLabel')}</p>
                        <p className="info-value">{t('header.phone')}</p>
                    </div>
                    <button className="header-button" onClick={handleGetQuote}>
                        {t('header.getQuote')}
                    </button>
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
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/');
                    }}>{t('header.nav.home')}</a>
                    
                    <a href="/about" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/about');
                    }}>{t('header.nav.about')}</a>
                    
                    <a href="/products" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/products');
                    }}>{t('header.nav.products')}</a>

                    <a href="/services" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/services');
                    }}>{t('header.nav.services')}</a>
                    
                    <a href="/contact" onClick={(e) => {
                        e.preventDefault();
                        closeMenuAndNavigate('/contact');
                    }}>{t('header.nav.contact')}</a>
                </div>

                {/* Mobile-only contact info shown in menu */}
                <div className="mobile-contact-info">
                    <div className="mobile-contact-item">
                        <img src="/assets/icons/phone.png" alt="phone icon"/>
                        <p>{t('header.phone')}</p>
                    </div>
                    <div className="mobile-contact-item">
                        <img src="/assets/icons/mail.png" alt="mail icon"/>
                        <p>{t('header.email')}</p>
                    </div>
                    <button className="mobile-quote-btn" onClick={handleGetQuote}>
                        {t('header.getQuote')}
                    </button>
                    
                    {/* Mobile language switcher */}
                    <div className="mobile-language-switcher">
                        <h4>Language / Язык</h4>
                        <div className="mobile-lang-buttons">
                            <button 
                                className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                                onClick={() => changeLanguage('en')}
                            >
                                English
                            </button>
                            <button 
                                className={`mobile-lang-btn ${i18n.language === 'ru' ? 'active' : ''}`}
                                onClick={() => changeLanguage('ru')}
                            >
                                Русский
                            </button>
                        </div>
                    </div>
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