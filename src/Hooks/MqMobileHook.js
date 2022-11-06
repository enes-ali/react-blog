import { useState, useEffect } from "react";


const mq_mobile = window.matchMedia("(max-width: 520px)");

export default function MqMobileHook(){
    const [is_mobile, setIsMobile] = useState(mq_mobile.matches);

    const handleMqMobileChange = () => setIsMobile(mq_mobile.matches);

    useEffect(() => {
        mq_mobile.addEventListener("change", handleMqMobileChange);

        return () => mq_mobile.removeEventListener("change", handleMqMobileChange);
    }, []);

    return is_mobile;
}