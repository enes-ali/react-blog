import React from "react";
import NavBrand from "./NavBrand";
import "../../Styles/Navigation/MobileNavbar.css";
import NavbarMenu from "./NavMenu";


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
        return(
            <div id="mobile-navbar">
                <NavBrand />
                <NavbarMenu direction="column"
                    items={ {"Sign up": "/sign-up"} }/>
            </div>  
        );
    }
}

export default MobileNavbar;