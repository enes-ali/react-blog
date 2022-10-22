import React, { useState, useEffec } from "react";
import RoundButton from "./Buttons/RoundButton";
import BannerImage from "./BannerImage";


export default function Banner(){
    const mq_small = window.matchMedia("(max-width: 520px)");
    const mq_medium = window.matchMedia("(min-width: 70rem)");

    const [isMobile, setIsMobile] = useState(mq_small.matches);
    const [isMedium, setIsMedium] = useState(mq_medium.matches);

    mq_small.addEventListener("change", () => { setIsMobile(mq_small.mathces); })
    mq_medium.addEventListener("change", () => { setIsMedium(mq_medium.matches) });

    return(
        <div id="banner">
            <section id="banner-content">
                <h1>Stay excited.</h1>
                <p>Discover new stories from writers and 
                stay up to date with new information</p>
                <RoundButton text="Start exploring" />
            </section>
            { isMedium ? <BannerImage /> : null}
            
        </div>
    );
}