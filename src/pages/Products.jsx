import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Products.css";

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

import eaton from "../assets/logos/eaton.png"; // Placeholder
import manuli from "../assets/logos/manuli.png"; // Placeholder
import swagelok from "../assets/logos/swagelok.jpg"; // Placeholder
import tenaris from "../assets/logos/tenaris.png"; // Placeholder
import vallourec from "../assets/logos/vallourec.jpg"; // Placeholder
import georgfischer from "../assets/logos/georg.png"; // Placeholder
import victaulic from "../assets/logos/victaulic.png"; // Placeholder
import viega from "../assets/logos/viega.png"; // Placeholder
import tmk from "../assets/logos/tmk.png"; // Placeholder
import electrosteel from "../assets/logos/ELECTCAST.png"; // Placeholder
import hebei from "../assets/logos/hh.jpg"; // Placeholder
import elite from "../assets/logos/elite.png"; // Placeholder
import cangzhou from "../assets/logos/continental.png"; // Placeholder
import sandvik from "../assets/logos/sandvik.png"; // Placeholder
import kennametal from "../assets/logos/Kennametal.png"; // Placeholder
import enerpac from "../assets/logos/enerpac.png"; // Placeholder
import snapon from "../assets/logos/Snap-on.png"; // Placeholder
import knipex from "../assets/logos/Knipex.png"; // Placeholder
import atlascopco from "../assets/logos/atlas.png"; // Placeholder
import bahco from "../assets/logos/bahco.png"; // Placeholder
import herrenknecht from "../assets/logos/herrenknecht.png"; // Placeholder
import wera from "../assets/logos/wera.png"; // Placeholder
import ridgid from "../assets/logos/ridgid.png"; // Placeholder
import norbar from "../assets/logos/norbar.png"; // Placeholder
import schneider from "../assets/logos/schneider.png"; // Placeholder
import abb from "../assets/logos/abb.png"; // Placeholder
import siemens from "../assets/logos/siemens.png"; // Placeholder
import legrand from "../assets/logos/legrand.png"; // Placeholder
import honeywell from "../assets/logos/Honeywell.png"; // Placeholder
import weg from "../assets/logos/weg.png"; // Placeholder
import ingersollrand from "../assets/logos/Ingersoll.png"; // Placeholder
import sullair from "../assets/logos/sullair.svg"; // Placeholder
import kaeser from "../assets/logos/kaeser.png"; // Placeholder
import neuman from "../assets/logos/nea.png"; // Placeholder
import bauer from "../assets/logos/bauer.png"; // Placeholder
import emerson from "../assets/logos/HIGGINS_AND_HEWINS.png"; // Placeholder
import flowserve from "../assets/logos/hochiki.png"; // Placeholder
import parkerhannifin from "../assets/logos/purafil.png"; // Placeholder
import imi from "../assets/logos/indufil.png"; // Placeholder
import samson from "../assets/logos/dingbro.png"; // Placeholder

import filtersImage from "../assets/images/filters.png";
import beltsImage from "../assets/images/drive-belts.png";
import parts from "../assets/images/Parts-removebg-preview.png";
import fittings from "../assets/images/fittings-removebg-preview.png";
import tools from "../assets/images/tools-bg.png";
import electrical from "../assets/images/electrical-removebg-preview.png";
import equipment from "../assets/images/equipment.webp";
import valves from "../assets/images/valves.png";

