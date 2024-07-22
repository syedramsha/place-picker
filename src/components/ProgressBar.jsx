import {useEffect, useState} from "react";

const TIMER = 3000;

const ProgressBar = () => {
    const [remainingTime, setRemainingTime] = useState(TIMER);
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevState => prevState - 100)
        }, 100);
        return () => {
            clearInterval(interval)
        }
    }, []);

    return <progress value={remainingTime} max={TIMER}/>

}

export default ProgressBar