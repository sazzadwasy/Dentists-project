import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
                <p className='text-primary0 mt-2 px-2 fw-bold'>or</p>
                <div style={{ height: '2px', width: '50%', backgroundColor: 'gray' }}></div>
            </div>
            <div className='text-center'>
                <button>Google Signin</button>
                <button>Github Signin</button>
            </div>
        </div>
    );
};

export default SocialLogin;