import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

export const User = () => {  
    const [user, setUser] = useState<AuthUser | null>(null) 
    const handleLogIn = () => {
        setUser({name: "John", email: "abc@gmail"
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <div>user name is {user?.name}</div>
            <div>user email is {user?.email}</div>
        </div>
    )
}