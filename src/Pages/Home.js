import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import Feed from '../Components/Feed';
import Trending from '../Components/Trending';
import "../Styles/Pages/Home.css";


export default function Home(props){
    return(
        <div id="home-wrapper">
            <Banner />
            
            <div id="trending-wrapper">
                <Trending />
            </div>
            <div id="main-content-wrapper">
                <main>
                    <Feed />
                </main>
            </div>
        </div>
    );
}