import { useState } from 'react';


export default function Login({ setToken }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e, email, password)}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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