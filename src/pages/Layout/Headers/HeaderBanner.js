import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import banner from '../../../assets/blogs/image (1).png';
import banner1 from '../../../assets/blogs/image (2).png';
import banner2 from '../../../assets/blogs/image (3).png';
import banner3 from '../../../assets/blogs/image.png';

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
        <div className=''>
            <Slider {...settings} className="carousel">
                <div className='carousel_child '>
                    <img src={banner} style={{ width: '100%' }} alt="" />
                </div>
                <div className='carousel_child '>
                    <img src={banner1} style={{ width: '100%' }} alt="" />
                </div>
                <div className='carousel_child '>
                    <img src={banner2} style={{ width: '100%' }} alt="" />
                </div>
                <div className='carousel_child '>
                    <img src={banner3} style={{ width: '100%' }} alt="" />
                </div>
            </Slider>
        </div>

    );
};

export default HeaderBanner;