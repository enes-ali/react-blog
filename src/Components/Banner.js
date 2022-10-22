import React, { useState, useEffec } from "react";
import RoundButton from "./Buttons/RoundButton";



export default function Banner(){
    const mq_small = window.matchMedia("(max-width: 520px)");

    const [isMobile, setIsMobile] = useState(mq_small.matches);

    mq_small.addEventListener("change", () => { setIsMobile(mq_small.mathces); })

    return(
        <div id="banner">
            <section id="banner-content">
                <h1>Stay excited.</h1>
                <p>Discover new stories from writers and 
                stay up to date with new information</p>
                <RoundButton text="Start exploring" />
            </section>
        </div>
    );
}