import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const ServiceReview = () => {


    const service=useLoaderData();
    console.log(service);
    const{img,category_name,details,_id}=service;
    const {user}=useContext(AuthContext);
    
    return (
       <div>
        
       </div>
    );
};

export default ServiceReview;