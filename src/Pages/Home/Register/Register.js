import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className='reg-form'>
            <h1 className='text-center text-primary'>Please Register</h1>
            <form>
                <input type='text' name='name' placeholder='Your name' />
                <input type='email' name='email' placeholder='Email address' required />
                <input type='password' name='password' placeholder='Password' required />
                <input className='btn btn-primary' type='submit' value='Register' />
                <p>Already have an account ? <Link className='text-decoration-none' to='/login'>Please Login</Link></p>
            </form>
        </div>
    );
};

export default Register;