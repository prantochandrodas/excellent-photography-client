import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import banner from '../../../assets/blogs/20190906-Banner.jpg';
import banner1 from '../../../assets/blogs/small_beach_romatic_crear_wedding.jpg';
import banner2 from '../../../assets/blogs/58442694_10161790090340074_6364936980559560704_o-1080x675.jpg';
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
        <div data-aos="zoom-in-up" data-aos-duration="1000">
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