import React, { useState, useEffect } from "react";
import RoundButton from "./Buttons/RoundButton";
import BannerImage from "./BannerImage";
import MqMediumHook from "../Hooks/MqMediumHook";


const mq_medium = window.matchMedia("(min-width: 70rem)");

export default function Banner(){
    
    const is_medium = MqMediumHook();

    return(
        <div id="banner">
            <section id="banner-content">
                <h1>Stay excited.</h1>
                <p>Discover new stories from writers and 
                stay up to date with new information</p>
                <RoundButton text="Start exploring" />
            </section>
            { is_medium ? <BannerImage /> : null}
            
        </div>
    );
}