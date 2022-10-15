import React from "react";
import "../../Styles/Navigation/Navbar.css"
import NavBrand from "./NavBrand.js";
import NavMenu from "./NavMenu.js";

class Navbar extends React.Component{

    render(){
        return(
            <div id="navbar">
                <NavBrand />
                <NavMenu direction="row"/>
            </div>
        );
    }

}


export default Navbar;