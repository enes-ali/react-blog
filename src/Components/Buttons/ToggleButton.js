import React, { useState, useEffect } from "react";
import "../../Styles/Buttons/ToggleButton.css";


export default function ToggleButton(props){
    let [toggled, toggle] = useState(false);

    useEffect(() => { toggle(props.toggled); }, [props.toggled]);

    const icon = () => toggled ? props.toggled_icon : props.icon;

    const text = () => {
        if(!props.text || !props.toggled_text)
            return
        return <span>{toggled ? props.toggled_text : props.text}</span>;
    }

    const onClick = () => {
        props.onClick();
        toggle(!toggled);
    }

    return(
        <button className="toggle-button" onClick={ onClick }>
            <i className={ `fa-solid ${icon()}` }></i>
            {text()}
        </button>
    );
}