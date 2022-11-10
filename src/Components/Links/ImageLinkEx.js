import "../../Styles/Links/Links.css";

export default function ImageLinkEx(props){
    return(
        <a href={props.href} className={`img-link ${props.className}`} 
            target={props.target} id={props.id}>
            { props.textPos === "left" ? <span>{props.text}</span> : null }
            <img src={ props.src } className={props.img_class} id={props.img_id}/>
            { props.textPos === "right" ? <span>{props.text}</span> : null }
        </a>
    );
}