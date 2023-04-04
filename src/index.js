import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import Locations from './pages/Locations';
import ContactUs from './pages/ContactUs';
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<Home />}>
          
          
        </Route>
        <Route path="locations" element={<Locations />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
