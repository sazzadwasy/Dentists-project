import React, { useEffect, useState } from 'react';
import Treatment from '../Home/Treatment/Treatment';
import './Treatments.css'

const Treatments = () => {
    const [treatments, setTreatments] = useState([])
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setTreatments(data))
    }, [])
    return (
        <div>
            <h1 className='text-primary text-center'>Treatments</h1>
            <div id='#treatments' className='treatments-container container'>
                {
                    treatments.map(treatment => <Treatment
                        key={treatment.id}
                        treatment={treatment}
                    ></Treatment>)
                }
            </div>
        </div>
    );
};

export default Treatments;