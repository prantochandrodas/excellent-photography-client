import React from 'react';
import img from '../../assets/blogs/blogs1.jpeg';
import img1 from '../../assets/blogs/blogs.4.jpg';
import img2 from '../../assets/blogs/blogs5.jpg';
const HomeBlogs = () => {
    return (
        <div className='lg:flex  lg:w-3/4 mx-auto my-28 '>
            <div className="carousel lg:w-8/12 sm:w-full  ml-5 mr-5 rounded-sm">
                <div id="slide1" className="carousel-item relative w-full">
                    <img alt='' src={img} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img alt='' src={img1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img alt='' src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='lg:w-9/12'>
                <h2 className='text-4xl text-center'>Words From My Couples</h2>
                    <p className='text-center mt-12 px-10'>They have give the amazing service .We  loved the pictures and videos .They are the professional for this taske .</p>
            </div>
        </div>
    );
};

export default HomeBlogs;