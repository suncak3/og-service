import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          HOME
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
          ABOUT
        </NavLink>
        <NavLink to="/products" className={({ isActive, isPending }) => 
          isActive || isPending ? "active" : ""
        }>
          PRODUCTS
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
          CONTACT US
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;