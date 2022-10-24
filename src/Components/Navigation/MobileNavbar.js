import React, { useEffect } from "react";
import NavBrand from "./NavBrand";
import "../../Styles/Navigation/MobileNavbar.css";
import NavbarMenu from "./NavMenu";


export default function MobileNavbar(props){

    useEffect(() => {
        const root_element = document.querySelector(":root");
        root_element.style.setProperty("--navbar-height", "4.5rem");

        return () => { root_element.style.setProperty("--navbar-height", "5rem"); }
    }, []);

    return(
        <div id="mobile-navbar">
            <NavBrand />
            <NavbarMenu direction="row"
                items={ {"Sign up": "/sign-up"} }/>
        </div>
    );
}