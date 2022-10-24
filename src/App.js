import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navigation/Navbar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import "./App.css";



export default function App(){


  return(
    <BrowserRouter>
      <Navbar />

      <div id="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <div style={{"width": "100%", "height": "1000px"}}></div>

    </BrowserRouter>
  );
}