import React from 'react';
import { Link } from 'react-router-dom';

const CoursePurchased = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='text-warning'>Congratulation</h1>
            <p>Succesfully purchased our course</p>
            <Link className='text-decoration-none' to={'/'}>Back to Homepage</Link>
        </div>
    );
};

export default CoursePurchased;