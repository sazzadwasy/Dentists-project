import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger fw-bold'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || loading1) {
        return <p className='fw-bold'>Loading...</p>;
    }
    if (user || user1) {
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
                <button onClick={() => signInWithGithub()} className='btn btn-secondary w-50 mb-2 p-2'>Github Signin</button>
            </div>
        </div>
    );
};

export default SocialLogin;