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
// Note: Replace these with your actual image paths
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
        <h2>Process Filters</h2>
        <p>
          OG Services provides process filtration solutions for gases and liquids wherever
          they come into contact with the process during manufacturing, whether it be for
          chemical, biological, pharmaceutical, electronics, food & beverage, paint, packaging,
          air gas or high pressure water injection filtration applications.
        </p>
        <p>
          Where quality requirements are exceptionally high OG Services has a selection of
          process filters and housings which will enable you to reach maximum purity standards.
          OG Services' process filtration systems are used daily in some of the most arduous
          conditions...
        </p>
        <ul>
          <li>Drilling Platforms...</li>
          <li>Petrochemical Industry...</li>
          <li>Electronics...</li>
          <li>General Industry...</li>
        </ul>
        <p>
          Our proposals can include CAD drawings, projected future running costs and
          dedicated stock holding of replacement elements. OG Services' Technical
          department are available on a 24 hour basis to discuss your process issues and offer
          cost effective solutions regardless of the scenario.
        </p>
        <ul>
          <li>Replacement Elements & Housings Technical Advice</li>
          <li>System Design</li>
        </ul>
      </>
    ),
    hvac: (
      <>
        <h2>HVAC Filtration</h2>
        <p>
          Our product scope is broad: from high-efficiency air filters, to dust collectors, to gas turbine filtration systems. We offer the most advanced technology and skilled application expertise for cleaning air in facilities and processes as diverse as homes, hospitals, industrial plants, commercial buildings, schools, mailrooms and nuclear reactors, as well as gas turbine and diesel engines.
        </p>
        <p>
          The most common use of air filter products is for commercial, institutional and industrial applications, installed in the Heating Ventilation and Air Conditioning (HVAC) systems. Coarse filters may be used both as primary air filters to protect HVAC components (coils, fans, duct work) from unnecessary dust build-up or to protect more expensive secondary air filters from premature dust loading and replacement. Pocket filters are used as standard equipment for air handling units in HVAC systems. These filters are classified within the range from F5 up to F9. Due to their robust pocket design they are particularly suited for difficult operating conditions.  
        </p>      
        <p>
          High Performance Air Filtration: Air intake systems for gas turbines, high performance compressors and diesels comprising filtration, cooling and sound attenuation are completed with exhaust gas silencing and acoustic enclosures, providing a complete system for the user, OEM or packager. OG Services has total system product capabilities, combined with state-of-the-art engineering
        </p>
      </>
    ),
    compressed: (
      <>
        <h2>Compressed Air Filtration</h2>
        <p>Compressed air filters for all applications</p>
        <ul>
          <li>FRL's, filters, regulators, lubricators, combinations & modular</li>
          <li>Compressor intake filters</li>
          <li>Coalescing filters, oil removal, water removal</li>
          <li>Carbon adsorber filters, odor removal</li>
          <li>Particulate removal filters</li>
          <li>Combination particulate and coalescing models</li>
          <li>ASME large capacity models available with flows to 25000 scfm</li>
          <li>Stainless steel filters available</li>
          <li>High pressure models to 5000 psig available.</li>
          <li>Low pressure drop models.</li>
          <li>Accessories for all models available, delta P gauges, indicators, internal drains and external drains.</li>
          <li>Intake Filters and Intake Filter Silencers</li>
        </ul>
      </>
    ),
    hydraulic: (
      <>
        <h2>Hydraulic Filtration</h2>
        <p>
          Contamination is the number one cause of failure in hydraulic and lubrication systems.
          Failures can cause downtime, component and fluid replacement, as well as higher
          maintenance charges. OG Services will provide positive protection against
          contamination, giving you predictable reliability for your hydraulic systems and it's
          components.
        </p>
        <p>
          OG Services will provide you with a cost effective solution to resolve every
          possible scenario
        </p>
        <ul>
          <li>Replacement Elements</li>
          <li>System Design</li>
          <li>Upgrade & Redesign</li>
          <li>Problem Solving</li>
          <li>Offline Filtration Systems</li>
          <li>Oil Sampling & Analysis</li>
          <li>High Pressure Stainless Steel Housings</li>
          <li>OEM Spares</li>
        </ul>
        <p>OG Services The Complete Hydraulic Filtration Service</p>
      </>
    ),
    dryers: (
      <>
        <h2>Filter Dryers</h2>
        <p>
          The air delivered from a modern day compressor can contain... Water... Vapour... Oil &
          various other contaminants. OG Services will provide you with the Air Dryer to
          maximise the compressed air generated and provide additional protection to your
          process.
        </p>
        <ul>
          <li>Provide clean dry compressed air to process instrumentation</li>
          <li>Offer dewpoints to -40°F (-40°C)</li>
          <li>Membrane Air Dryers offer dewpoints to 35°F (2°C) with unique energy saving technology</li>
          <li>Unattended 24 hour operation</li>
          <li>Explosion-proof and require no electricity</li>
          <li>Easy to operate and maintain</li>
          <li>Silent operation</li>
          <li>Lightweight and compact</li>
        </ul>
        <p>Elements & Housings Available From Stock</p>
      </>
    ),
    air: (
      <>
        <h2>Air Filtration (Engine)</h2>
        <p>
          The Air Filter element establishes a barrier for the separation of airborne contaminants,
          allowing only clean air to enter the engine. Air filter elements fall into four broad
          categories:
        </p>
        <ul>
          <li>Automotive. Both round and panel designs, with moulded ends.</li>
          <li>Heavy-Duty Primary. Usually with metal ends, available in both PA (standard) and LL (long-life) models.</li>
          <li>Heavy-Duty Secondary. Used to seal out dirt while the primary filter is being changed.</li>
          <li>Radial Seal. With moulded ends and a reinforced closed end - characterised by ease of service.</li>
        </ul>
        <p>
          Air is necessary for successful combustion in your engine. In fact, for efficient
          combustion, a modern diesel engine requires several thousand times as much air as it
          does fuel. Clean air - air almost 100% pure - is critical to engine survival and vital to its
          performance. OG Services will provide you with a single source solution for all
          your air filtration requirements... Replacement Elements... Housings... OE Spares...
        </p>
        <p>
          ~ OG Services have one of the largest and diverse ranges of air filtration
          available from stock in Kazakhstan ~
        </p>
      </>
    ),
    hydrocarbon: (
      <>
        <h2>Hydrocarbon Filtration</h2>
        <p>
          OG Services provides comprehensive hydrocarbon filtration solutions designed for the oil and gas industry. Our high-quality filters effectively remove contaminants from various hydrocarbon streams, ensuring product purity and equipment protection.
        </p>
        <p>
          Our range includes coalescing filters, particulate filters, and specialized solutions for different hydrocarbon applications, all engineered to improve process efficiency while maintaining product quality.
        </p>
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
                        <p>
                          OG Services offers high-quality {productCategories.find(cat => cat.id === activeProductType)?.name.toLowerCase()} 
                          solutions for various industrial applications. Our products meet the highest 
                          quality standards and are sourced from leading manufacturers in the industry.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <h2>OG Services Industrial Filtration</h2>
                    <p>
                      OG Services is a globally recognized company serving the industrial filtration,
                      separation and purification needs of companies globally. Established in 2005, OG Services
                      supplies a wide range of products and services to industries such as: Power Generation,
                      Marine and Offshore, Food and Beverage, Potable Water and Industrial Manufacturing
                      sectors. Our products are used to efficiently remove particulate and solid contaminates
                      from a range of gases and fluids.
                    </p>
                    <p>
                      OG Services is headquartered in Astana, Kazakhstan and has over ninety
                      warehouse facilities throughout the world.
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