import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-column">
                    <h3>CONTACT US</h3>
                    <p><strong>Phone:</strong> +7 777 777 77 77</p>
                    <p><strong>Email:</strong> info@og.kz</p>
                    <p><strong>Address:</strong> Astana, st. Konaeva 33, Office 303</p>
                </div>

                <div className="footer-column">
                    <h3>FILTERS</h3>
                    <div className="footer-grid">
                        <div>
                            <p>PALL</p>
                            <p>Camfil</p>
                            <p>AF Pro</p>
                            <p>Purafil</p>
                            <p>Dinbro</p>
                            <p>Jasun</p>
                        </div>
                        <div>
                            <p>Fleetguard</p>
                            <p>HIGGINS AND HEWINS</p>
                            <p>Hochiki</p>
                            <p>Indufil</p>
                            <p>Parker</p>
                        </div>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>BELTS</h3>
                    <p>Gates</p>
                    <p>Continental (Contitech)</p>
                    <p>Optibelt</p>
                    <p>Dunham Bush</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright | OG Services | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
