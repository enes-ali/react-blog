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
    mq_small.addEventListener("change", () => { setIsMobile(mq_small.matches) });
  });

  return(
    <BrowserRouter>
      { is_mobile ? <MobileNavbar /> : <Navbar /> }

      <div id="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}