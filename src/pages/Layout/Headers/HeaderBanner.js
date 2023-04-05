import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import banner from '../../../assets/blogs/wedding-poses-8-1024x563.jpg';
import banner1 from '../../../assets/blogs/2019-06-18_0031.jpg';
import banner2 from '../../../assets/blogs/334840.jpg';
import banner3 from '../../../assets/blogs/what-will-people-remember-from-your-wedding-1200px.jpg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeaderBanner.css'
const HeaderBanner = () => {
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
        <div>
             <Slider {...settings} className="carousel">
                <div className='carousel_child'>
                    <img src={banner} style={{ width: '100%' }} alt="" />
                </div>
                <div className='carousel_child'>
                    <img src={banner1} style={{ width: '100%' }} alt="" />
                </div>
                <div className='carousel_child'>
                    <img src={banner2} style={{ width: '100%' }} alt="" />
                </div>
                <div className='carousel_child'>
                    <img src={banner3} style={{ width: '100%' }} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default HeaderBanner;