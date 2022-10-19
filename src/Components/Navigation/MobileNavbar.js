import React from "react";
import NavBrand from "./NavBrand";
import "../../Styles/Navigation/MobileNavbar.css";
import NavbarMenu from "./NavMenu";


export default function MobileNavbar(props){

    return(
        <div id="mobile-navbar">
            <NavBrand />
            <NavbarMenu direction="row"
                items={ {"Sign up": "/sign-up"} }/>
        </div>
    );
}