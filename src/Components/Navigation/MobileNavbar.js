import React from "react";
import NavBrand from "./NavBrand";
import NavbarMenu from "./NavMenu";
import "../../Styles/Navigation/MobileNavbar.css";
import ToggleButton from "../Buttons/ToggleButton";


class MobileNavbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            on: false,
        };
    }

    toggleMenu(){
        this.setState({
            on: !this.state.on,
        });
    }

    onMenuItemClick(idx){
        this.toggleMenu();
        console.log(`clicked ${idx}`)
    }

    render(){
        let menu_class =  this.state.on ? "mbl-nav-menu-active" : "";

        return(
          <div id="mobile-navbar">
            <NavBrand />
            <ToggleButton onClick={ this.toggleMenu.bind(this) }
                icon="fa-bars" active_icon="fa-x" checked={this.state.on} 
                    text="Open" text_active="Close" />
            <NavbarMenu direction="col" custom_class={ menu_class } 
                onItemClick={ this.onMenuItemClick.bind(this) }/>
          </div>  
        );
    }
}

export default MobileNavbar;