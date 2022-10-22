import React from "react";
import "../../Styles/Buttons/RoundButton.css";

export default function RoundButton(props){
    return(
        <button className="round-button" onClick={props.onClick}>
            { props.img }
            { props.text }
        </button>
    );
}