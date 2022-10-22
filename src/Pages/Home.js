import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import "../Styles/Pages/Home.css";


export default function Home(props){
    return(
        <div id="home-wrapper">
            <Banner />
        </div>
    );
}