import NavList from "../Lists/NavList";


function NavbarMenu(props){
    let items = {Home: "/", Products: "/products", Help: "/help", About: "/about"};

    return(
        <nav id="nav-menu" className={ props.custom_class }>
            <NavList items={ items } direction={ props.direction } onItemClick={ props.onItemClick }/>
        </nav>
    );
}


export default NavbarMenu;