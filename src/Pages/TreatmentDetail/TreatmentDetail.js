import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './TreatmentDetail.css'

const TreatmentDetail = () => {
    const { treatmentId } = useParams()
    return (
        <div className='treatment-detail'>
            <h1 className='text-center text-success mt-4'>Explore treatment : {treatmentId}</h1>
            <div className='text-center mt-4 mb-4'>
                <Link to='/checkout'><button className='btn btn-success'>Check Treatment</button></Link>
            </div>
        </div>
    );
};

export default TreatmentDetail;