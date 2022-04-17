import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <footer>
                <p className='text-center fw-bold'>Copyright &copy;{year}</p>
            </footer>
        </div>
    );
};

export default Footer;