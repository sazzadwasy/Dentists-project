import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error-page'>
            <h1 className='text-danger text-center'>Page not found!</h1>
            <h2 className='text-danger text-center'>404</h2>
        </div>
    );
};

export default NotFound;