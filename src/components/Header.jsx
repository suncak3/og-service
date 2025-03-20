import "../styles/Header.css";
import Navbar from "./Navbar.jsx";

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-contact">
                    <div><img src="/assets/icons/phone.png"/> +7 777 777 77 77</div>
                    <div><img src="/assets/icons/clock.png"/>Mon - Fri 09:00 - 17:00</div>
                    <div><img src="/assets/icons/location.png"/> Astana, st. Konaeva 33, office 303</div>
                </div>
                <div><img src="/assets/icons/mail.png"/></div>
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
                    <div>
                        <p>Address</p>
                        <p>Astana, st. Konaeva 33, office 303</p>
                    </div>
                    <div>
                        <p>Call us</p>
                        <p>+7 777 777 77 77</p>
                    </div>
                </div>

                <button className="header-button">GET QUOTE</button>
            </div>

            <Navbar />
        </header>
    );
};

export default Header;
