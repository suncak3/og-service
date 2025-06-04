import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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
import wurth from "../assets/logos/wurth.svg"; 
import bosch from "../assets/logos/bosch.png";

import parts from "../assets/images/Parts-removebg-preview.png";
import fittings from "../assets/images/fittings-removebg-preview.png";
import tools from "../assets/images/tools-bg.png";
import electrical from "../assets/images/electrical-removebg-preview.png";
import equipment from "../assets/images/equipment.webp";
import valves from "../assets/images/valves.png";

const Products = () => {
  const location = useLocation();
  const { t } = useTranslation();
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
    animateOnScroll();
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  
  const categories = [
    {
      id: "spare-parts",
      name: t('products.categories.spareParts'),
      image: parts,
      description: t('products.descriptions.spareParts'),
      brands: [
        { id: "parker", name: "Parker", logo: parker },
        { id: "eaton", name: "Eaton", logo: eaton },
        { id: "manuli", name: "Manuli Hydraulics", logo: manuli },
        { id: "swagelok", name: "Swagelok", logo: swagelok },
        { id: "fleetguard", name: "Fleetguard", logo: fleetguard },
        { id: "gates", name: "Gates", logo: gates },
        { id: "pall", name: "PALL", logo: pall },
        { id: "camfil", name: "Camfil", logo: camfil },
        { id: "higgins", name: "HIGGINS AND HEWINS", logo: HIGGINS_AND_HEWINS },
        { id: "afpro", name: "AF Pro", logo: afpro },
        { id: "hochiki", name: "Hochiki", logo: hochiki },
        { id: "purafil", name: "Purafil", logo: purafil },
        { id: "indufil", name: "Indufil", logo: indufil },
        { id: "dinbro", name: "Dinbro", logo: dinbro },
        { id: "jasun", name: "Jasun", logo: jasun },
        { id: "continental", name: "Continental (Contitech)", logo: continental },
        { id: "optibelt", name: "Optibelt", logo: optibelt },
        { id: "dunham", name: "Dunham Bush", logo: dunham }
      ]
    },
    {
      id: "piping",
      name: t('products.categories.piping'),
      image: fittings,
      description: t('products.descriptions.piping'),
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
      name: t('products.categories.tools'),
      image: tools,
      description: t('products.descriptions.tools'),
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
        { id: "norbar", name: "Norbar", logo: norbar },
        { id: "wurth", name: "Wurth", logo: wurth },
        { id: "bosch", name: "Bosch", logo: bosch }
      ]
    },
    {
      id: "electrical",
      name: t('products.categories.electrical'),
      image: electrical,
      description: t('products.descriptions.electrical'),
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
      name: t('products.categories.equipment'),
      image: equipment,
      description: t('products.descriptions.equipment'),
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
      name: t('products.categories.valves'),
      image: valves,
      description: t('products.descriptions.valves'),
      brands: [
        { id: "emerson", name: "Emerson Electric (Fisher)", logo: emerson },
        { id: "flowserve", name: "Flowserve Corporation", logo: flowserve },
        { id: "parkerhannifin", name: "Parker Hannifin", logo: parkerhannifin },
        { id: "imi", name: "IMI plc", logo: imi },
        { id: "samson", name: "SAMSON AG", logo: samson }
      ]
    }
  ];
  
  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0];
  
  const filteredProductTypes = activeCategory === 'spare-parts' ? [
    { id: "filters", name: t('products.productTypes.filters') },
    { id: "belts", name: t('products.productTypes.belts') },
    { id: "bearings", name: t('products.productTypes.bearings') },
    { id: "hoses", name: t('products.productTypes.hoses') },
    { id: "fasteners", name: t('products.productTypes.fasteners') },
    { id: "consumables", name: t('products.productTypes.consumables') }
  ] : [];
  
  const getProductTypeContent = (type) => {
    const details = t(`products.productTypeDetails.${type}`, { returnObjects: true });
    
    switch (type) {
      case "filters":
        return (
          <>
            <h2>{details.title}</h2>
            <div className="highlight-box">
              <p>{details.highlight}</p>
            </div>
            <p>{details.description}</p>
            <div className="two-columns">
              <div>
                <h4>{details.categories.title}</h4>
                <ul>
                  {details.categories.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{details.capabilities.title}</h4>
                <ul>
                  {details.capabilities.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      case "belts":
        return (
          <>
            <h2>{details.title}</h2>
            <div className="highlight-box">
              <p>{details.highlight}</p>
            </div>
            <p>{details.description}</p>
            <div className="two-columns">
              <div>
                <h4>{details.types.title}</h4>
                <ul>
                  {details.types.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{details.applications.title}</h4>
                <ul>
                  {details.applications.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      case "bearings":
        return (
          <>
            <h2>{details.title}</h2>
            <div className="highlight-box">
              <p>{details.highlight}</p>
            </div>
            <p>{details.description}</p>
            <h4>{details.range.title}</h4>
            <ul>
              {details.range.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case "hoses":
        return (
          <>
            <h2>{details.title}</h2>
            <div className="highlight-box">
              <p>{details.highlight}</p>
            </div>
            <p>{details.description}</p>
            <h4>{details.categories.title}</h4>
            <ul>
              {details.categories.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case "fasteners":
        return (
          <>
            <h2>{details.title}</h2>
            <div className="highlight-box">
              <p>{details.highlight}</p>
            </div>
            <p>{details.description}</p>
            <h4>{details.categories.title}</h4>
            <ul>
              {details.categories.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case "consumables":
        return (
          <>
            <h2>{details.title}</h2>
            <div className="highlight-box">
              <p>{details.highlight}</p>
            </div>
            <p>{details.description}</p>
            <h4>{details.categories.title}</h4>
            <ul>
              {details.categories.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      default:
        return (
          <div>
            <h2>{filteredProductTypes.find(pt => pt.id === type)?.name}</h2>
            <div className="highlight-box">
              <p>Engineered Solutions for Demanding Applications</p>
            </div>
            <p>
              Our {filteredProductTypes.find(pt => pt.id === type)?.name.toLowerCase()} 
              systems combine innovative design with premium materials to deliver exceptional 
              performance in challenging industrial environments. Each product undergoes 
              rigorous testing to ensure reliability and durability when it matters most.
            </p>
          </div>
        );
    }
  };
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveProductType(null);
    window.history.pushState({}, '', `/products?category=${category}`);
  };
  
  const handleProductTypeChange = (type) => {
    setActiveProductType(type);
    window.history.pushState({}, '', `/products?category=${activeCategory}&type=${type}`);
  };
  
  const getHeroTitle = () => {
    if (activeCategory === "all") return t('products.hero.title');
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? category.name : t('products.hero.title');
  };
  
  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>{getHeroTitle()}</h1>
          <p>{t('products.hero.subtitle')}</p>
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
              {t('products.tabs.all')}
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
                    {getProductTypeContent(activeProductType)}
                  </div>
                ) : (
                  <>
                    <h2>
                      {activeCategory === "all" 
                        ? t('products.content.allProductsTitle')
                        : activeData.name}
                    </h2>
                    <div className="highlight-box">
                      <p>
                        {activeCategory === "all" 
                          ? t('products.content.allProductsHighlight')
                          : t('products.content.categoryHighlight', { category: activeData.name })}
                      </p>
                    </div>
                    <p>
                      {activeCategory === "all" 
                        ? t('products.content.allProductsDescription1')
                        : activeData.description}
                    </p>
                    {activeCategory === "all" && (
                      <p>
                        {t('products.content.allProductsDescription2')}
                      </p>
                    )}
                    <p className="company-fact">
                      <strong>{t('products.content.companyFact')}</strong>
                    </p>
                  </>
                )}
              </div>
              
              {/* Brands Display - Always visible */}
              <div className="brands-showcase">
                {activeCategory === "all" ? (
                  <div className="brand-category">
                    <h3 className="brand-category-heading">{t('products.brands.featured')}</h3>
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
                    <h3 className="brand-category-heading">
                      {t('products.brands.categoryBrands', { category: activeData.name })}
                    </h3>
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
                <h3>{t('products.productTypes.title')}</h3>
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
            <h2>{t('products.cta.title')}</h2>
            <p>{t('products.cta.description')}</p>
            <Link to="/contact" className="cta-btn">{t('products.cta.button')}</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;