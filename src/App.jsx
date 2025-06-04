import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import './styles/App.css';
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import BrandProducts from "./pages/BrandProducts.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./pages/Services.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx";
import i18n from './i18n';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category/:brandId" element={<BrandProducts />} />
        <Route path="/services" element={<Services />} />
        <Route path="services/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;