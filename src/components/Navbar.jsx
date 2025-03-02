import { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li className="nav-item">
                    <a href="#">HOME</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="#">ABOUT</a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Certifications</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a href="#">PRODUCTS</a>
                    <ul className="dropdown-menu">
                        <div className="dropdown-column">
                            <h4>FILTERS</h4>
                            <ul>
                                <li><a href="#">PALL</a></li>
                                <li><a href="#">Camfil</a></li>
                                <li><a href="#">AF Pro</a></li>
                                <li><a href="#">Purafil</a></li>
                                <li><a href="#">Dinbro</a></li>
                                <li><a href="#">Jasun</a></li>
                            </ul>
                        </div>
                        <div className="dropdown-column">
                            <h4>BELTS</h4>
                            <ul>
                                <li><a href="#">Gates</a></li>
                                <li><a href="#">Continental (Contitech)</a></li>
                                <li><a href="#">Optibelt</a></li>
                                <li><a href="#">Dunham Bush</a></li>
                            </ul>
                        </div>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#">CONTACT US</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
