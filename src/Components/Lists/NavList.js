import { Link } from "react-router-dom";
import "../../Styles/Lists/Lists.css";

function NavList(props){
    let menu = Object.entries(props.items).map((element, idx) => {
        return(
            <li key={idx} className="nav-list-i" onClick={ (e) => props.onItemClick(idx) }>
                <Link to={ element[1] } className="nav-list-link">{ element[0] }</Link>
            </li>
        );
    });

    let direction = props.direction == "col" ? "nav-list-col" : "nav-list-row";

    return(
        <ul className={ `nav-list ${direction}` }>
            { menu }
        </ul>
    );
}

export default NavList;