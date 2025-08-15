import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';

import './App.css';  // You can add global app styles here

const App: React.FC = () => {

  const [language, setLanguage] = useState<string>(() => {
    return localStorage.getItem("language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  
  return (
    <Router>
      <div className="app">
        <Navbar language={language} setLanguage={setLanguage} />
        <main>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
