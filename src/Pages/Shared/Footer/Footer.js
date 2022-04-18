import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <footer className='footer'>
                <p className='text-center fw-bold'>Copyright &copy;{year}</p>
            </footer>
        </div>
    );
};

export default Footer;