import NavList from "../../Lists/NavList";

export default function NavMenu(props){

    return(
        <nav id="nav-menu">
            <NavList items={ props.items } direction={ props.direction } onItemClick={ props.onItemClick }/>
        </nav>
    );
}