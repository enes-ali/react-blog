import React, { useState, useEffect } from "react";
import "../../Styles/Buttons/ToggleButton.css";


export default function ToggleButton(props){
    let [toggled, toggle] = useState(false);

    useEffect(() => { toggle(props.checked); }, [props.checked]);

    const icon = () => toggled ? "fa-x" : "fa-bars";

    const text = () => {
        if(!props.text || !props.text_active)
            return
        return <span>{toggled ? props.text_active : props.text}</span>;
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