import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='reg-form'>
            <h1 className='text-center text-primary'>Please Login</h1>
            <form>
                <input type='email' name='email' placeholder='Email address' required />
                <input type='password' name='password' placeholder='Password' required />
                <input className='btn btn-primary' type='submit' value='Login' />
                <p>Do not have an account ? <Link className='text-decoration-none' to='/register'>Please Register</Link></p>
            </form>
        </div>
    );
};

export default Login;