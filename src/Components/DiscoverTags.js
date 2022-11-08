import { Link } from "react-router-dom";


export default function DiscoverTags(props){
    return(
        <div id="discover-tags">
            <h1>DISCOVER WHAT MATTERS TO YOU</h1>
            <div id="tag-container">
                {props.tags.map((tag, index) => {
                    return <Link className="tag" to={tag.link} key={index}>{tag.text}</Link>;
                })}
            </div>
        </div>
    );
}