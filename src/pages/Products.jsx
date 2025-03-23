import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Products.css";

// Only import the logos you actually have
import pall from "../assets/logos/pall.png";
import camfil from "../assets/logos/camfil.png";
import jasun from "../assets/logos/jasun.png";
import fleetguard from "../assets/logos/fleetguard.png";
import afpro from "../assets/logos/afpro.png";
import HIGGINS_AND_HEWINS from "../assets/logos/HIGGINS_AND_HEWINS.png";
import hochiki from "../assets/logos/hochiki.png";
import purafil from "../assets/logos/purafil.png";
import indufil from "../assets/logos/indufil.png";
import dinbro from "../assets/logos/dingbro.png";
import parker from "../assets/logos/parker.png";

import gates from "../assets/logos/gates.png"
import continental from "../assets/logos/continental.png"
import optibelt from "../assets/logos/optibelt.png"
import dunham from "../assets/logos/dunham.png"


const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Set the initial category based on URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam && ["filters", "belts"].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [location]);
  
  // Scroll animation effect
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
  
  // Filter brands data - complete list from your footer
  const filterBrands = [
    { id: "pall", name: "PALL", logo: pall },
    { id: "fleetguard", name: "Fleetguard", logo: fleetguard },
    { id: "camfil", name: "Camfil", logo: camfil },
    { id: "higgins", name: "HIGGINS AND HEWINS", logo: HIGGINS_AND_HEWINS },
    { id: "afpro", name: "AF Pro", logo: afpro },
    { id: "hochiki", name: "Hochiki", logo: hochiki },
    { id: "purafil", name: "Purafil", logo: purafil },
    { id: "indufil", name: "Indufil", logo: indufil },
    { id: "dinbro", name: "Dinbro", logo: dinbro },
    { id: "parker", name: "Parker", logo: parker },
    { id: "jasun", name: "Jasun", logo: jasun }
  ];
  
  // Belt brands data - complete list from your footer
  const beltBrands = [
    { id: "gates", name: "Gates", logo: gates },
    { id: "continental", name: "Continental (Contitech)", logo: continental },
    { id: "optibelt", name: "Optibelt", logo: optibelt },
    { id: "dunham", name: "Dunham Bush", logo: dunham }
  ];
  
  // Main product categories
  const showFilterBrands = activeCategory === "filters" || activeCategory === "all";
  const showBeltBrands = activeCategory === "belts" || activeCategory === "all";
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    window.history.pushState({}, '', `/products?category=${category}`);
  };
  
  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>
            {activeCategory === "filters" ? "Filters" : 
             activeCategory === "belts" ? "Belts" : 
             "Our Products"}
          </h1>
          <p>Premium Quality Solutions for Industrial Excellence</p>
        </div>
        <div className="hero-pattern"></div>
      </section>
      
      {/* Main Content */}
      <section className="products-main">
        <div className="container">
          {/* Category Tabs */}
          <div className="category-tabs animate-on-scroll">
            <button 
              className={`category-tab ${activeCategory === "all" ? 'active' : ''}`}
              onClick={() => handleCategoryChange("all")}
            >
              All Products
            </button>
            <button 
              className={`category-tab ${activeCategory === "filters" ? 'active' : ''}`}
              onClick={() => handleCategoryChange("filters")}
            >
              Filters
            </button>
            <button 
              className={`category-tab ${activeCategory === "belts" ? 'active' : ''}`}
              onClick={() => handleCategoryChange("belts")}
            >
              Belts
            </button>
          </div>
          
          {/* Filters Brands Section */}
          {showFilterBrands && (
            <section className="brand-category-section animate-on-scroll">
              <h2 className="brand-category-title">Filters Brands</h2>
              
              <div className="brands-grid">
                {filterBrands.map(brand => (
                  <div key={brand.id} className="brand-card">
                    <div className="brand-logo">
                      {brand.logo ? (
                        <img src={brand.logo} alt={brand.name} />
                      ) : (
                        <div className="brand-name-placeholder">{brand.name}</div>
                      )}
                    </div>
                    <div className="brand-info">
                      <h3>{brand.name}</h3>
                      <p>High-quality filtration solutions for industrial applications.</p>
                      <Link to={`/products/filters/${brand.id}`} className="brand-link">
                        View Products
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Belts Brands Section */}
          {showBeltBrands && (
            <section className="brand-category-section animate-on-scroll">
              <h2 className="brand-category-title">Belts Brands</h2>
              
              <div className="brands-grid">
                {beltBrands.map(brand => (
                  <div key={brand.id} className="brand-card">
                    <div className="brand-logo">
                      {brand.logo ? (
                        <img src={brand.logo} alt={brand.name} />
                      ) : (
                        <div className="brand-name-placeholder">{brand.name}</div>
                      )}
                    </div>
                    <div className="brand-info">
                      <h3>{brand.name}</h3>
                      <p>Premium power transmission solutions for industrial applications.</p>
                      <Link to={`/products/belts/${brand.id}`} className="brand-link">
                        View Products
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Featured Products</h2>
          
          <div className="featured-products-grid">
            {/* Featured product cards */}
            <div className="featured-product animate-on-scroll">
              <h3>Emflon® HTPFRW Filter Cartridges</h3>
              <p>Sterilizing grade hydrophobic membrane filters designed for reliable retention of bacteria and high levels of phages in compressed gas and vent applications.</p>
              <Link to="/products/filters/emflon" className="featured-link">Learn More</Link>
            </div>
            
            <div className="featured-product animate-on-scroll">
              <h3>Pall Advanta™ Junior Filter Housings</h3>
              <p>Designed for small to medium volume sanitary applications with four complete series that provide optimal performance for gas and liquid filtration.</p>
              <Link to="/products/filters/advanta" className="featured-link">Learn More</Link>
            </div>
            
            <div className="featured-product animate-on-scroll">
              <h3>Gates PoweRated V-Belts</h3>
              <p>Premium industrial V-belts designed for heavy-duty applications with superior power transmission efficiency and extended service life.</p>
              <Link to="/products/belts/powerrated" className="featured-link">Learn More</Link>
            </div>
            
            <div className="featured-product animate-on-scroll">
              <h3>Continental Contitech Timing Belts</h3>
              <p>Precision engineered timing belts delivering accurate synchronization for critical mechanical systems and industrial applications.</p>
              <Link to="/products/belts/contitech" className="featured-link">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Need Help Finding the Right Product?</h2>
            <p>Our team of experts is ready to assist you with personalized recommendations.</p>
            <Link to="/contact" className="cta-btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;