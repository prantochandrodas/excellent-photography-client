import React from 'react';
import './Photos.css';
import photo from '../../assets/photos/photo1.jpg';
import photo1 from '../../assets/photos/photo2.jpg';
import photo2 from '../../assets/photos/photo3.jpg';
import photo3 from '../../assets/photos/photo4.jpg';
import photo4 from '../../assets/photos/photo5.jpg';
import photo5 from '../../assets/photos/photo6.jpg';
import photo6 from '../../assets/photos/photo7.jpg';
import photo7 from '../../assets/photos/photo8.jpg';
import photo8 from '../../assets/photos/photo9.jpg';
const Photos = () => {
    return (
        <div className='lg:mb-20 lg:mt-5 my-8'>
            <div>
                <h3 className='lg:text-2xl text-xl text-center mb-4'>PHOTGRAPHY</h3>
                <h2 className='text-xl lg:text-4xl font-semibold text-center mb-4'>Discover Our Wedding Photoshoot</h2>
                <p className='lg:px-32 text-xs px-4 text-center lg:text-lg mb-4'>We have complete wedding photoshoot packages from pre-wedding photography to holud wedding photography, couple photography<span className='hidden lg:inline'>, bridal photoshoot, and you name it. Explore how we capture your holy bond of love and make the special day of your life even more special.</span></p>
            </div>
            <div className='con'>
                <div className='box'>
                    <img src={photo} alt="" />
                </div>
                <div className='box'>
                    <img src={photo1} alt="" />
                </div>
                <div className='box'>
                    <img src={photo2} alt="" />
                </div>
                <div className='box'>
                    <img src={photo3} alt="" />
                </div>
                <div className='box'>
                    <img src={photo4} alt="" />
                </div>
                <div className='box'>
                    <img src={photo5} alt="" />
                </div>
                <div className='box'>
                    <img src={photo6} alt="" />
                </div>
                <div className='box'>
                    <img src={photo7} alt="" />
                </div>
                <div className='box'>
                    <img src={photo8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Photos;