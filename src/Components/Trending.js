import React, {useState, useEffect} from "react";
import PostList from "./Lists/PostList/PostList";
import TrendingIcon from "../Assets/icons/trending.png"

export default function Trending(props){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let new_posts = [];
        for(let i=0; i < 5; i++){
            let new_post = {
                id: i,
                writer: {name: "John Doe", group:"Anons", pp: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"},
                title: `Sit perspiciatis dignissimos molestias ${i}`,
                upload_date: "10 Oct, 2022",
                read_time: "5 min",
            }
            new_posts.push(new_post);
        }
        setPosts(new_posts);
    }, []);

    return(
        <div id="trending">
            <div id="trending-header">
                <img id="trending-icon" src={TrendingIcon} alt="trending"/>
                <h1>TRENDING</h1>
            </div>

            <PostList posts={posts} show_number={true} layout={"grid"}/>
        </div>
    );
}