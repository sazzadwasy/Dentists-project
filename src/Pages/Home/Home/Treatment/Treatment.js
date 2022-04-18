import React from 'react';
import './Treatment.css'
import { useNavigate } from 'react-router-dom';

const Treatment = ({ treatment }) => {
    const navigate = useNavigate()
    const handleNavigateToTreatmentDetail = id => {
        navigate(`/treatment/${id}`)
    }

    const { id, name, img, detail, price } = treatment
    return (
        <div className='treatment text-center'>
            <img className='w-100' src={img} alt='' />
            <h1>{name}</h1>
            <p>{detail}</p>
            <h3>{price}</h3>
            <button onClick={() => handleNavigateToTreatmentDetail(id)} className='btn btn-secondary w-50'>Explore</button>
        </div>
    );
};

export default Treatment;