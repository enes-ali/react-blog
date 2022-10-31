import React from "react";


export default function PListItemContent(props){
    return(
        <div className="p-list-itm-content">
            <h1 className="p-list-itm-title">{ props.title }</h1>
            { props.summary ? <p className="p-list-itm-summary">{props.summary}</p> : null}
        </div>
    );
}