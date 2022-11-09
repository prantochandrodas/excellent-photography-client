import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCart from './ServiceCart';
import ServiceReview from './ServiceReview';

const Services = () => {
    const services = useLoaderData();
   
    return (
        <div className=' lg:my-12'> 
            <h2 className='text-5xl text-center my-12'>All services</h2>
            <div className='grid lg:grid-cols-3 gap-12 lg:w-9/12 lg:mx-auto '>
                {
                    services.map(service => <ServiceCart
                        key={service._id}
                        service={service}
                    ></ServiceCart>)
                }
            </div>
           
        </div>
    );
};

export default Services;