import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger fw-bold'>Error: {error.message}</p>
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
                <p className='text-primary0 mt-2 px-2 fw-bold'>or</p>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
            </div>
            {errorElement}
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()} className='btn btn-danger w-50 mb-2 p-2'>Google Signin</button>
                <br />
                <button className='btn btn-secondary w-50 mb-2 p-2'>Github Signin</button>
            </div>
        </div>
    );
};

export default SocialLogin;