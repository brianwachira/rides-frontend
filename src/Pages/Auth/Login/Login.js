import React,{useState} from 'react'

import { useDispatch} from 'react-redux'
import { login } from "../../../reducers/loginReducer"
import "./Login.scss"

const Login = () => {
    
    const [email, setEmail] = useState('admin@admin.com')
    const [password, setPassword] = useState('admin123')

    const dispatch = useDispatch()

    const handleLogin = (event) => {
        event.preventDefault()

        try {
            const data = {
                email: email,
                password: password
            }

            dispatch(login(data))
        }catch (exception) {
            console.log(exception)
        }
    }
return (
    <>
        <h1>Hello</h1>
        <form  onSubmit={(event) => handleLogin(event)} className="form-control">
            <label htmlFor="email">Email</label>
            <input
             type="email"
             name="" 
             id="" 
             value="admin@admin.com"
             onChange = {(event) => setEmail(event.target.value)}/>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="" 
            id="" 
            value="admin123"
            onChange = {(event) => setPassword(event.target.value)}/>
            <button type="submit">Login</button>
        </form>
    </>
)
}

export default Login