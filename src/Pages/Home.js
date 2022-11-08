import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import DiscoverTags from '../Components/DiscoverTags';
import Feed from '../Components/Feed';
import NavList from '../Components/Lists/NavList';
import Trending from '../Components/Trending';
import "../Styles/Pages/Home.css";


export default function Home(props){
    const tags = [
        {text: "Programming", link: "/tags/programming"},
        {text: "Writing", link: "/tags/programming"},
        {text: "Self Improvement", link: "/tags/programming"},
        {text: "Tech", link: "/tags/programming"},
        {text: "Politics", link: "/tags/programming"},
        {text: "Economy", link: "/tags/programming"},
        {text: "Fashion", link: "/tags/programming"},
        {text: "Data science", link: "/tags/programming"},
    ]    
    
    return(
        <div id="home-wrapper">
            <Banner />
            
            <div id="trending-wrapper">
                <Trending />
            </div>

            <div id="main-content-wrapper">
                <aside>
                    <DiscoverTags tags={ tags } />

                    <footer id="desktop-footer">
                        <NavList direction="row" 
                            items={ {Help: "/help", Status: "/status", Writers: "/writers",
                            Blog: "/blog", Careers: "/careers", Privacy: "privacy", Terms: "/terms",
                            About: "About"} } />
                    </footer>
                </aside>

                <main>
                    <Feed />
                </main>
            </div>
        </div>
    );
}