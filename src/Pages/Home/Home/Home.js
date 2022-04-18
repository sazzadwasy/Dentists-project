import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Treatments></Treatments>
        </div>
    );
};

export default Home;