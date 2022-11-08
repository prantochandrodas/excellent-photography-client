import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const {loading,user}=useContext(AuthContext)
    const location=useLocation();
    if(loading){
        return <p>Loadin...</p> 
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children; 
};

export default PrivetRoute;