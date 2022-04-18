import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/home')
        console.log(user)
    }
    return (
        <div className='reg-form'>
            <h1 className='text-center text-primary'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' placeholder='Your name' />
                <input type='email' name='email' placeholder='Email address' required />
                <input type='password' name='password' placeholder='Password' required />
                <input className='btn btn-primary' type='submit' value='Register' />
                <p>Already have an account ? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;