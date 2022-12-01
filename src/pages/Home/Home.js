import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DynamicTitle from '../Hooks/DynamicTitle';
import HeaderBanner from '../Layout/Headers/HeaderBanner';
import HomeBlogs from './HomeBlogs';
import HomeServices from './HomeServices';
import HomeSocialMedia from './HomeSocialMedia';
// home
const Home = () => {
    const services = useLoaderData();
    DynamicTitle('Home');
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <HomeBlogs></HomeBlogs>
            <div>
                <h1 className='text-5xl font-bold ml-12'>Services</h1>
                <div className='grid lg:grid-cols-3 grid-cols md:grid-cols-2 gap-5 p-14'>

                    {
                        services.map(service => <HomeServices
                            key={services._id}
                            service={service}
                        ></HomeServices>)
                    }
                </div>
                <div className='flex justify-center py-4'>
                     <Link to={`/services`}><button className="btn btn-success ">See all</button></Link>
                </div>
            </div>
            <HomeSocialMedia></HomeSocialMedia>
           
        </div>
    );
};

export default Home;