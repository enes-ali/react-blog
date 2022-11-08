import React, {useState, useEffect} from "react";
import PListItem from "./PListItem";

/*
[Component]
PostList:
    @desc: A configurable post list

    @props:
        -layout: determines the layout of the list. It can take two values
            row or grid. The row value means that the list will be vertical.
            The grid value means that the list will be grid.
        
        -posts: An array of posts to show. Posts are given as objects and
            the PListItems are created by the list itself.
        
        -show_number: If it's set to true each PListItem will show their number
            (position in the posts array)
        
        -show_bookmark: If it is set to true each PListItem will show a button for
            the user to save the post to their bookmarks
*/

export default function PostList(props){
    const layout_class = props.layout === "grid" ? "post-list-grid" : "post-list-row";
    const post_elements = props.posts.map((post, idx) => {
        return (<PListItem post={post} number={props.show_number ? idx + 1: null} 
            layut={props.layout} show_bookmark={props.show_bookmark} key={post.id}/>);
    });

    return(
        <div className={layout_class}>
            { post_elements }
        </div>
    );
}