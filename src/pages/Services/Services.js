import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCart from './ServiceCart';

const Services = () => {
    const services=useLoaderData();
    console.log(services);
    return (
        <div>
            <h2 className='text-5xl text-center'>All services</h2>
            {
                services.map(service=><ServiceCart
                    key={service._id}
                    service={service}
                ></ServiceCart>)
            }
        </div>
    );
};

export default Services;