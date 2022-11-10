import { Link } from "react-router-dom";
import BrandLogo from "../Assets/icons/brand_logo.png";
import NavList from '../Components/Lists/NavList';
import ImageLinkEx from "./Links/ImageLinkEx";
import PlayStoreBadge from "../Assets/icons/google-play-badge.png";
import AppGalleryBadge from "../Assets/icons/app-gallery-badge.png";
import ImageLinkIn from "./Links/ImageLinkIn";

export default function MobileFooter(){
    return(
        <footer id="mobile-footer">
            <div id="footer-nav-wrapper">
                <ImageLinkIn id="brand-link" href="/" src={BrandLogo} img_id="brand-logo"/>

                <NavList direction="row" 
                            items={ {Help: "/help", Status: "/status", Writers: "/writers", About: "About"} } />
            </div>

            <div id="get-the-app">
                <h1>GET THE MASTER APP</h1>
                <div id="app-badge-wrapper">
                    <ImageLinkEx href="https://play.google.com" target="_blank"
                        className="app-badge" src={PlayStoreBadge}/>
                    <ImageLinkEx href="https://appgallery.huawei.com" target="_blank"
                        className="app-badge" src={AppGalleryBadge}/>
                </div>
            </div>
        </footer>
    );
}

/*
                <Link to="/" id="brand-link">
                    <img src={BrandLogo} id="brand-logo"/>
                </Link>*/