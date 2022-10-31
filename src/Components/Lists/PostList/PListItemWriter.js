import React from "react";
import { Link } from "react-router-dom";
import RoundImage from "../../Images/RoundImage";


export default function PListItemWriter(props){
    return(
        <div className="p-list-itm-writer">
            <Link to={`/writer/${props.writer.name}`} className="p-list-itm-pp-wrapper">
                <RoundImage className="p-list-itm-pp" src={ props.writer.pp }
                    alt={ props.writer.name } />
            </Link>

            <div className="p-list-itm-writer-links">
                <Link to={ `/writer/${props.writer.name}`}>{ props.writer.name }&nbsp;</Link>
                { props.writer.group ? <span>in&nbsp;</span> : null }
                <Link to={`/group/${props.writer.group}`}>{props.writer.group}</Link>
            </div>
        </div>
    );
}