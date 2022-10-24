import { Link } from "react-router-dom";

export default function NavBrand(props){

    return(
        <div id="nav-brand">
            <Link to="/"><h1>Branded</h1></Link>
        </div>
    );
}