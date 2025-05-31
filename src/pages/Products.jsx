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

import eaton from "../assets/logos/eaton.png"; 
import manuli from "../assets/logos/manuli.png"; 
import swagelok from "../assets/logos/swagelok.jpg"; 
import tenaris from "../assets/logos/tenaris.png"; 
import vallourec from "../assets/logos/vallourec.jpg"; 
import georgfischer from "../assets/logos/georg.png"; 
import victaulic from "../assets/logos/victaulic.png"; 
import viega from "../assets/logos/viega.png"; 
import tmk from "../assets/logos/tmk.png"; 
import electrosteel from "../assets/logos/ELECTCAST.png"; 
import hebei from "../assets/logos/hh.jpg"; 
import elite from "../assets/logos/elite.png"; 
import cangzhou from "../assets/logos/continental.png"; 
import sandvik from "../assets/logos/sandvik.png"; 
import kennametal from "../assets/logos/Kennametal.png"; 
import enerpac from "../assets/logos/enerpac.png"; 
import snapon from "../assets/logos/Snap-on.png"; 
import knipex from "../assets/logos/Knipex.png"; 
import atlascopco from "../assets/logos/atlas.png"; 
import bahco from "../assets/logos/bahco.png"; 
import herrenknecht from "../assets/logos/herrenknecht.png"; 
import wera from "../assets/logos/wera.png"; 
import ridgid from "../assets/logos/ridgid.png"; 
import norbar from "../assets/logos/norbar.png"; 
import schneider from "../assets/logos/schneider.png"; 
import abb from "../assets/logos/abb.png"; 
import siemens from "../assets/logos/siemens.png"; 
import legrand from "../assets/logos/legrand.png"; 
import honeywell from "../assets/logos/Honeywell.png"; 
import weg from "../assets/logos/weg.png"; 
import ingersollrand from "../assets/logos/Ingersoll.png"; 
import sullair from "../assets/logos/sullair.svg"; 
import kaeser from "../assets/logos/kaeser.png"; 
import neuman from "../assets/logos/nea.png"; 
import bauer from "../assets/logos/bauer.png"; 
import emerson from "../assets/logos/emerson.png"; 
import flowserve from "../assets/logos/flowserve.png"; 
import parkerhannifin from "../assets/logos/parker.png"; 
import imi from "../assets/logos/imi.png"; 
import samson from "../assets/logos/samson.png"; 

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
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    const productType = params.get('type');
    
    if (categoryParam && ["spare-parts", "piping", "tools", "electrical", "equipment", "valves"].includes(categoryParam)) {
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
      id: "spare-parts",
      name: "Spare Parts & Components",
      image: parts,
      description: "Essential spare parts and components including bearings, hoses, sleeves, fittings, fasteners, general consumables, advanced filtration solutions, and premium quality power transmission belts for industrial equipment maintenance and repair.",
      brands: [
        // Original spare parts brands
        { id: "parker", name: "Parker", logo: parker },
        { id: "eaton", name: "Eaton", logo: eaton },
        { id: "manuli", name: "Manuli Hydraulics", logo: manuli },
        { id: "swagelok", name: "Swagelok", logo: swagelok },
        { id: "fleetguard", name: "Fleetguard", logo: fleetguard },
        { id: "gates", name: "Gates", logo: gates },
        // Filter brands moved from filters category
        { id: "pall", name: "PALL", logo: pall },
        { id: "camfil", name: "Camfil", logo: camfil },
        { id: "higgins", name: "HIGGINS AND HEWINS", logo: HIGGINS_AND_HEWINS },
        { id: "afpro", name: "AF Pro", logo: afpro },
        { id: "hochiki", name: "Hochiki", logo: hochiki },
        { id: "purafil", name: "Purafil", logo: purafil },
        { id: "indufil", name: "Indufil", logo: indufil },
        { id: "dinbro", name: "Dinbro", logo: dinbro },
        { id: "jasun", name: "Jasun", logo: jasun },
        // Belt brands moved from belts category
        { id: "continental", name: "Continental (Contitech)", logo: continental },
        { id: "optibelt", name: "Optibelt", logo: optibelt },
        { id: "dunham", name: "Dunham Bush", logo: dunham }
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
  const filteredProductTypes = activeCategory === 'spare-parts' ? [
    { id: "filters", name: "Filtration Solutions" },
    { id: "belts", name: "Power Transmission Belts" },
    { id: "bearings", name: "Bearings & Mechanical Components" },
    { id: "hoses", name: "Hoses & Fluid Transfer" },
    { id: "fasteners", name: "Fasteners & Hardware" },
    { id: "consumables", name: "General Consumables" }
  ] : [];
  
  // Product type descriptions
  const productTypeDescriptions = {
    filters: (
      <>
        <h2>Filtration Solutions</h2>
        <div className="highlight-box">
          <p>Advanced Filtration Systems for Industrial and Commercial Applications</p>
        </div>
        
        <p>
          OG Services delivers comprehensive filtration solutions that maintain efficiency even in extreme conditions.
          Our systems are designed for pharmaceutical purity to industrial ruggedness, ensuring consistent performance
          when you need it most.
        </p>
        
        <div className="two-columns">
          <div>
            <h4>Filtration Categories:</h4>
            <ul>
              <li>Process Filtration Systems</li>
              <li>HVAC Air Filtration</li>
              <li>Compressed Air Filtration</li>
              <li>Hydrocarbon Filtration</li>
              <li>Hydraulic Filtration</li>
              <li>Engine Air Filtration</li>
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
    belts: (
      <>
        <h2>Power Transmission Belts</h2>
        <div className="highlight-box">
          <p>Premium Quality Belts for Industrial Power Transmission</p>
        </div>
        
        <p>
          Our belt solutions provide optimal performance, durability, and efficiency for diverse mechanical drive systems.
          From heavy-duty industrial applications to precision machinery, we offer the right belt technology for your needs.
        </p>
        
        <div className="two-columns">
          <div>
            <h4>Belt Types:</h4>
            <ul>
              <li>V-Belts & Wedge Belts</li>
              <li>Synchronous/Timing Belts</li>
              <li>Flat Belts & Conveyor Belts</li>
              <li>Variable Speed Belts</li>
            </ul>
          </div>
          <div>
            <h4>Applications:</h4>
            <ul>
              <li>Industrial Machinery</li>
              <li>HVAC Systems</li>
              <li>Automotive Applications</li>
              <li>Agricultural Equipment</li>
            </ul>
          </div>
        </div>
      </>
    ),
    bearings: (
      <>
        <h2>Bearings & Mechanical Components</h2>
        <div className="highlight-box">
          <p>Precision Bearings for Reliable Operation</p>
        </div>
        
        <p>
          High-quality bearings and mechanical components essential for smooth operation and extended equipment life.
          Our comprehensive range covers various applications from light-duty to heavy industrial use.
        </p>
        
        <h4>Product Range:</h4>
        <ul>
          <li>Ball Bearings & Roller Bearings</li>
          <li>Thrust Bearings & Linear Bearings</li>
          <li>Pillow Blocks & Mounted Units</li>
          <li>Seals, Gaskets & O-Rings</li>
        </ul>
      </>
    ),
    hoses: (
      <>
        <h2>Hoses & Fluid Transfer</h2>
        <div className="highlight-box">
          <p>Reliable Fluid Transfer Solutions</p>
        </div>
        
        <p>
          Premium hydraulic hoses, industrial hoses, and fluid transfer components designed to handle various pressures,
          temperatures, and media types in demanding industrial environments.
        </p>
        
        <h4>Hose Categories:</h4>
        <ul>
          <li>Hydraulic Hoses & Assemblies</li>
          <li>Industrial & Chemical Hoses</li>
          <li>Pneumatic Hoses & Tubing</li>
          <li>Specialty Application Hoses</li>
        </ul>
      </>
    ),
    fasteners: (
      <>
        <h2>Fasteners & Hardware</h2>
        <div className="highlight-box">
          <p>Complete Fastening Solutions</p>
        </div>
        
        <p>
          Comprehensive range of fasteners, hardware, and connection components for industrial assembly and maintenance.
          Available in various materials and grades to meet specific application requirements.
        </p>
        
        <h4>Product Categories:</h4>
        <ul>
          <li>Bolts, Screws & Threaded Fasteners</li>
          <li>Nuts, Washers & Spacers</li>
          <li>Anchors & Specialty Fasteners</li>
          <li>Stainless Steel & Alloy Options</li>
        </ul>
      </>
    ),
    consumables: (
      <>
        <h2>General Consumables</h2>
        <div className="highlight-box">
          <p>Essential Maintenance & Operational Supplies</p>
        </div>
        
        <p>
          Wide range of general consumables and maintenance supplies essential for day-to-day operations.
          Quality products that help maintain equipment performance and operational efficiency.
        </p>
        
        <h4>Consumable Categories:</h4>
        <ul>
          <li>Lubricants & Greases</li>
          <li>Adhesives & Sealants</li>
          <li>Cleaning & Maintenance Chemicals</li>
          <li>Safety & PPE Supplies</li>
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