import React, { useState } from 'react'

export const SignInView = () => {

    const [username, setUsername] = useState("Arasto")
    const [password, setPassword] = useState()

    return (
        <div>
            {/* <h1>{username}</h1> */}
            {/* <button onClick={() => setUsername("Jonas")}>Update the state value!</button> */}
            {/* <input onChange={event => setUsername(event.target.value)} /> */}
            <span>Username: </span><input onChange={event => setUsername(event.target.value)} /> <br />
            <span>Password: </span><input type="password" onChange={event => setPassword(event.target.value)} /> <br />
            <button>Login</button>
        </div>
    )
}