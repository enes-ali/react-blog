import React, { useState, useEffect } from "react";
import NavDesktop from "./NavDesktop.js";
import NavMobile from "./NavMobile.js";


const mq_small = window.matchMedia("(max-width: 512px)");

export default function Navbar(){
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

    return <>{ is_mobile ? <NavMobile /> : <NavDesktop /> }</>;
}