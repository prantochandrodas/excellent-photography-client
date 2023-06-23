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
    // $('.txt').html(function (i, html) {
    //     var chars = $.trim(html).split("");

    //     return '<span>' + chars.join('</span><span>') + '</span>';
    // });
    return (
        <div className='blog-bg'>
            <div className='lg:flex lg:flex-row-reverse sm:flex sm:flex-col-reverse lg:w-[90%]  mx-auto lg:my-10 sm:my-4 '>

                <div data-aos="zoom-in" data-aos-duration="1000" className='lg:w-9/12 flex flex-col items-center justify-center'>
                    <h2 id='style-h1'>WEDDING PHOTOGRAPHER SO IMPORTANT?</h2>
                    <div class="">
                        <p id='animate-charcter' className='text-center lg:text-lg text-white text-sm lg:text-lg text-sm my-2 lg:mt-4 mt-2 lg:px-10 px-4'>Wedding photography is important because it will capture your day, it will capture your memories, it will tell a story, and not just any story, it will tell a beautiful story of your special day, a day you will never forget. A story that you can show friends and family, your kids, and grandchildren, something you will have and can treasure for ever.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000" className="blog_carousel lg:w-8/12  lg:ml-5 lg:mr-5 ml-0 mr-0 rounded-sm align-middle">
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
        </div>
    );
};

export default HomeBlogs;