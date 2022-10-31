import React, { useState, useEffect } from "react";
import PostList from "./Lists/PostList/PostList";
import PostCoverL from "../Assets/images/post_cover_1600.jpg";
import PostCoverM from "../Assets/images/post_cover_1280.jpg";
import PostCoverS from "../Assets/images/post_cover_426.jpg";


export default function Feed(props){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let new_posts = [];
        for(let i=0; i < 5; i++){
            let new_post = {
                id: i,
                writer: {name: "John Doe", group:"Anons", pp: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"},
                title: `Sit perspiciatis dignissimos molestias ${i}`,
                summary: "Et ut dolore enim. Sit perspiciatis dignissimos molestias. Voluptas atque ut in ipsa tempora cupiditate.",
                upload_date: "10 Oct, 2022",
                read_time: "5 min",
                tag: "Branded",
                cover: {
                    src: {
                        l: PostCoverL,
                        md: PostCoverM,
                        sm: PostCoverS
                    },
                    alt: "post cover"
                }
            }
            new_posts.push(new_post);
        }
        setPosts(new_posts);
    }, []);

    return(
        <div id="feed">
            <PostList posts={posts} layout="row" show_bookmark={true}/>
        </div>
    );
}