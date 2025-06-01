import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import MainSite from './components/MainSite/MainSite';
import About from './components/About/About';
import Layout from './components/Layout/Layout.js';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/main" element={<MainSite />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/client-login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}