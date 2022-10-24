import React, { useState, useEffect } from "react";
import RoundButton from "./Buttons/RoundButton";
import BannerImage from "./BannerImage";

const mq_small = window.matchMedia("(max-width: 520px)");
const mq_medium = window.matchMedia("(min-width: 70rem)");

export default function Banner(){
    const [isMobile, setIsMobile] = useState(mq_small.matches);
    const [isMedium, setIsMedium] = useState(mq_medium.matches);

    useEffect(() => {
        const handleMqSmallChange = () => { setIsMobile(mq_small.mathces); }
        const handleMqMediumChange = () => { setIsMedium(mq_medium.matches); }

        mq_small.addEventListener("change",  handleMqSmallChange);
        mq_medium.addEventListener("change", handleMqMediumChange);    
        
        return(() => {
            mq_small.removeEventListener("change",  handleMqSmallChange);
            mq_medium.removeEventListener("change", handleMqMediumChange);    
        });
    }, []);

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