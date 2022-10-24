import React, { useEffect } from "react";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import "../../../Styles/Navigation/Navbar/Mobile.css";


export default function NavMobile(props){

    useEffect(() => {
        const root_element = document.querySelector(":root");
        root_element.style.setProperty("--navbar-height", "4.5rem");

        return () => { root_element.style.setProperty("--navbar-height", "5rem"); }
    }, []);

    return(
        <div id="mobile-navbar">
            <NavBrand />
            <NavMenu direction="row"
                items={ {"Sign up": "/sign-up"} }/>
        </div>
    );
}