import React from 'react';
import img from '../../assets/error.jpg'
const ErrorPage = () => {
    return (
        <div>
            <img src={img}  className='w-full h-full' alt="" />
        </div>
    );
};

export default ErrorPage;