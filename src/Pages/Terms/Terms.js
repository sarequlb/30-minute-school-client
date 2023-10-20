import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center mt-5'>
            <h4>Terms of Use</h4>
            <Link to={'/signup'}>Signup</Link>
        </div>
    );
};

export default Terms;