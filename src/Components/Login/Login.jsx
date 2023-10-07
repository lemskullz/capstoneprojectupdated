import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';


export default function Login({ setToken }) {
    // const [token, setToken] = useState(localStorage.getItem('token'))
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleSubmit = async (e) => { 
        
        e.preventDefault() 
        const request= await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: username,
                password: password,
            })
          })
    const response= await request.json()
    console.log(response)
    localStorage.setItem("token", response.token);
   setToken(response.token)
   navigate("/")
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e, username, password)}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}