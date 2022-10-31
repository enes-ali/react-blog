import React from "react";


export default function PostCover(props){
    return(
        <picture>
            <source media="(max-width: 480px)" srcSet={props.cover.src.sm} />
            <source media="(max-width: 1280px)" srcSet={props.cover.src.md} />
            <img src={props.cover.src.l} alt={props.cover.alt} className="post-cover"/>
        </picture>
    );
}