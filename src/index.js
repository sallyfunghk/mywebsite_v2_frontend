import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, withRouter } from "react-router-dom";

import './index.css';

import App from './App';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';

import ScrollToTop from './components/ScrollToTop';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Navigation />
        <div id="main">
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />}  />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact_me" element={<ContactMe />} />
            <Route /*component={Notfound}*/ />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
