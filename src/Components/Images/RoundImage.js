import React from "react";
import "../../Styles/Images/Images.css";

export default function RoundImage(props){
    return(
        <img src={props.src} alt={props.alt} className={`round-img ${props.className}`}/>
    );
}