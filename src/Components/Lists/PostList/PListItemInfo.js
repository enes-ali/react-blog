import React from "react";
import { Link } from "react-router-dom";
import BookmarkIcon from "../../../Assets/icons/bookmark.png";

export default function PListItemInfo(props){ 
    return(
        <div className="p-list-itm-info">
            <div className="p-list-itm-date-time-wrapper">
                <span>{ props.date }</span>&nbsp;&middot;&nbsp;
                <span>{ props.read_time } read</span>&nbsp;
                {props.tag ? (
                    <Link className="p-list-itm-tag" to={`/tag/${props.tag}`}>
                        {props.tag}
                    </Link>
                ) : null}
            </div>

            { props.show_bookmark ? <img src={BookmarkIcon} alt="save to bookmarks" className="p-list-itm-bookmark" /> : null }
        </div>     
    );
}