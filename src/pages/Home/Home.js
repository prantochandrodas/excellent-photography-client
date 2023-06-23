import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DynamicTitle from '../Hooks/DynamicTitle';
import HeaderBanner from '../Layout/Headers/HeaderBanner';
import HomeBlogs from './HomeBlogs';
import HomeServices from './HomeServices';
import HomeSocialMedia from './HomeSocialMedia';
import Photos from '../Photos/Photos';
import Faq from '../Faq/Faq';
import OurTeam from '../OurTeam/OurTeam';
import Contact from '../Contact/Contact';
import Cta from '../Cta/Cta';
import Stats from '../Stats/Stats';
import Freatures from '../Features/Freatures';
import Blogs from '../Blogs/Blogs';
// home
const Home = () => {
    const services = useLoaderData();
    DynamicTitle('Home');
    return (
        <div>
            {/* <HeaderBanner></HeaderBanner> */}
            <HomeBlogs></HomeBlogs>
            <div className='bgcolor' data-aos="zoom-in"
                data-aos-duration="1000">
                <div className='title'>
                    <h1 className='text-2xl font-semibold text-center py-4'>Services</h1>
                </div>

                <div className='grid lg:grid-cols-3 grid-cols md:grid-cols-2 gap-5 lg:p-14 w-[90%] mx-auto'>

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
            <Photos></Photos>
            <Blogs></Blogs>
            <OurTeam></OurTeam>
            <Faq></Faq>
            <Stats></Stats>

            <Contact></Contact>
            <Cta></Cta>
        </div>
    );
};

export default Home;