const Products = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProductType, setActiveProductType] = useState(null);
  
  // Set initial category based on URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const productType = params.get('type');
    
    if (categoryParam && ["filters", "belts", "spare-parts", "piping", "tools", "electrical", "equipment", "valves"].includes(categoryParam)) {
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
  
  // Product categories and their brands
  const categories = [
    {
      id: "filters",
      name: "Filters",
      image: filtersImage,
      description: "Advanced filtration solutions for industrial and commercial applications. Our comprehensive range includes process filtration, HVAC, compressed air, hydrocarbon, hydraulic, and engine air filtration systems.",
      brands: [
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
      ]
    },
    {
      id: "belts",
      name: "Belts",
      image: beltsImage,
      description: "Premium quality power transmission belts for industrial applications. Our belt solutions provide optimal performance, durability, and efficiency for diverse mechanical drive systems.",
      brands: [
        { id: "gates", name: "Gates", logo: gates },
        { id: "continental", name: "Continental (Contitech)", logo: continental },
        { id: "optibelt", name: "Optibelt", logo: optibelt },
        { id: "dunham", name: "Dunham Bush", logo: dunham }
      ]
    },
    {
      id: "spare-parts",
      name: "Spare Parts & Components",
      image: parts,
      description: "Essential spare parts and components including bearings, hoses, sleeves, fittings, fasteners, and general consumables for industrial equipment maintenance and repair.",
      brands: [
        { id: "parker", name: "Parker", logo: parker },
        { id: "eaton", name: "Eaton", logo: eaton },
        { id: "manuli", name: "Manuli Hydraulics", logo: manuli },
        { id: "swagelok", name: "Swagelok", logo: swagelok },
        { id: "fleetguard", name: "Fleetguard", logo: fleetguard },
        { id: "gates", name: "Gates", logo: gates }
      ]
    },
    {
      id: "piping",
      name: "Piping, Flanges & Fittings",
      image: fittings,
      description: "Comprehensive range of piping solutions including carbon/stainless steel pipes, alloy pipes, PVC, HDPE, flanges, blinds, and fittings for various industrial applications.",
      brands: [
        { id: "tenaris", name: "Tenaris", logo: tenaris },
        { id: "vallourec", name: "Vallourec", logo: vallourec },
        { id: "georgfischer", name: "Georg Fischer", logo: georgfischer },
        { id: "victaulic", name: "Victaulic", logo: victaulic },
        { id: "viega", name: "Viega", logo: viega },
        { id: "tmk", name: "TMK", logo: tmk },
        { id: "electrosteel", name: "Electrosteel Castings", logo: electrosteel },
        { id: "hebei", name: "Hebei Haihao Group", logo: hebei },
        { id: "elite", name: "Elite Piping", logo: elite },
        { id: "cangzhou", name: "Cangzhou PengTong", logo: cangzhou }
      ]
    },
    {
      id: "tools",
      name: "Hand & Specialized Tools",
      image: tools,
      description: "Professional-grade hand and specialized tools including pipe benders & threaders, flange alignment tools, torque wrenches & multipliers, valve turners, pump maintenance tools, welding & cutting tools, and pressure testers & inspection tools.",
      brands: [
        { id: "sandvik", name: "Sandvik", logo: sandvik },
        { id: "kennametal", name: "Kennametal", logo: kennametal },
        { id: "enerpac", name: "Enerpac", logo: enerpac },
        { id: "snapon", name: "Snap-on", logo: snapon },
        { id: "knipex", name: "Knipex", logo: knipex },
        { id: "atlascopco", name: "Atlas Copco", logo: atlascopco },
        { id: "bahco", name: "Bahco", logo: bahco },
        { id: "herrenknecht", name: "Herrenknecht", logo: herrenknecht },
        { id: "wera", name: "Wera Tools", logo: wera },
        { id: "ridgid", name: "Ridgid", logo: ridgid },
        { id: "norbar", name: "Norbar", logo: norbar }
      ]
    },
    {
      id: "electrical",
      name: "Electrical Equipment",
      image: electrical,
      description: "High-quality electrical equipment including electric motors, transformers, distribution boards, uninterruptible power supplies (UPS), power and control cables, voltage stabilizers, and more for industrial applications.",
      brands: [
        { id: "schneider", name: "Schneider Electric", logo: schneider },
        { id: "abb", name: "ABB", logo: abb },
        { id: "siemens", name: "Siemens", logo: siemens },
        { id: "legrand", name: "Legrand", logo: legrand },
        { id: "honeywell", name: "Honeywell", logo: honeywell },
        { id: "weg", name: "WEG Industries", logo: weg }
      ]
    },
    {
      id: "equipment",
      name: "Processing Equipment",
      image: equipment,
      description: "Standalone processing equipment including milling machines, filtration units, mixing equipment, separation equipment, crushing and grinding equipment, pumps and pumping systems, boilers, expansion tanks, measurement and monitoring equipment, and welding and cutting equipment.",
      brands: [
        { id: "atlascopco", name: "Atlas Copco", logo: atlascopco },
        { id: "ingersollrand", name: "Ingersoll Rand", logo: ingersollrand },
        { id: "sullair", name: "Sullair", logo: sullair },
        { id: "kaeser", name: "Kaeser Compressors", logo: kaeser },
        { id: "neuman", name: "Neuman & Esser", logo: neuman },
        { id: "bauer", name: "Bauer Kompressoren", logo: bauer }
      ]
    },
    {
      id: "valves",
      name: "Valves",
      image: valves,
      description: "Comprehensive valve solutions including gate valves, globe valves, ball valves, butterfly valves, check valves, plug valves, needle valves, pressure relief valves, control valves, safety valves, diaphragm valves, and pinch valves for various industrial applications.",
      brands: [
        { id: "emerson", name: "Emerson Electric (Fisher)", logo: emerson },
        { id: "flowserve", name: "Flowserve Corporation", logo: flowserve },
        { id: "parkerhannifin", name: "Parker Hannifin", logo: parkerhannifin },
        { id: "imi", name: "IMI plc", logo: imi },
        { id: "samson", name: "SAMSON AG", logo: samson }
      ]
    }
  ];
  
  // Find active category
  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0];
  
  // Filter product types based on active category
  const filteredProductTypes = activeCategory === 'filters' ? [
    { id: "process", name: "Process Filtration" },
    { id: "hvac", name: "HVAC Filtration" },
    { id: "compressed", name: "Compressed Air Filtration" },
    { id: "hydrocarbon", name: "Hydrocarbon Filtration" },
    { id: "hydraulic", name: "Hydraulic Filtration" },
    { id: "dryers", name: "Filter Dryers" },
    { id: "air", name: "Air Filtration" }
  ] : [];
  
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
  
  // Get proper title for hero section
  const getHeroTitle = () => {
    if (activeCategory === "all") return "Our Products";
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? category.name : "Our Products";
  };
  
  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>{getHeroTitle()}</h1>
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
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Product Layout */}
          <div className="products-layout">
            {/* Left Sidebar with Main Categories and Images */}
            <div className="products-sidebar left-sidebar">
              <ul className="category-menu">
                {categories.map(category => (
                  <li key={category.id} className={activeCategory === category.id ? "active" : ""}>
                    <Link 
                      to={`/products?category=${category.id}`} 
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      <div className="category-image-wrapper">
                        <img src={category.image} alt={category.name} />
                        <span className="category-label">{category.name}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Center Content */}
            <div className="products-content">
              <div className="company-description">
                {activeProductType ? (
                  <div className="product-type-description">
                    {productTypeDescriptions[activeProductType] || (
                      <div>
                        <h2>{filteredProductTypes.find(type => type.id === activeProductType)?.name}</h2>
                        <div className="highlight-box">
                          <p>Engineered Solutions for Demanding Applications</p>
                        </div>
                        <p>
                          Our {filteredProductTypes.find(type => type.id === activeProductType)?.name.toLowerCase()} 
                          systems combine innovative design with premium materials to deliver exceptional 
                          performance in challenging industrial environments. Each product undergoes 
                          rigorous testing to ensure reliability and durability when it matters most.
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <h2>
                      {activeCategory === "all" 
                        ? "OG Services Industrial Solutions" 
                        : activeData.name}
                    </h2>
                    <div className="highlight-box">
                      <p>
                        {activeCategory === "all" 
                          ? "Comprehensive Industrial Solutions Since 2005"
                          : `Premium Quality ${activeData.name} for Industrial Applications`}
                      </p>
                    </div>
                    <p>
                      {activeCategory === "all" 
                        ? "At OG Services, we specialize in providing a comprehensive range of industrial products and solutions to meet the diverse needs of our clients across Kazakhstan, Russia, and Uzbekistan. Our expertise spans across multiple industries including energy production, marine applications, food processing, manufacturing, and infrastructure development."
                        : activeData.description}
                    </p>
                    {activeCategory === "all" && (
                      <p>
                        Through partnerships with leading global manufacturers, we deliver premium-quality products that improve efficiency, enhance safety, and optimize performance in industrial operations. Our commitment to excellence ensures that our clients receive the best solutions tailored to their specific requirements.
                      </p>
                    )}
                    <p className="company-fact">
                      <strong>Headquartered in Astana, Kazakhstan with 4 strategic warehouse facilities nationwide</strong>
                    </p>
                  </>
                )}
              </div>
              
              {/* Brands Display - Always visible */}
              <div className="brands-showcase">
                {activeCategory === "all" ? (
                  // Show a selection of brands when "All Products" is selected
                  <div className="brand-category">
                    <h3 className="brand-category-heading">Featured Brands</h3>
                    <div className="brands-logo-grid">
                      {[
                        { id: "pall", name: "PALL", logo: pall },
                        { id: "camfil", name: "Camfil", logo: camfil },
                        { id: "fleetguard", name: "Fleetguard", logo: fleetguard },
                        { id: "gates", name: "Gates", logo: gates },
                        { id: "schneider", name: "Schneider Electric", logo: schneider },
                        { id: "atlascopco", name: "Atlas Copco", logo: atlascopco },
                        { id: "emerson", name: "Emerson Electric", logo: emerson },
                        { id: "sandvik", name: "Sandvik", logo: sandvik },
                        { id: "victaulic", name: "Victaulic", logo: victaulic }
                      ].map(brand => (
                        <div key={brand.id} className="brand-logo-card">
                          <img src={brand.logo} alt={brand.name} />
                          <span className="brand-name">{brand.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Show specific category brands
                  <div className="brand-category">
                    <h3 className="brand-category-heading">{activeData.name} Brands</h3>
                    <div className="brands-logo-grid">
                      {activeData.brands.map(brand => (
                        <div key={brand.id} className="brand-logo-card">
                          <img src={brand.logo} alt={brand.name} />
                          <span className="brand-name">{brand.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Sidebar with Product Categories */}
            {filteredProductTypes.length > 0 && (
              <div className="products-sidebar right-sidebar">
                <h3>Products</h3>
                <ul className="product-types-menu">
                  {filteredProductTypes.map(type => (
                    <li key={type.id} className={activeProductType === type.id ? 'active' : ''}>
                      <a 
                        href={`/products?category=${activeCategory}&type=${type.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleProductTypeChange(type.id);
                        }}
                      >
                        {type.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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