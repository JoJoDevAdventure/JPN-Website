import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Contact from './routes/Contact';
import Home from './routes/Home';
import OurWork from './routes/OurWork';
import Services from './routes/Services';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/JPN-Website/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="our-work" element={<OurWork />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </Router>
);
