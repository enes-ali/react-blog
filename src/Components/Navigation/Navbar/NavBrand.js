import { Link } from "react-router-dom";
import ImageLinkIn from "../../Links/ImageLinkIn";
import BrandLogo from "../../../Assets/icons/brand_black.png";

export default function NavBrand(props){

    return(
        <div id="nav-brand">
            <ImageLinkIn href="/" src={BrandLogo} />
        </div>
    );
}