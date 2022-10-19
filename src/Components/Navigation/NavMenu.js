import NavList from "../Lists/NavList";


function NavbarMenu(props){
    let items = {Categories: "/", Write: "/write", "Sign in": "/help", "Sign Up": "/about"};

    return(
        <nav id="nav-menu" className={ props.custom_class }>
            <NavList items={ props.items } direction={ props.direction } onItemClick={ props.onItemClick }/>
        </nav>
    );
}


export default NavbarMenu;