import React from "react";
import NavBrand from "./NavBrand.js";
import NavMenu from "./NavMenu.js";
import "../../../Styles/Navigation/Navbar/Desktop.css";


export default function NavDesktop(){
    let nav_menu_items = {Categories: "/", Write: "/write", "Sign in": "/help", "Sign Up": "/about"};

    return(
        <div id="navbar-wrapper">
            <div id="navbar">
                <NavBrand />
                <NavMenu items={ nav_menu_items } direction="row"/>
            </div>
        </div>
    );
}