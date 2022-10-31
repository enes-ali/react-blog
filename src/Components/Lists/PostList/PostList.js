import React, {useState, useEffect} from "react";
import PListItem from "./PListItem";


export default function PostList(props){
    const layout_class = props.layout === "grid" ? "post-list-grid" : "post-list-row"
    const post_elements = props.posts.map((post, idx) => {
        return (<PListItem post={post} number={props.show_number ? idx + 1: null} 
            layut={props.layout} show_bookmark={props.show_bookmark} show_ key={post.id}/>);
    });

    return(
        <div className={layout_class}>
            { post_elements }
        </div>
    );
}