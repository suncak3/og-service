import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Products.css";

// Logo imports
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
import gates from "../assets/logos/gates.png";
import continental from "../assets/logos/continental.png";
import optibelt from "../assets/logos/optibelt.png";
import dunham from "../assets/logos/dunham.png";

// Import category images
import filtersImage from "../assets/images/filters.png";
import beltsImage from "../assets/images/drive-belts.png";

const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProductType, setActiveProductType] = useState(null);
  
  // Set initial category based on URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const productType = params.get('type');
    
    if (categoryParam && ["filters", "belts"].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
    
    if (productType) {
      setActiveProductType(productType);
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
  
  // Filter brands data
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
  
  // Belt brands data
  const beltBrands = [
    { id: "gates", name: "Gates", logo: gates },
    { id: "continental", name: "Continental (Contitech)", logo: continental },
    { id: "optibelt", name: "Optibelt", logo: optibelt },
    { id: "dunham", name: "Dunham Bush", logo: dunham }
  ];
  
  // Product categories
  const productCategories = [
    { id: "process", name: "Process Filtration" },
    { id: "hvac", name: "HVAC Filtration" },
    { id: "compressed", name: "Compressed Air Filtration" },
    { id: "hydrocarbon", name: "Hydrocarbon Filtration" },
    { id: "hydraulic", name: "Hydraulic Filtration" },
    { id: "dryers", name: "Filter Dryers" },
    { id: "air", name: "Air Filtration" }
  ];
  
  // Product type descriptions
  const productTypeDescriptions = {
    process: (
      <>
        <h2>Process Filtration</h2>
        <div className="highlight-box">
          <p>Industry-Leading Technology for Liquid & Gas Applications</p>
        </div>
        
        <p>
          OG Services delivers process filtration solutions that maintain efficiency even in extreme conditions.
          Our systems are designed for pharmaceutical purity to industrial ruggedness, ensuring consistent performance
          when you need it most.
        </p>
        
        <div className="two-columns">
          <div>
            <h4>Industries We Serve:</h4>
            <ul>
              <li>Offshore & Marine</li>
              <li>Chemical Processing</li>
              <li>Food & Beverage Production</li>
            </ul>
          </div>
          <div>
            <h4>Key Capabilities:</h4>
            <ul>
              <li>Custom Engineering Services</li>
              <li>Performance Cost Analysis</li>
              <li>Inventory Management</li>
              <li>24/7 Technical Support</li>
            </ul>
          </div>
        </div>
      </>
    ),
    hvac: (
      <>
        <h2>HVAC Filtration</h2>
        <div className="highlight-box">
          <p>Creating Healthier Indoor Environments Through Advanced Air Purification</p>
        </div>
        
        <p>
          Our HVAC filtration solutions combine innovative design with premium materials, 
          delivering exceptional air quality in facilities ranging from office buildings to critical care environments.
        </p>
        
        <h4>Performance Categories:</h4>
        <ul>
          <li><strong>Primary Filtration:</strong> Coarse particle capture for equipment protection and pre-filtering</li>
          <li><strong>Secondary Systems:</strong> F5-F9 rated pocket filters with extended service intervals</li>
          <li><strong>High-Performance:</strong> Complete turbine intake systems with acoustic treatment</li>
        </ul>
        
        <p>
          <strong>Engineering Excellence:</strong> Our systems integrate filtration, cooling, and sound management 
          technologies, creating complete solutions for demanding industrial applications.
        </p>
      </>
    ),
    compressed: (
      <>
        <h2>Compressed Air Filtration</h2>
        <div className="highlight-box">
          <p>Pure Air Solutions for Critical Industrial Processes</p>
        </div>
        
        <div className="two-columns">
          <div>
            <h4>Protection Technologies</h4>
            <ul>
              <li>Complete FRL assemblies with modular configuration</li>
              <li>Advanced coalescing for moisture & oil removal</li>
              <li>Precision particulate filtration systems</li>
              <li>Carbon adsorption for vapor & odor elimination</li>
            </ul>
          </div>
          
          <div>
            <h4>Performance Specifications</h4>
            <ul>
              <li>ASME-certified for flows up to 25,000 scfm</li>
              <li>Energy-optimized low pressure drop designs</li>
              <li>High-pressure rated systems (5,000 psig)</li>
              <li>Stainless construction for corrosive environments</li>
            </ul>
          </div>
        </div>
      </>
    ),
    hydraulic: (
      <>
        <h2>Hydraulic Filtration</h2>
        <div className="highlight-box">
          <p>Protect, Extend, Perform: The Power of Clean Hydraulic Systems</p>
        </div>
        
        <p>
          Contamination is the primary enemy of hydraulic system performance. Our advanced filtration solutions 
          protect your equipment investment, minimize downtime, and extend fluid life through strategic 
          contaminant control.
        </p>
        
        <div className="two-columns">
          <div>
            <h4>System Protection</h4>
            <ul>
              <li>Premium replacement elements</li>
              <li>Stainless pressure housings</li>
              <li>OEM-compatible components</li>
            </ul>
          </div>
          
          <div>
            <h4>Performance Enhancement</h4>
            <ul>
              <li>System redesign & upgrades</li>
              <li>Offline filtration units</li>
              <li>Oil sampling & testing</li>
            </ul>
          </div>
        </div>
        
        <p><strong>OG Services:</strong> Your complete hydraulic filtration partner from component supply 
           to system design and fluid management.</p>
      </>
    ),
    dryers: (
      <>
        <h2>Compressed Air Dryers</h2>
        <div className="highlight-box">
          <p>Moisture-Free Air for Critical Applications</p>
        </div>
        
        <p>
          Moisture in compressed air systems leads to corrosion, equipment failure, and product contamination. 
          Our specialized drying systems eliminate these risks, delivering consistently dry air that meets 
          your most demanding specifications.
        </p>
        
        <div className="two-columns">
          <div>
            <h4>Performance Features</h4>
            <ul>
              <li>Ultra-low dew points (-40°F/-40°C)</li>
              <li>Energy-efficient membrane technology</li>
              <li>Continuous unattended operation</li>
              <li>Explosion-proof options available</li>
            </ul>
          </div>
          
          <div>
            <h4>Design Advantages</h4>
            <ul>
              <li>Minimal maintenance requirements</li>
              <li>Silent operational profile</li>
              <li>Compact, space-saving form factor</li>
              <li>Rapid element replacement</li>
            </ul>
          </div>
        </div>
      </>
    ),
    air: (
      <>
        <h2>Engine Air Filtration</h2>
        <div className="highlight-box">
          <p>The First Line of Defense for Your Engine Investment</p>
        </div>
        
        <p>
          In modern diesel engines, air purity directly impacts performance, fuel efficiency, and service life. 
          Our engineered filtration solutions provide superior protection against the particles and contaminants 
          that cause premature wear and reduced performance.
        </p>
        
        <h4>Filter Technologies:</h4>
        <ul>
          <li><strong>Automotive Series:</strong> Round and panel designs with precision-molded end caps</li>
          <li><strong>Heavy-Duty Primary:</strong> Metal-capped elements in standard and extended life configurations</li>
          <li><strong>Safety Elements:</strong> Secondary filters providing protection during maintenance</li>
          <li><strong>Radial Seal Technology:</strong> Advanced designs with reinforced ends for simplified service</li>
        </ul>
        
        <p>
          <strong>Kazakhstan's Premier Source:</strong> OG Services maintains the region's most 
          comprehensive engine filtration inventory, ensuring immediate availability of critical components.
        </p>
      </>
    ),
    hydrocarbon: (
      <>
        <h2>Hydrocarbon Filtration</h2>
        <div className="highlight-box">
          <p>Precision Filtration for Oil, Gas, and Petrochemical Applications</p>
        </div>
        
        <p>
          In hydrocarbon processing, contaminant control directly impacts product quality, equipment longevity, 
          and operational safety. Our specialized solutions address the unique challenges of petroleum-based 
          media through targeted filtration technologies.
        </p>
        
        <h4>Industry Applications:</h4>
        <ul>
          <li><strong>Upstream:</strong> Wellhead protection, production separation, and injection system filtration</li>
          <li><strong>Midstream:</strong> Pipeline transfer, compression systems, and terminal operations</li>
          <li><strong>Downstream:</strong> Refinery processes, product polishing, and distribution systems</li>
        </ul>
      </>
    )
  };
  
  // Main product categories visibility
  const showFilterBrands = activeCategory === "filters" || activeCategory === "all";
  const showBeltBrands = activeCategory === "belts" || activeCategory === "all";
  
  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveProductType(null);
    window.history.pushState({}, '', `/products?category=${category}`);
  };
  
  // Handle product type change
  const handleProductTypeChange = (type) => {
    setActiveProductType(type);
    window.history.pushState({}, '', `/products?category=${activeCategory}&type=${type}`);
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
          
          {/* New Three-Column Layout */}
          <div className="products-layout">
            {/* Left Sidebar with Main Categories and Images */}
            <div className="products-sidebar left-sidebar">
              <ul className="category-menu">
                <li className={activeCategory === "filters" ? "active" : ""}>
                  <Link to="/products?category=filters" onClick={() => handleCategoryChange("filters")}>
                    <div className="category-image-wrapper">
                      <img src={filtersImage} alt="Filters" />
                      <span className="category-label">Industrial Filtration</span>
                    </div>
                  </Link>
                </li>
                <li className={activeCategory === "belts" ? "active" : ""}>
                  <Link to="/products?category=belts" onClick={() => handleCategoryChange("belts")}>
                    <div className="category-image-wrapper">
                      <img src={beltsImage} alt="Belts" />
                      <span className="category-label">Drive Belts</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Center Content */}
            <div className="products-content">
              <div className="company-description">
                {activeProductType ? (
                  <div className="product-type-description">
                    {productTypeDescriptions[activeProductType] || (
                      <div>
                        <h2>{productCategories.find(cat => cat.id === activeProductType)?.name}</h2>
                        <div className="highlight-box">
                          <p>Engineered Solutions for Demanding Applications</p>
                        </div>
                        <p>
                          Our {productCategories.find(cat => cat.id === activeProductType)?.name.toLowerCase()} 
                          systems combine innovative design with premium materials to deliver exceptional 
                          performance in challenging industrial environments. Each product undergoes 
                          rigorous testing to ensure reliability and durability when it matters most.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <h2>OG Services Industrial Filtration</h2>
                    <div className="highlight-box">
                      <p>Industry Leaders in Filtration Technology Since 2005</p>
                    </div>
                    <p>
                      At OG Services, we specialize in advanced separation and purification technologies 
                      that solve complex contamination challenges across multiple industries. Our expertise 
                      spans energy production, marine applications, food processing, municipal water treatment, 
                      and precision manufacturing processes.
                    </p>
                    <p>
                      Through innovative engineering and premium-quality components, we deliver systems 
                      that effectively capture particulates and remove contaminants from both gas and 
                      liquid process streams, improving efficiency and protecting valuable equipment.
                    </p>
                    <p className="company-fact">
                      <strong>Headquartered in Astana, Kazakhstan with 4 strategic warehouse facilities nationwide</strong>
                    </p>
                  </>
                )}
              </div>
              
              {/* Brands Display - Always visible */}
              {(showFilterBrands || showBeltBrands) && (
                <div className="brands-showcase">
                  {showFilterBrands && (
                    <div className="brand-category">
                      <h3 className="brand-category-heading">Filter Brands</h3>
                      <div className="brands-logo-grid">
                        {filterBrands.map(brand => (
                          <div key={brand.id} className="brand-logo-card">
                            <img src={brand.logo} alt={brand.name} />
                            <span className="brand-name">{brand.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {showBeltBrands && (
                    <div className="brand-category">
                      <h3 className="brand-category-heading">Belt Brands</h3>
                      <div className="brands-logo-grid">
                        {beltBrands.map(brand => (
                          <div key={brand.id} className="brand-logo-card">
                            <img src={brand.logo} alt={brand.name} />
                            <span className="brand-name">{brand.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Right Sidebar with Product Categories */}
            <div className="products-sidebar right-sidebar">
              <h3>Products</h3>
              <ul className="product-types-menu">
                {productCategories.map(category => (
                  <li key={category.id} className={activeProductType === category.id ? 'active' : ''}>
                    <a 
                      href={`/products?category=${activeCategory}&type=${category.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleProductTypeChange(category.id);
                      }}
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
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