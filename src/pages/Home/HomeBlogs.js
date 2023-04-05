import React from 'react';
import img from '../../assets/blogs/blogs1.jpeg';
import img1 from '../../assets/blogs/blogs.4.jpg';
import img2 from '../../assets/blogs/blogs5.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeBlogs.css';
const HomeBlogs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
    };
    return (
        <div className='lg:flex lg:flex-row-reverse sm:flex sm:flex-col-reverse  lg:w-3/4 mx-auto lg:my-10 sm:my-4 '>
           
            <div data-aos="fade-left" data-aos-duration="1000" className='lg:w-9/12 flex flex-col items-center justify-center'>
                <h2 className='text-start lg:text-4xl text-3xl font-semibold lg:px-10 px-4'>Words From My Couples</h2>
                    <p className='text-start lg:mt-4 mt-2 lg:px-10 px-4'>They have give the amazing service .We  loved the pictures and videos .They are the professional for this taske .</p>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" className="blog_carousel lg:w-8/12  lg:ml-5 lg:mr-5 ml-0 mr-0 rounded-sm align-middle">
            <Slider {...settings} className="blog_carousel">
                <div className="w-full blog_carousel_clild">
                    <img alt='' src={img} className="w-full" />
                </div>
                <div className="w-full blog_carousel_clild">
                    <img alt='' src={img1} className="w-full" />
                </div>
                <div className="w-full blog_carousel_clild">
                    <img alt='' src={img2} className="w-full" />
                </div>
             </Slider>
            </div>
        </div>
    );
};

export default HomeBlogs;