import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import { login } from "../../../reducers/loginReducer"
import { setNotification } from '../../../reducers/notificationReducer'
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

                
            dispatch(setNotification({
                title: 'Login Success',
                message: 'Login Succesfull'
            }))

            setTimeout(()=> {
                dispatch(setNotification(''))

                window.location.href = `${window.location.protocol}//${window.location.host}`
        
            },2000)
        }catch (exception) {
            console.log(exception)
        }
    }
return (
    <>
    <section className="form-container">
        <main className="form-signin">
            <form  onSubmit={(event) => handleLogin(event)}>
                <i class="fa fa-motorcycle fa-4x icon-custom mb-4" aria-hidden="true"></i>
                <p className="h5 mb-3 fw-normal text-center">Please sign in</p>
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
                <button type="submit" className="w-100 btn btn-primary">Login</button>
            </form>
        </main>
    </section>
    </>
)
}

export default Login