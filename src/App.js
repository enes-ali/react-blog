import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navigation/Navbar.js";
import MobileNavbar from "./Components/Navigation/MobileNavbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import "./App.css";



export default function App(){
  const mq_small = window.matchMedia("(max-width: 512px)");
  const [is_mobile, setIsMobile] = useState(mq_small.matches);

  useEffect(() => {
    const handleMqSmallChange = () => { setIsMobile(mq_small.matches) };
    mq_small.addEventListener("change", handleMqSmallChange);

    return () => { mq_small.removeEventListener("change", handleMqSmallChange); }
  }, []);

  
  useEffect(() => {
    const root_element = document.querySelector(":root");
    
    const handleScrool = () => {
      if(document.body.scrollTop > 350 || document.documentElement.scrollTop > 350 ){
          root_element.style.setProperty("--navbar-color", "rgb(255, 255, 255)");
          root_element.style.setProperty("--navbar-sign-up-color", "rgb(5, 136, 1)");
      }else{
          root_element.style.setProperty("--navbar-color", "var(--color-yellow)");
          root_element.style.setProperty("--navbar-sign-up-color", "rgb(0, 0, 0)");
      }
    }

    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    }
  }, []);

  return(
    <BrowserRouter>
      { is_mobile ? <MobileNavbar /> : <Navbar /> }

      <div id="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <div style={{"width": "100%", "height": "1000px"}}></div>

    </BrowserRouter>
  );
}