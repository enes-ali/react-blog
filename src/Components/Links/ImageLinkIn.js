import {Link} from 'react-router-dom';
import "../../Styles/Links/Links.css";

export default function ImageLinkIn(props){
    return(
        <Link to={props.href} className={`img-link ${props.className}`} id={props.id}>
            { props.textPos === "left" ? <span>{props.text}</span> : null }
            <img src={ props.src } className={props.img_class} id={props.img_id}/>
            { props.textPos === "right" ? <span>{props.text}</span> : null }
        </Link>
    );
}