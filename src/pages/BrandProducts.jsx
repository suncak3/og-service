import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/BrandProducts.css";

// Import the logos you have
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
import belts from "../assets/images/belts_image.png";

const BrandProducts = () => {
  const { category, brandId } = useParams();
  const [loading, setLoading] = useState(true);
  const [brandInfo, setBrandInfo] = useState(null);
  const [products, setProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  // Brand data
  const brandData = {
    // Filters brands
    pall: {
      name: "PALL",
      logo: pall,
      description: "Pall Corporation is a global leader in filtration, separation, and purification solutions. Founded in 1946, the company provides high-performance industrial filters for hydraulic systems, lubricants, and fuels, ensuring equipment protection and operational efficiency.",
      categories: ["Air Filters", "Fuel Filters", "Hydraulic Filters", "Process Filters"],
      featured: true
    },
    fleetguard: {
      name: "Fleetguard",
      logo: fleetguard,
      description: "Fleetguard is Cummins' premium filtration brand, offering innovative solutions for fuel systems, lube, air, coolant, and hydraulic applications in diesel engines and industrial equipment.",
      categories: ["Air Filters", "Fuel Filters", "Oil Filters", "Coolant Filters"],
      featured: true
    },
    camfil: {
      name: "Camfil",
      logo: camfil,
      description: "Camfil is a leading manufacturer of premium clean air solutions, offering a comprehensive range of air filters and air purification systems for commercial and industrial applications.",
      categories: ["Air Filters", "HEPA Filters", "Dust Collection", "Gas Turbine Filters"],
      featured: true
    },
    jasun: {
      name: "Jasun",
      logo: jasun,
      description: "JASUN specializes in HVAC filtration products, providing high-quality air filters, panel filters, and custom filtration solutions for commercial and industrial buildings.",
      categories: ["HVAC Filters", "Panel Filters", "Bag Filters"],
      featured: false
    },
    afpro: {
      name: "AF Pro",
      logo: afpro,
      description: "AFPRO Filters is a leading manufacturer of professional air filtration solutions, focusing on energy-efficient and sustainable products for a wide range of applications.",
      categories: ["Air Filters", "HEPA Filters", "Carbon Filters"],
      featured: false
    },
    // Add more filter brands as needed with null logos
    higgins: {
      name: "HIGGINS AND HEWINS",
      logo: HIGGINS_AND_HEWINS,
      description: "HIGGINS AND HEWINS specializes in industrial gas purification systems and filtration solutions, providing reliable products for various commercial and industrial applications.",
      categories: ["Gas Purification", "Industrial Filters"],
      featured: false
    },
    hochiki: {
      name: "Hochiki",
      logo: hochiki,
      description: "Hochiki offers specialized filtration products for fire safety and environmental control systems, ensuring reliable performance in critical applications.",
      categories: ["Safety Filters", "Environmental Filters"],
      featured: false
    },
    purafil: {
      name: "Purafil",
      logo: purafil,
      description: "Purafil is a leader in gas-phase air filtration, offering solutions that remove harmful and odorous gases, providing clean air for various applications.",
      categories: ["Gas-Phase Filters", "Molecular Filters", "Custom Solutions"],
      featured: false
    },
    indufil: {
      name: "Indufil",
      logo: indufil,
      description: "Indufil provides reliable industrial filtration solutions for a variety of applications, focusing on high-performance and durability.",
      categories: ["Industrial Filters", "Process Filters"],
      featured: false
    },
    dinbro: {
      name: "Dinbro",
      logo: dinbro,
      description: "Dinbro specializes in filtration products with a focus on quality and performance for industrial applications.",
      categories: ["Industrial Filters", "Custom Solutions"],
      featured: false
    },
    parker: {
      name: "Parker",
      logo: parker,
      description: "Parker offers a comprehensive range of filtration solutions for various industries, ensuring reliable performance and efficiency.",
      categories: ["Hydraulic Filters", "Process Filters", "Compressed Air Filters"],
      featured: false
    },
    
    // Belts brands
    gates: {
      name: "Gates",
      logo: gates,
      description: "Gates is a global manufacturer of innovative, highly engineered power transmission and fluid power solutions, including industrial belts known for their reliability and performance.",
      categories: ["V-Belts", "Timing Belts", "Serpentine Belts", "Heavy-Duty Belts"],
      featured: true
    },
    continental: {
      name: "Continental (Contitech)",
      logo: continental,
      description: "Continental ContiTech offers a wide range of industrial belts, conveyor belt systems, and power transmission solutions with superior quality and performance.",
      categories: ["V-Belts", "Timing Belts", "Multi-Rib Belts", "Heavy-Duty Belts"],
      featured: true
    },
    optibelt: {
      name: "Optibelt",
      logo: optibelt,
      description: "Optibelt specializes in high-performance drive belts for industrial applications, providing optimized power transmission solutions for various industries.",
      categories: ["V-Belts", "Timing Belts", "Ribbed Belts", "Special Belts"],
      featured: false
    },
    dunham: {
      name: "Dunham Bush",
      logo: dunham,
      description: "Dunham-Bush offers reliable power transmission solutions including high-quality belts designed for HVAC systems and industrial applications.",
      categories: ["HVAC Belts", "Industrial Belts", "Special Application Belts"],
      featured: false
    }
  };

  // Generate sample products
  const generateProducts = (brand, category) => {
    const products = [];
    const brandInfo = brandData[brand];
    if (!brandInfo) return [];

    // Create products for each brand category
    brandInfo.categories.forEach(productCategory => {
      // Generate 2-4 products per category
      const count = Math.floor(Math.random() * 3) + 2;
      
      for (let i = 1; i <= count; i++) {
        const productCode = `${brand.toUpperCase()}-${productCategory.substring(0, 3)}-${100 + i}`;
        
        products.push({
          id: `${brand}-${productCategory.replace(/\s+/g, '-').toLowerCase()}-${i}`,
          name: `${brandInfo.name} ${productCategory} - ${productCode}`,
          category: productCategory,
          code: productCode,
          description: `High-performance ${productCategory.toLowerCase()} designed for optimal efficiency and reliability in demanding industrial environments.`,
          featured: i === 1 // Make the first one featured
        });
      }
    });

    return products;
  };

  // Load brand info and products
  useEffect(() => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const brand = brandData[brandId];
      if (brand) {
        setBrandInfo(brand);
        setProducts(generateProducts(brandId, category));
      }
      setLoading(false);
    }, 500);
    
    // Reset active filter when changing brands
    setActiveFilter("all");
    
    // Scroll to top on brand change
    window.scrollTo(0, 0);
  }, [brandId, category]);

  // Filter products based on selected category
  const filteredProducts = activeFilter === "all" 
    ? products 
    : products.filter(product => product.category === activeFilter);

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
  }, [filteredProducts]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (!brandInfo) {
    return (
      <div className="not-found-container">
        <h2>Brand Not Found</h2>
        <p>The brand you are looking for does not exist in our database.</p>
        <Link to="/products" className="back-link">Back to Products</Link>
      </div>
    );
  }

  return (
    <main className="brand-products-page">
      {/* Hero Section */}
      <section className="brand-hero">
        <div className="brand-hero-content">
          <div className="brand-hero-logo">
            {brandInfo.logo ? (
              <img src={brandInfo.logo} alt={brandInfo.name} />
            ) : (
              <div className="brand-name-placeholder">{brandInfo.name}</div>
            )}
          </div>
          <div className="brand-hero-text">
            <h1>{brandInfo.name}</h1>
            <p>{brandInfo.description}</p>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>
      
      {/* Product Categories */}
      <section className="product-categories">
        <div className="container">
          <div className="category-tabs animate-on-scroll">
            <button 
              className={`category-tab ${activeFilter === "all" ? 'active' : ''}`}
              onClick={() => setActiveFilter("all")}
            >
              All Products
            </button>
            
            {brandInfo.categories.map(cat => (
              <button 
                key={cat}
                className={`category-tab ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            {activeFilter === "all" 
              ? `${brandInfo.name} Products` 
              : `${brandInfo.name} ${activeFilter}`}
          </h2>
          
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <h3>No products found</h3>
              <p>There are no products available in this category.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="product-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="product-image">
                    {/* Using a placeholder image that resembles a product photo */}
                    <img src={belts} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <h3>{product.name}</h3>
                    <span className="product-code">{product.code}</span>
                    {product.featured && <span className="featured-tag">Featured</span>}
                    <p className="product-description">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Related Brands Section */}
      <section className="related-brands">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Other {category === 'filters' ? 'Filter' : 'Belt'} Brands
          </h2>
          
          <div className="related-brands-grid">
            {Object.entries(brandData)
              .filter(([key, brand]) => key !== brandId && 
                ((category === 'filters' && !['gates', 'continental', 'optibelt', 'dunham'].includes(key)) || 
                 (category === 'belts' && ['gates', 'continental', 'optibelt', 'dunham'].includes(key))))
              .slice(0, 3) // Just show 3 related brands
              .map(([key, brand]) => (
                <Link key={key} to={`/products/${category}/${key}`} className="related-brand-card animate-on-scroll">
                  <div className="related-brand-logo">
                    {brand.logo ? (
                      <img src={brand.logo} alt={brand.name} />
                    ) : (
                      <div className="brand-name-placeholder">{brand.name}</div>
                    )}
                  </div>
                  <div className="related-brand-info">
                    <h3>{brand.name}</h3>
                    <p>{brand.description.substring(0, 120)}...</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Need Technical Assistance?</h2>
            <p>Our experts can help you choose the right {brandInfo.name} products for your specific application.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-btn">Contact Our Team</Link>
              <a href="#" className="cta-btn secondary" onClick={(e) => { e.preventDefault(); window.history.back(); }}>
                Back to All Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandProducts;