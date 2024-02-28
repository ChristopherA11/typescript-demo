import { useEffect, useRef, useState } from "react"


export const ImmutableRef = () => {
    const [timer, setTimer] = useState(0)
    const interValRef = useRef<number | undefined>(undefined)

    const stopTimer = () => {
        window.clearInterval(interValRef.current)
    }

    useEffect(() => {
        interValRef.current = window.setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1)
        },1000)
        return () => {
            stopTimer()
        }
    },[])
    return (
        <div>
            Hook Timer - {timer}
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}
