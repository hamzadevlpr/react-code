import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import HeroSection from './Hero';
import Cards from './Cards'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Footer/>
    <HeroSection/>
    <Cards/>
  </React.StrictMode>
);