import React from 'react';
import bannerImg from '../../../assets/banner2.jpg';
const HeaderBanner = () => {
    return (
        <div className="hero h-96 my-12 w-9/12 mx-auto" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film.</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;