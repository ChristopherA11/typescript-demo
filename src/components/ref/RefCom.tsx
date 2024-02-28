import { useEffect, useRef } from "react"

export const RefCom = () => {
    const inputRef = useRef<HTMLInputElement>(null!) // null ! or current? optional use
    useEffect(() => {
           inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}