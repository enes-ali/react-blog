import { useState, useEffect } from "react";


const mq_medium = window.matchMedia("(min-width: 70rem)");

export default function MqMediumHook(){
    const [is_medium, setIsMedium] = useState(mq_medium.matches);

    const handleMqMobileChange = () => setIsMedium(mq_medium.matches);

    useEffect(() => {
        mq_medium.addEventListener("change", handleMqMobileChange);

        return () => mq_medium.removeEventListener("change", handleMqMobileChange);
    }, []);

    return is_medium;
}