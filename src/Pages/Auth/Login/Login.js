import React from "react"
import "./Login.scss"

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
    }
return (
    <>
        <h1>Hello</h1>
        <form action="" className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" value="admin@admin.com"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" value="admin123"/>
            <button type="submit" onSubmit={(event) => handleSubmit(event)}>Login</button>
        </form>
    </>
)
}

export default Login