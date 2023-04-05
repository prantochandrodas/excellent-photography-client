import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DynamicTitle from '../Hooks/DynamicTitle';
import ServiceCart from './ServiceCart';

const Services = () => {
    const services = useLoaderData();
    DynamicTitle('Services');
    return (
        <div data-aos="zoom-in"
        data-aos-duration="1000" className='lg:my-12'> 
            <h2 className='lg:text-5xl text-2xl text-center lg:my-12 my-4'>All services</h2>
            <div className='grid lg:grid-cols-3 gap-12 lg:w-9/12 lg:mx-auto w-[90%] mx-auto'>
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