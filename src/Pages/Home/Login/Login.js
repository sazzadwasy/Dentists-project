import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const resetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    if (error) {
        errorElement = <p className='text-danger fw-bold'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='reg-form'>
            <h1 className='text-center text-primary'>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type='email' name='email' placeholder='Email address' required />
                <input ref={passwordRef} type='password' name='password' placeholder='Password' required />
                <input className='btn btn-primary' type='submit' value='Login' />
                <p>Do not have an account ? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
                <p> Forget password? <button className='text-primary btn btn-link text-decoration-none' onClick={resetPassword} to='/register'>Reset password</button></p>
                {errorElement}
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;