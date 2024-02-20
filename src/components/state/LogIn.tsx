import { useState } from "react"



export const LogIn = () => {
    const [isLogedIn, setIsLogedIn] = useState(false)
    const handleLogIn = () => {
        setIsLogedIn(true)
    }
    const handleLogOut = () => {
        setIsLogedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <div>user{isLogedIn ? "login" : "logout"}</div>
        </div>
    )
}