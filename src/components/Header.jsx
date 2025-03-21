import "../styles/Header.css";
import Navbar from "./Navbar.jsx";
import {useEffect, useState} from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);
    return (
        <div className="Header">
            <header className="header">
                <div className="header-top">
                    <div className="header-contact">
                        <div><img src="/assets/icons/phone.png"/> +7 777 777 77 77</div>
                        <div className="header-mobile-off"><img src="/assets/icons/clock.png"/>Mon - Fri 09:00 - 17:00
                        </div>
                        <div className="header-mobile-off"><img src="/assets/icons/location.png"/> Astana, st. Konaeva
                            33, office 303
                        </div>
                    </div>
                    <a href="#"><img src="/assets/icons/mail.png"/></a>
                </div>
                <div className="header-main">
                    <div className="header-logo">
                        <p className="logo-text">OG Services</p>
                    </div>

                    <div className="header-info">
                        <div>
                            <p>Email us</p>
                            <p>sales@ogservices.com</p>
                        </div>
                        <div className="header-mobile-off">
                            <p>Address</p>
                            <p>Astana, st. Konaeva 33, office 303</p>
                        </div>
                        <div className="header-mobile-off">
                            <p>Call us</p>
                            <p>+7 777 777 77 77</p>
                        </div>
                    </div>

                    <button className="header-button">GET QUOTE</button>
                </div>
                <Navbar/>
            </header>
            <div className="header-mobile">
                <div className="header-mobile-top">
                    <div className="header-contact">
                        <div><img src="/assets/icons/phone.png"/> +7 777 777 77 77</div>
                        <div><img src="/assets/icons/clock.png"/>Mon - Fri 09:00 - 17:00
                        </div>
                        <br/>
                        <div><img src="/assets/icons/location.png"/> Astana, st. Konaeva
                            33, office 303
                        </div>
                    </div>
                </div>
                <div className="burger-menu-bkg">
                    <div className="burger-menu">
                        <nav>
                            <div className="nav-container">
                                <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
                                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                                    <span className={`bar ${isOpen ? "open" : ""}`}></span>
                                </button>
                            </div>
                        </nav>
                    </div>
                    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                        <ul>
                            <li><a href="#" className="menu-item">Home</a></li>
                            <li><a href="#" className="menu-item">About</a></li>
                            <li><a href="#" className="menu-item">Products</a></li>
                            <li><a href="#" className="menu-item">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="logo_header">
                    <p className="logo-text">OG Services</p>
                    <div className="email-block">
                        <div className="email-title">
                            Email us
                        </div>
                        <div className="email-name">
                            sales@ogservices.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
