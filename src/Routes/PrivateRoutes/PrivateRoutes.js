import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location =  useLocation()

    if(loader){
        return <Spinner animation='grow'/>
    }
    if(!user){
        return <Navigate to={'/signin'} state={{from:location}} replace></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoutes;