import React, { useState, useEffect } from "react";
import "../../Styles/Buttons/ToggleButton.css";

/*
[Component]
ToggleButton:
    @desc: A simple toggle button that changes its state every time you click
    it

    @props:
        -toggled: Initial state of the button
        -icon: Icon to show when the button is not toggled
        -toggled_icon: Icon to show when the button is toggled
        -text: Text to show when the button is not toggled
        -toggled_text: text to show when the button is toggled
        -onClick(): Callback to call when a click event happens
*/

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