import React,{useState} from 'react'

import { useDispatch} from 'react-redux'
import { login } from "../../../reducers/loginReducer"
import "./Login.scss"
import logo from '../../../Assets/Images/logo.png'
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
    <section className="form-container">
        <main className="form-signin">
            <form  onSubmit={(event) => handleLogin(event)}>
                <img src={logo} alt="safeboda logo" className="mb-3 text-center"/>
                <p class="h5 mb-3 fw-normal text-center">Please sign in</p>
                <div className="form-floating">
                    <input
                    className="form-control" 
                    type="email"
                    name="" 
                    id="" 
                    value="admin@admin.com"
                    onChange = {(event) => setEmail(event.target.value)}/>
                    <label htmlFor="email" className="form-label">Email</label>
                </div>
                <div className="form-floating mb-4">
                    <input
                    className="form-control"  
                    type="password" 
                    name="" 
                    id="" 
                    value="admin123"
                    onChange = {(event) => setPassword(event.target.value)}/>
                    <label htmlFor="password" className="form-label">Password</label>
                </div>
                <button type="submit" class="w-100 btn btn-primary">Login</button>
            </form>
        </main>
    </section>
    </>
)
}

export default Login