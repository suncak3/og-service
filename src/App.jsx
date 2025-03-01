import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";

function App() {

  return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
