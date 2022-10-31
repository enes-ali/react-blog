import React from "react";
import PListItemWriter from "./PListItemWriter";
import PListItemContent from "./PListItemContent";
import PListItemInfo from "./PListItemInfo";
import PostCover from "../../Images/PostCover";
import "../../../Styles/Lists/PostList.css";



export default function(props){
    return(
        <div className="p-list-itm">
            { props.number ? <p className="p-list-itm-number">0{ props.number }</p> : null }

            <div className="p-list-itm-body">
                <PListItemWriter writer={props.post.writer} />

                <PListItemContent title={props.post.title}
                    summary={props.post.summary}/>

                <PListItemInfo date={props.post.upload_date} 
                    read_time={props.post.read_time} 
                    tag={props.post.tag ? props.post.tag : null}
                    show_bookmark={props.show_bookmark}/>
            </div>

            { props.post.cover ? <PostCover cover={props.post.cover} /> : null }
        </div>
    );
}