import React from "react";
import "../../Styles/Navigation/Navbar.css"
import NavBrand from "./NavBrand.js";
import NavMenu from "./NavMenu.js";

class Navbar extends React.Component{
    nav_menu_items = {Categories: "/", Write: "/write", "Sign in": "/help", "Sign Up": "/about"};

    render(){
        return(
            <div id="navbar-wrapper">
                <div id="navbar">
                    <NavBrand />
                    <NavMenu items={this.nav_menu_items} direction="row"/>
                </div>
            </div>
        );
    }

}


export default Navbar;