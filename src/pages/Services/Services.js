import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicTitle from '../Hooks/DynamicTitle';
import ServiceCart from './ServiceCart';

const Services = () => {
    const services = useLoaderData();
    DynamicTitle('Services');
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