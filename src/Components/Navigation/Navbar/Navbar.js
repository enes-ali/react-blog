import React, { useState, useEffect } from "react";
import MqMobileHook from "../../../Hooks/MqMobileHook.js";
import NavDesktop from "./NavDesktop.js";
import NavMobile from "./NavMobile.js";


const mq_small = window.matchMedia("(max-width: 512px)");

export default function Navbar(){
    const is_mobile = MqMobileHook();
    
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