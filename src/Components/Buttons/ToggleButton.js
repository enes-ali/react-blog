import React from "react";
import "../../Styles/Buttons/ToggleButton.css";


class ToggleButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            checked: this.props.checked,
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.checked != prevProps.checked){
            this.setState({checked: this.props.checked});
        }
    }

    handleClick(event){
        this.setState({ checked: !this.state.checked });

        this.props.onClick();
    }

    iconClass(){
        return this.state.checked ? "fa-x" : "fa-bars";
    }

    text(){
        if(!this.props.text || !this.props.text_active)
            return
        return <span>{this.state.checked ? this.props.text_active : this.props.text}</span>;
    }

    render(){
        return(
            <button className="toggle-button" onClick={ this.handleClick.bind(this) }>
                <i className={ `fa-solid ${this.iconClass()}` }></i>
                {this.text()}
            </button>
        );
    }
}

export default ToggleButton;