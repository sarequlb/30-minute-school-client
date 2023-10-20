import React from 'react';
import './PageNotFound.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='not-found'>
           <div>
                <h1 className='ops'>OOPS</h1>
                <h1>404 - PAGE NOT FOUND</h1>
               <p>The page you are looking for might have been removed had its name changed or is temporarily unvailable</p>
               <Button><Link className='text-white text-decoration-none' to={'/'}>Go To Home Page</Link></Button>
           </div>
        </div>
    );
};

export default PageNotFound;