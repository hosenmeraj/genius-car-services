import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const navigateLogin = event => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        console.log(event.target.password.value)
    }
    return (
        <div className='register-form'>
            <h2 className="register-title text-primary">Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Enter email' required />
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link className='text-danger pe-auto text-decoration-none' to='/login' onClick={navigateLogin}>Please Login</Link>
            </p>
        </div>
    );
};

export default Register;